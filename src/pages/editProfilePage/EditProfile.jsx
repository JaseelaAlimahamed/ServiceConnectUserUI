import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import EditPic from '../../assets/SQUARE.png'; 

const EditProfile = () => {
  const [profile, setProfile] = useState({
    fullName: '',
    nickName: '',
    dob: '',
    email: '',
    phone: '',
    gender: '',
    studentStatus: '',
    countryCode: '+91' // Default country code
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(profile);
  };

  const [profileImage, setProfileImage] = useState('https://via.placeholder.com/100'); 

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file)); 
    }
  };

  return (
    <div className="flex flex-col items-center p-4 sm:p-6 bg-edit-main h-screen">
      {/* Profile Picture */}
      <div className="relative mb-6">
        <img
          className="rounded-full w-24 h-24 sm:w-32 sm:h-32 object-cover"
          src={profileImage} 
          alt="Profile"
        />
        <label className="absolute bottom-0 right-0 bg-primary p-1 rounded-lg cursor-pointer border border-light-gray">
          <input 
            type="file" 
            className="hidden" 
            onChange={handleImageChange} 
          />
          <img
            className="w-6 h-6"
            src={EditPic}
            alt="Edit"
          />
        </label>
      </div>

      <form onSubmit={handleSubmit} className="w-full max-w-md">
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

        {/* Date of Birth */}
        <div className="mb-4">
          <input
            type="date"
            name="dob"
            value={profile.dob}
            onChange={handleInputChange}
            className="input-field bg-primary text-field-text font-semibold p-3 rounded-lg w-full shadow-custom-input"
          />
        </div>
{/* Phone with Country Code */}
<div className="mb-4 flex">
  {/* Country Code Dropdown */}
  <div className="relative flex-shrink-0">
    <select
      name="countryCode"
      value={profile.countryCode}
      onChange={handleInputChange}
      className="bg-dark2-gray text-white font-semibold p-3 pr-8 rounded-l-lg appearance-none cursor-pointer"
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
    className="input-field bg-primary text-field-text font-semibold p-3 rounded-r-lg w-full shadow-custom-input flex-grow"
  />
</div>





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

        {/* Update Button */}
        <button className="w-full bg-secondary text-primary py-3 mt-10 mb-3 rounded-full text-sm md:text-base flex items-center justify-between px-4">
          <span className="flex-grow text-center">Update</span> 
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center ml-2">
            <FaArrowRight className="text-secondary w-4 h-4" />
          </div>
        </button>
      </form>
    </div>
  );
};

export default EditProfile;