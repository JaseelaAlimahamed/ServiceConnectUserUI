import React from 'react';

const RescheduleButton = ({ isActive }) => {
  return (
    <button
      className={`w-full h-16 ${isActive ? 'bg-dark-gray' : 'bg-dark2-gray'} text-primary mt-6 rounded-full text-sm md:text-base flex items-center justify-center`}
    >
      Reschedule Appointment
    </button>
  );
};

export default RescheduleButton;