import React from 'react'
import SUCCESSIMAGE from '../../assest/success2.png'
import { Link } from 'react-router-dom'

const Success = () => {
  return (
    <div className='bg-slate-200 w-full max-w-md mx-auto flex justify-center items-center flex-col p-4 m-2 rounded'>
      <img src={SUCCESSIMAGE}
      width={150}
      height={150}
      />

      <p className='text-blue-500 font-bold text-xl'>Payment Successfully</p>
      <Link to={"/dashboard-user/orders"} className='p-2 px-3 mt-5 border-2 border-blue-500 rounded font-semibold text-blue-500 hover:bg-blue-500 hover:text-white'>See Order</Link>
    </div>
  )
}

export default Success
