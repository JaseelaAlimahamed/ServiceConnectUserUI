import React, { useState } from "react";

const notificationData = [
  { id: 1, label: "Special Offers" },
  { id: 2, label: "Sound" },
  { id: 3, label: "Vibrate" },
  { id: 4, label: "General Notification" },
  { id: 5, label: "Promo & Discount" },
  { id: 6, label: "Payment Options" },
  { id: 7, label: "App Update" },
  { id: 8, label: "New Service Available" },
  { id: 9, label: "New Tips Available" },
];

const NotificationSettingsComponent = () => {
  const [enabledNotifications, setEnabledNotifications] = useState(
    Array(notificationData.length).fill(false)
  );
  console.log(enabledNotifications);

  // Handle toggling for individual notifications
  const handleToggle = (index) => {
    setEnabledNotifications((currentState) => {
      const newState = [...currentState];
      newState[index] = !newState[index];
      return newState;
    });
  };
  return (
    <div className="bg-primary h-screen p-6">
      {notificationData.map((noti, index) => (
        <div
          key={index}
          className="bg-primary h-16 flex items-center justify-between 
                 p-4 sm:p-6 md:p-8 mx-2
           sm:mx-16 md:mx-20 lg:mx-40 xl:mx-64 hover:outline-none focus:outline-none"
        >
          <h2 className="text-sm sm:text-md md:text-lg lg:text-xl font-medium pl-3 pr-3">
            {noti.label}
          </h2>
          <button
            onClick={() => handleToggle(index)}
            className={`${enabledNotifications[index] ? 'bg-light-gray' : 'bg-light-gray'
              } border-solid border-2 border-light-gray rounded-full w-12 h-7 md:w-14 md:h-8 lg:w-14 lg:h-8
     flex items-center transition duration-300 ease-in-out focus:outline-none hover:border-light-gray`}
          >
            <div
              className={`transform ${enabledNotifications[index] ? 'translate-x-6' : 'translate-x-0'
                } bg-dark-gray w-5 h-5 md:w-6 md:h-6 rounded-full shadow-md transition duration-300 ease-in-out`}
            ></div>
          </button>

        </div>
      ))}
    </div>
  );
}

export default NotificationSettingsComponent
