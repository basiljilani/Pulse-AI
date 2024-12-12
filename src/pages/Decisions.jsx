import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PlusIcon } from '@heroicons/react/24/outline';

export default function Decisions() {
  const [decisions, setDecisions] = useState([
    {
      id: 1,
      title: 'Investment Portfolio Rebalancing',
      date: '2024-02-15',
      status: 'Completed',
      impact: 'High',
      category: 'Investment'
    },
    {
      id: 2,
      title: 'Emergency Fund Contribution',
      date: '2024-02-10',
      status: 'In Progress',
      impact: 'Medium',
      category: 'Savings'
    }
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'In Progress':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getImpactColor = (impact) => {
    switch (impact) {
      case 'High':
        return 'text-red-600';
      case 'Medium':
        return 'text-yellow-600';
      default:
        return 'text-green-600';
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
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Financial Decisions</h1>
          <button className="btn-primary flex items-center space-x-2">
            <PlusIcon className="h-5 w-5" />
            <span>New Decision</span>
          </button>
        </div>

        {/* Decisions List */}
        <div className="space-y-4">
          {decisions.map((decision) => (
            <motion.div
              key={decision.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="card hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    {decision.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(decision.date).toLocaleDateString()}
                  </p>
                </div>
                <span className={`px-2 py-1 rounded-full text-sm ${getStatusColor(decision.status)}`}>
                  {decision.status}
                </span>
              </div>
              <div className="mt-4 flex items-center space-x-4">
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  Category: {decision.category}
                </span>
                <span className={`text-sm font-medium ${getImpactColor(decision.impact)}`}>
                  Impact: {decision.impact}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}