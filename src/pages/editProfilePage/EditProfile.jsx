import React, { useState } from 'react';
import ProfilePicture from '../../components/user/profileEditComponents/ProfilePicture';
import ProfileName from '../../components/user/profileEditComponents/ProfileName';
import DOB from '../../components/user/profileEditComponents/DOB';
import PhoneNumber from '../../components/user/profileEditComponents/PhoneNumber';
import UserProfession from '../../components/user/profileEditComponents/UserProfession';
import UpdateButton from '../../components/user/profileEditComponents/UpdateButton';

const EditProfile = () => {
  const [profile, setProfile] = useState({
    fullName: '',
    nickName: '',
    dob: '',
    email: '',
    phone: '',
    gender: '',
    studentStatus: '',
    countryCode: '+91', // Default country code
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(profile);
  };

  return (
    <div className="flex flex-col  items-center p-4 sm:p-6 bg-light-gray h-screen">
      <ProfilePicture />
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <ProfileName profile={profile} handleInputChange={handleInputChange} />
        <DOB profile={profile} handleInputChange={handleInputChange} />
        <PhoneNumber profile={profile} handleInputChange={handleInputChange} />
        <UserProfession profile={profile} handleInputChange={handleInputChange} />
        <UpdateButton />
      </form>
    </div>
  );
};

export default EditProfile;