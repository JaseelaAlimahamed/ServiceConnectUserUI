/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';


const ButtonComponent = ({ label, type, disabled, btnWidth, btnHeight, onClick, bgColor = 'bg-dark-gray', textColor = 'text-primary', hoverColor = 'hover:bg-secondary', showImage = true }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`rounded-full mt-8 py-4 font-default transition-all duration-300 disabled:opacity-50 flex items-center justify-between px-4 ${bgColor} ${textColor} ${hoverColor}`}
      style={{ width: btnWidth, height: btnHeight }}
      onClick={onClick}
    >
      <span className="flex-grow  text-center">{label}</span>
      {showImage && (
        <img src="./buttonArrow.svg" className="ml-2 w-8 h-8" alt="arrow" />
      )}
    </button>

  );
};

export default ButtonComponent;
