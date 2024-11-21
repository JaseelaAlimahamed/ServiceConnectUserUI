import React, { useState } from 'react';
import PlusImage from '../../../assets/Plus.png'; 

const ImageUploader = ({ images }) => {
  
  const handlePlusClick = () => {
    alert("image")
  };

  return (
    <div className="mb-4">
      <p>Images & Videos</p>
      <div 
        className="flex-shrink-0 w-16 h-16 bg-gray-400 rounded-md flex items-center justify-center cursor-pointer" 
        onClick={handlePlusClick}
      >
        <img src={PlusImage} alt="Add Image" className="w-8 h-8" />
      </div>
    </div>
  );
};

export default ImageUploader;