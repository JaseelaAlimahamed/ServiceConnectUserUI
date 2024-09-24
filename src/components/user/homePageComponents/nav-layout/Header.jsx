import React from 'react';
import { useNavigate, useLocation, matchPath } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { BiFilterAlt } from 'react-icons/bi';
import { FiSearch, FiMoreVertical } from 'react-icons/fi';

const ProfileHeader = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const pathname = location.pathname;

    // Define your path arrays with simple paths
    const firstPaths = ['/providerprofile', '/profile', '/requestservice']; // Paths where we show only left arrow and title
    const secondPaths = ['/allcategory', '/deliveryservices', '/bookings']; // Paths where we show filter and search icons
    const thirdPaths = ['/receipt']; // Paths where we show FiMoreVertical icon

    // Function to check if the current path matches any in the array
    const isPathMatch = (pathsArray) => {
        return pathsArray.some((path) => matchPath(path, pathname));
    };

    // Determine which type of path we're on
    const isFirstType = isPathMatch(firstPaths);
    const isSecondType = isPathMatch(secondPaths);
    const isThirdType = isPathMatch(thirdPaths);

    const handleBackClick = () => {
        navigate(-1); // Navigates to the previous page
    };

    // Map paths to titles
    const pathTitleMap = {
        '/providerprofile': 'Provider Profile',
        '/profile': 'Profile',
        '/requestservice': 'Request Service',
        '/allcategory': 'All Categories',
        '/deliveryservices': 'Delivery Services',
        '/bookings': 'Bookings',
        '/receipt': 'Receipt',
    };

    const title = pathTitleMap[pathname] || 'Page';

    return (
        <header className="fixed top-0 left-0 z-50 flex items-center justify-between w-full h-20 p-4 text-white bg-gray-800">
            <div className="flex items-center">
                {/* Back Button */}
                <button
                    onClick={handleBackClick}
                    aria-label="Go back"
                    className="p-2 mr-4 bg-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
                >
                    <IoArrowBack className="w-6 h-6 text-white" />
                </button>

                {/* Profile Title */}
                <h1 className="text-2xl font-bold">{title}</h1>
            </div>

            <div className="flex items-center">
                {/* Show Filter and Search icons if path matches secondPaths */}
                {isSecondType && (
                    <>
                        <button
                            aria-label="Filter"
                            className="p-2 mr-2 bg-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
                        >
                            <BiFilterAlt className="w-6 h-6 text-white" />
                        </button>
                        <button
                            aria-label="Search"
                            className="p-2 mr-2 bg-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
                        >
                            <FiSearch className="w-6 h-6 text-white" />
                        </button>
                    </>
                )}

                {/* Show FiMoreVertical icon if path matches thirdPaths */}
                {isThirdType && (
                    <button
                        aria-label="More options"
                        className="p-2 bg-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
                    >
                        <FiMoreVertical className="w-6 h-6 text-white" />
                    </button>
                )}
            </div>
        </header>
    );
};

export default ProfileHeader;
