import React, { useState } from 'react';

const BookingTitleDescription = ({ onInputChange }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    onInputChange(); 
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    onInputChange(); 
  };

  return (
    <div>
      {/* Title */}
      <div className="relative mb-5">
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          className="w-full px-4 py-3 bg-primary rounded-md text-gray-700 placeholder-transparent"
          placeholder=" " 
          style={{ paddingTop: '2rem' }} 
        />
        <label className={`absolute left-3 top-2 text-sm md:text-base text-gray-700`}>
          Title
        </label>
      </div>

      {/* Description */}
      <div className="relative mb-4">
        <textarea
          value={description}
          onChange={handleDescriptionChange}
          className="w-full px-4 bg-primary rounded-md text-gray-700 placeholder-transparent"
          placeholder=" " 
          style={{ paddingTop: '2rem', minHeight: '4rem' }} 
        />
        <label className={`absolute left-3 top-2 text-sm md:text-base text-gray-700`}>
          Description
        </label>
      </div>
    </div>
  );
};

export default BookingTitleDescription;