import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaSignOutAlt, FaSignInAlt, FaBars, FaTimes, FaCrown } from 'react-icons/fa';
import Sidebar from './Sidebar';

const Navbar = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const profileName = "Nikhil Babu";

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className='mb-20'>
            <nav className="bg-dark-gray z-50 fixed top-0 left-0 w-full">
                <div className="mx-auto px-2 lg:px-20">
                    <div className="relative flex h-20 items-center justify-between">

                        {/* Mobile menu button */}
                        <div className="flex items-center">
                            <button
                                type="button"
                                className="inline-flex items-center justify-center rounded-md p-2 text-white hover:text-gray-300 focus:outline-none sm:hidden"
                                aria-controls="mobile-menu"
                                aria-expanded={isSidebarOpen}
                                onClick={toggleSidebar}
                            >
                                <span className="sr-only">Open main menu</span>
                                {isSidebarOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
                            </button>
                            <span className="ml-3 text-white font-semibold text-xl sm:hidden">SERVICE CONNECT</span>
                        </div>

                        {/* Logo and Company Name for larger screens */}
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <img className="h-8 hidden sm:block" src="/vite.svg" alt="Company Logo" />
                            <span className="ml-3 text-white font-semibold text-xl hidden sm:block">SERVICE CONNECT</span>
                        </div>

                        {/* Authenticated or Non-authenticated views */}
                        <div className="flex items-center pr-2 sm:ml-6">
                            {isAuthenticated ? (
                                <>
                                    {/* Notification Button */}
                                    <button
                                        type="button"
                                        className="rounded-full p-1 text-white hover:text-gray-300 focus:outline-none mr-3"
                                    >
                                        <span className="sr-only">View notifications</span>
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                                        </svg>
                                    </button>

                                    {/* Profile Image */}
                                    <div className="relative flex items-center">
                                        <div className="flex flex-col items-center mr-4 ml-1 hidden sm:block">
                                            <span className="text-rose-500 text-lg text-center ">
                                                {profileName}
                                            </span>
                                            <span className="text-yellow-500 text-xs hidden sm:block text-center">
                                                Prime Member <FaCrown className="inline text-xs" />
                                            </span>
                                        </div>
                                        <NavLink>
                                            <img
                                                className="h-8 w-8 sm:h-10 sm:w-10 rounded-full transition-all duration-100 hover:ring-1 hover:ring-blue-500"
                                                src="/profileImage.svg"
                                                alt="Profile"
                                            />
                                        </NavLink>
                                    </div>


                                    <NavLink
                                        onClick={() => setIsAuthenticated(false)}
                                        className="ml-4 text-white px-4 py-2 hidden sm:flex items-center hover:bg-gray-700 rounded"
                                    >
                                        Logout <FaSignOutAlt className="ml-2" />
                                    </NavLink>
                                </>
                            ) : (
                                <NavLink
                                    onClick={() => setIsAuthenticated(true)}
                                    className="text-white px-4 py-2 flex items-center hover:bg-gray-700 rounded"
                                >
                                    Sign In <FaSignInAlt className="ml-2" />
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
