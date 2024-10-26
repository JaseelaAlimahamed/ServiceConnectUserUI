import React, { useState } from 'react';
import ProfilePicture from '../../components/user/EditProfileComponents/ProfilePicture';
import ProfileName from '../../components/user/EditProfileComponents/ProfileName';
import DOB from '../../components/user/EditProfileComponents/DOB';
import PhoneNumber from '../../components/user/EditProfileComponents/PhoneNumber';
import UserProfession from '../../components/user/EditProfileComponents/UserProfession';
import UpdateButton from '../../components/user/EditProfileComponents/UpdateButton';

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
    <div className="flex flex-col items-center p-4 sm:p-6 bg-edit-main h-screen">
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