import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuItems = () => {
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

    return (
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
    );
};

export default MenuItems;
