

import React from "react";

import { Route, Routes, Navigate } from 'react-router-dom'

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



import UserLayout from "../layouts/UserLayout";
import RequestServicePage from "../pages/requestServicePages/RequestServicePage";
import BookingsPage from "../pages/userHomePages/BookingsPage";
import BookingDetails from "../pages/BookingDetailsPages/BookingDetails";
import ReviewSection from "../components/user/reviewsPageComponents/ReviewSection";
import ActiveServicesPage from "../pages/userHomePages/ActiveServicesPage";
import ActiveServiceDetails from "../pages/BookingDetailsPages/ActiveServiceDetails";
import ComplaintsPage from '../pages/userHomePages/ComplaintsPage'
import ComplaintsPageUser from '../components/user/complaintsPageComponents/ComplaintsPageUser'
import ReviewSubmitPage from '../components/user/reviewSubmitComponents/ReviewSubmitPage'
import CompletedServicesPage from "../pages/userHomePages/CompletedServicesPage";
import UserProfile from "../pages/userProfilePage/UserProfile";

import AboutSection from "../components/user/ProviderProfilePageComponents/AboutSection";
import NotificationSettingsPage from "../pages/NotificationSettingsPage/NotificationSettingsPage";


function UserRoutes() {
  return (
    <div>
      <Routes>
        <Route element={<UserLayout />}>
          <Route path="/" element={<Navigate to="/signin" />} />

          <Route path="/add-profile" element={<AddProfilePage />} />

          <Route path="/sign-in" element={<UserSignInPage />} />

          <Route path="/sign-up" element={<UserSignUpPage />} />

          <Route path="/otp" element={<OTPPage />} />

          <Route path="/forgot-password" element={<ForgotPasswordPage />} />

          <Route path="/create-new-password" element={<CreateNewPasswordPage />} />

          <Route path="/otp-forgot-password" element={<OtpForgotPasswordPage />} />

          <Route path="/fill-your-profile" element={<AddProfilePage />} />


          <Route path='/home' element={<Home />} />

          <Route path="/allcategories" element={<AllCategoryComponent />} />

          <Route path="/allcategories/:categoryId" element={<SubCategoryComponent />} />

          <Route path="/paymentmethods" element={<PaymentMethodPage />} />

          <Route path='/providerprofile' element={<ProviderProfile />} />


          <Route path="/requestservice" element={<RequestServicePage />} />

          <Route path="/bookings" element={<BookingsPage />} />

          <Route path="/bookingdetails" element={<BookingDetails />} />

          <Route path="/reviews" element={<ReviewSection />} />

          <Route path="/reviewsubmit" element={<ReviewSubmitPage />} />

          <Route path="/active-services" element={<ActiveServicesPage />} />

          <Route path="/servicedetails" element={<ActiveServiceDetails />} />

          <Route path="/complaints" element={<ComplaintsPage />} />

          <Route path="/complaintform" element={<ComplaintsPageUser />} />

          <Route path="/completedservices" element={<CompletedServicesPage />} />

          <Route path="/userprofile" element={<UserProfile />} />

          <Route path="/about" element={<AboutSection />} />


        <Route path='/notificationsettings' element={<NotificationSettingsPage/>} />

        <Route path="/termsandconditions" element={<TermsAndConditionPage />} />

      </Route>

</Routes>


    </div>
  );
}

export default UserRoutes;

