import React from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

const links = [
    { path: '/profile', label: 'My Profile' },
    { path: '/home', label: 'Home' },
    { path: '/bookings', label: 'Bookings' },
    { path: '/active-services', label: 'Active Services' },
    
    { path: '/complaints', label: 'Complaints' },
    { path: '/message', label: 'Message' },
    {path:'/notification', label:'Notifications'},
    { path: '/notification-settings', label: 'Settings' },
    { path: '/transactions', label: 'Transactions' },
    { path: '/services', label: 'History' },
    { path: '/help-center', label: 'Help Center' },
    { path: '/terms-conditions', label: 'Terms & Conditions' },
    { path: '/about-us', label: 'About Us' },
    { path: '/invite-friend', label: 'Invite a Friend' },
];

const Sidebar = ({ isSidebarOpen, toggleSidebar, isAuthenticated, onLogout }) => {
    return (
        <div className="flex">
    <div
        className={`fixed top-16 h-full left-0 min-w-1/6 bg-sidebar-gray text-white transform transition-transform sm:translate-x-0 lg:w-1/6 z-40 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} overflow-y-auto scrollbar-hide`} // Added scroll
    >
        <ul className="p-2 mt-5 space-y-3">
            {links.map((link) => (
                <li key={link.path}>
                    <NavLink
                        to={link.path}
                        className={({ isActive }) =>
                            `block px-4 rounded transition-colors ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'
                            }`}
                        onClick={toggleSidebar}
                    >
                        {link.label}
                    </NavLink>
                </li>
            ))}
        </ul>

        {/* Conditional Rendering of Logout Button */}
        {isAuthenticated && (
            <div className="sm:hidden px-6 py-3 border-t border-gray-700">
                <Link
                    className="w-full text-white hover:bg-gray-700 rounded px-4 py-2 flex items-center"
                    onClick={onLogout}
                >
                    Logout <FaSignOutAlt className="ml-2" />
                </Link>
            </div>
        )}
    </div>

    {/* Overlay for small and medium screens when sidebar is open */}
    {isSidebarOpen && (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 sm:hidden md:hidden"
            onClick={toggleSidebar}
        ></div>
    )}
</div>

    );
};


export default Sidebar;

