import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from '../components/Sidebar';
import io from 'socket.io-client'
import { setOnlineUser, setSocketConnection } from '../../store/userSlice';

const Account = () => {
    const user = useSelector(state => state?.user); // Get current user from Redux state
    const location = useLocation()
    const dispatch = useDispatch()

    const basePath = location.pathname  === '/messages'
    console.log("user", user)
    useEffect(() => {
        const token = localStorage.getItem("token");

        // Establish socket connection
        const socketConnection = io(process.env.REACT_APP_BACKEND_URL, {
            transports: ["websocket"], // Force WebSocket transport
            auth: { token: token },
        });

        socketConnection.on("connect", () => {
            console.log("Connected to socket server:", socketConnection.id);
        });

        socketConnection.on("connect_error", (err) => {
            console.error("Socket connection error:", err.message);
        });

        // Listen for 'onlineUser' event to get the updated list of online users
        socketConnection.on('onlineUser', (data) => {
            console.log("Online User", data);  // Logs the unique user IDs
            dispatch(setOnlineUser(data))
        });

        dispatch(setSocketConnection(socketConnection))

        return () => {
            socketConnection.disconnect();
            console.log("Socket disconnected");
        };
    }, []);

  return (
    <div className='mt-4 h-full min-h-max'>
         <div className='grid lg:grid-cols-[300px,1fr] h-screen max-h-screen' >
        <section className={`bg-white ${!basePath && "hidden"} lg:block`}>
            <Sidebar/> 
        </section> 

        <section className={`${basePath && "hidden" }`}>
            <Outlet/>
        </section>

        <div className={`justify-center items-center flex-col gap-2 hidden ${!basePath ? "hidden" : "lg:flex"}`}>
            <div>
                <img src="/images/logo.png" width={250} height={100} alt='logo' />
            </div>
            <p className='text-lg mt-2 text-slate-500'>Select user to send message</p>
        </div>
    </div>
    </div>
   
  );
};

export default Account;
