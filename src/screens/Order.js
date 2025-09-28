import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import Layout from '../Layout';
import SummaryApi from '../common';
import displayUSDCurrency from '../helpers/displayCurrency';
import moment from 'moment';

function Order() {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const fetchOrderDetails = async () => {
    try {
      const response = await fetch(SummaryApi.allOrder.url, {
        method: SummaryApi.allOrder.method,
        credentials: 'include'
      });
      const responseData = await response.json();
      setData(responseData.data);
      setIsLoaded(true);
    } catch (error) {
      toast.error('Failed to fetch orders');
      console.error('Error fetching orders:', error);
    }
  };

  useEffect(() => {
    fetchOrderDetails();
  }, []);

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

  return (
    <Layout>
      <h1 className="text-2xl font-semibold mb-4">Orders</h1>

      <div className="bg-white rounded-xl border border-gray-300 p-5 shadow-lg">
        {!data.length && <p className="text-center text-gray-500">No Orders available</p>}
        {isLoaded && (
          <div className="overflow-x-auto">
          <table className="w-full bg-white border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 border-b text-left text-sm md:text-base">S/N</th>
                <th className="py-3 px-4 border-b text-left text-sm md:text-base">Order ID</th>
                <th className="py-3 px-4 border-b text-left text-sm md:text-base">Order Date</th>
                <th className="py-3 px-4 border-b text-left text-sm md:text-base">User Email</th>
                <th className="py-3 px-4 border-b text-left text-sm md:text-base hidden sm:table-cell">Products</th>
                <th className="py-3 px-4 border-b text-left text-sm md:text-base">Order Status</th>
                <th className="py-3 px-4 border-b text-left text-sm md:text-base hidden lg:table-cell">Shipping Amount</th>
                <th className="py-3 px-4 border-b text-left text-sm md:text-base">Total Amount</th>
              </tr>
            </thead>
            <tbody>
              {data.map((order, index) => (
                <tr key={order._id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4 border-b">{index + 1}</td>
                  <td className="py-3 px-4 border-b">{order._id}</td>
                  <td className="py-3 px-4 border-b">{moment(order.createdAt).format('LL')}</td>
                  <td className="py-3 px-4 border-b">{order.email}</td>
                  <td className="py-3 px-4 border-b hidden sm:table-cell">
                    <ul>
                      {order.productDetails.map((product, i) => (
                        <li key={product.productId + i} className="mb-3 flex items-center gap-4">
                          <img
                            src={product.image?.[0] || '/placeholder.png'}
                            alt={product.name}
                            className="w-12 h-12 object-cover rounded-md border border-gray-300"
                          />
                          <div>
                            <div className="font-semibold text-sm">{product.name}</div>
                            <div className="text-xs">Price: {displayUSDCurrency(product.price)}</div>
                            <div className="text-xs">Quantity: {product.quantity}</div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="py-3 px-4 border-b">
                    <span className={`inline-block py-1 px-2 rounded text-xs md:text-sm ${getStatusClass(order.paymentDetails.payment_status)}`}>
                      {order.paymentDetails.payment_status}
                    </span>
                  </td>
                  <td className="py-3 px-4 border-b hidden lg:table-cell">
                    {order.shipping_options.map((option, i) => (
                      <p key={i} className="text-sm">{displayUSDCurrency(option.shipping_amount)}</p>
                    ))}
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
    </Layout>
  );
}

export default Order;
