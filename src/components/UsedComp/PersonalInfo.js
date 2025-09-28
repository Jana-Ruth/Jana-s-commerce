import React, { useState} from 'react';
import Uploader from '../Uploader';
import { Button, Input } from '../Form';
import { toast } from 'react-hot-toast';
import { HiOutlineCheckCircle } from 'react-icons/hi';
import SummaryApi from '../../common';
import { useDispatch } from 'react-redux';
import { setUserDetails } from '../../store/userSlice';

function PersonalInfo({ user }) {
  const [data, setData] = useState({
    fullName: user?.fullName || '',
    profilePic: user?.profilePic || '',
    email: user?.email || '',
    phoneNumber: user?.phoneNumber || '',
  });

  const dispatch = useDispatch();

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
    try {
      const fetchResponse = await fetch(SummaryApi.updateUser.url, {
        method: SummaryApi.updateUser.method,
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: user?._id,
          ...data,
        }),
      });

      const responseData = await fetchResponse.json();

      if (responseData.success) {
        toast.success(responseData.message);
        dispatch(setUserDetails(responseData.data)); // Update Redux state
      } else {
        toast.error('Failed to update user details');
      }
    } catch (error) {
      console.error('Error updating user details:', error);
      toast.error('An error occurred while updating user details.');
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

      {/* Save Changes Button */}
      <div className="grid gap-4 w-full">
        <Button label="Save Changes" Icon={HiOutlineCheckCircle} onClick={handleSubmit} />
      </div>
    </div>
  );
}

export default PersonalInfo;
