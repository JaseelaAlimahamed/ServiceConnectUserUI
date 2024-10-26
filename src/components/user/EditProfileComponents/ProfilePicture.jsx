import React, { useState } from 'react';
import EditPic from '../../../assets/SQUARE.png'; 

const ProfilePicture = () => {
  const [profileImage, setProfileImage] = useState('https://via.placeholder.com/100'); 

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file)); 
    }
  };

  return (
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
  );
};

export default ProfilePicture;