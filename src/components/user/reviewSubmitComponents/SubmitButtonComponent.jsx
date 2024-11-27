/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const ReviewButton = ({ label, type, disabled, btnWidth , btnHeight, onClick  }) => {
  return (
    <button
    type={type}
    disabled={disabled}
    className={`rounded-full mx-auto mt-10 bg-dark-gray  text-primary font-default hover:bg-secondary transition-all duration-300 disabled:opacity-50 flex items-center justify-between px-24 py-5`}
    style={{ width: btnWidth, height: btnHeight }}
    onClick={onClick}
  >
    <span className="flex-grow  text-center">{label}</span>
   
  </button>
  
  );
};

export default ReviewButton;
