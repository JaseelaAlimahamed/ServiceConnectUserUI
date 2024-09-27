

import React from "react";

import AllCategoryComponent from "../components/user/allCategoryAndSubCategoryComponent/allCategoryComponent/AllCategoryComponent";
import SubCategoryComponent from "../components/user/allCategoryAndSubCategoryComponent/subcategoryComponent/SubCategoryComponent";

import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import AddProfilePage from '../pages/signUpSignInPages/AddProfilePage'
import UserSignInPage from '../pages/signUpSignInPages/UserSignInPage'
import UserSignUpPage from '../pages/signUpSignInPages/UserSignUpPage'
import OtpVerificationPage from '../pages/signUpSignInPages/OtpVerificationPage'
import CreateNewPasswordPage from '../pages/forgotPasswordPages/CreateNewPasswordPage'
import ForgotPasswordPage from '../pages/forgotPasswordPages/ForgotPasswordPage'
import VerifyForgotPassword from '../pages/forgotPasswordPages/VerifyForgotPassword'
import Home from '../pages/HomePage/Home'
import ProviderProfile from '../pages/ProviderProfilePage/ProviderProfile'



function UserRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/signin" />} />

        <Route path="/addprofile" element={<AddProfilePage />} />

        <Route path="/signin" element={<UserSignInPage />} />

        <Route path="/signup" element={<UserSignUpPage />} />

        <Route path="/otp" element={<OtpVerificationPage />} />

        <Route path="/allcategories" element={<AllCategoryComponent />} />

        <Route path="/allcategories/:categoryId" element={<SubCategoryComponent />} />

        <Route path="/forgotpassword" element={<ForgotPasswordPage />} />

        <Route path="/createnewpassword" element={<CreateNewPasswordPage />} />

        <Route path="/verifyforgotpassword" element={<VerifyForgotPassword />} />

        <Route path='/home' element={<Home />} />

        <Route path='/providerprofile' element={<ProviderProfile />} />


      </Routes>

    </div>
  );
}

export default UserRoutes;

