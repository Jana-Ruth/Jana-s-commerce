import React, { useContext, useState } from 'react';
import Logo from './Logo';
import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser, FaCaretUp, FaCaretDown } from "react-icons/fa6";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaBars, FaShoppingCart, FaTimes } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SummaryApi from '../../common';
import { setUserDetails } from '../../store/userSlice';
import ROLE from '../../common/role';
import Context from '../../context';
import { RiAdminFill } from "react-icons/ri";
import toast from 'react-hot-toast';
import { IoMdLogIn } from "react-icons/io";
import { FaBoxOpen, FaCommentDots, FaMapMarkerAlt, FaSignOutAlt } from "react-icons/fa";

const Header = () => {
    const user = useSelector(state => state?.user?.user);
    const dispatch = useDispatch();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const context = useContext(Context);
    const navigate = useNavigate();
    const searchInput = useLocation();
    const URLSearch = new URLSearchParams(searchInput?.search);
    const searchQuery = URLSearch.getAll("q");
    const [search, setSearch] = useState(searchQuery);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleLogout = async () => {
        const fetchData = await fetch(SummaryApi.logout_user.url, {
            method: SummaryApi.logout_user.method,
            credentials: 'include'
        });
        const data = await fetchData.json();
        if (data.success) {
            toast.success(data.message);
            dispatch(setUserDetails(null));
            setIsDropdownOpen(false);
            navigate("/");
        }
        if (data.error) {
            toast.error(data.message);
        }
    };

    const handleSearch = (e) => {
        const { value } = e.target;
        setSearch(value);
        if (value) {
            navigate(`/search?q=${value}`);
        } else {
            navigate("/search");
        }
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(prev => !prev);
    };

    const handleMenuClose = () => {
        setIsDropdownOpen(false);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    return (
        <header className='h-24 lg:h-20 lg:shadow-md bg-white top-0 fixed w-full z-40'>
            <div className='h-full container mx-auto flex items-center px-4 justify-between'>
                <div className='animate-bounce'>
                    <Link to={"/"}>
                        <Logo />
                    </Link>
                </div>

                <nav className='hidden lg:flex gap-6'>
                    <Link to="/" className='hover:text-blue-600'>Home</Link>
                    <Link to="/collection" className='hover:text-blue-600'>Collections</Link>
                    <Link to="/about-us" className='hover:text-blue-600'>About Us</Link>
                </nav>

                <div className='hidden lg:flex items-center justify-between max-w-sm border border-blue-600 rounded focus-within:shadow'>
                    <div className='text-lg min-w-[70px] h-10 flex items-center justify-center rounded-r text-blue-600'>
                        <GrSearch />
                    </div>
                    <input
                        type='text'
                        placeholder='search...'
                        className='w-full outline-none p-2'
                        onChange={handleSearch}
                        value={search}
                    />
                </div>

                <div className='flex items-center gap-7'>
                    <div className='relative flex items-center justify-center'>
                        {user?._id && (
                            <div className='flex items-center cursor-pointer' onClick={toggleDropdown}>
                                <div className='text-3xl flex justify-center'>
                                    {user?.profilePic ? (
                                        <img src={user?.profilePic} className='w-10 h-10 rounded-full' alt={user?.name} />
                                    ) : (
                                        <FaRegCircleUser />
                                    )}
                                </div>
                                <span className='text-xl ml-2'>
                                    {isDropdownOpen ? <FaCaretUp /> : <FaCaretDown />}
                                </span>
                            </div>
                        )}

                        {isDropdownOpen && (
                            <div className='absolute bg-white top-12 right-0 h-fit p-2 w-52 shadow-lg rounded'>
                                <nav className='flex flex-col'>
                                    {user?.role === ROLE.ADMIN ? (
                                        <>
                                            <Link
                                                to="/dashboard"
                                                className='whitespace-nowrap hover:bg-slate-100 hover:text-subMain p-2 flex items-center gap-2 rounded'
                                                onClick={handleMenuClose}
                                            >
                                                <RiAdminFill />
                                                Admin Panel
                                            </Link>
                                            <button
                                                onClick={handleLogout}
                                                className='whitespace-nowrap hover:bg-slate-100 hover:text-subMain p-2 text-left flex items-center gap-2 rounded'
                                            >
                                                <FaSignOutAlt />
                                                Logout
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <p className='font-semibold'>My Account</p>
                                            <Link
                                                to="/dashboard-user/my-account"
                                                className='whitespace-nowrap hover:bg-slate-100 p-2 flex items-center gap-2 text-subMain text-sm'
                                                onClick={handleMenuClose}
                                            >
                                                {user?.fullName}
                                                <FaArrowUpRightFromSquare />
                                            </Link>
                                            <hr className="my-2 border-t border-gray-200" />
                                            <Link
                                                to="/dashboard-user/orders"
                                                className='whitespace-nowrap hover:bg-slate-100 hover:text-subMain p-2 flex items-center gap-2'
                                                onClick={handleMenuClose}
                                            >
                                                <FaBoxOpen />
                                                Orders
                                            </Link>
                                            <Link
                                                to="/messages"
                                                className='p-2 flex items-center gap-2 hover:bg-gray-100 hover:text-subMain rounded'
                                                onClick={handleMenuClose}
                                            >
                                                <FaCommentDots />
                                                Chat Messages
                                            </Link>
                                            <Link
                                                to="/dashboard-user/save-address"
                                                className='whitespace-nowrap hover:bg-slate-100 hover:text-subMain p-2 flex items-center gap-2'
                                                onClick={handleMenuClose}
                                            >
                                                <FaMapMarkerAlt />
                                                Save Address
                                            </Link>
                                            <button
                                                onClick={handleLogout}
                                                className='whitespace-nowrap hover:bg-slate-100 hover:text-subMain p-2 text-left flex items-center gap-2'
                                            >
                                                <FaSignOutAlt />
                                                Logout
                                            </button>
                                        </>
                                    )}
                                </nav>
                            </div>
                        )}
                    </div>

                    {user?._id && user?.role !== ROLE.ADMIN && (
                        <Link to={"/cart"} className='text-2xl relative animate-bounce'>
                            <FaShoppingCart />
                            <div className='bg-blue-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3'>
                                <p className='text-sm'>{context?.cartProductCount}</p>
                            </div>
                        </Link>
                    )}

                    {!user?._id && (
                        <Link to={"/login"}>
                            <button className='hidden lg:flex px-4 py-2 rounded-full text-white bg-blue-600 hover:bg-blue-700 transition ease-out duration-300 transform hover:scale-105 items-center justify-center gap-1'>
                                <IoMdLogIn />
                                Login
                            </button>
                        </Link>
                    )}
                </div>

                {/* Mobile Menu Toggle Button */}
                <div className="lg:hidden">
                    <button
                        onClick={toggleMobileMenu}
                        className="text-2xl text-blue-600"
                    >
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-white shadow-md fixed top-20 left-0 w-full z-30">
                    <nav className="flex flex-col items-start p-4">
                        <Link
                            to="/"
                            className="py-2 hover:text-blue-600 w-full text-left"
                            onClick={toggleMobileMenu}
                        >
                            Home
                        </Link>
                        <Link
                            to="/collection"
                            className="py-2 hover:text-blue-600 w-full text-left"
                            onClick={toggleMobileMenu}
                        >
                            Collections
                        </Link>
                        <Link
                            to="/about-us"
                            className="py-2 hover:text-blue-600 w-full text-left"
                            onClick={toggleMobileMenu}
                        >
                            About Us
                        </Link>
                        {user?._id ? (
                            <button
                                onClick={() => {
                                    handleLogout();
                                    toggleMobileMenu();
                                }}
                                className="py-2 hover:text-blue-600 w-full text-left"
                            >
                                Logout
                            </button>
                        ) : (
                            <Link
                                to="/login"
                                className="py-2 hover:text-blue-600 w-full text-left"
                                onClick={toggleMobileMenu}
                            >
                                Login
                            </Link>
                        )}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
