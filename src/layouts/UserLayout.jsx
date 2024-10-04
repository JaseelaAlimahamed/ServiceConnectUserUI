import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/user/layoutComponents/Navbar';
import InvisibleNavbar from '../components/user/layoutComponents/InvisibleNavbar';

const UserLayout = () => {
    const location = useLocation();

    const pathsWithoutNavbar = ['/signin', '/signup', '/otp'];
    const showNavbar = !pathsWithoutNavbar.includes(location.pathname);

    const pathsWithNavbar = ['/boookings','/active-services','/services','/complaints','/allcategories','/allcategories/:categoryId'];
    const showInvisiblenavbar = pathsWithNavbar.includes(location.pathname);

    return (
        <div className="flex">
            <div className={`flex-grow transition-all ${showNavbar ? 'sm:ml-60' : 'ml-0'}`}>
                {showNavbar && <Navbar />}
                {showInvisiblenavbar && <InvisibleNavbar/>}
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default UserLayout;
