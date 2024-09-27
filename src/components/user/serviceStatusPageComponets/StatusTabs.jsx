import React from 'react';
import { useNavigate } from 'react-router-dom';

const StatusTabs = ({ activeTab, setActiveTab }) => {
  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    
    if (tab === 'ongoing') {
      navigate('/active-services'); 
    } else if (tab === 'completed') {
      navigate('/services'); 
    }
  };

  return (
    <div className="flex justify-center items-center w-full mb-6">
      <div className="flex w-full md:w-1/2 rounded-full bg-medium-gray p-1">
        <button
          className={`w-1/2 px-6 py-2 text-lg font-bold rounded-full transition-colors duration-300 focus:outline-none ${activeTab === 'ongoing'
              ? 'bg-white text-fuchsia-950 shadow-md'
              : 'bg-transparent text-white'
            }`}
            onClick={() => handleTabClick('ongoing')}
        >
          Ongoing
        </button>
        <button
          className={`w-1/2 px-6 py-2 text-lg font-bold rounded-full transition-colors duration-300 focus:outline-none ${activeTab === 'completed'
              ? 'bg-white text-fuchsia-950 shadow-md'
              : 'bg-transparent text-white'
            }`}
          onClick={() => handleTabClick('completed')}
        >
          Completed
        </button>
      </div>
    </div>
  );
};

export default StatusTabs;
