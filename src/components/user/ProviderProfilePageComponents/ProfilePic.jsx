import React from 'react';
import PropTypes from 'prop-types';
import { BiMessageDetail } from 'react-icons/bi';

const ProfilePic = ({ imageUrl, altText = 'Profile Picture', onChatClick }) => {
    return (
        <div className="relative flex items-center justify-center h-64 bg-medium-gray md:h-80">
            <img
                src={imageUrl}
                alt={altText}
                className="object-cover rounded-full h-60 w-60"
            />
            {/* Chat Icon */}
            <button
                onClick={onChatClick}
                aria-label="Open chat"
                className="absolute p-3 bg-gray-900 rounded-full shadow-lg bottom-[-20px] right-20 focus:outline-none focus:ring-2 focus:ring-white"
            >
                <BiMessageDetail className="w-10 h-10 text-white" />
            </button>
        </div>
    );
};

ProfilePic.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    altText: PropTypes.string,
    onChatClick: PropTypes.func.isRequired,
};

export default ProfilePic;
