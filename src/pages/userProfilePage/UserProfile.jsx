import React from 'react'
import ProfileInfo from '../../components/user/userProfilePageComponents/ProfileInfo'
import ProfileOptions from '../../components/user/userProfilePageComponents/ProfileOptions'

const UserProfile = () => {
  return (
    <div className="bg-light-gray p-4 min-h-screen flex justify-center items-center px-4">
    <div className="bg-light-gray w-full min-w-screen-sm  max-w-screen-lg mx-auto p-6 rounded-2xl shadow-lg">
      <ProfileInfo/>
      <ProfileOptions />
    </div>
  </div>
  )
}

export default UserProfile  