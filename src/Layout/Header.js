import React, { useEffect } from 'react';
import { MenuSelect } from '../components/Form';
import { TbUser } from 'react-icons/tb';
import { AiOutlinePoweroff } from 'react-icons/ai';
import { MdOutlineNotificationsNone } from 'react-icons/md';
import NotificationComp from '../components/NotificationComp';
import { useNavigate } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import MenuDrawer from '../components/Drawer/MenuDrawer';
import { useSelector, useDispatch } from 'react-redux';
import { FaRegCircleUser } from "react-icons/fa6";
import ROLE from '../common/role';
import { setOnlineUser, setSocketConnection, setUserDetails } from '../store/userSlice';
import SummaryApi from '../common';
import toast from 'react-hot-toast';

function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const user = useSelector(state => state?.user?.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Redirect non-admin users
  useEffect(() => {
    if (user?.role !== ROLE.ADMIN) {
      navigate("/");
    }
  }, [user, navigate]);

  // Toggle drawer
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  // Handle logout
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
        dispatch(setUserDetails(null));
        dispatch(setOnlineUser([]));
        dispatch(setSocketConnection(null));
        localStorage.clear();
        navigate("/login");
      } else if (data.error) {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("An error occurred during logout. Please try again.");
      console.error("Logout error:", error);
    }
  };

  // Dropdown options including logout
  const DropDown1 = [
    {
      title: 'Profile',
      icon: TbUser,
      onClick: () => navigate('/settings'),
    },
    {
      title: 'Logout',
      icon: AiOutlinePoweroff,
      onClick: handleLogout,  // Attach handleLogout function here
    },
  ];

  return (
    <>
      {isOpen && <MenuDrawer isOpen={isOpen} toggleDrawer={toggleDrawer} />}
     <div className="xl:w-5/6 w-full 2xl:max-w-[1640px] bg-dry grid grid-cols-12 items-center bg-opacity-95 fixed top-0 z-40 xs:px-8 px-2">
  {/* Left Section: Drawer + Search */}
  <div className="col-span-8 sm:col-span-6 md:col-span-6 flex gap-4 items-center py-4">
    {/* Drawer Button */}
    <button
      onClick={toggleDrawer}
      className="block xl:hidden border text-2xl bg-greyed w-12 h-12 rounded-md flex-colo text-textGray transitions hover:bg-border"
    >
      <BiMenu />
    </button>
    {/* Search Bar */}
    <input
      type="text"
      placeholder="Search"
      className="w-full md:w-96 h-12 text-sm text-main rounded-md bg-dry border border-border px-4"
    />
  </div>

  {/* Right Section: Notifications + Profile */}
  <div className="col-span-4 sm:col-span-6 md:col-span-6 flex justify-end items-center pr-4">
    <div className="flex items-center gap-4">
      {/* Notifications */}
      <NotificationComp>
        <div className="relative">
          <MdOutlineNotificationsNone className="text-2xl hover:text-subMain" />
          <span className="absolute -top-2.5 -right-2.5 font-semibold bg-subMain rounded-full px-1.5 py-0.5 text-xs text-white text-center">
            5
          </span>
        </div>
      </NotificationComp>

      {/* User Profile */}
      <MenuSelect datas={DropDown1}>
        <div className="flex items-center gap-4 p-4 rounded-lg">
          {user?.profilePic ? (
            <img
              src={user?.profilePic}
              alt="user"
              className="w-12 h-12 border border-border object-cover rounded-full"
            />
          ) : (
            <FaRegCircleUser className="text-gray-500 w-10 h-10" />
          )}
          {/* User Info */}
          <div className="hidden sm:block">
            <p className="text-sm font-semibold capitalize">{user?.fullName?.split(' ')[0]}</p>
            <p className="text-xs text-gray-500 capitalize">{user?.role}</p>
          </div>
        </div>
      </MenuSelect>
    </div>
  </div>
</div>

    </>
  );
}

export default Header;
