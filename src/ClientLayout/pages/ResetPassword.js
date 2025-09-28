import React, { useEffect, useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import SummaryApi from '../../common';

const ResetPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    newPassword: "",
    confirmPassword: ""
  });

  const validValue = Object.values(data).every(el => el);

  useEffect(() => {
    if (!(location?.state?.data?.success)) {
      navigate("/");
    }
    if (location?.state?.email) {
      setData(prev => ({ ...prev, email: location?.state?.email }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.newPassword !== data.confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    try {
      const dataResponse = await fetch(SummaryApi.reset_password.url, {
        method: SummaryApi.reset_password.method,
        credentials: 'include',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      const dataApi = await dataResponse.json();
      if (dataApi.success) {
        toast.success(dataApi.message);
        navigate("/login");
        setData({
          email: "",
          newPassword: "",
          confirmPassword: ""
        });
      } else {
        toast.error(dataApi.message || "Unexpected error occurred.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100">
      <form className="md:w-2/5 p-8 rounded-2xl bg-white shadow-lg mx-auto flex flex-col items-center" onSubmit={handleSubmit}>
        <img
          src="/images/logo.png"
          alt="logo"
          className="w-48 h-16 object-contain mb-6"
        />
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Reset Your Password</h2>
        <div className="w-full max-w-sm flex flex-col gap-4 mb-4">
          <label htmlFor="newPassword" className="text-gray-600 font-medium">New Password:</label>
          <div className="relative">
            <input
              type='password'
              id="newPassword"
              name="newPassword"
              required
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              value={data.newPassword}
              onChange={handleChange}
              placeholder="Enter your new password"
            />
          
          </div>
        </div>

        <div className="w-full max-w-sm flex flex-col gap-4 mb-4">
          <label htmlFor="confirmPassword" className="text-gray-600 font-medium">Confirm Password:</label>
          <div className="relative">
            <input
              type='password'
              id="confirmPassword"
              name="confirmPassword"
              required
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              value={data.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your new password"
            />
         
          </div>
        </div>

        <button
          type="submit"
          disabled={!validValue}
          className={`w-full max-w-sm py-3 mt-4 font-semibold text-white rounded-md ${validValue ? "bg-blue-500 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"}`}
        >
          Change Password
        </button>
        <p className="mt-6 text-sm text-gray-500">
          Remembered your password? <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default ResetPassword;
