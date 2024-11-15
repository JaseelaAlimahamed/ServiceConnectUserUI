import React from 'react';

const BookingTitleDescription = ({ title, description }) => {
  return (
    <div className='ml-2'>
      <div className="mb-5 mt-3">
        <label className="block text-gray-700 font-medium ">Title:</label>
        <div className="p-3 bg-primary rounded-md text-gray-700">
          {title}
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium ">Description:</label>
        <div className="p-3 bg-primary rounded-md text-gray-700">
          {description}
        </div>
      </div> 
    </div>
  );
};

export default BookingTitleDescription;
