/* eslint-disable no-unused-vars */
import React from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { protectRoute } from "../utils/authentication/Auth";

// Authentication Pages
import UserSignInPage from "../pages/signUpSignInPages/UserSignInPage";
import UserSignUpPage from "../pages/signUpSignInPages/UserSignUpPage";
import OTPPage from "../pages/signUpSignInPages/OtpVerificationPage";
import ForgotPasswordPage from "../pages/signUpSignInPages/forgotPasswordPages/ForgotPasswordPage";
import CreateNewPasswordPage from "../pages/signUpSignInPages/forgotPasswordPages/CreateNewPasswordPage";
import OtpForgotPasswordPage from "../pages/signUpSignInPages/forgotPasswordPages/OtpForgotPasswordPage";
import AddProfilePage from "../pages/signUpSignInPages/AddProfilePage";

// Home, Profile, and Settings Pages
import Home from "../pages/userHomePages/HomePage/Home";
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
import ProviderProfile from "../pages/ProviderProfilePage/ProviderProfile";

// Booking and Review Pages
import BookingsPage from "../pages/userHomePages/BookingsPage";
import BookingDetails from "../pages/BookingDetailsPages/BookingDetails";
import ReviewSection from "../components/user/reviewsPageComponents/ReviewSection";
import ReviewSubmitPage from "../components/user/reviewSubmitComponents/ReviewSubmitPage";

// Complaint and Transaction Pages
import ComplaintsPage from "../pages/userHomePages/ComplaintsPage";
import ComplaintFormPage from "../pages/ComplaintFormPage/ComplaintFormPage";
import TransactionsPage from "../pages/transactionsPage/TransactionsPage";
import ComplaintsPageUser from "../components/user/complaintsPageComponents/ComplaintsPageUser";

// Additional Pages
import TermsAndConditionPage from "../pages/termsAndConditionPage/TermsAndConditionPage";
import PaymentMethodPage from "../pages/paymentMethodsPages/PaymentMethodPage";
import NotificationsPage from "../pages/userHomePages/NotificationPage";
import HelpCenterPage from "../pages/helpCenterPage/HelpCenterPage";
import AboutPage from "../pages/aboutPage/AboutPage";

// Layouts and Error Pages
import MainLayout from "../layouts/UserLayout";
import Error404Page from "../pages/ErrorPages/Error404Page";
import Error403Page from "../pages/ErrorPages/Error403Page";
import AuthLayout from "../layouts/AuthLayout";

// Router Configuration
const UserRouter = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "/", element: <Navigate to="/sign-in" /> },
      { path: "/sign-in", element: <UserSignInPage /> },
      { path: "/sign-up", element: <UserSignUpPage /> },
      { path: "/otp", element: <OTPPage /> },
      { path: "/forgot-password", element: <ForgotPasswordPage /> },
      { path: "/create-new-password", element: <CreateNewPasswordPage /> },
      { path: "/otp-forgot-password", element: <OtpForgotPasswordPage /> },
      { path: "/fill-your-profile", element: <AddProfilePage /> },
    ],
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/profile", element: <UserProfile /> },
      { path: "/categories", element: <AllCategoryComponent /> },
      { path: "/subcategories/:categoryId", element: <SubCategoriesPage /> },
      { path: "/provider-profile/:id", element: <ProviderProfile /> },
      { path: "/request-service/:id", element: <RequestServicePage /> },
      { path: "/bookings", element: <BookingsPage /> },
      { path: "/booking-details/:id", element: <BookingDetails /> },
      { path: "/reviews/:id", element: <ReviewSection /> },
      { path: "/review-submit/:id", element: <ReviewSubmitPage /> },
      { path: "/active-services", element: <ActiveServicesPage /> },
      { path: "/service-details/:id", element: <ActiveServiceDetails /> },
      { path: "/payment-methods/:id", element: <PaymentMethodPage /> },
      { path: "/complaints", element: <ComplaintsPage /> },
      { path: "/complaint-submit", element: <ComplaintFormPage /> },
      { path: "/complaint-form/:id", element: <ComplaintsPageUser /> },
      { path: "/services", element: <CompletedServicesPage /> },
      { path: "/notification", element: <NotificationsPage /> },
      { path: "/notification-settings", element: <NotificationSettingsPage /> },
      { path: "/security", element: <SecurityPage /> },
      { path: "/terms-conditions", element: <TermsAndConditionPage /> },
      { path: "/transactions", element: <TransactionsPage /> },
      { path: "/help-center", element: <HelpCenterPage /> },
      { path: "/about-us", element: <AboutPage /> },
      { path: "/service-provider-list/:id", element: <ServicesPage /> },
    ],
  },
  { path: "/*", element: <Error404Page /> },
  { path: "/403", element: <Error403Page /> },
]);

export default UserRouter;
