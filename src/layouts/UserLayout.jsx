import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/user/layoutComponents/Navbar';

const UserLayout = () => {
    const location = useLocation();

    const pathsWithoutNavbar = ['/signin', '/signup', '/otp'];
    const showNavbar = !pathsWithoutNavbar.includes(location.pathname);

    return (
        <div className="flex">
            <div className={`flex-grow transition-all ${showNavbar ? 'sm:ml-60' : 'ml-0'}`}>
                {showNavbar && <Navbar />}
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default UserLayout;
