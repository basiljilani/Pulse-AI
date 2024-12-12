import React from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';

export default function SubscriptionCard({ plan, isActive, features, price, onSelect }) {
  return (
    <div className={`card ${
      isActive ? 'ring-2 ring-purple-600' : ''
    }`}>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{plan}</h3>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            {isActive ? 'Current Plan' : 'Upgrade for more features'}
          </p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-gray-900 dark:text-white">${price}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">/month</p>
        </div>
      </div>

      <ul className="mt-6 space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mr-2" />
            <span className="text-gray-600 dark:text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={onSelect}
        className={`mt-6 w-full ${
          isActive 
            ? 'btn-secondary' 
            : 'btn-primary'
        }`}
      >
        {isActive ? 'Current Plan' : 'Upgrade Plan'}
      </button>
    </div>
  );
}