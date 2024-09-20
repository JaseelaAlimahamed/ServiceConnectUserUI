import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { HiAdjustments } from 'react-icons/hi';

const Icons = ({ showSearch, showFilter }) => {
    return (
        <div className="flex items-center justify-end space-x-2 w-full">
            {showFilter && (
                <button className="p-2 rounded-3xl text-white hover:text-gray-300 focus:outline-none">
                    <HiAdjustments className="h-6 w-6" />
                </button>
            )}
            {showSearch && (
                <button className="p-2 rounded-3xl text-white hover:text-gray-300 focus:outline-none">
                    <AiOutlineSearch className="h-6 w-6" />
                </button>
            )}
        </div>
    );
};

export default Icons;
