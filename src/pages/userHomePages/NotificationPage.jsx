import React from 'react';
import Notification from '../../components/user/notificationsPageComponents/Notification';
import { BsFillCreditCardFill, BsFillBellFill } from 'react-icons/bs';
import { FaCheckCircle } from 'react-icons/fa';

// Dummy notifications data
const notificationsData = [
  {
    id: 1,
    title: 'New Category Course.!',
    description: 'New the 3D Design Course is Available...',
    icon: <BsFillBellFill />,
    date: 'Today',
  },
  {
    id: 2,
    title: 'Today’s Special Offers',
    description: 'You Have made a Course Payment.',
    icon: <FaCheckCircle />,
    date: 'Today',
  },
  {
    id: 3,
    title: 'Credit Card Connected.!',
    description: 'Credit Card has been Linked.!',
    icon: <BsFillCreditCardFill />,
    date: 'Yesterday',
  },
  {
    id: 4,
    title: 'Account Setup Successful.!',
    description: 'Your Account has been Created.',
    icon: <FaCheckCircle />,
    date: 'Nov 20, 2022',
  },
  
];

// Group notifications by date
const groupNotificationsByDate = (notifications) => {
  return notifications.reduce((acc, notification) => {
    if (!acc[notification.date]) {
      acc[notification.date] = [];
    }
    acc[notification.date].push(notification);
    return acc;
  }, {});
};

const NotificationsPage = () => {
  // Group notifications by date
  const groupedNotifications = groupNotificationsByDate(notificationsData);

  return (
<div className="p-6 lg:ml-24 bg-light-gray min-h-screen">      {/* Attach Navbar here */}
      <div>
        {/* Loop through each date group and display notifications */}
        {Object.entries(groupedNotifications).map(([date, notifications]) => (
          <div key={date}>
            {/* Date as the title */}
            <h3 className="text-lg font-semibold text-dark-gray mb-4">{date}</h3>
            <div className="space-y-4">
              {notifications.map((notification) => (
                <Notification
                  key={notification.id}
                  title={notification.title}
                  description={notification.description}
                  icon={notification.icon}
               
                />
              ))}
            </div>
            {/* Adding space between groups */}
            <div className="mt-6"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationsPage;
