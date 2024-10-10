import React, { useState } from 'react';
import { IoCloudUpload } from "react-icons/io5";

const Upload = () => {
  const [filePreview, setFilePreview] = useState(null);
  const [fileType, setFileType] = useState(null); // New state for file type

  // Handler function for file input change (for images and videos)
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file); // Generate a preview URL
      setFilePreview(previewUrl); // Set the preview
      setFileType(file.type); // Set the file type
    }
  };

  return (
    <div className="bg-white rounded-lg p-4 my-4">
      <p className="text-[#202244] font-bold">Add Photo (or) Video</p>
      <div className="mt-4 bg-white p-4 rounded-lg text-center relative border border-gray-300">
        <input
          type="file"
          accept="image/*, video/*"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          onChange={handleFileChange}
        />
        <div className="flex flex-col items-center justify-center w-full h-48">
          {filePreview ? (
            <div className="relative w-full h-full overflow-hidden rounded-lg">
              {/* Display preview for images */}
              {fileType.startsWith('image/') ? (
                <img
                  src={filePreview}
                  alt="Uploaded file"
                  className="object-cover w-full h-full rounded-lg"
                />
              ) : (
                /* Display preview for videos */
                <video
                  controls
                  className="object-cover w-full h-full rounded-lg"
                >
                  <source src={filePreview} type={fileType} />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          ) : (
            <div className="flex flex-col items-center">
              {/* Upload icon */}
              <IoCloudUpload className="text-dark-gray text-8xl" />
              <span className="text-[#545454] font-bold mt-2">
                Click here to Upload
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Upload;
