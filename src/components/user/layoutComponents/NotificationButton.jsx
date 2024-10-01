import React from 'react';
import { FiBell } from 'react-icons/fi';

const NotificationButton = () => {
    return (
        <button
            type="button"
            className="rounded-full p-1 text-white hover:text-gray-300 focus:outline-none mr-3"
        >
            <span className="sr-only">View notifications</span>
            <FiBell className="h-7 w-7" />
        </button>
    );
};

export default NotificationButton;
