import React, { useEffect, useState } from 'react';
import { MdDelete, MdEdit } from "react-icons/md";
import toast from 'react-hot-toast';
import SummaryApi from '../../common';
import { useDispatch, useSelector } from 'react-redux';
import AddAddress from '../components/AddAddress';
import EditAddressDetails from '../components/EditAddressDetails';
import { handleAddAddress } from '../../store/addressSlice';

const Address = () => {
  const dispatch = useDispatch();
  const addressList = useSelector(state => state?.addresses?.addressList);
  const [openAddress, setOpenAddress] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [editData, setEditData] = useState({});

  // Fetch address list on component mount
  const fetchAddresses = async () => {
    try {
      const response = await fetch(SummaryApi.allAddress.url, {
        method: 'GET',
        credentials: 'include',
      });
      const data = await response.json();
      if (response.ok) {
        dispatch(handleAddAddress(data.data));
      } else {
        toast.error(data.message || "Failed to fetch addresses");
      }
    } catch (error) {
      console.error("Error fetching addresses:", error);
      toast.error("An error occurred while fetching addresses.");
    }
  };

  // Handle disabling the address
  const handleDisableAddress = async (id) => {
    try {
      const response = await fetch(SummaryApi.deleteAddress.url, {
        method: SummaryApi.deleteAddress.method,
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'include',
        body: JSON.stringify({ _id: id }),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success("Address Removed");
        fetchAddresses(); // Refresh address list after deletion
      } else {
        toast.error(data.message || "Failed to remove address");
      }
    } catch (error) {
      console.error("Error disabling address:", error);
      toast.error("An error occurred while removing the address.");
    }
  };

  useEffect(() => {
    fetchAddresses();
  }, []);

  return (
    <div className='h-screen py-4'>
      <div className='bg-white shadow-lg px-2 py-2 flex justify-between gap-4 items-center'>
        <h2 className='font-semibold text-ellipsis line-clamp-1'>Address</h2>
        <button
          onClick={() => setOpenAddress(true)}
          className='border border-subMain text-subMain px-3 hover:bg-subMain hover:text-white py-1 rounded-full'>
          Add Address
        </button>
      </div>
      <div className='bg-blue-50 p-2 grid gap-4'>
        {addressList.map((address) => (
          <div className={`border rounded p-3 flex gap-3 bg-white ${!address.status && 'hidden'}`} key={address._id}>
            <div className='w-full'>
              <p>{address.address_line}</p>
              <p>{address.city}</p>
              <p>{address.state}</p>
              <p>{address.country} - {address.pincode}</p>
              <p>{address.mobile}</p>
            </div>
            <div className='grid gap-10'>
              <button
                onClick={() => {
                  setOpenEdit(true);
                  setEditData(address);
                }}
                className='bg-blue-200 p-1 rounded hover:text-white hover:bg-blue-600'>
                <MdEdit />
              </button>
              <button
                onClick={() => handleDisableAddress(address._id)}
                className='bg-red-200 p-1 rounded hover:text-white hover:bg-red-600'>
                <MdDelete size={20} />
              </button>
            </div>
          </div>
        ))}
        <div onClick={() => setOpenAddress(true)} className='h-16 bg-blue-50 border-2 border-dashed flex justify-center items-center cursor-pointer'>
          Add address
        </div>
      </div>

      {openAddress && (
        <AddAddress close={() => setOpenAddress(false)} fetchAddresses={fetchAddresses} />
      )}

      {openEdit && (
        <EditAddressDetails data={editData} close={() => setOpenEdit(false)} fetchAddresses={fetchAddresses} />
      )}
    </div>
  );
};

export default Address;
