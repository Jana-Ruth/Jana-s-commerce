import React, { useEffect, useState } from 'react'
import { BiLogOut } from 'react-icons/bi';
import { FaUserPlus } from 'react-icons/fa';
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { NavLink, useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { FiArrowUpLeft } from 'react-icons/fi'
import { FaImage, FaVideo } from 'react-icons/fa6';
import SummaryApi from '../../common';
import toast from 'react-hot-toast';
import Avatar from '../../ClientLayout/components/Avatar';
import { logout, setUserDetails } from '../../store/userSlice';
import EditUserDetails from '../../ClientLayout/components/EditUserDetails';
import SearchUserAdmin from './SearchUserAdmin';

const SideBarChat = () => {
    const user = useSelector(state => state?.user?.user);
    const [editUserOpen, setEditUserOpen] = useState(false)
    const [allUser, setAllUser] = useState([])
    const [openSearchUser, setOpenSearchUser] = useState(false)
    const socketConnection = useSelector(state=> state?.user?.socketConnection)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    useEffect(()=>{
        if(socketConnection){
            socketConnection.emit('sidebar',user?._id)
            
            

            socketConnection.on('conversation',(data)=>{
               
                
                const conversationUserData = data.map((conversationUser,index)=>{
                    if(conversationUser?.sender?._id === conversationUser?.receiver?._id){
                        return{
                            ...conversationUser,
                            userDetails : conversationUser?.sender
                        }
                    }
                    else if(conversationUser?.receiver?._id !== user?._id){
                        return{
                            ...conversationUser,
                            userDetails : conversationUser.receiver
                        }
                    }else{
                        return{
                            ...conversationUser,
                            userDetails : conversationUser.sender
                        }
                    }
                })

                console.log('conversation',conversationUserData)
                setAllUser(conversationUserData)
            })
        }
    },[socketConnection,user])

    const handleLogout = async () => {   
        try {
            const response = await fetch(SummaryApi.logout_user.url, {
                method: SummaryApi.logout_user.method,
                credentials: 'include',
            });
    
            if (!response.ok) throw new Error("Failed to log out");
    
            const data = await response.json();
    
            if (data.success) {
                toast.success(data.message);
                dispatch(setUserDetails(null))
                dispatch(logout())
                navigate("/");
                localStorage.clear();
            } else if (data.error) {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error("An error occurred during logout. Please try again.");
            console.error("Logout error:", error);
        }
    };

   return (
    <div className='w-full h-full grid grid-cols-[48px,1fr] bg-white'>
       <div className='bg-slate-100 w-12 h-full rounded-tr-lg rounded-br-lg py-5 text-slate-600 flex flex-col justify-between'>
            <div>
            <NavLink className={({isActive})=>`w-12 h-12 flex justify-center items-center cursor-pointer hover:bg-slate-200 rounded ${isActive && "bg-slate-200"}`} title='chat'>
            <IoChatbubbleEllipsesSharp
                size={20}
            />
        </NavLink>

        <div title='add friend' onClick={()=>setOpenSearchUser(true)} className='w-12 h-12 flex justify-center items-center cursor-pointer hover:bg-slate-200 rounded'>
            <FaUserPlus size={20}/>
        </div>
        </div>

        <div className='flex flex-col items-center'>
            <button className='mx-auto ' title={user?.fullName} onClick={()=>setEditUserOpen(true)}>
                <Avatar
                    width={35}
                    height={35}
                    name={user?.fullName}
                    imageUrl={user?.profilePic}
                    userId={user?._id}
                />
            </button>
            <button title='logout' className='w-12 h-12 flex justify-center items-center cursor-pointer hover:bg-slate-200 rounded' onClick={handleLogout}> 
                <span className='-ml-2'>
                    <BiLogOut size={20}/>
                </span>
            </button>
        </div>
       </div>
       <div className='w-full'>
            <div className='h-16 flex items-center'>
              <h2 className='text-xl font-bold p-4 text-slate-800'>Message</h2>
            </div>
            <div className='bg-slate-200 p-[0.5px]'>
               
            </div>
            <div className='h-[calc(100vh-65px)] overflow-x-hidden overflow-y-auto scrollbar'>
                {
                    allUser.length === 0 && (
                        <div className='mt-10'>
                         <div className='flex justify-center items-center my-4 text-slate-500'>
                            <FiArrowUpLeft
                                size={50}
                            />
                        </div>

                        <p className='text-lg text-center text-slate-400'>Explore users to start a conversation with</p>
                        </div>
                       
                    )
                }

                {
                    allUser.map((conv,index)=>{
                        return (
                            <NavLink to={"/chats/"+conv?.userDetails?._id} key={conv?._id} className='flex items-center gap-2 py-3 px-2 border border-transparent hover:border-subMain rounded hover:bg-slate-100 cursor-pointer'>
                                <div>
                                    <Avatar
                                        imageUrl={conv?.userDetails?.profilePic}
                                        name={conv?.userDetails?.fullName}
                                        width={40}
                                        height={40}
                                    />
                                </div>
                                <div>
                                    <h3 className='text-ellipsis line-clamp-1  font-semibold text-base'>{conv?.userDetails?.fullName}</h3>
                                    <div className='text-xs text-slate-500 flex items-center gap-1'>
                                        {
                                            conv?.lastMsg?.imageUrl && (
                                                <div className='flex items-center gap-1'>
                                                    <span><FaImage/></span>
                                                    {!conv?.lastMsg?.text && <span>Image</span>}
                                                    
                                                </div>
                                                
                                            )
                                        }
                                          {
                                            conv?.lastMsg?.videoUrl && (
                                                <div className='flex items-center gap-1'>
                                                    <span><FaVideo/></span>
                                                    {!conv?.lastMsg?.text && <span>Video</span>}
                                                </div>
                                                
                                            )
                                        }
                                        <p className='text-ellipsis line-clamp-1'>{conv?.lastMsg?.text}</p>
                                    </div>
                                </div>
                                {
                                    Boolean(conv?.unseenMsg) && (
                                        <p className='text-xm w-6 h-6 flex justify-center items-center ml-auto p-1 bg-blue-600 text-white font-semibold rounded-full'>{conv?.unseenMsg}</p>
                                    )
                                }
                              

                            </NavLink>
                        )
                    })
                }
            </div>
            
       </div>

       {/*edit user details*/}
       {

            editUserOpen && (
                <EditUserDetails onClose = {()=> setEditUserOpen(false)} user={user}/>
            )
       }

       {/*search user*/}
       {
         openSearchUser && (
            <SearchUserAdmin onClose={()=>setOpenSearchUser(false)}/>
         )
       }
    </div>
  )
}

export default SideBarChat
