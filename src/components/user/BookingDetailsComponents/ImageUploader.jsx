import React, { useState } from 'react';
import PlusImage from '../../../assets/Plus.png'; 

const ImageUploader = ({ onImagesUploaded }) => {
  const [images, setImages] = useState([]);
  const fileInputRef = React.useRef(null);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map(file => URL.createObjectURL(file));
    setImages(prevImages => [...prevImages, ...newImages]);
    onImagesUploaded(true); 
  };

  const handlePlusClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="mb-4">
      <label className="block text-secondary font-semibold text-sm md:text-base">Images & Videos</label>
      <input 
        type="file" 
        accept="image/*" 
        multiple 
        onChange={handleImageUpload} 
        ref={fileInputRef} 
        style={{ display: 'none' }} 
      />
      <div className="flex space-x-2 mt-2 overflow-x-scroll md:overflow-hidden">
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-16 h-16 bg-gray-400 rounded-md">
            <img 
              src={image} 
              alt={`Uploaded Preview ${index + 1}`} 
              className="w-full h-full object-cover rounded-md" 
            />
          </div>
        ))}
        <div 
          className="flex-shrink-0 w-16 h-16 bg-gray-400 rounded-md flex items-center justify-center cursor-pointer" 
          onClick={handlePlusClick}
        >
          <img src={PlusImage} alt="Add Image" className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;