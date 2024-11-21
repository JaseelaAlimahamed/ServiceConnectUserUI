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

      {
        path: "/sign-up",
        element: <UserSignUpPage />
      },
      {
        path: "/otp",
        element: <OTPPage />
      },
      {
        path: "/forgot-password",
        element: <ForgotPasswordPage />
      },
      {
        path: "/create-new-password",
        element: <CreateNewPasswordPage />
      },
      {
        path: "/otp-forgot-password",
        element: <OtpForgotPasswordPage />
      },
      {
        path: "/add-profile",
        element: <AddProfilePage />
      },
      {
        path: "/fill-your-profile",
        element: <AddProfilePage />
      },
    ]},{path: "/",
    element: < MainLayout/>,
    children: [
      // Protected Routes
      {
        path: "/home",
        element: <Home />,
        loader: protectRoute
      },
      {
        path: "/profile",
        element: <UserProfile />,
        loader: protectRoute
      },
      {
        path: "/edit-profile",
        element: <EditProfile />,
        loader: protectRoute
      },
      {
        path: "/security",
        element: <SecurityPage />,
        loader: protectRoute
      },
      {
        path: "/notification-settings",
        element: <NotificationSettingsPage />,
        loader: protectRoute
      },

      // Service Routes
      {
        path: "/services",
        element: <CompletedServicesPage />,
        loader: protectRoute
      },
      {
        path: "/active-services",
        element: <ActiveServicesPage />,
        loader: protectRoute
      },
      {
        path: "/service-details/:id",
        element: <ActiveServiceDetails />,
        loader: protectRoute
      },
      {
        path: "/service-provider-list/:id",
        element: <ServicesPage />,
        loader: protectRoute
      },
      {
        path: "/request-service/:id",
        element: <RequestServicePage />,
        loader: protectRoute
      },

<<<<<<< HEAD
      // Category and Provider Routes
      {
        path: "/categories",
        element: <AllCategoryComponent />,
        loader: protectRoute
      },
      {
        path: "/subcategories/:categoryId",
        element: <SubCategoriesPage />,
        loader: protectRoute
      },
      {
        path: "/provider-profile/:id",
        element: <ProviderProfile />,
        loader: protectRoute
      },

      // Booking and Review Routes
      {
        path: "/bookings",
        element: <BookingsPage />,
        loader: protectRoute
      },
      {
        path: "/booking-details/:id",
        element: <BookingDetails />,
        loader: protectRoute
      },
      {
        path: "/reviews",
        element: <ReviewSection />,
        loader: protectRoute
      },
      {
        path: "/review-submit/:id",
        element: <ReviewSubmitPage />,
        loader: protectRoute
      },

      // Complaint and Transaction Routes
      {
        path: "/complaints",
        element: <ComplaintsPage />,
        loader: protectRoute
      },
      {
        path: "/complaint-submit/:id",
        element: <ComplaintFormPage />,
        loader: protectRoute
      },
      {
        path: "/complaint-form/:id",
        element: <ComplaintsPageUser />,
        loader: protectRoute
      },
      {
        path: "/transactions",
        element: <TransactionsPage />,
        loader: protectRoute
      },
      {
        path: "/payment-methods/:id",
        element: <PaymentMethodPage />,
        loader: protectRoute
      },

      // Additional Routes
      {
        path: "/notification",
        element: <NotificationsPage />,
        loader: protectRoute
      },
      {
        path: "/terms-conditions",
        element: <TermsAndConditionPage />,
        loader: protectRoute
      },
      {
        path: "/help-center",
        element: <HelpCenterPage />,
        loader: protectRoute
      },
      {
        path: "/about-us",
        element: <AboutPage />,
        loader: protectRoute
      },
    ],
  },
  { path: "/*", element: <Error404Page /> },
  { path: "/403", element: <Error403Page /> },
]);

=======
      </Routes>
    </div>
  )
}
>>>>>>> main

export default UserRouter ;
