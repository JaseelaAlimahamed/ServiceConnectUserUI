// MainLayout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/user/layoutComponents/Navbar';


const MainLayout = ({ isSidebarOpen }) => {
    return (
      <div className="flex">
        {/* Sidebar occupies space in desktop view */}
  
        {/* Main content section */}
        <div className={`flex-1 transition-all ${isSidebarOpen ? 'ml-60' : 'ml-0'} sm:ml-60`}>
          <Navbar />
          <main className="p-4 bg-light-gray">
            <Outlet />
          </main>
        </div>
      </div>
    );
  };
  

export default MainLayout;
