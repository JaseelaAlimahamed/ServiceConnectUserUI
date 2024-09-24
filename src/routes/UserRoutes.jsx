import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import AddProfilePage from '../pages/signUpSignInPages/AddProfilePage'
import UserSignInPage from '../pages/signUpSignInPages/UserSignInPage'
import UserSignUpPage from '../pages/signUpSignInPages/UserSignUpPage'
import OtpVerificationPage from '../pages/signUpSignInPages/OtpVerificationPage'
import UserLayout from '../layouts/UserLayout'
import BookingsPage from '../pages/userHomePages/BookingsPage'

function UserRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/signin" />} />

        <Route path="/addprofile" element={<AddProfilePage />} />

        <Route path="/signin" element={<UserSignInPage />} />

        <Route path="/signup" element={<UserSignUpPage />} />

        <Route path="/otp" element={<OtpVerificationPage />} />

        <Route element={<UserLayout />}>
          <Route path="/bookings" element={<BookingsPage />} />
        </Route>

      </Routes>
    </div>
  )
}

export default UserRoutes
