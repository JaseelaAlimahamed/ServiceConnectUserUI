import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';

const ProfileSidebar = ({ isRightSidebarOpen, toggleRightSidebar, onLogout }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    // Update state based on window size
    const updateView = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    useEffect(() => {
        window.addEventListener('resize', updateView);
        return () => window.removeEventListener('resize', updateView);
    }, []);

    const dataLink = [
        { label: 'My Profile', path: '/profile' },
     
        { label: 'My Services', path: '/my-services' },
         { label: 'Ad Management', path: '/advertisement' },

        { label: 'History', path: '/home' },
        { label: 'Financial Data', path: '/home' },
        { label: 'Settings', path: '/notification-settings' },
        
        { label: 'Leads', path: '/lead-details/:id' },
        { label: 'Complaint & Disputes', path: '/complaints' },
        { label: 'Financial Management', path: '/financial' },
        { label: 'Franchisee Details', path: '/franchise-details' },
    ];

    // Close the sidebar when clicking any link (for all screen sizes)
    const handleLinkClick = () => {
        toggleRightSidebar();
    };

    return (
        <div
            className={`fixed top-16 right-0 h-full w-[17rem] bg-dark-gray text-primary shadow-lg transition-transform duration-300 ease-in-out z-50 ${
                isRightSidebarOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
            style={{ zIndex: 9999 }}  // Ensure the sidebar has the highest z-index
        >
            {/* Close button for mobile */}
            {isMobile && (
                <button
                    onClick={toggleRightSidebar}
                    className="absolute top-4 right-4 text-gray-300 text-2xl focus:outline-none"
                >
                    &times;
                </button>
            )}

            <div className="p-6 flex flex-col h-full">
                {/* Profile section */}
                <div className="mt-0 flex-grow overflow-y-auto pr-1">
                    <div className="flex items-center mb-4 mt-6">
                        <img
                            src="https://via.placeholder.com/60"
                            alt="User Profile"
                            className="rounded-full border-2 border-roundborder w-16 h-16"
                        />
                        <div className="ml-4">
                            <h2 className="text-lg font-semibold text-roundborder">Stone Stellar</h2>
                            <p className="text-idyellow text-sm">UID: CUFRADEL10032</p>
                            <p className="text-textonline text-sm">Online</p>
                        </div>
                    </div>
                    <div className="mt-10">
                        <button
                            onClick={onLogout}
                            className="w-full py-1 px-4 mb-2 text-primary hover:bg-gray-500 rounded flex items-center justify-left"
                        >
                            <FaSignOutAlt className="transform rotate-180 mr-2" /> Logout
                        </button>
                    </div>

                    {/* Navigation links */}
                    <nav>
                        {dataLink.map((item, index) => (
                            <NavLink
                                key={index}
                                to={item.path}
                                className={({ isActive }) =>
                                    `block py-1 px-4 text-primary rounded cursor-pointer ${
                                        isActive ? 'bg-gray-500' : 'hover:bg-gray-500'
                                    }`
                                }
                                onClick={handleLinkClick}  // Close sidebar when link is clicked on any screen size
                            >
                                {item.label}
                            </NavLink>
                        ))}


                    {/* Logout button */}

                    </nav>

                </div>
            </div>
        </div>
    );
};

export default ProfileSidebar;
