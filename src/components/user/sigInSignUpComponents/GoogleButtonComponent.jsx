/* eslint-disable no-unused-vars */
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
<<<<<<< HEAD:src/components/user/sigInSignUpComponents/GoogleButtonComponent.jsx
import { useGoogleLogin } from '@react-oauth/google';

import { onGoogleLoginSuccess, onGoogleLoginError } from '../../../services/userSignIn/googleAuth';


=======
>>>>>>> main:src/components/reUsableComponents/signInSignUpReusableComponents/GoogleButtonComponent.jsx

const GoogleLoginButton = () => {

    const handleGoogleLogin = async () => {
        try {

            console.log('Google login is working!');

        } catch (error) {
            console.log('Google login failed!', error);
        }
    };

    return (
        <div className="flex flex-col items-center">
            <h6 className='flex justify-center mb-2'>or continue with</h6>
            <button
                onClick={handleGoogleLogin}
                className="flex justify-center w-5/6 bg-primary border-r-4 border-light-gray rounded-full shadow-md py-3 px-2  hover:border-light-gray"
            >
                <FcGoogle className="mr-2 text-2xl" />
                <span className="text-dark-gray font-medium">Continue with Google</span>
            </button>
        </div>
    );
};

export default GoogleLoginButton;
