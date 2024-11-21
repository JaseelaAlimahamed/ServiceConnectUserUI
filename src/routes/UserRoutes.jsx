<<<<<<< HEAD
/* eslint-disable no-unused-vars */
import React from "react";
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { protectRoute } from "../utils/authentication/Auth";
// Authentication Pages
import UserSignInPage from '../pages/signUpSignInPages/UserSignInPage';
import UserSignUpPage from '../pages/signUpSignInPages/UserSignUpPage';
import OTPPage from '../pages/signUpSignInPages/OtpVerificationPage';
import ForgotPasswordPage from '../pages/signUpSignInPages/forgotPasswordPages/ForgotPasswordPage';
import CreateNewPasswordPage from '../pages/signUpSignInPages/forgotPasswordPages/CreateNewPasswordPage';
import OtpForgotPasswordPage from '../pages/signUpSignInPages/forgotPasswordPages/OtpForgotPasswordPage';
import AddProfilePage from '../pages/signUpSignInPages/AddProfilePage';

// Home, Profile, and Settings Pages
import Home from '../pages/userHomePages/HomePage/Home';
import UserProfile from "../pages/userProfilePage/UserProfile";
import EditProfile from "../pages/editProfilePage/EditProfile";
import SecurityPage from "../pages/securityPage/SecurityPage";
import NotificationSettingsPage from "../pages/NotificationSettingsPage/NotificationSettingsPage";

// Service Pages
import ServicesPage from "../pages/serviceProviderListingPage/ServicesPage";
import RequestServicePage from "../pages/requestServicePages/RequestServicePage";
import ActiveServicesPage from "../pages/userHomePages/ActiveServicesPage";
import ActiveServiceDetails from "../pages/BookingDetailsPages/ActiveServiceDetails";
import CompletedServicesPage from "../pages/userHomePages/CompletedServicesPage";

// Category and Provider Pages
import AllCategoryComponent from "../components/user/allCategoryAndSubCategoryComponent/allCategoryComponent/AllCategoryComponent";
import SubCategoriesPage from "../pages/allCategoryAndSubCategoryPage/SubCategoryPage";
import ProviderProfile from '../pages/ProviderProfilePage/ProviderProfile';

// Booking and Review Pages
import BookingsPage from "../pages/userHomePages/BookingsPage";
import BookingDetails from "../pages/BookingDetailsPages/BookingDetails";
import ReviewSection from "../components/user/reviewsPageComponents/ReviewSection";
import ReviewSubmitPage from '../components/user/reviewSubmitComponents/ReviewSubmitPage';

// Complaint and Transaction Pages
import ComplaintsPage from '../pages/userHomePages/ComplaintsPage';
import ComplaintFormPage from "../pages/ComplaintFormPage/ComplaintFormPage";
import TransactionsPage from '../pages/transactionsPage/TransactionsPage';
import ComplaintsPageUser from '../components/user/complaintsPageComponents/ComplaintsPageUser';

// Additional Pages
import TermsAndConditionPage from "../pages/termsAndConditionPage/TermsAndConditionPage";
import PaymentMethodPage from "../pages/paymentMethodsPages/PaymentMethodPage";
import NotificationsPage from "../pages/userHomePages/NotificationPage";
import HelpCenterPage from "../pages/helpCenterPage/helpCenterPage";
import AboutPage from "../pages/aboutPage/AboutPage";

// Layouts and Error Pages
import MainLayout from "../layouts/UserLayout";
import Error404Page from "../pages/ErrorPages/Error404Page";
import Error403Page from "../pages/ErrorPages/Error403Page";
import AuthLayout from "../layouts/AuthLayout";
=======
import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import AddProfilePage from '../pages/signUpSignInPages/AddProfilePage'
import UserSignInPage from '../pages/signUpSignInPages/UserSignInPage'
import UserSignUpPage from '../pages/signUpSignInPages/UserSignUpPage'
import OtpVerificationPage from '../pages/signUpSignInPages/OtpVerificationPage'
>>>>>>> main



// Router Configuration
const UserRouter = createBrowserRouter([
  { path: "/",
    element: < AuthLayout/>,
    children: [
      // Public Routes
      {
        path: "/",
        element: <Navigate to="/sign-in" />
      },

      {
        path: "/sign-in",
        element: <UserSignInPage />
      },

          <Route path="/sign-up" element={<UserSignUpPage />} />

          <Route path="/otp" element={<OTPPage />} />

          <Route path="/forgot-password" element={<ForgotPasswordPage />} />

          <Route path="/create-new-password" element={<CreateNewPasswordPage />} />

          <Route path="/otp-forgot-password" element={<OtpForgotPasswordPage />} />

          <Route path="/fill-your-profile" element={<AddProfilePage />} />


          <Route path='/home' element={<Home />} />

          <Route path="/profile" element={<UserProfile />} />

          <Route path="/categories" element={<AllCategoryComponent />} />

          <Route path="/Subcatogaories/:categoryId" element={<SubCategoriesPage />} />

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

          <Route path="/complaint-submit" element={<ComplaintFormPage />} />

          <Route path="/complaint-form/:id" element={<ComplaintsPageUser />} />

          <Route path="/services" element={<CompletedServicesPage />} />



          <Route path='/notification' element={<NotificationsPage />} />

          <Route path='/notification-settings' element={<NotificationSettingsPage />} />

          <Route path='/security' element={<SecurityPage/>} />

          <Route path="/terms-conditions" element={<TermsAndConditionPage />} />

          <Route path="/transactions" element={<TransactionsPage />} />


          <Route path="/help-center" element={<HelpCenterPage />} />

          <Route path="/about-us" element={<AboutPage />} />
            
          <Route path="/service-provider-list/:id" element={<ServicesPage />} />



        </Route>

        <Route path="/*" element={<Error404Page />} />
        <Route path="/403" element={<Error403Page />} />

      </Routes>
    </div>
  )
}
>>>>>>> main

export default UserRouter ;
