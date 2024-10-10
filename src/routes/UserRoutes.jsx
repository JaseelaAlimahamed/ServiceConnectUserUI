
/* eslint-disable no-unused-vars */


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
import OtpVerificationPage from "../pages/signUpSignInPages/OtpVerificationPage";
import PaymentMethodPage from "../pages/paymentMethodsPages/PaymentMethodPage";
import Home from '../pages/HomePage/Home'
import ProviderProfile from '../pages/ProviderProfilePage/ProviderProfile'


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

        <Route path="/forgot-password" element={<ForgotPasswordPage/>} />

        <Route path="/create-new-password" element={<CreateNewPasswordPage/>} />

        <Route path="/otp-forgot-password" element={<OtpForgotPasswordPage/>} />

        <Route path="/fill-your-profile" element={<AddProfilePage/>} />


        <Route path='/home' element={<Home />} />

        <Route path="/allcategories" element={<AllCategoryComponent />} />

        <Route path="/allcategories/:categoryId" element={<SubCategoryComponent />} />

        <Route path="/paymentmethods" element={<PaymentMethodPage />} />
          
     <Route path='/providerprofile' element={<ProviderProfile />} />

      </Route>
</Routes>

    </div>
  );
}

export default UserRoutes;

