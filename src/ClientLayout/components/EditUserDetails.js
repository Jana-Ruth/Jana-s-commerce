import React, { useEffect, useRef, useState } from 'react';
import Avatar from './Avatar';
import imageTobase64 from '../../helpers/imageTobase64';
import Divider from './Divider';
import SummaryApi from '../../common';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { setUserDetails } from '../../store/userSlice';

const EditUserDetails = ({ onClose, user }) => {
    const [data, setData] = useState({
        fullName: user?.fullName || '',
        profilePic: user?.profilePic || ''
    });

    console.log("data", data)
    const uploadPhotoRef = useRef();
    const dispatch = useDispatch()

    useEffect(() => {
        setData(prev => ({
            ...prev,
            ...user
        }));
    }, [user]);

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleOpenUploadPhoto = (e) => {
        e.preventDefault()
        e.stopPropagation()
        uploadPhotoRef.current.click();
    };

    const handleUploadPhoto = async (e) => {
        const file = e.target.files[0];
        const imagePic = await imageTobase64(file);

        setData(prev => ({
            ...prev,
            profilePic: imagePic
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("Data being sent to backend:", data); // Log the data
        try {
            const fetchResponse = await fetch(SummaryApi.updateUser.url, {
                method: SummaryApi.updateUser.method,
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userId: user?._id, // Assuming user ID is passed as a top-level field
                     ...data 
                })
            });
    
            const responseData = await fetchResponse.json();
            console.log("User Data", responseData);
    
            if (responseData.success) {
                toast.success(responseData.message);
                 // Dispatch Redux action to update user details in global state
               dispatch(setUserDetails(responseData.data));
                onClose();
            } else {
                toast.error("Failed to update user details");
            }
        } catch (error) {
            console.error("Error updating user details:", error);
            toast.error("An error occurred while updating user details.");
        }
    };
    
    return (
        <div className="fixed top-0 bottom-0 left-0 right-0 bg-gray-700 bg-opacity-40 flex justify-center items-center z-10">
            <div className="bg-white px-4 py-6 m-1 rounded w-full max-w-sm">
                <h2 className="font-semibold">Profile Details</h2>
                <p className="text-sm">Edit user details</p>
                <form className="grid gap-3 mt-3" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            name="fullName"
                            id="fullName"
                            value={data.fullName}
                            onChange={handleOnChange}
                            className="w-full border border-gray-300 rounded-md px-2 py-3 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                        />
                    </div>
                    <div>
                        <div>Photo:</div>
                        <div className="my-1 flex items-center gap-4">
                            <Avatar
                                width={40}
                                height={40}
                                imageUrl={data.profilePic}
                                name={data.fullName}
                            />
                            <button
                                type="button"
                                className="font-semibold"
                                onClick={handleOpenUploadPhoto}
                            >
                                Change Photo
                            </button>
                            <input
                                type="file"
                                id="profilePic"
                                className="hidden"
                                onChange={handleUploadPhoto}
                                ref={uploadPhotoRef}
                            />
                        </div>
                    </div>
                    <Divider />
                    <div className="flex gap-2 w-fit ml-auto">
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-blue-600 text-white px-4 py-1 rounded font-medium shadow-md hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleSubmit}
                            className="bg-blue-600 text-white px-4 py-1 rounded font-medium shadow-md hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditUserDetails;
