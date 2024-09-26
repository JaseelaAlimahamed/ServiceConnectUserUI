import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { FaSignOutAlt, FaSignInAlt, FaBars, FaCrown, FaBell } from 'react-icons/fa';

const NavBar = ({ onToggleSidebar }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [hasNotifications, setHasNotifications] = useState(true);
    const [showNotifications, setShowNotifications] = useState(false);
    const [notifications, setNotifications] = useState([]);
    const profileName = "Stone Stellar";
  







    // Simulating fetching notification data from an API
    useEffect(() => {
        // Dummy data simulating API response
        const fetchedNotifications = [
            { id: 1, message: 'New service request received.' },
            { id: 2, message: 'Payment received.' },
            { id: 3, message: 'Service provider assigned.' }
        ];
        setNotifications(fetchedNotifications); // Set notifications state with fetched data
    }, []);

    const handleLogout = () => {
        setIsAuthenticated(false);
    };

    const toggleNotifications = () => {
        setShowNotifications(!showNotifications); // Toggle notification dropdown
    };




    return (
        <nav className="fixed top-0 left-0 z-50 w-full h-20 bg-dark-gray">
            <div className="px-4 mx-auto lg:px-20">
                <div className="relative flex items-center justify-between h-20">

                    {/* Logo and Company Name */}
                    <div className="flex items-center flex-1">
                        {/* Mobile Menu Button */}
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 text-white bg-transparent rounded-md hover:bg-gray-700 hover:bg-opacity-50 focus:outline-none focus:ring-2 focus:ring-gray-400 lg:hidden"
                            aria-label="Toggle Sidebar"
                            onClick={onToggleSidebar}
                        >
                            <FaBars className="w-6 h-6 text-white" />
                        </button>
                        {/* Logo */}
                        <img className="hidden h-8 sm:block" src="/vite.svg" alt="Company Logo" />
                        {/* Company Name */}
                        <span className="ml-3 text-xl font-semibold text-white">SERVICE CONNECT</span>
                    </div>

                    {/* User Authentication */}
                    <div className="flex items-center pr-2">
                        {isAuthenticated ? (
                            <>
                                {/* Bell Icon for Mobile Screens */}
                                <div className="relative flex items-center space-x-4 sm:hidden">
                                    <button
                                        onClick={toggleNotifications}
                                        className="p-0 m-0 mr-5 text-white bg-transparent">
                                        <FaBell className="w-6 h-6 " />
                                        {hasNotifications && (
                                            <span className="absolute top-0 right-0 block w-3 h-3 mr-5 bg-green-500 rounded-full ring-2 ring-white"></span>
                                        )}
                                    </button>

                                    {/* Notification Dropdown */}
                                    {showNotifications && (
                                        <div className="absolute top-0 right-0 w-48 p-4 mt-12 text-black bg-white rounded-lg shadow-lg">
                                            {notifications.length > 0 ? (
                                                <ul className="space-y-1 text-xs">
                                                    {notifications.map((notification) => (
                                                        <li key={notification.id}>🔔 {notification.message}</li>
                                                    ))}
                                                </ul>
                                            ) : (
                                                <p className="text-sm">No new notifications.</p>
                                            )}
                                        </div>
                                    )}
                                </div>

                                {/* Profile Section */}
                                <div className="relative flex items-center">
                                    {/* Profile Name and Prime Badge */}
                                    <div className="flex flex-col items-center hidden ml-1 mr-4 sm:block">
                                        <span className="text-lg font-bold text-center text-pink-500">
                                            {profileName}
                                        </span>
                                        <span className="hidden text-sm font-semibold text-center text-yellow-500 sm:block">
                                            Prime Member <FaCrown className="inline text-xs text-yellow-500" />
                                        </span>
                                    </div>

                                    {/* Profile Image with Notification Dot */}
                                    <div className="relative">
                                        <NavLink to="/profile">
                                            <img
                                                className="w-10 h-10 transition-all duration-100 border-2 border-pink-500 rounded-full"
                                                src="/profileImage.svg"
                                                alt="Profile"
                                            />
                                        </NavLink>
                                        {hasNotifications && (
                                            <span className="absolute top-0 right-0 hidden w-3 h-3 bg-green-500 rounded-full sm:block ring-2 ring-white"></span>
                                        )}
                                    </div>
                                </div>

                                {/* Logout Button */}
                                <NavLink
                                    onClick={handleLogout}
                                    className="items-center hidden px-4 py-2 ml-4 text-white rounded sm:flex hover:bg-medium-gray hover:text-white"
                                >
                                    Logout <FaSignOutAlt className="ml-2" />
                                </NavLink>
                            </>
                        ) : (
                            <NavLink
                                onClick={() => setIsAuthenticated(true)}
                                className="flex items-center px-4 py-2 text-white rounded hover:bg-medium-gray hover:text-white"
                            >
                                Sign In <FaSignInAlt className="ml-2" />
                            </NavLink>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
