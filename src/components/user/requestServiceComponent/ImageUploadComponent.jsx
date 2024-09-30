import React, { useState } from "react";
import { IoIosAddCircle, IoMdCloseCircle } from "react-icons/io";

const ImageUploadComponent = ({ setFieldValue }) => {
    const [images, setImages] = useState([]);

    const handleImageChange = (event) => {
        const files = Array.from(event.target.files);

        // Check if the total number of images exceeds 5
        if (images.length + files.length > 5) {
            alert("You can only upload a maximum of 5 images.");
            return;
        }

        // Update the images array and Formik field value
        const updatedImages = [...images, ...files];
        setImages(updatedImages);
        setFieldValue("images", updatedImages);
    };

    const handleRemoveImage = (indexToRemove) => {
        const updatedImages = images.filter((_, index) => index !== indexToRemove);
        setImages(updatedImages);
        setFieldValue("images", updatedImages); // Update Formik state
    };

    return (
        <div className="mb-4">
            <label className="block text-gray-700 mb-2">Images & Videos</label>
            <div className="flex items-center space-x-2">
                {/* Display uploaded images */}
                {images.map((image, index) => (
                    <div key={index} className="relative w-20 h-20 shadow-md">
                        <img
                            src={URL.createObjectURL(image)}
                            alt={`Uploaded ${index + 1}`}
                            className="w-full h-full object-cover rounded-lg shadow-md"
                        />
                        {/* Remove button */}
                        <button
                            type="button"
                            onClick={() => handleRemoveImage(index)}
                            className="absolute flex items-center justify-center bottom-14 w-6 h-6 left-14 md:left-14 bg-transparent border-none text-red-500 text-lg p-0"
                        >
                            <IoMdCloseCircle />
                        </button>
                    </div>
                ))}

                {/* Add More Button - disabled if 5 images are uploaded */}
                {images.length < 5 && (
                    <>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="hidden"
                            id="image-upload"
                            multiple
                        />
                        <label
                            htmlFor="image-upload"
                            className="cursor-pointer w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center shadow-md"
                        >
                            <IoIosAddCircle className="text-gray-500 text-3xl" />
                        </label>
                    </>
                )}
            </div>
            {images.length >= 5 && (
                <p className="text-red-500 text-sm mt-1">You have reached the maximum of 5 images.</p>
            )}
        </div>
    );
};

export default ImageUploadComponent;
