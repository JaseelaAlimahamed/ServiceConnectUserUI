import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const AcceptPayButton = () => {
  return (
    <button className="w-full bg-secondary text-primary py-3 mt-5 rounded-full text-sm md:text-base flex items-center justify-between px-4">
      <span className="flex-grow text-center">Accept & Pay Full</span> 
      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center ml-2"> 
        <FaArrowRight className="text-black w-4 h-4" /> 
      </div>
    </button>
  );
};

export default AcceptPayButton;