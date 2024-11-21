import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from 'react-icons/fa';

const AvailabilitySection = ({ onInputChange }) => {
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [fromTime, setFromTime] = useState('');
  const [toTime, setToTime] = useState('');

  // Handle From Date change and notify parent
  const handleFromDateChange = (date) => {
    setFromDate(date);
    onInputChange('fromDate', date); 
  };

  // Handle To Date change and notify parent
  const handleToDateChange = (date) => {
    setToDate(date);
    onInputChange('toDate', date); 
  };

  // Handle From Time change and notify parent
  const handleFromTimeChange = (event) => {
    const time = event.target.value;
    setFromTime(time);
    onInputChange('fromTime', time); 
  };

  // Handle To Time change and notify parent
  const handleToTimeChange = (event) => {
    const time = event.target.value;
    setToTime(time);
    onInputChange('toTime', time); 
  };

  return (
    <div className="mb-4">
      <label className="block text-secondary font-semibold text-sm md:text-base">Availability</label>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* From Date and Time */}
        <div className="flex flex-col">
          <label className="block text-secondary text-sm mb-1">From</label>
          <div className="flex items-center space-x-4">
            <div className="relative flex items-center w-full bg-primary rounded-lg shadow p-3">
              <span className="absolute top-1 left-3 text-xs text-medium-gray">Date</span>
              <DatePicker
                selected={fromDate}
                onChange={handleFromDateChange}
                dateFormat="MM/dd/yyyy"
                className="w-full pl-3 pr-10 bg-transparent outline-none text-sm text-light-gray"
                placeholderText="Select Date"
              />
              <FaCalendarAlt className="absolute right-3 text-medium-gray" />
            </div>
            <div className="relative flex items-center w-full bg-primary rounded-lg shadow p-3">
              <span className="absolute top-1 left-3 text-xs text-medium-gray">Time</span>
              <input
                type="time"
                value={fromTime}
                onChange={handleFromTimeChange} 
                className="w-full pl-3 pr-10 bg-transparent outline-none text-sm text-light-gray"
              />
            </div>
          </div>
        </div>

        {/* To Date and Time */}
        <div className="flex flex-col">
          <label className="block text-secondary text-sm mb-1">To</label>
          <div className="flex items-center space-x-4">
            <div className="relative flex items-center w-full bg-primary rounded-lg shadow p-3">
              <span className="absolute top-1 left-3 text-xs text-medium-gray">Date</span>
              <DatePicker
                selected={toDate}
                onChange={handleToDateChange}
                dateFormat="MM/dd/yyyy"
                className="w-full pl-3 pr-10 bg-transparent outline-none text-sm text-light-gray"
                placeholderText="Select Date"
              />
              <FaCalendarAlt className="absolute right-3 text-medium-gray" />
            </div>
            <div className="relative flex items-center w-full bg-primary rounded-lg shadow p-3">
              <span className="absolute top-1 left-3 text-xs text-medium-gray">Time</span>
              <input
                type="time"
                value={toTime}
                onChange={handleToTimeChange} 
                className="w-full pl-3 pr-10 bg-transparent outline-none text-sm text-light-gray"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailabilitySection;