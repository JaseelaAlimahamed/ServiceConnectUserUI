/* eslint-disable no-unused-vars */
import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import AddProfilePage from '../pages/signUpSignInPages/AddProfilePage'
import UserSignInPage from '../pages/signUpSignInPages/UserSignInPage'
import UserSignUpPage from '../pages/signUpSignInPages/UserSignUpPage'
import OTPPage from '../pages/signUpSignInPages/OtpVerificationPage'
import CreateNewPasswordPage from '../pages/signUpSignInPages/forgotPasswordPages/CreateNewPasswordPage'
import ForgotPasswordPage from '../pages/signUpSignInPages/forgotPasswordPages/ForgotPasswordPage'
import OtpForgotPasswordPage from '../pages/signUpSignInPages/forgotPasswordPages/OtpForgotPasswordPage'


function UserRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/signin" />} />

        <Route path="/add-profile" element={<AddProfilePage />} />

        <Route path="/sign-in" element={<UserSignInPage />} />

        <Route path="/sign-up" element={<UserSignUpPage />} />

        <Route path="/otp" element={<OTPPage />} />

        <Route path="/forgot-password" element={<ForgotPasswordPage/>} />

        <Route path="/create-new-password" element={<CreateNewPasswordPage/>} />

        <Route path="/otp-forgot-password" element={<OtpForgotPasswordPage/>} />

        <Route path="/fill-your-profile" element={<AddProfilePage/>} />


        <Route path='/home' element={<Home />} />





       

      </Routes>
    </div>
  )
}

export default UserRoutes
