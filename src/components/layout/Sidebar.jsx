import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  HomeIcon, ChartBarIcon, DocumentTextIcon, 
  UserCircleIcon, BellIcon, Cog6ToothIcon 
} from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  { name: 'Analytics', href: '/analytics', icon: ChartBarIcon },
  { name: 'Decisions', href: '/decisions', icon: DocumentTextIcon },
  { name: 'Profile', href: '/profile', icon: UserCircleIcon },
  { name: 'Notifications', href: '/notifications', icon: BellIcon },
  { name: 'Settings', href: '/settings', icon: Cog6ToothIcon },
];

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex flex-grow flex-col overflow-y-auto bg-white dark:bg-gray-800 shadow-lg">
          <SidebarContent />
        </div>
      </div>

      {/* Mobile Sidebar */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? 0 : '-100%' }}
        transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
        className="fixed inset-y-0 left-0 flex w-64 flex-col lg:hidden z-30"
      >
        <div className="flex flex-grow flex-col overflow-y-auto bg-white dark:bg-gray-800 shadow-lg">
          <SidebarContent onLinkClick={onClose} />
        </div>
      </motion.div>
    </>
  );
}

function SidebarContent({ onLinkClick }) {
  return (
    <>
      <div className="flex h-16 flex-shrink-0 items-center px-4">
        <div className="h-10 w-10 bg-purple-600 rounded-lg flex items-center justify-center">
          <span className="text-xl text-white font-bold">P</span>
        </div>
        <span className="ml-3 text-xl font-semibold text-gray-900 dark:text-white">Pulse AI</span>
      </div>
      <nav className="mt-8 flex-1 space-y-1 px-2">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            onClick={onLinkClick}
            className={({ isActive }) =>
              `group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                isActive
                  ? 'bg-purple-50 dark:bg-purple-900/50 text-purple-600 dark:text-purple-200'
                  : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`
            }
          >
            <item.icon className="mr-3 h-5 w-5 flex-shrink-0" aria-hidden="true" />
            {item.name}
          </NavLink>
        ))}
      </nav>
    </>
  );
}