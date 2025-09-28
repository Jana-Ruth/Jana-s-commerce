import React, { useEffect } from 'react'
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast'
import { IoClose } from "react-icons/io5";
import SummaryApi from '../../common';
import { handleAddAddress } from '../../store/addressSlice';
import { useDispatch } from 'react-redux';


const AddAddress = ({ close }) => {
    const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm()

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
  const onSubmit = async (data) => {
    console.log("data", data)

   

    try {
      const response = await fetch(SummaryApi.addAddress.url, {
        method: SummaryApi.addAddress.method, // e.g., 'POST'
        headers: {
          "Content-Type": "application/json"
        },
        credentials: 'include',
        body: JSON.stringify({
          address_line: data.addressline,
          city: data.city,
          state: data.state,
          country: data.country,
          pincode: data.pincode,
          mobile: data.mobile
        })
      })

      const responseData = await response.json()

      if (response.ok && responseData.success) {
        toast.success(responseData.message)
        if (close) {
          close()
          reset()
          fetchAddresses()
        }
      } else {
        toast.error(responseData.message || "Failed to add address")
      }
    } catch (error) {
      console.error("Error creating address:", error)
      toast.error("An error occurred while adding the address.")
    }
    
  }

 


  useEffect(() => {
    fetchAddresses();
  }, []);

  return (
    <section className='bg-black fixed top-0 left-0 right-0 bottom-0 z-50 bg-opacity-70 h-screen overflow-auto'>
      <div className='bg-white p-4 w-full max-w-lg mt-8 mx-auto rounded'>
        <div className='flex justify-between items-center gap-4'>
          <h2 className='font-semibold'>Add Address</h2>
          <button onClick={close} className='hover:text-red-500'>
            <IoClose size={25} />
          </button>
        </div>
        <form className='mt-4 grid gap-4' onSubmit={handleSubmit(onSubmit)}>
          <div className='grid gap-1'>
            <label htmlFor='addressline'>Address Line :</label>
            <input
              type='text'
              id='addressline'
              className='border bg-blue-50 p-2 rounded'
              {...register("addressline", { required: true })}
            />
          </div>
          <div className='grid gap-1'>
            <label htmlFor='city'>City :</label>
            <input
              type='text'
              id='city'
              className='border bg-blue-50 p-2 rounded'
              {...register("city", { required: true })}
            />
          </div>
          <div className='grid gap-1'>
            <label htmlFor='state'>State :</label>
            <input
              type='text'
              id='state'
              className='border bg-blue-50 p-2 rounded'
              {...register("state", { required: true })}
            />
          </div>
          <div className='grid gap-1'>
            <label htmlFor='pincode'>Pincode :</label>
            <input
              type='text'
              id='pincode'
              className='border bg-blue-50 p-2 rounded'
              {...register("pincode", { required: true })}
            />
          </div>
          <div className='grid gap-1'>
            <label htmlFor='country'>Country :</label>
            <input
              type='text'
              id='country'
              className='border bg-blue-50 p-2 rounded'
              {...register("country", { required: true })}
            />
          </div>
          <div className='grid gap-1'>
            <label htmlFor='mobile'>Mobile No. :</label>
            <input
              type='text'
              id='mobile'
              className='border bg-blue-50 p-2 rounded'
              {...register("mobile", { required: true })}
            />
          </div>

          <button type='submit' className='bg-subMain w-full py-2 font-semibold mt-4 hover:bg-subMain rounded-full text-white'>
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}

export default AddAddress
