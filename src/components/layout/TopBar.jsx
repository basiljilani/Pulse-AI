import React from 'react';
import { BellIcon, UserCircleIcon, Bars3Icon } from '@heroicons/react/24/outline';
import { useLocation, useNavigate } from 'react-router-dom';
import ThemeToggle from '../shared/ThemeToggle';

export default function TopBar({ onMenuClick }) {
  const location = useLocation();
  const navigate = useNavigate();
  
  const getPageTitle = () => {
    const path = location.pathname.split('/')[1];
    return path.charAt(0).toUpperCase() + path.slice(1);
  };

  return (
    <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white dark:bg-gray-800 shadow">
      <div className="flex-1 px-4 flex justify-between">
        <div className="flex-1 flex items-center">
          <button
            onClick={onMenuClick}
            className="lg:hidden -ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white ml-2 lg:ml-0">
            {getPageTitle()}
          </h1>
        </div>
        <div className="ml-4 flex items-center space-x-4">
          <ThemeToggle />
          <button 
            onClick={() => navigate('/notifications')}
            className="rounded-full bg-white dark:bg-gray-700 p-1 text-gray-400 hover:text-gray-500 focus:outline-none"
          >
            <BellIcon className="h-6 w-6" />
          </button>
          <button 
            onClick={() => navigate('/profile')}
            className="flex rounded-full bg-purple-600 text-sm focus:outline-none"
          >
            <UserCircleIcon className="h-8 w-8 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}