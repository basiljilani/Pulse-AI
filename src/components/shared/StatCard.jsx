import React from 'react';
import { motion } from 'framer-motion';

export default function StatCard({ title, value, change, icon: Icon }) {
  const isPositive = change >= 0;
  
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="card"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-400">{title}</p>
          <h3 className="mt-2 text-2xl font-semibold text-gray-900 dark:text-white">{value}</h3>
        </div>
        {Icon && (
          <div className="p-3 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
            <Icon className="h-6 w-6 text-purple-600" />
          </div>
        )}
      </div>
      {change !== undefined && (
        <div className={`mt-2 flex items-center text-sm ${
          isPositive ? 'text-green-600' : 'text-red-600'
        }`}>
          <span>{isPositive ? '↑' : '↓'} {Math.abs(change)}%</span>
          <span className="ml-2 text-gray-600 dark:text-gray-400">from last month</span>
        </div>
      )}
    </motion.div>
  );
}