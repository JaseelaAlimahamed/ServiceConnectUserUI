import React from 'react'
import { Route, Routes,Navigate } from 'react-router-dom'
import AddProfilePage from '../pages/AddProfilePage'
import UserSignInPage from '../pages/UserSignInPage'


function UserRoutes() {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Navigate to="/signin" />} />
        <Route path="/addprofile" element={<AddProfilePage/>} />
        <Route path="/signin" element={<UserSignInPage/>} />
       
        </Routes>
    </div>
  )
}

export default UserRoutes
