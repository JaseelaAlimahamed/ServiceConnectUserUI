// AuthLayout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarHead from '../components/user/layoutComponents/NavbarHead';

const AuthLayout = () => {
  return (
    <div className="  min-h-screen bg-light-gray">
      <NavbarHead />
      <Outlet />
    </div>
  );
};

export default AuthLayout;
