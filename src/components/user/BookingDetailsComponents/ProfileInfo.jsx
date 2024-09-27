import React from 'react';

const ProfileInfo = ({ profileImage, name, jobTitle, bookingId }) => {
  return (
    <div className="flex items-center space-x-4 p-4">
      {/* Profile Image and Booking ID */}
      <div className="flex flex-col items-center justify-center" style={{ marginLeft: '-1rem' }}> 
        <img 
          src={profileImage} 
          alt={`${name}'s profile`} 
          className="w-16 h-16 rounded-full object-cover"
        />
        <p className="text-medium-gray font-semibold text-sm mt-2 text-center">Booking Id: {bookingId}</p>
      </div>
      {/* Name and Job Title */}
      <div className="ml-2">
        <h3 className="text-secondary font-semibold text-base">{name}</h3>
        <p className="text-medium-gray font-semibold text-sm">{jobTitle}</p>
      </div>
    </div>
  );
};

export default ProfileInfo;