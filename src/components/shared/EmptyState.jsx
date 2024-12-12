import React from 'react';
import { motion } from 'framer-motion';

export default function EmptyState({ title, description, action }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-center py-12"
    >
      <div className="rounded-full bg-purple-100 p-3 mx-auto w-fit">
        <div className="rounded-full bg-purple-200 p-3">
          <div className="rounded-full bg-purple-300 p-3">
            {action.icon && <action.icon className="h-6 w-6 text-purple-600" />}
          </div>
        </div>
      </div>
      <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">{title}</h3>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{description}</p>
      {action.button && (
        <div className="mt-6">
          {action.button}
        </div>
      )}
    </motion.div>
  );
}