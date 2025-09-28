import React, { useEffect, useState } from 'react';
import Layout from '../../Layout';
import { Button, FromToDate, Select } from '../../components/Form';
import { sortsDatas } from '../../components/Datas';
import { BiChevronDown, BiTime } from 'react-icons/bi';
import { MdFilterList, MdOutlineCalendarMonth, MdOutlineCloudDownload } from 'react-icons/md';
import { toast } from 'react-hot-toast';
import { BsCalendarMonth } from 'react-icons/bs';
import SummaryApi from '../../common';
import moment from 'moment';
import displayUSDCurrency from '../../helpers/displayCurrency';

const Payments = () => {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [todayTotal, setTodayTotal] = useState(0);
  const [monthlyTotal, setMonthlyTotal] = useState(0);
  const [yearlyTotal, setYearlyTotal] = useState(0);
  const [status, setStatus] = useState(sortsDatas.status[0]);
  const [method, setMethod] = useState(sortsDatas.method[0]);
  const [dateRange, setDateRange] = useState([new Date(), new Date()]);
  const [startDate, endDate] = dateRange;

  const fetchOrderDetails = async () => {
    try {
      const response = await fetch(SummaryApi.allOrder.url, {
        method: SummaryApi.allOrder.method,
        credentials: 'include'
      });
      const responseData = await response.json();
      setData(responseData.data);
      setIsLoaded(true);
      calculatePaymentTotals(responseData.data);
    } catch (error) {
      toast.error('Failed to fetch orders');
      console.error('Error fetching orders:', error);
    }
  };

  const calculatePaymentTotals = (payments) => {
    const today = moment().startOf('day');
    const startOfMonth = moment().startOf('month');
    const startOfYear = moment().startOf('year');

    let todaySum = 0;
    let monthSum = 0;
    let yearSum = 0;

    payments.forEach((item) => {
      const paymentDate = moment(item.createdAt);
      const totalAmount = item.totalAmount || 0;

      if (paymentDate.isSame(today, 'day')) todaySum += totalAmount;
      if (paymentDate.isSame(startOfMonth, 'month')) monthSum += totalAmount;
      if (paymentDate.isSame(startOfYear, 'year')) yearSum += totalAmount;
    });

    setTodayTotal(todaySum);
    setMonthlyTotal(monthSum);
    setYearlyTotal(yearSum);
  };

  useEffect(() => {
    fetchOrderDetails();
  }, []);

  const exportData = () => {
    if (!data.length) {
      toast.error('No data available to export');
      return;
    }

    const csvContent = [
      ['S/N', 'Order ID', 'User Email', 'Payment Date', 'Payment Status', 'Payment Method', 'Total Amount'],
      ...data.map((order, index) => [
        index + 1,
        order._id,
        order.email,
        moment(order.createdAt).format('LL'),
        order.paymentDetails.payment_status || 'N/A',
        order.paymentDetails?.payment_method_type?.[0] || 'N/A',
        displayUSDCurrency(order.totalAmount),
      ]),
    ]
      .map((row) => row.join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'Payments_Data.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast.success('Data exported successfully');
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'paid':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'failed':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const sorts = [
    {
      id: 2,
      selected: status,
      setSelected: setStatus,
      datas: sortsDatas.status,
    },
    {
      id: 3,
      selected: method,
      setSelected: setMethod,
      datas: sortsDatas.method,
    },
  ];

  const boxes = [
    {
      id: 1,
      title: 'Today Payments',
      value: displayUSDCurrency(todayTotal),
      color: ['bg-subMain', 'text-subMain'],
      icon: BiTime,
    },
    {
      id: 2,
      title: 'Monthly Payments',
      value: displayUSDCurrency(monthlyTotal),
      color: ['bg-orange-500', 'text-orange-500'],
      icon: BsCalendarMonth,
    },
    {
      id: 3,
      title: 'Yearly Payments',
      value: displayUSDCurrency(yearlyTotal),
      color: ['bg-[#66B5A3]', 'text-[#66B5A3]'],
      icon: MdOutlineCalendarMonth,
    },
  ];

  return (
    <Layout>
      <button
        onClick={exportData}
        className="w-16 hover:w-44 group transitions hover:h-14 h-16 border border-border z-50 bg-subMain text-white rounded-full flex-rows gap-4 fixed bottom-8 right-12 button-fb"
      >
        <p className="hidden text-sm group-hover:block">Export</p>
        <MdOutlineCloudDownload className="text-2xl" />
      </button>

      <h1 className="text-xl font-semibold">Payments</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {boxes.map((box) => (
          <div key={box.id} className="bg-white flex-btn gap-4 rounded-xl border-[1px] border-border p-5">
            <div className="w-3/4">
              <h2 className="text-sm font-medium">{box.title}</h2>
              <h2 className="text-xl my-6 font-medium">{box.value}</h2>
              <p className="text-xs text-textGray">
                {box.title === 'Today Payments'
                  ? 'You made this amount today'
                  : box.title === 'Monthly Payments'
                  ? 'This is your total for the month'
                  : 'This is your total for the year'}
              </p>
            </div>
            <div className={`w-10 h-10 flex-colo rounded-md text-white text-md ${box.color[0]}`}>
              <box.icon />
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white my-8 rounded-xl border-[1px] border-border p-5">
        <div className="grid lg:grid-cols-5 grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-2">
          <input
            type="text"
            placeholder='Search "Users"'
            className="h-14 text-sm text-main rounded-md bg-dry border border-border px-4"
          />
          {sorts.map((item) => (
            <Select
              key={item.id}
              selectedPerson={item.selected}
              setSelectedPerson={item.setSelected}
              datas={item.datas}
            >
              <div className="h-14 w-full text-xs text-main rounded-md bg-dry border border-border px-4 flex items-center justify-between">
                <p>{item.selected.name}</p>
                <BiChevronDown className="text-xl" />
              </div>
            </Select>
          ))}
          <FromToDate
            startDate={startDate}
            endDate={endDate}
            bg="bg-dry"
            onChange={(update) => setDateRange(update)}
          />
          <Button
            label="Filter"
            Icon={MdFilterList}
            onClick={() => toast.error('Filter data is not available yet')}
          />
        </div>

        <div className="bg-white rounded-xl border border-gray-300 p-5 shadow-lg">
          {!data.length && <p className="text-center text-gray-500">No Orders available</p>}
          {isLoaded && (
            <div className="overflow-x-auto">
            <table className="w-full bg-white border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 border-b text-left text-sm md:text-base">S/N</th>
                  <th className="py-3 px-4 border-b text-left text-sm md:text-base">Order ID</th>
                  <th className="py-3 px-4 border-b text-left text-sm md:text-base hidden sm:table-cell">User Email</th>
                  <th className="py-3 px-4 border-b text-left text-sm md:text-base">Payment Date</th>
                  <th className="py-3 px-4 border-b text-left text-sm md:text-base">Payment Status</th>
                  <th className="py-3 px-4 border-b text-left text-sm md:text-base hidden lg:table-cell">Payment Method</th>
                  <th className="py-3 px-4 border-b text-left text-sm md:text-base">Total Amount</th>
                </tr>
              </thead>
              <tbody>
                {data.map((order, index) => (
                  <tr key={order._id} className="hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-4 border-b">{index + 1}</td>
                    <td className="py-3 px-4 border-b">{order._id}</td>
                    <td className="py-3 px-4 border-b hidden sm:table-cell">{order.email}</td>
                    <td className="py-3 px-4 border-b">{moment(order.createdAt).format('LL')}</td>
                    <td className="py-3 px-4 border-b">
                      <span className={`inline-block py-1 px-2 rounded text-xs md:text-sm ${getStatusClass(order.paymentDetails.payment_status)}`}>
                        {order.paymentDetails.payment_status}
                      </span>
                    </td>
                    <td className="py-3 px-4 border-b hidden lg:table-cell">
                      {order.paymentDetails?.payment_method_type?.[0] || 'N/A'}
                    </td>
                    <td className="py-3 px-4 border-b text-blue-600 font-semibold text-sm md:text-base">
                      {displayUSDCurrency(order.totalAmount)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Payments;
