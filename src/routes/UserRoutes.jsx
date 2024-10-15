

import React from "react";

import { Route, Routes, Navigate, Router } from 'react-router-dom'

import AddProfilePage from '../pages/signUpSignInPages/AddProfilePage'
import UserSignInPage from '../pages/signUpSignInPages/UserSignInPage'
import UserSignUpPage from '../pages/signUpSignInPages/UserSignUpPage'
import OTPPage from '../pages/signUpSignInPages/OtpVerificationPage'
import CreateNewPasswordPage from '../pages/signUpSignInPages/forgotPasswordPages/CreateNewPasswordPage'
import ForgotPasswordPage from '../pages/signUpSignInPages/forgotPasswordPages/ForgotPasswordPage'
import OtpForgotPasswordPage from '../pages/signUpSignInPages/forgotPasswordPages/OtpForgotPasswordPage'

import AllCategoryComponent from "../components/user/allCategoryAndSubCategoryComponent/allCategoryComponent/AllCategoryComponent";
import SubCategoryComponent from "../components/user/allCategoryAndSubCategoryComponent/subcategoryComponent/SubCategoryComponent";
import PaymentMethodPage from "../pages/paymentMethodsPages/PaymentMethodPage";
import Home from '../pages/HomePage/Home'
import ProviderProfile from '../pages/ProviderProfilePage/ProviderProfile'
import TermsAndConditionPage from "../pages/termsAndConditionPage/TermsAndConditionPage";
import UserLayout from "../layouts/UserLayout";



import RequestServicePage from "../pages/requestServicePages/RequestServicePage";
import BookingsPage from "../pages/userHomePages/BookingsPage";
import BookingDetails from "../pages/BookingDetailsPages/BookingDetails";
import ReviewSection from "../components/user/reviewsPageComponents/ReviewSection";
import ActiveServicesPage from "../pages/userHomePages/ActiveServicesPage";
import ActiveServiceDetails from "../pages/BookingDetailsPages/ActiveServiceDetails";
import ComplaintsPage from '../pages/userHomePages/ComplaintsPage'


import TransactionsPage from '../pages/transactionsPage/TransactionsPage'

import ComplaintsPageUser from '../components/user/complaintsPageComponents/ComplaintsPageUser'
import ReviewSubmitPage from '../components/user/reviewSubmitComponents/ReviewSubmitPage'
import CompletedServicesPage from "../pages/userHomePages/CompletedServicesPage"
import UserProfile from "../pages/userProfilePage/UserProfile"

import NotificationSettingsPage from "../pages/NotificationSettingsPage/NotificationSettingsPage";
import AboutPage from "../pages/aboutPage/AboutPage";
import NotificationsPage from "../pages/userHomePages/NotificationPage";
import ServicesPage from "../pages/serviceProviderListingPage/ServicesPage"



function UserRoutes() {
  return (
    <div>
      <Routes>
        <Route element={<UserLayout />}>
          <Route path="/" element={<Navigate to="/sign-in" />} />

          <Route path="/add-profile" element={<AddProfilePage />} />

          <Route path="/sign-in" element={<UserSignInPage />} />

          <Route path="/sign-up" element={<UserSignUpPage />} />

          <Route path="/otp" element={<OTPPage />} />

          <Route path="/forgot-password" element={<ForgotPasswordPage />} />

          <Route path="/create-new-password" element={<CreateNewPasswordPage />} />

          <Route path="/otp-forgot-password" element={<OtpForgotPasswordPage />} />

          <Route path="/fill-your-profile" element={<AddProfilePage />} />


          <Route path='/home' element={<Home />} />

          <Route path="/profile" element={<UserProfile />} />

          <Route path="/categories" element={<AllCategoryComponent />} />

          <Route path="/Subcatogaories/:categoryId" element={<SubCategoryComponent />} />


          <Route path='/provider-profile/:id' element={<ProviderProfile />} />


          <Route path="/request-service/:id" element={<RequestServicePage />} />

          <Route path="/bookings" element={<BookingsPage />} />

          <Route path="/booking-details/:id" element={<BookingDetails />} />

          <Route path="/reviews/:id" element={<ReviewSection />} />

          <Route path="/review-submit/:id" element={<ReviewSubmitPage />} />

          <Route path="/active-services" element={<ActiveServicesPage />} />

          <Route path="/service-details/:id" element={<ActiveServiceDetails />} />

          <Route path="/payment-methods/:id" element={<PaymentMethodPage />} />

          <Route path="/complaints" element={<ComplaintsPage />} />

          <Route path="/complaint-form/:id" element={<ComplaintsPageUser />} />

          <Route path="/services" element={<CompletedServicesPage />} />

         

          <Route path='/notification' element={<NotificationsPage />} />

          <Route path='/notification-settings' element={<NotificationSettingsPage />} />

          <Route path="/terms-conditions" element={<TermsAndConditionPage />} />

          <Route path="/transactions" element={<TransactionsPage />} />

          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/service-provider-list" element={<ServicesPage />} />

        </Route>

      </Routes>


    </div>
  );
}

export default UserRoutes;

