import React from "react";
import { RiSearch2Line } from "react-icons/ri";

import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
const SearchBar = () => {
    return (
        <div className="flex items-center justify-center mt-4">
            <div className="relative max-w-md w-96 drop-shadow-lg">
                <RiSearch2Line className="absolute top-0 bottom-0 w-6 h-6 my-auto text-primary left-3" />
                <input
                    type="text"
                    placeholder="Search Services..."
                    className="w-full h-16 py-3 pl-10 pr-4 text-lg border text-primary placeholder:text-primary placeholder:text-center bg-medium-gray rounded-2xl focus:outline-none focus:ring-2 focus:ring-secondary"
                />
                <HiOutlineAdjustmentsHorizontal className="absolute top-0 bottom-0 my-auto rounded bg-primary w-9 h-9 text-dark-gray right-3" />
            </div>
        </div>
    );
};

export default SearchBar;