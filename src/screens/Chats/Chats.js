import React, { useEffect } from 'react';
import Layout from '../../Layout';
import SideBarChat from './SideBarChat';
import Coversation from './Coversation';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setOnlineUser, setSocketConnection } from '../../store/userSlice';
import { io } from 'socket.io-client';

function Chats() {
  const user = useSelector(state => state?.user); // Get current user from Redux state
  const location = useLocation()
  const dispatch = useDispatch()

  const basePath = location.pathname  === '/chats'
  console.log("user", user)
  useEffect(() => {
      const token = localStorage.getItem("token");

      // Establish socket connection
      const socketConnection = io("http://localhost:5000", {
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
    <Layout>
      <div
        // data-aos="fade-left"
        // data-aos-duration="1000"
        // data-aos-delay="100"
        // data-aos-offset="200"
        className="xl:flex bg-white rounded-xl border-[1px] border-border p-5 gap-4"
      >
        {/* sidebar */}
        <div className={`2xl:w-[20%] xl:w-[30%] ${!basePath && "hidden"} lg:block`}>
          <SideBarChat />
        </div>
        {/* chats */}
        <div className={`2xl:w-[80%] xl:w-[70%] bg-slate-50 sm:p-6 p-2 rounded-lg xl:mt-0 mt-6 ${basePath && "hidden sm:block"} `}>
          <Coversation />
        </div>
       
      </div>
    </Layout>
  );
}

export default Chats;
