import React, { useState } from 'react';
import SideBarUser from '../components/SideBarUser';
import { Outlet } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const DashboardUser = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-dry xl:h-screen flex-colo ">
    <div className="grid xl:grid-cols-12 w-full 2xl:max-w-[2000px]">
      <div className="col-span-2 xl:block hidden">
      <SideBarUser />
      </div>
      <div className="col-span-10 xl:h-screen overflow-y-scroll relative">
        
        <main className="flex-1 overflow-y-auto p-6 bg-gray-100">
        <Outlet />
        </main>
      </div>
    </div>
    </div>
  );
};

export default DashboardUser;
