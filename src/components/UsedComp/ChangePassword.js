import React, { useState } from 'react';
import { Button, Input } from '../Form';
import { HiOutlineCheckCircle } from 'react-icons/hi';
import { toast } from 'react-hot-toast';
import SummaryApi from '../../common';
import { useDispatch } from 'react-redux';
import { setUserDetails } from '../../store/userSlice';

function ChangePassword({ user }) {
  const [passwordData, setPasswordData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setPasswordData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const { oldPassword, newPassword, confirmPassword } = passwordData;

    // Basic validation
    if (!oldPassword || !newPassword || !confirmPassword) {
      toast.error('Please fill out all fields');
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error('New password and confirm password do not match');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(SummaryApi.updatePassword.url, {
        method: SummaryApi.updatePassword.method,
        headers: {
          'Content-Type': 'application/json',
        },

        credentials : "include",
        body: JSON.stringify({
          userId: user._id,
          oldPassword,
          newPassword,
        }),
      });

      const result = await response.json();
      if (response.ok && result.success) {
        toast.success('Password updated successfully');
        setPasswordData({
          oldPassword: '',
          newPassword: '',
          confirmPassword: '',
        });
      } else {
        toast.error(result.message || 'Failed to update password');
      }
    } catch (error) {
      console.error('Error updating password:', error);
      toast.error('An error occurred while updating the password');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex-colo gap-4">
      {/* Old Password */}
      <Input
        label="Old Password"
        color={true}
        type="password"
        name="oldPassword"
        value={passwordData.oldPassword}
        onChange={handleOnChange}
        autoComplete="new-password"
        defaultValue = ""
      />
      {/* New Password */}
      <Input
        label="New Password"
        color={true}
        type="password"
        name="newPassword"
        value={passwordData.newPassword}
        onChange={handleOnChange}
        defaultValue = ""
      />
      {/* Confirm Password */}
      <Input
        label="Confirm Password"
        color={true}
        type="password"
        name="confirmPassword"
        value={passwordData.confirmPassword}
        onChange={handleOnChange}
        defaultValue=''
      />
      {/* Save Changes Button */}
      <Button
        label={isLoading ? "Updating..." : "Save Changes"}
        Icon={HiOutlineCheckCircle}
        onClick={handleSubmit}
        disabled={isLoading}
      />
    </div>
  );
}

export default ChangePassword;
