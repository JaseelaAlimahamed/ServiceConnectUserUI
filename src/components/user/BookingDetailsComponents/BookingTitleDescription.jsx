import React, { useState } from 'react';

const BookingTitleDescription = ({ title, description ,onInputChange}) => {

  return (
      <div>
        {/* Title */}
        <div className="relative mb-5">
          <textarea
            type="text"
            value={title}
            className="w-full px-4 py-3 bg-primary rounded-md text-gray-700 placeholder-transparent"
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
            className="w-full px-4 bg-primary rounded-md text-gray-700 placeholder-transparent"
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