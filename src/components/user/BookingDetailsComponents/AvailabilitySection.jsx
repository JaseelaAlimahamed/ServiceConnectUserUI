import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from 'react-icons/fa';


const AvailabilitySection = ({ onInputChange, availability_from, availability_to  }) => {

  const fromDate = new Date(availability_from);
  const toDate = new Date(availability_to);

  const formattedFromDate = fromDate.toLocaleDateString('en-US', { timeZone: 'UTC' });
  const formattedFromTime = fromDate.toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit', 
    timeZone: 'UTC', 
    hour12: false // Set to true if you prefer 12-hour format
  });
  const formattedToDate = toDate.toLocaleDateString('en-US', { timeZone: 'UTC' });
  const formattedToTime = toDate.toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit', 
    timeZone: 'UTC', 
    hour12: false // Set to true if you prefer 12-hour format
  });

  return (
    <div className="mb-4">
      <label className="block text-secondary font-semibold text-sm md:text-base">Availability</label>

      <div className="flex flex-col gap-4">
        {/* From Date and Time */}
        <div className="flex flex-col">
          <label className="block text-secondary text-sm mb-1">From</label>
          <div className="flex items-center space-x-4">
            <div className=" flex flex-row items-center w-full bg-primary rounded-lg shadow p-3">
              <span className=" top-1 left-3 text-xs text-medium-gray">Date</span>
              <p
                className="w-full pl-3 pr-10 bg-transparent outline-none text-sm text-medium-gray"
                
              >{formattedFromDate}</p>
              <FaCalendarAlt className="  text-medium-gray" />
            </div>
            <div className=" flex items-center w-full bg-primary rounded-lg shadow p-3">
              <span className=" top-1 left-3 text-xs text-medium-gray">Time</span>
              <p
                className="w-full pl-3 pr-10 bg-transparent outline-none text-sm text-medium-gray"
              >{formattedFromTime}</p>
            </div>
          </div>
        </div>

        {/* To Date and Time */}
        <div className="flex flex-col">
          <label className="block text-secondary text-sm mb-1">To</label>
          <div className="flex items-center space-x-4">
            <div className=" flex items-center w-full bg-primary rounded-lg shadow p-3">
              <span className=" top-1 left-3 text-xs text-medium-gray">Date</span>
              <p
                className="w-full pl-3 pr-10 bg-transparent outline-none text-sm text-medium-gray"
              >{formattedToDate}</p>
              <FaCalendarAlt className=" right-3 text-medium-gray" />
            </div>
            <div className=" flex items-center w-full bg-primary rounded-lg shadow p-3">
              <span className=" top-1 left-3 text-xs text-medium-gray">Time</span>
              <p
                className="w-full pl-3 pr-10 bg-transparent outline-none text-sm text-medium-gray"
              >{formattedToTime}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailabilitySection;