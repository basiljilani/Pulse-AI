import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BellIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

export default function Notifications() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'Investment Opportunity',
      message: 'New investment opportunity matches your risk profile',
      date: '2024-02-15T10:00:00',
      read: false,
      type: 'investment'
    },
    {
      id: 2,
      title: 'Goal Achievement',
      message: "Congratulations! You've reached 75% of your emergency fund goal",
      date: '2024-02-14T15:30:00',
      read: true,
      type: 'achievement'
    },
    {
      id: 3,
      title: 'Budget Alert',
      message: 'Your monthly spending is approaching the budget limit',
      date: '2024-02-13T09:15:00',
      read: false,
      type: 'alert'
    }
  ]);

  const markAsRead = (id) => {
    setNotifications(notifications.map(notification =>
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({
      ...notification,
      read: true
    })));
  };

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'investment':
        return 'bg-green-100 text-green-600';
      case 'achievement':
        return 'bg-purple-100 text-purple-600';
      case 'alert':
        return 'bg-yellow-100 text-yellow-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Notifications</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {notifications.filter(n => !n.read).length} unread notifications
            </p>
          </div>
          <button 
            onClick={markAllAsRead}
            className="btn-secondary"
          >
            Mark all as read
          </button>
        </div>

        <div className="space-y-4">
          {notifications.map((notification) => (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`card cursor-pointer transition-colors ${
                notification.read ? 'bg-gray-50 dark:bg-gray-800/50' : 'bg-white dark:bg-gray-800'
              }`}
              onClick={() => markAsRead(notification.id)}
            >
              <div className="flex items-start space-x-4">
                <div className={`p-2 rounded-full ${getNotificationIcon(notification.type)}`}>
                  <BellIcon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h3 className={`font-medium ${
                      notification.read ? 'text-gray-600' : 'text-gray-900'
                    } dark:text-white`}>
                      {notification.title}
                    </h3>
                    <span className="text-sm text-gray-500">
                      {new Date(notification.date).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">
                    {notification.message}
                  </p>
                </div>
                {notification.read && (
                  <CheckCircleIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}