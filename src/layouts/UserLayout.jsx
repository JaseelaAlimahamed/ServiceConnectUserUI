import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/user/layoutComponents/Navbar';

const UserLayout = () => {
    const location = useLocation();

    const pathsWithoutNavbar = ['/sign-up', '/sign-in', '/otp','/forgot-password','/create-new-password','/otp-forgot-password','/fill-your-profile'];
    const showNavbar = !pathsWithoutNavbar.includes(location.pathname);

    return (
        <div className="flex">
            <div className={`flex-grow transition-all ${showNavbar ? 'sm:ml-44 lg:ml-40 lgm:ml-40 lgx:ml-44 ml-auto' : 'ml-0'}`}>
                {showNavbar && <Navbar />}
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default UserLayout;
