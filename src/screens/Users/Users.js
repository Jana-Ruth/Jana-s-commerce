import React, { useEffect, useState } from 'react';
import Layout from '../../Layout';
import { Link } from 'react-router-dom';
import { BiPlus, BiTime } from 'react-icons/bi';
import { BsCalendarMonth } from 'react-icons/bs';
import { MdOutlineCalendarMonth } from 'react-icons/md';
import { toast } from 'react-hot-toast';
import moment from 'moment';
import SummaryApi from '../../common';
import { FaRegCircleUser } from "react-icons/fa6";
import ChangeUserRole from '../ChangeUserRole';
import { FiEdit, FiEye } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import ViewUser from './ViewUser'; // Import the ViewUser component

function Users() {
  const [allUser, setAllUsers] = useState([]);
  const [todayUsers, setTodayUsers] = useState(0);
  const [monthlyUsers, setMonthlyUsers] = useState(0);
  const [yearlyUsers, setYearlyUsers] = useState(0);
  const [openUpdateRole, setOpenUpdateRole] = useState(false);
  const [updateUserDetails, setUpdateUserDetails] = useState({
    email: "",
    fullName: "",
    role: "",
    _id: "",
  });
  const [viewUserDetails, setViewUserDetails] = useState(null); // State to control ViewUser modal

  const fetchAllUsers = async () => {
    try {
      const fetchData = await fetch(SummaryApi.allUser.url, {
        method: SummaryApi.allUser.method,
        credentials: 'include'
      });
      const dataResponse = await fetchData.json();
      
      console.log("All User details",dataResponse )
      if (dataResponse.success) {
        const nonAdminUsers = dataResponse.data.filter(user => user.role !== 'ADMIN'); // Filter non-admin users
        setAllUsers(nonAdminUsers);
        calculateUserCounts(nonAdminUsers);
      } else {
        toast.error(dataResponse.message);
      }
    } catch (error) {
      toast.error("Failed to fetch user data.");
    }
  };

  const calculateUserCounts = (users) => {
    const today = moment().startOf('day');
    const startOfMonth = moment().startOf('month');
    const startOfYear = moment().startOf('year');

    let todayCount = 0;
    let monthCount = 0;
    let yearCount = 0;

    users.forEach((user) => {
      const createdAt = moment(user.createdAt);

      if (createdAt.isSame(today, 'day')) {
        todayCount += 1;
      }
      if (createdAt.isSame(startOfMonth, 'month')) {
        monthCount += 1;
      }
      if (createdAt.isSame(startOfYear, 'year')) {
        yearCount += 1;
      }
    });

    setTodayUsers(todayCount);
    setMonthlyUsers(monthCount);
    setYearlyUsers(yearCount);
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const deleteUser = async (userId) => {
    try {
      // Make an API call to delete the user
      const response = await fetch(SummaryApi.deleteUser.url, {
        method: SummaryApi.deleteUser.method,
        headers: {
          'Content-Type': 'application/json',
        },
        
        body: JSON.stringify({ _id: userId }),
        credentials : "include",
      });

      console.log("Delete user",response)
      const data = await response.json();

      if (data.success) {
        // Show success toast and refresh the user list
        toast.success(data.message);
        setAllUsers(allUser.filter(user => user._id !== userId)); // Remove the user from the state
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Error deleting the user.");
    }
  };

  const boxes = [
    {
      id: 1,
      title: 'Today Users',
      value: todayUsers,
      color: ['bg-subMain', 'text-subMain'],
      icon: BiTime,
    },
    {
      id: 2,
      title: 'Monthly Users',
      value: monthlyUsers,
      color: ['bg-orange-500', 'text-orange-500'],
      icon: BsCalendarMonth,
    },
    {
      id: 3,
      title: 'Yearly Users',
      value: yearlyUsers,
      color: ['bg-[#66B5A3]', 'text-[#66B5A3]'],
      icon: MdOutlineCalendarMonth,
    },
  ];

  const thclass = "text-start text-sm font-medium py-3 px-2 whitespace-nowrap";
  const tdclass = "text-start text-sm py-4 px-2 whitespace-nowrap";

  return (
    <Layout>
      <Link
        to="create"
        className="w-16 animate-bounce h-16 border border-border z-50 bg-subMain text-white rounded-full flex-colo fixed bottom-8 right-12 button-fb"
      >
        <BiPlus className="text-2xl" />
      </Link>
      <h1 className="text-xl font-semibold">Users</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {boxes.map((box) => (
          <div
            key={box.id}
            className="bg-white flex-btn gap-4 rounded-xl border-[1px] border-border p-5"
          >
            <div className="w-3/4">
              <h2 className="text-sm font-medium">{box.title}</h2>
              <h2 className="text-xl my-6 font-medium">{box.value}</h2>
              <p className="text-xs text-textGray">
                Total Users <span className={box.color[1]}>{box.value}</span>{' '}
                {box.title === 'Today Users'
                  ? 'today'
                  : box.title === 'Monthly Users'
                  ? 'this month'
                  : 'this year'}
              </p>
            </div>
            <div
              className={`w-10 h-10 flex-colo rounded-md text-white text-md ${box.color[0]}`}
            >
              <box.icon />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 w-full overflow-x-scroll">
        <table className="table-auto w-full">
          <thead className="bg-dry rounded-md overflow-hidden">
            <tr>
              <th className={thclass}>#</th>
              <th className={thclass}>Users</th>
              <th className={thclass}>Email</th>
              <th className={thclass}>Role</th>
              <th className={thclass}>Created At</th>
              <th className={thclass}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {allUser.map((el, index) => (
              <tr key={el._id} className="border-b border-border hover:bg-greyed transitions">
                <td className={tdclass}>{index + 1}</td>
                <td className={tdclass}>
                  <div className="flex gap-4 items-center">
                    <span className="w-12">
                      {el?.profilePic ? (
                        <img
                          src={el.profilePic}
                          alt="user"
                          className="w-12 border border-border object-cover h-12 rounded-full"
                        />
                      ) : (
                        <FaRegCircleUser className="text-gray-500 w-10 h-10" />
                      )}
                    </span>
                    <div>
                      <h4 className="text-sm font-medium">{el?.fullName}</h4>
                      <p className="text-xs mt-1 text-textGray">{el?.phoneNumber}</p>
                    </div>
                  </div>
                </td>
                <td className={tdclass}>{el?.email}</td>
                <td className={tdclass}>{el?.role}</td>
                <td className={tdclass}>{moment(el?.createdAt).format('LL')}</td>
                <td className={tdclass}>
                  <button
                    className="bg-blue-100 p-2 rounded hover:bg-blue-500 hover:text-white mr-2"
                    onClick={() => setViewUserDetails(el)}
                  >
                    <FiEye />
                  </button>
                  <button
                    className="bg-blue-100 p-2 rounded hover:bg-blue-500 hover:text-white mr-2"
                    onClick={() => {
                      setUpdateUserDetails(el);
                      setOpenUpdateRole(true);
                    }}
                  >
                    <FiEdit />
                  </button>
                  <button
                    className="bg-red-100 p-2 rounded hover:bg-red-500 hover:text-white"
                    onClick={() => deleteUser(el._id)}
                  >
                    <RiDeleteBinLine />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {openUpdateRole && (
          <ChangeUserRole
            onClose={() => setOpenUpdateRole(false)}
            fullName={updateUserDetails.fullName}
            email={updateUserDetails.email}
            role={updateUserDetails.role}
            userId={updateUserDetails._id}
          />
        )}
        {viewUserDetails && (
          <ViewUser user={viewUserDetails} onClose={() => setViewUserDetails(null)} />
        )}
      </div>
    </Layout>
  );
}

export default Users;
