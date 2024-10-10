import React from "react";

const Notification = ({ title, description, icon,  }) => {
  return (
    <div class="bg-primary shadow-lg rounded-lg py-6 px-4 mb-4 flex items-start">
      <div className="mr-4">
        {/* Icon */}
        <div className="bg-light-gray p-3 rounded-full">{icon}</div>
      </div>
      <div>
        {/* Notification Content */}
        <h3 className="text-lg font-default font-bold text-dark-gray font-bold">{title}</h3>
        <p className="text-sm text-medium-gray font-semibold">{description}</p>
        
      </div>
    </div>
  );
};

export default Notification;
 