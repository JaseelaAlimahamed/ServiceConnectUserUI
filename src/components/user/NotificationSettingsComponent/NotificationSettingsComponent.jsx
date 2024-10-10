import React, { useState } from "react";

const NotificationSettingsComponent = () => {
    const [enabledNotifications, setEnabledNotifications] = useState(
        Array(9).fill(false) 
      );
      console.log(enabledNotifications);
    
      // API call to send the updated notification setting to the backend
      const updateNotificationSetting = async (index, newState) => {
        try {
          const response = await fetch("https://your-api-url.com/notifications", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              notificationId: index, 
              enabled: newState, 
            }),
          });
    
          const result = await response.json(); 
          console.log(`Notification ${index} updated:`, result); 
        } catch (error) {
          console.error("Error updating notification:", error);
        }
      };
    
      // Handle toggle for individual notifications
      const handleEnable = (index) => {
        setEnabledNotifications((prevStates) => {
          const newStates = [...prevStates];
          newStates[index] = !newStates[index]; 
    
          // Call the API to update the notification setting on the server
          updateNotificationSetting(index, newStates[index]);
    
          return newStates;
        });
      };
    
      // Define data as an array of notification objects
      const data = [
        { notification: "Special Offers" },
        { notification: "Sound" },
        { notification: "Vibrate" },
        { notification: "General Notification" },
        { notification: "Promo & Discount" },
        { notification: "Payment Options" },
        { notification: "App Update" },
        { notification: "New Service Available" },
        { notification: "New Tips Available" },
      ];
    
      return (
        <div className="bg-primary h-screen">
          {data.map((noti, index) => (
            <div
              key={index}
              className="bg-primary h-16 flex items-center justify-between 
                       p-4 sm:p-6 md:p-8 
                 sm:mx-4 md:mx-20 lg:mx-40 xl:mx-64 hover:outline-none focus:outline-none"
            >
              <h2 className="text-md font-medium pl-3 pr-3">{noti.notification}</h2>
    
              <button
                onClick={() => handleEnable(index)}
                className="bg-toggle-clr border-solid border-2 border-light-gray rounded-full w-12 h-7 flex items-center pl-1 focus:outline-none hover:outline-none hover:border-light-gray"
              >
                <div
                  className={
                    enabledNotifications[index]
                      ? "bg-dark-gray w-5 h-5 rounded-full"
                      : ""
                  }
                ></div>
              </button>
            </div>
          ))}
        </div>
      );
}

export default NotificationSettingsComponent
