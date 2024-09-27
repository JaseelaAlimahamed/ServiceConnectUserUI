import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const CompletePaymentButton = () => {
  return (
    <button className="bg-secondary text-primary w-full py-3 mt-5 rounded-full text-sm md:text-base flex items-center justify-between px-4">
      <span className="flex-grow text-center">Complete Payment</span>
      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center ml-2"> {/* White circle */}
        <FaArrowRight className="text-black w-4 h-4" /> {/* Black arrow inside the circle */}
      </div>
    </button>
  );
};

export default CompletePaymentButton;