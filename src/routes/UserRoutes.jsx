import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import AddProfilePage from '../pages/signUpSignInPages/AddProfilePage'
import UserSignInPage from '../pages/signUpSignInPages/UserSignInPage'
import UserSignUpPage from '../pages/signUpSignInPages/UserSignUpPage'
import OtpVerificationPage from '../pages/signUpSignInPages/OtpVerificationPage'
import UserLayout from '../layouts/UserLayout'
import BookingsPage from '../pages/userHomePages/BookingsPage'
import ActiveServicesPage from '../pages/userHomePages/ActiveServicesPage'
import ComplaintsPage from '../pages/userHomePages/ComplaintsPage'
import CompletedServicesPage from '../pages/userHomePages/CompletedServicesPage'
import TransactionsPage from '../pages/transactionsPage/TransactionsPage'

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
          <Route path="/active-services" element={<ActiveServicesPage />} />
          <Route path="/services" element={<CompletedServicesPage />} />
          <Route path="/complaints" element={<ComplaintsPage />} />
          <Route path="/transactions" element={<TransactionsPage />} />
        </Route>

      </Routes>
    </div>
  )
}

export default UserRoutes
