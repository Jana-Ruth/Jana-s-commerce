import React, { useState } from 'react';
import { BiLogInCircle } from 'react-icons/bi';
import loginIcons from '../assest/profile.gif'
import imageTobase64 from '../helpers/imageTobase64';
import { Link, useNavigate } from 'react-router-dom';
import SummaryApi from '../common';
import toast from 'react-hot-toast';

function SignUp() {

  const [data, setData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    profilePic: "",
    phoneNumber: ""  // <-- Added here
  });

  const navigate = useNavigate()

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleUploadPic = async (e) => {
    const file = e.target.files[0]
    const imagePic = await imageTobase64(file)

    setData((preve) => ({
      ...preve,
      profilePic: imagePic
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (data.password === data.confirmPassword) {
      try {
        const dataResponse = await fetch(SummaryApi.SignUp.url, {
          method: SummaryApi.SignUp.method,
          headers : {
            "content-type" : "application/json"
        },
          body: JSON.stringify(data)
        });

        const dataApi = await dataResponse.json();

        if (dataApi.success) {
          toast.success(dataApi.message);
          navigate("/login");
        }

        if (dataApi.error) {
          toast.error(dataApi.message);
        }
      } catch (error) {
        toast.error("Something went wrong. Please try again.");
      }
    } else {
      toast.error("Passwords do not match!");
    }
  };

  return (
    <div className="w-full mt-10 flex justify-center items-center">
       <form 
        className="w-full sm:w-11/12 md:w-2/3 lg:w-2/5 p-6 sm:p-8 rounded-2xl mx-auto bg-white flex-colo shadow-lg"
        onSubmit={handleSubmit}
    >

        <div className="w-20 h-20 object-contain mx-auto relative overflow-hidden rounded-full">
          <div>
            <img
              src={data.profilePic || loginIcons}
              alt="profile"
            />
          </div>
          <form>
            <label>
              <div className='text-xs bg-opacity-80 bg-slate-200 pb-4 pt-2 cursor-pointer text-center absolute bottom-0 w-full'>
                Upload Photo
              </div>
              <input type='file' className='hidden' onChange={handleUploadPic} />
            </label>
          </form>
        </div>

        <div className="flex flex-col gap-4 w-full mb-6">
          <label htmlFor="firstName" className="text-gray-700 font-medium">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={data.fullName}
            onChange={handleOnChange}
            required
            className="border border-gray-300 rounded-md px-6 py-4 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            placeholder="Enter your full name"
          />
        </div>

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

        <div className="flex flex-col gap-4 w-full mb-6">
          <label htmlFor="phoneNumber" className="text-gray-700 font-medium">
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={data.phoneNumber}
            onChange={handleOnChange}
            required
            className="border border-gray-300 rounded-md px-6 py-4 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            placeholder="Enter your phone number"
          />
        </div>

        <div className="flex flex-col gap-4 w-full mb-6">
          <label htmlFor="password" className="text-gray-700 font-medium">
            Password
          </label>
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

        <div className="flex flex-col gap-4 w-full mb-6">
          <label htmlFor="confirmPassword" className="text-gray-700 font-medium">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={data.confirmPassword}
            onChange={handleOnChange}
            required
            className="border border-gray-300 rounded-md px-6 py-4 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            placeholder="Enter your confirm password"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 flex justify-center items-center w-full text-white px-6 py-4 rounded-lg font-medium shadow-md hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105">
          Create Account
          <BiLogInCircle className='text-xl ml-2' />
        </button>

        <p className="mt-4 text-sm text-gray-500">
          Already have an account?
          <Link
            to={"/login"}
            className="text-blue-500 hover:text-blue-600 font-semibold ml-1"
          >
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
