import React, { useState } from 'react';
import { IoCloseCircleOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import Profile from './Profile';
import MenuItems from './MenuItems';

function SideMenu() {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className='flex justify-center'>
            <div className='w-full sm:w-3/4 md:w-2/3 lg:w-1/4 bg-dark-gray bg-opacity-95 m-4 lg:m-10 rounded-xl p-6'>
                <div>
                    <div className='close-button flex justify-end pr-1'>
                        <IoCloseCircleOutline
                            size={28}
                            color='white'
                            className='cursor-pointer hover:text-red-500 hover:scale-110 transition duration-300'
                            onClick={handleClose}
                        />
                    </div>
                    {/* Profile Component */}
                    <Profile />
                    {/* MenuItems Component */}
                    <div className='menu_item mt-5 ml-1'>
                        <MenuItems />
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
