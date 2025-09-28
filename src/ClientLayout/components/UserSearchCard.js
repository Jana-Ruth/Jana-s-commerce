import React from 'react'
import Avatar from './Avatar'
import { Link } from 'react-router-dom'

const UserSearchCard = ({user, onClose}) => {
  return (
    <Link to={"/messages/"+user?._id} onClick={onClose}  className='flex items-center gap-3 p-2 lg:p-4 border border-transparent border-b-slate-200 hover:border-blue-600 rounded cursor-pointer'>
        <div>
            <Avatar
                width={50}
                height={50}
                name={user?.fullName}
                userId={user?._id}
                imageUrl={user?.profilePic}
            />
        </div>
        <div>
            <div className='font-semibold text-ellipsis line-clamp-1'>
                {user?.fullName}
            </div>
            <p className='text-sm text-ellipsis line-clamp-1'>{user?.email}</p>
        </div>
    </Link>
  )
}

export default UserSearchCard
