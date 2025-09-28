import React, { useContext, useState } from 'react';
import { Button, Input } from '../components/Form';
import { BiLogInCircle } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import loginIcons from '../assest/profile.gif';
import SummaryApi from '../common';
import Context from '../context';
import toast from 'react-hot-toast';

function Login() {
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();
  const { fetchUserDetails, fetchUserAddToCart } = useContext(Context);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    
    try {
      const dataResponse = await fetch(SummaryApi.SignIn.url, {
        method: SummaryApi.SignIn.method,
        headers : {
          "content-type" : "application/json"
      },
        credentials: 'include',
        body: JSON.stringify(data)
      });

      const dataApi = await dataResponse.json();

      if (dataApi.success) {
        const token = dataApi.data.token;
        
        // Store token in local storage
        localStorage.setItem('token', token);

        toast.success(dataApi.message);
        navigate("/");

        // Fetch user details and cart after login
        fetchUserDetails();
        fetchUserAddToCart();
      }

      if (dataApi.error) {
        toast.error(dataApi.message);
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  console.log("data login", data);

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100">
      <form 
      className="w-full sm:w-11/12 md:w-2/3 lg:w-2/5 p-6 sm:p-8 rounded-2xl mx-auto bg-white flex-colo shadow-lg"
      onSubmit={handleSubmit}
    >


        <img src={loginIcons} alt="logo" className="w-20 h-20 object-contain" />

        {/* Email Input */}
        <div className="flex flex-col gap-4 w-full mb-6">
          <label htmlFor="email" className="text-gray-700 font-medium">Email Address</label>
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

        {/* Password Input */}
        <div className="flex flex-col gap-4 w-full mb-2">
          <label htmlFor="password" className="text-gray-700 font-medium">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={data.password}
            onChange={handleOnChange}
            required
            className="border border-gray-300 rounded-md px-6 py-4 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            placeholder="Enter your password"
          />
        </div>

        {/* Forgot Password Link */}
        <div className="flex justify-end w-full mb-6">
          <Link to="/forgot-password" className="text-blue-500 hover:text-blue-600 text-sm font-medium">Forgot Password?</Link>
        </div>

        {/* Login Button */}
        <button 
          type="submit" 
          className="bg-blue-600 flex justify-center items-center w-full text-white px-6 py-4 rounded-lg font-medium shadow-md hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Login
          <BiLogInCircle className="text-xl ml-2" />
        </button>

        {/* Sign Up Section */}
        <p className="mt-4 text-sm text-gray-500">
          Don’t have an account? 
          <Link to="/signup" className="text-blue-500 hover:text-blue-600 font-semibold ml-1">Sign up</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
