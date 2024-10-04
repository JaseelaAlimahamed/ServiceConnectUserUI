import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const ComplaintButton = () => {
  return (
    <button className="w-full bg-bt-red text-primary py-3 mt-5 rounded-full text-sm md:text-base flex items-center justify-between px-4">
      <span className="flex-grow text-center">Raise a Complaint</span>
      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center ml-2"> {/* White circle */}
        <FaArrowRight className="text-light-red w-4 h-4" /> {/* Arrow icon in the center */}
      </div>
    </button>
  );
};

export default ComplaintButton;