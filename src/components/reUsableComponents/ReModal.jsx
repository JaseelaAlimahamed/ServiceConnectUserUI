import React, { useState, useEffect } from "react";

const ReusableModal = ({ isLoading, imageSrc, heading, contentLines, redirectMessage }) => {
  return (
    // <div className="h-screen w-100 bg-dark-gray bg-opacity-90 flex justify-center items-center">
      <div>
      {isLoading ? (
        // Loading spinner
        <div className="flex justify-center items-center">
          <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full border-t-transparent border-white"></div>
        </div>
      ) : (
        // Modal content
        <div className="w-[360px] h-[460px] bg-white rounded-3xl flex flex-col items-center">
          <div>
            <img
              className="w-[139px] h-[142px] mt-[72px]"
              src={imageSrc}
              alt="Description of image"
            />
          </div>

          {/* heading */}
          <p className="mt-[20px] font-default font-semibold text-[24px] text-[#202244] ">
            {heading}
          </p>

          {/* Dynamic content lines */}
          {contentLines.map((line, index) => (
            <p key={index} className="font-input text-[14px]">
              {line}
            </p>
          ))}

          <p className="font-input text-[14px]">{redirectMessage}</p>
        </div>
      )}
    </div>
  );
};

export default ReusableModal;

