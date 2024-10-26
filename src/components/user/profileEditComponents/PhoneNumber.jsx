import React from 'react';

const PhoneNumber = ({ profile, handleInputChange }) => {
  return (
    <div className="mb-4 flex">
      {/* Country Code Dropdown */}
      <div className="relative flex-shrink-0">
        <select
          name="countryCode"
          value={profile.countryCode}
          onChange={handleInputChange}
          className="bg-dark-gray text-white font-semibold p-3 pr-8 rounded-l-lg shadow-xl appearance-none cursor-pointer"
        >
          <option value="+91">🇮🇳 +91</option>
          <option value="+1">🇺🇸 +1</option>
          <option value="+44">🇬🇧 +44</option>
          <option value="+61">🇦🇺 +61</option>
          <option value="+81">🇯🇵 +81</option>
        </select>
        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-white">
          ▼
        </span>
      </div>

      {/* Phone Number Input */}
      <input
        type="tel"
        name="phone"
        value={profile.phone}
        onChange={handleInputChange}
        placeholder="Phone Number"
        className="input-field bg-primary text-field-text font-semibold p-3 rounded-r-lg w-full shadow-xl flex-grow"
      />
    </div>
  );
};

export default PhoneNumber;