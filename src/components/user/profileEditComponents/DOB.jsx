import React from 'react';

const DOB = ({ profile, handleInputChange }) => {
  return (
    <div className="mb-4">
      <input
        type="date"
        name="dob"
        value={profile.dob}
        onChange={handleInputChange}
        className="input-field bg-primary text-field-text font-semibold p-3 rounded-lg w-full shadow-xl"
      />
    </div>
  );
};

export default DOB;