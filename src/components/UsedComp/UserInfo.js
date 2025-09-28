import React, { useState, useEffect } from 'react';
import Uploader from '../Uploader';
import { Button, Input } from '../Form';
import { toast } from 'react-hot-toast';
import { HiOutlineCheckCircle } from 'react-icons/hi';
import SummaryApi from '../../common';
import { useNavigate } from 'react-router-dom';


function UserInfo({ user }) {
    const [data, setData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        profilePic: "",
        phoneNumber: ""
      });

  const navigate = useNavigate();
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUploadPhoto = (base64Image) => {
    setData((prev) => ({
      ...prev,
      profilePic: base64Image,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (data.password === data.confirmPassword) {
      try {
        const dataResponse = await fetch(SummaryApi.SignUp.url, {
          method: SummaryApi.SignUp.method,
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        });

        const dataApi = await dataResponse.json();

        if (dataApi.success) {
          toast.success(dataApi.message);
          navigate("/login");
        } else if (dataApi.error) {
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
    <div className="flex-colo gap-4">
      {/* Profile Picture Uploader */}
      <div className="flex gap-3 flex-col w-full col-span-6">
        <p className="text-sm">Profile Image</p>
        <Uploader image={data.profilePic} setImage={handleUploadPhoto} />
      </div>

      {/* Full Name */}
      <Input
        label="Full Name"
        color={true}
        type="text"
        name="fullName"
        value={data.fullName}
        onChange={handleOnChange}
      />

      {/* Email */}
      <Input
        label="Email"
        color={true}
        type="email"
        name="email"
        value={data.email}
        onChange={handleOnChange}
      />

      {/* Phone Number */}
      <Input
        label="Phone Number"
        color={true}
        type="number"
        name="phoneNumber"
        value={data.phoneNumber}
        onChange={handleOnChange}
      />

      {/* Password */}
      <Input
        label="Password"
        color={true}
        type="password"
        name="password"
        value={data.password}
        onChange={handleOnChange}
      />

      {/* Confirm Password */}
      <Input
        label="Confirm Password"
        color={true}
        type="password"
        name="confirmPassword"
        value={data.confirmPassword}
        onChange={handleOnChange}
      />

      {/* Save Changes Button */}
      <div className="grid gap-4 w-full">
        <Button label="Save Changes" Icon={HiOutlineCheckCircle} onClick={handleSubmit} />
      </div>
    </div>
  );
}

export default UserInfo;
