import React from 'react';
import {  useLocation, useNavigate } from 'react-router-dom'; // Import useLocation and useNavigate
import { CiCircleChevLeft } from 'react-icons/ci';

function NavbarHead() {
  const location = useLocation(); // Get the current location
  const navigate = useNavigate(); // Get the navigate function
  const pathParts = location.pathname.split('/');
  const pathName = pathParts[1] || 'Home'; // Second part or fallback to 'Home'
  

  // Capitalize the first letter of the pathname and lowercase the rest
  const formattedPathName = pathName.charAt(0).toUpperCase() + pathName.slice(1).toLowerCase().replace(/-/g, ' ');

  return (
    <nav className="bg-dark-gray w-full h-[80px] flex items-center px-4">
      <button onClick={() => navigate(-1)} className="text-primary text-2xl">
        <CiCircleChevLeft className="h-[40px] w-[40px]" />
      </button>
      <p className="text-[21px] text-primary text-center font-default font-semibold ml-2">
        {formattedPathName} 
      </p>
    </nav>
  );
}

export default NavbarHead;
