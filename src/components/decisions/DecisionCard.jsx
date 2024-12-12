import React from 'react';
import { motion } from 'framer-motion';

export default function DecisionCard({ decision }) {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'in progress':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="card cursor-pointer"
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
            {decision.title}
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            {new Date(decision.date).toLocaleDateString()}
          </p>
        </div>
        <span className={`px-2 py-1 text-sm rounded-full ${getStatusColor(decision.status)}`}>
          {decision.status}
        </span>
      </div>
      <div className="mt-4 flex items-center space-x-4">
        <span className="text-sm text-gray-600 dark:text-gray-400">
          Category: {decision.category}
        </span>
        <span className="text-sm text-gray-600 dark:text-gray-400">
          Impact: {decision.impact}
        </span>
      </div>
    </motion.div>
  );
}