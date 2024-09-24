import React from 'react';
import { useLocation, matchPath } from 'react-router-dom';
import NavBar from './NavBar';
import ProfileHeader from './Header';

const ResponsiveNavbar = ({ onToggleSidebar }) => {
    const location = useLocation();
    const pathname = location.pathname;

    // Define the paths where ProfileHeader should be displayed
    const profileHeaderPaths = [
        '/providerprofile',
        '/profile',
        '/requestservice',
        '/allcategory',
        '/deliveryservices',
        '/bookings',
        '/receipt',
    ];

    // Function to check if the current path matches any in the array
    const isPathMatch = (pathsArray) => {
        return pathsArray.some((path) => matchPath(path, pathname));
    };

    const shouldRenderProfileHeader = isPathMatch(profileHeaderPaths);

    return (
        <div>
            {/* For small and medium screens */}
            <div className="block lg:hidden">
                {shouldRenderProfileHeader ? (
                    <ProfileHeader />
                ) : (
                    <NavBar onToggleSidebar={onToggleSidebar} />
                )}
            </div>

            {/* For large screens and up */}
            <div className="hidden lg:block">
                <NavBar onToggleSidebar={onToggleSidebar} />
            </div>
        </div>
    );
};

export default ResponsiveNavbar;
