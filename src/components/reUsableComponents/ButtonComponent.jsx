
import React from 'react';

const ButtonComponent = ({ label, type, disabled, btnWidth , btnHeight  }) => {
  return (
    <button
    type={type}
    disabled={disabled}
    className={`rounded-full bg-dark-gray mt-8 py-4 text-primary font-default hover:bg-secondary transition-all duration-300 disabled:opacity-50 flex items-center justify-between px-4`}
    style={{ width: btnWidth, height: btnHeight }}
  >
    <span className="flex-grow  text-center">{label}</span>
    <img src="./buttonArrow.svg" className="ml-2 w-8 h-8" alt="arrow" />
  </button>
  
  );
};

export default ButtonComponent;
