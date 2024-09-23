// Layout.js
import NavBar from '../../components/NavBar';
import SideBar from '../../components/SideBar';
import AdsComponent from '../../components/user/homePageComponents/AdsComponent';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const location = useLocation();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // Check if the current path is '/profile'
    const isProfilePage = location.pathname === '/profile';

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div
                className={`fixed left-0 top-0 h-full z-40 transform transition-transform duration-300 text-white ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    } lg:translate-x-0 w-60 bg-gray-900 lg:block`}
            >
                <SideBar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            </div>

            {/* Background Overlay (when sidebar is open on mobile) */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 z-30 bg-black bg-opacity-50 lg:hidden"
                    onClick={toggleSidebar}
                />
            )}

            {/* Main Content */}
            <div className={`flex-grow overflow-y-auto no-scrollbar transition-all duration-300 ${isSidebarOpen ? 'sm:ml-60' : 'ml-0'} lg:ml-60 lg:mr-[280px]`}>
                {/* Conditionally hide NavBar on sm and md screens when on /profile */}
                <div className={`${isProfilePage ? 'hidden sm:hidden md:hidden lg:block' : ''}`}>
                    <NavBar onToggleSidebar={toggleSidebar} />
                </div>
                <div className="">
                    {children} {/* Dynamic content goes here */}
                </div>
            </div>

            {/* Ads Section */}
            <div className="hidden lg:block fixed right-0 top-0 h-full w-[280px] bg-gray-800 z-40">
                <AdsComponent />
            </div>
        </div>
    );
};

export default Layout;
