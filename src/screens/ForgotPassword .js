import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SummaryApi from '../common';
import toast from 'react-hot-toast';

const ForgotPassword = () => {
  const [data, setData] = useState({ email: "" });
  const navigate = useNavigate();
  
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const dataResponse = await fetch(SummaryApi.forgot_password.url, {
        method: SummaryApi.forgot_password.method,
        credentials: 'include',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      const dataApi = await dataResponse.json();

      if (dataApi.success) {
        toast.success(dataApi.message);
        setData({ email: "" });
        navigate("/verification-otp", { state: { email: data.email } });
      } else if (dataApi.error) {
        toast.error(dataApi.message);
      } else {
        toast.error("Unexpected response. Please try again.");
      }

    } catch (error) {
      toast.error("An error occurred. Please check your network and try again.");
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100">
      <form
        className="md:w-2/5 p-20 rounded-lg shadow-md mx-auto bg-white flex flex-col"
        onSubmit={handleSubmit}
      >
        <img
          src="/images/logo.png"
          alt="logo"
          className="w-48 h-16 object-contain mx-auto mb-6"
        />
        <h2 className="text-xl font-bold text-center mb-4">Forgot Password</h2>
        <div className="flex flex-col gap-4 w-full mb-6">
          <label htmlFor="email" className="text-gray-700 font-medium">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={data.email}
            onChange={handleOnChange}
            required
            className="border border-gray-300 rounded-md px-6 py-4 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            placeholder="Enter your email address"
          />
        </div>
        <button
          type="submit"
          disabled={!data.email}
          className={`${
            data.email ? "bg-blue-500 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"
          } text-white py-4 px-8 rounded-md font-medium`}
        >
          Send OTP
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
