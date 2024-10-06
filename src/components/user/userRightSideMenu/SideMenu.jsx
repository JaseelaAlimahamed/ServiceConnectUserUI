import React, { useState } from 'react';
import { IoCloseCircleOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { NavLink } from 'react-router-dom';

function SideMenu() {
    const [isVisible, setIsVisible] = useState(true); // State to control visibility

    const items = [
        { name: 'My Profile', path: '/rightside' },
        { name: 'Home', path: '/' },
        { name: 'Bookings', path: '/bookings' },
        { name: 'Active Services', path: '/active-services' },
        { name: 'Services', path: '/services' },
        { name: 'Complaints', path: '/complaints' },
        { name: 'Message', path: '/message' },
        { name: 'Settings', path: '/settings' },
        { name: 'Transaction', path: '/transaction' },
        { name: 'History', path: '/history' },
        { name: 'Help Center', path: '/help' },
        { name: 'Terms & Conditions', path: '/terms' },
        { name: 'About Us', path: '/about' },
        { name: 'Invite a Friend', path: '/invite' }
    ];

    // Function to handle the close action
    const handleClose = () => {
        setIsVisible(false); // Hide the sidebar when close button is clicked
    };

    if (!isVisible) return null; // Don't render if the sidebar is closed

    return (
        <div className='flex justify-center'>
            <div className='w-full sm:w-3/4 md:w-2/3 lg:w-1/4 bg-dark-gray bg-opacity-95 m-4 lg:m-10 rounded-xl p-6'>
                <div>
                    {/* Close Button */}
                    <div className='close-button flex justify-end pr-1'>
                        <IoCloseCircleOutline
                            size={28}
                            color='white'
                            className='cursor-pointer hover:text-red-500 hover:scale-110 transition duration-300'
                            onClick={handleClose} // Close sidebar on click
                        />
                    </div>

                    {/* Profile and Menu Items */}
                    <div className='profile-details flex'>
                        <div className='profile-img'>
                            <img className='rounded-full w-14 border-2 border-red-600' src="https://avatar.iran.liara.run/public" alt="" />
                        </div>
                        <div className='text-sm ml-4'>
                            <p className='name text-pink-500'>Nihal</p>
                            <p className='user_id text-yellow-400'>UID: 12345</p>
                            <p className='Status text-green-500'>Online</p>
                        </div>
                    </div>
                    <div className='menu_item mt-5 ml-1'>
                        <ul className='text-white font-normal text-md'>
                            {items.map((item, index) => (
                                <li key={index} className="rounded-lg p-2 w-full">
                                    <NavLink
                                        to={item.path}
                                        className={({ isActive }) =>
                                            `block rounded-lg p-2 ${isActive ? 'bg-white bg-opacity-50' : ''}`
                                        }
                                    >
                                        {item.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='flex justify-center mt-5'>
                        <CiLogout className='mt-1 mr-5' color='white' />
                        <p className='logout text-white'>Logout</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideMenu;
