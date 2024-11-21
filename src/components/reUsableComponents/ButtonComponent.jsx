<<<<<<< HEAD

import React from "react";

const ButtonComponent = ({
  label,
  type = "button",
  disabled = false,
  btnWidth = "w-full",
  btnHeight="h-auto",
  btnColor = "bg-dark-gray",
  variant = "default",
  onClick,
  hasIcon , // Added to conditionally render the icon
}) => {
  const variantClasses = {
    default: `${btnColor} rounded-full shadow-boxshadow-1 mt-2 p-2 text-primary font-default hover:bg-secondary transition-all duration-300 disabled:opacity-50 flex items-center justify-between`,
    complaint: `${btnColor} text-primary shadow-boxshadow-1 hover:bg-opacity-90 font-default py-2 rounded-full transition-colors`,
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${variantClasses[variant]} ${btnWidth} ${btnHeight} flex items-center justify-center relative font-semibold text-primary shadow-[0px_4px_4px_0px_#00000040] px-4 rounded-full`}
    >
      <span className="flex-grow text-center">{label}</span>
      {hasIcon && (
        <img
          src="./buttonArrow.svg"
          className="ml-2 w-8 h-8"
          alt="arrow pointing right"
        />
      )}
    </button>
=======
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
  
>>>>>>> main
  );
};

export default ButtonComponent;
