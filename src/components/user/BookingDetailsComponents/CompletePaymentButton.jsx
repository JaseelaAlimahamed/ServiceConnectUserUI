import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const CompletePaymentButton = ({ onClick, payment_status }) => {
  return (
    <button 
      className={`w-full py-3 mt-5 rounded-full text-sm md:text-base flex items-center justify-between px-4 ${payment_status === 'paid' ? 'bg-green-500 text-white' : 'bg-secondary text-primary'}`} 
      onClick={payment_status === 'paid' ? undefined : onClick} // Disable onClick if paid
      disabled={payment_status === 'paid'} // Disable button if paid
    >
      <span className="flex-grow text-center">
        {payment_status === 'paid' ? 'Paid' : 'Complete Payment'}
      </span>
      {payment_status !== 'paid' && ( // Render arrow only if not paid
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center ml-2">
          <FaArrowRight className="text-black w-4 h-4" /> 
        </div>
      )}
    </button>
  );
};

export default CompletePaymentButton;