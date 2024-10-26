import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const UpdateButton = () => {
  return (
    <button className="w-full bg-secondary text-primary py-3 mt-10 mb-3 rounded-full text-sm md:text-base flex items-center justify-between px-4">
      <span className="flex-grow text-center">Update</span> 
      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center ml-2">
        <FaArrowRight className="text-secondary w-4 h-4" />
      </div>
    </button>
  );
};

export default UpdateButton;