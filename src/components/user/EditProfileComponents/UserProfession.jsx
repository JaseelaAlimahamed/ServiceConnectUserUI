import React from 'react';

const UserProfession = ({ profile, handleInputChange }) => {
  return (
    <>
      {/* Gender Dropdown */}
      <div className="mb-4">
        <select
          name="gender"
          value={profile.gender}
          onChange={handleInputChange}
          className="input-field bg-primary text-field-text font-semibold p-3 rounded-lg w-full shadow-custom-input"
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Student Status */}
      <div className="mb-4">
        <input
          type="text"
          name="studentStatus"
          value={profile.studentStatus}
          onChange={handleInputChange}
          placeholder="Student"
          className="input-field bg-primary text-field-text font-semibold p-3 rounded-lg w-full shadow-custom-input"
        />
      </div>
    </>
  );
};

export default UserProfession;