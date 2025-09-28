import React from 'react';
import { FaRegCircleUser } from "react-icons/fa6";
import moment from 'moment';

function ViewUser({ user, onClose }) {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-md w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">User Details</h2>
          <button onClick={onClose} className="text-lg font-semibold text-red-500">X</button>
        </div>

        <div className="flex items-center gap-4 mb-6">
          {user?.profilePic ? (
            <img
              src={user.profilePic}
              alt="user"
              className="w-16 h-16 border border-border object-cover rounded-full"
            />
          ) : (
            <FaRegCircleUser className="text-gray-500 w-16 h-16" />
          )}
          <div>
            <h3 className="text-lg font-medium">{user?.fullName}</h3>
            <p className="text-sm text-textGray">{user?.email}</p>
          </div>
        </div>

        <div className="mb-4">
          <p><strong>Phone Number:</strong> {user?.phoneNumber}</p>
          <p><strong>Role:</strong> {user?.role}</p>
          <p><strong>Created At:</strong> {moment(user?.createdAt).format('LL')}</p>
        </div>

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewUser;
