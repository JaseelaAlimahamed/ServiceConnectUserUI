import React from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

// Sidebar links
const links = [
    { path: '/profile', label: 'My Profile' },
    { path: '/home', label: 'Home' },
    { path: '/bookings', label: 'Bookings' },
    { path: '/active-services', label: 'Active Services' },
    { path: '/services', label: 'Services' },
    { path: '/complaints', label: 'Complaints' },
    { path: '/message', label: 'Message' },
    { path: '/settings', label: 'Settings' },
    { path: '/transactions', label: 'Transactions' },
    { path: '/history', label: 'History' },
    { path: '/help-center', label: 'Help Center' },
    { path: '/terms-conditions', label: 'Terms & Conditions' },
    { path: '/about-us', label: 'About Us' },
    { path: '/invite-friend', label: 'Invite a Friend' },
];

const Sidebar = ({ isSidebarOpen, toggleSidebar, isAuthenticated, onLogout }) => {
    return (
        <div className='flex'>
            {/* Sidebar */}
            <div
                className={`fixed top-20 h-full left-0 w-60 bg-dark-gray text-white transform transition-transform sm:translate-x-0 sm:w-46 z-40 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                {/* Sidebar links */}
                <ul className="p-6 mt-10 space-y-2">
                    {links.map((link) => (
                        <li key={link.path}>
                            <NavLink
                                to={link.path}
                                className={({ isActive }) =>
                                    `block px-4 rounded transition-colors ${isActive ? 'bg-gray-700' : 'hover:bg-medium-gray hover:text-white'}`
                                }
                                onClick={toggleSidebar}
                            >
                                {link.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Conditional rendering of Logout button for authenticated users */}
                {isAuthenticated && (
                    <div className="px-6 py-3 border-t border-gray-700 sm:hidden">
                        <Link
                            className="flex items-center w-full px-4 py-2 text-white rounded hover:bg-gray-700"
                            onClick={onLogout}
                        >
                            Logout <FaSignOutAlt className="ml-2" />
                        </Link>
                    </div>
                )}
            </div>

            {/* Overlay for mobile view when sidebar is open */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 z-30 bg-black bg-opacity-50 sm:hidden"
                    onClick={toggleSidebar}
                ></div>
            )}
        </div>
    );
};

export default Sidebar;
