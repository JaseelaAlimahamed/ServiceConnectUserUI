import React from 'react';

const ProfileName = ({ profile, handleInputChange }) => {
  return (
    <>
      {/* Full Name Input */}
      <div className="mb-4">
        <input
          type="text"
          name="fullName"
          value={profile.fullName}
          onChange={handleInputChange}
          placeholder="Full Name"
          className="input-field bg-primary text-field-text font-semibold p-3 rounded-lg w-full shadow-custom-input"
        />
      </div>

      {/* Nick Name Input */}
      <div className="mb-4">
        <input
          type="text"
          name="nickName"
          value={profile.nickName}
          onChange={handleInputChange}
          placeholder="Nick Name"
          className="input-field bg-primary text-field-text font-semibold p-3 rounded-lg w-full shadow-custom-input"
        />
      </div>
    </>
  );
};

export default ProfileName;