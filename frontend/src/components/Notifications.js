import React, { useState } from 'react';

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, text: 'Jane Doe liked your post.' },
    { id: 2, text: 'John Smith started following you.' },
  ]);

  return (
    <div className="bg-white rounded-lg shadow p-4 mt-4">
      <h2 className="text-lg font-semibold mb-4">Notifications</h2>
      <ul className="space-y-2 text-sm text-gray-700">
        {notifications.map((notification) => (
          <li key={notification.id} className="border-b border-gray-200 pb-2">
            {notification.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
