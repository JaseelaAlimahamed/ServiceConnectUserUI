import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

const AvailabilitySection = ({ fromDate, fromTime, toDate, toTime }) => {
  return (
    <div className="mb-4 ml-2">
      <label className="block text-secondary font-semibold text-sm md:text-base">Availability</label>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> 
        {/* From Date and Time */}
        <div className="flex flex-col">
          <label className="block text-secondary text-md font-semibold mb-1">From</label>
          <div className="flex items-center space-x-4">
            <div className="relative flex items-center w-full bg-primary rounded-lg shadow p-3">
              <span className="absolute top-1 left-3 text-xs text-medium-gray">Date</span>
              <span className="w-full pl-3 pt-3 bg-transparent outline-none text-md font-semibold text-medium-gray">
                {fromDate}
              </span>
              <FaCalendarAlt className="absolute right-3 text-medium-gray" />
            </div>
            <div className="relative flex items-center w-full bg-primary rounded-lg shadow p-3">
              <span className="absolute top-1 left-3 text-xs text-medium-gray">Time</span>
              <span className="w-full pl-3 pt-3 bg-transparent outline-none text-md font-semibold text-medium-gray">
                {fromTime}
              </span>
            </div>
          </div>
        </div>

        {/* To Date and Time */}
        <div className="flex flex-col">
          <label className="block text-secondary text-md font-semibold mb-1">To</label>
          <div className="flex items-center space-x-4">
            <div className="relative flex items-center w-full bg-primary rounded-lg shadow p-3">
              <span className="absolute top-1 left-3 text-xs text-medium-gray">Date</span>
              <span className="w-full pl-3 pt-3 bg-transparent outline-none text-md font-semibold text-medium-gray">
                {toDate}
              </span>
              <FaCalendarAlt className="absolute right-3 text-medium-gray" />
            </div>
            <div className="relative flex items-center w-full bg-primary rounded-lg shadow p-3">
              <span className="absolute top-1 left-3 text-xs text-medium-gray">Time</span>
              <span className="w-full pl-3 pt-3 bg-transparent outline-none text-md font-semibold text-medium-gray">
                {toTime}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailabilitySection;
