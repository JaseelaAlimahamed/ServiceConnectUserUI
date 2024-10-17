import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
    // Assuming user details are stored in Redux under 'user' state
    const user = useSelector(state => state.user); 

    return (
        <div className='profile-details flex'>
            <div className='profile-img'>
                <img className='rounded-full w-14 border-2 border-red-600' src="https://avatar.iran.liara.run/public" alt="" />
            </div>
            <div className='text-sm ml-4'>
                <p className='name text-pink-500'>{user.name}</p>
                <p className='user_id text-yellow-400'>UID: {user.uid}</p>
                <p className='Status text-green-500'>Online</p>
            </div>
        </div>
    );
};

export default Profile;
