import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useParams, useNavigate } from 'react-router-dom';

const ComplaintButton = () => {
  const { id } = useParams(); // Extracting id from URL
  const navigate = useNavigate(); // Hook for navigation

  const handleButtonClick = () => {
    navigate(`/complaint-submit/${id}`); // Navigating to /complaintform/:id
  };

  return (
    <button
      onClick={handleButtonClick}
      className="w-full bg-red-950 text-primary py-3 mt-5 rounded-full text-sm md:text-base flex items-center justify-between px-4"
    >
      <span className="flex-grow text-center">Raise a Complaint</span>
      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center ml-2">
        {/* White circle */}
        <FaArrowRight className="text-red-950 w-4 h-4" /> {/* Arrow icon in the center */}
      </div>
    </button>
  );
};

export default ComplaintButton;
