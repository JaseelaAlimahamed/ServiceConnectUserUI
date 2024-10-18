import React from 'react';
import { FaShare, FaDownload, FaPrint } from 'react-icons/fa';

const DropdownMenu = ({ show, onClick }) => {
  return show ? (
    <div className="absolute right-5 top-12 bg-light-gray shadow-lg rounded-lg p-2 z-10">
      <button 
        onClick={() => onClick('Share')} 
        className="flex justify-between items-center p-2 hover:bg-primary rounded-lg w-full text-left"
      >
        <span>Share</span>
        <FaShare className="ml-2" />
      </button>
      <button 
        onClick={() => onClick('Download')} 
        className="flex justify-between items-center p-2 hover:bg-primary rounded-lg w-full text-left"
      >
        <span>Download</span>
        <FaDownload className="ml-2" />
      </button>
      <button 
        onClick={() => onClick('Print')} 
        className="flex justify-between items-center p-2 hover:bg-primary rounded-lg w-full text-left"
      >
        <span>Print</span>
        <FaPrint className="ml-2" />
      </button>
    </div>
  ) : null;
};

export default DropdownMenu;
