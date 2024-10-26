import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

import { FaSignOutAlt, FaSignInAlt, FaBars, FaTimes, FaCrown } from 'react-icons/fa';
import { AiOutlineLeft } from 'react-icons/ai';

import Sidebar from './Sidebar';
import NotificationButton from './NotificationButton';
import pageConfig from '../../../utils/navbarUtils';

const Navbar = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const profileName = "Stone Stellar";

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        setIsSidebarOpen(false);
    };

    const currentPage = pageConfig[location.pathname];


    const pathParts = location.pathname.split('/');
    const pathName = pathParts[1] || 'Home';
    const formattedPathName = pathName
        .charAt(0)
        .toUpperCase() + pathName.slice(1).toLowerCase().replace(/-/g, ' ');


    const isHomePage = location.pathname === '/home';

    const handleBackClick = () => {
        navigate('/home');
    };
const handleOnClickNotification = () => {
navigate('/notification');
}
    return (
        <div className="mb-16">
            <nav className="bg-dark-gray z-50 fixed top-0 left-0 w-full">
                <div className="mx-auto px-2 lg:px-10">
                    <div className="relative flex h-16 items-center justify-between">

                        {/* Mobile menu button / Back button */}
                        <div className="flex items-center sm:hidden">
                            {currentPage && !isHomePage ? (
                                <button
                                    type="button"
                                    className="inline-flex items-center justify-center rounded-3xl p-2 text-white hover:text-gray-300 focus:outline-none"
                                    onClick={handleBackClick}
                                >
                                    <AiOutlineLeft className="h-6 w-6" />
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    className="inline-flex items-center justify-center rounded-3xl p-2 text-white hover:text-gray-300 focus:outline-none"
                                    onClick={toggleSidebar}
                                >
                                    {isSidebarOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
                                </button>
                            )}
                            <h1 className="ml-4 text-white font-semibold text-xl">
                                  {formattedPathName}
                            </h1>
                        </div>

                        {/* Logo and Company Name for larger screens */}
                        <div className="hidden sm:flex flex-1 items-center justify-start">
                            <img className="h-8" src="/vite.svg" alt="Company Logo" />
                            <span className="ml-3 text-white font-semibold text-xl">
                            {formattedPathName}
                            </span>
                        </div>

                        {/* Profile and Authenticated Views */}
                        <div className="flex items-center pr-2 sm:ml-6">
                            {isAuthenticated && (
                                <NotificationButton onClick={handleOnClickNotification} />
                            )}

                            {isAuthenticated && (
                                <div className="relative flex items-center">
                                    <div className="flex flex-col items-center mr-4 ml-1 hidden sm:block">
                                        <span className="text-rose-500 text-lg text-center">
                                            {profileName}
                                        </span>
                                        <span className="text-yellow-500 text-xs sm:block text-center">
                                            Prime Member <FaCrown className="inline text-xs" />
                                        </span>
                                    </div>
                                    <NavLink>
                                        <img
                                            className="h-9 w-9 sm:h-10 sm:w-10 rounded-full hover:ring-1 hover:ring-blue-500"
                                            src="/profileImage.svg"
                                            alt="Profile"
                                        />
                                    </NavLink>
                                </div>
                            )}

                            {!isAuthenticated ? (
                                <NavLink
                                    onClick={() => setIsAuthenticated(true)}
                                    className="text-white px-4 py-2 flex items-center hover:bg-gray-700 rounded"
                                >
                                    Sign In <FaSignInAlt className="ml-2" />
                                </NavLink>
                            ) : (
                                <NavLink
                                    onClick={handleLogout}
                                    className="ml-4 text-white px-4 py-2 hidden sm:flex items-center hover:bg-gray-700 rounded"
                                >
                                    Logout <FaSignOutAlt className="ml-2" />
                                </NavLink>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Sidebar Component */}
            <Sidebar
                isSidebarOpen={isSidebarOpen}
                toggleSidebar={toggleSidebar}
                isAuthenticated={isAuthenticated}
                onLogout={handleLogout}
            />
        </div>
    );
};

export default Navbar;
