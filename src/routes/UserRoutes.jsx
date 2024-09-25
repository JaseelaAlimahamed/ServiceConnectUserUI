/* eslint-disable no-unused-vars */
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AllCategoryComponent from "../components/user/allCategoryAndSubCategoryComponent/allCategoryComponent/AllCategoryComponent";
import SubCategoryComponent from "../components/user/allCategoryAndSubCategoryComponent/subcategoryComponent/SubCategoryComponent";
import AddProfilePage from "../pages/signUpSignInPages/AddProfilePage";
import OtpVerificationPage from "../pages/signUpSignInPages/OtpVerificationPage";
import UserSignInPage from "../pages/signUpSignInPages/UserSignInPage";
import UserSignUpPage from "../pages/signUpSignInPages/UserSignUpPage";

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

        <Route
          path="/allcategories/:categoryId"
          element={<SubCategoryComponent />}
        />
      </Routes>
    </div>
  );
}

export default UserRoutes;
