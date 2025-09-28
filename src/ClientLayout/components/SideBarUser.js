import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaBoxOpen,FaMapMarkerAlt, FaSignOutAlt } from "react-icons/fa";
import SummaryApi from '../../common';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { setUserDetails } from '../../store/userSlice';

const SideBarUser = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch()
  
  const handleLogout = async () => {
    const fetchData = await fetch(SummaryApi.logout_user.url, {
        method: SummaryApi.logout_user.method,
        credentials: 'include'
    });
    const data = await fetchData.json();
    if (data.success) {
        toast.success(data.message);
        dispatch(setUserDetails(null));
        navigate("/");
    }
    if (data.error) {
        toast.error(data.message);
    }
};
  return (
    <aside className="w-64 bg-white p-6 shadow-lg h-full min-h-screen overflow-hidden z-10">
      <h2 className="text-xl font-bold mb-6">User Dashboard</h2>
      <nav className="flex flex-col gap-4">
        <Link to="/dashboard-user/my-account" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
          <FaUser /> Profile
        </Link>
        <Link to="/dashboard-user/orders" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
          <FaBoxOpen /> Orders
        </Link>
      
        <Link to="/dashboard-user/save-address" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
          <FaMapMarkerAlt /> Saved Address
        </Link>
        <button onClick={handleLogout} className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
          <FaSignOutAlt /> Logout
        </button>
      </nav>
    </aside>
  );
};

export default SideBarUser;
