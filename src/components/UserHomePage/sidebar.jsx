import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      {/* Toggle button for mobile view */}
      <button
        className="p-1 bg-gray-900 text-white focus:outline-none md:hidden"
        onClick={toggleSidebar}
      >
        {isOpen ? "Close" : "Open"} 
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen bg-gray-800 text-white w-55 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full px-2 py-1"
        } md:translate-x-0 transition-transform duration-200 ease-in-out`}
      >
        <ul className="mt-1 mb-1 space-y-1"> 
          <li className="p-3 hover:bg-gray-400 rounded-md">My Profile</li> 
          <li className="p-3 hover:bg-gray-400 rounded-md">Home</li>
          <li className="p-3 hover:bg-gray-400 rounded-md">Bookings</li>
          <li className="p-3 hover:bg-gray-400 rounded-md">Active Services</li>
          <li className="p-3 hover:bg-gray-400 rounded-md">Services</li>
          <li className="p-3 hover:bg-gray-400 rounded-md">Complaints</li>
          <li className="p-3 hover:bg-gray-400 rounded-md">Message</li>
          <li className="p-3 hover:bg-gray-400 rounded-md">Settings</li>
          <li className="p-3 hover:bg-gray-400 rounded-md">Transaction</li>
          <li className="p-3 hover:bg-gray-400 rounded-md">History</li>
          <li className="p-3 hover:bg-gray-400 rounded-md">Help Center</li>
          <li className="p-3 hover:bg-gray-400 rounded-md">Terms & Conditions</li>
          <li className="p-3 hover:bg-gray-400 rounded-md">About Us</li>
          <li className="p-3 hover:bg-gray-400 rounded-md">Invite a Friend</li>
        </ul>
      </div>

      {/* Main content */}
      <div className="flex-1 p-8 bg-gray-100">

      </div>
    </div>
  );
};

export default Sidebar;
