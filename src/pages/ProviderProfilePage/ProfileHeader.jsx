import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import PropTypes from 'prop-types';

const ProfileHeader = ({ title = 'PROFILE' }) => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1); // Navigates to the previous page
    };

    return (
        <header className="flex items-center p-4 text-white bg-gray-800">
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
        </header>
    );
};

ProfileHeader.propTypes = {
    title: PropTypes.string,
};

export default ProfileHeader;
