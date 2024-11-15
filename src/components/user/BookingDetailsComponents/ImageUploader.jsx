import React from 'react';

const ImageUploader = ({ images }) => {
  return (
    <div className="mb-4 ml-2">
      <label className="block text-secondary font-semibold text-sm md:text-base">Images</label>
      <div className="flex space-x-2 mt-2 overflow-x-scroll md:overflow-hidden">
        {images && images.length > 0 ? (
          images.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-16 h-16 bg-gray-400 rounded-md">
              <img 
                src={image} 
                alt={`Uploaded Preview ${index + 1}`} 
                className="w-full h-full object-cover rounded-md" 
              />
            </div>
          ))
        ) : (
          <p className="text-red-600">No images available</p>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;
