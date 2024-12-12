import React from 'react';
import { motion } from 'framer-motion';

export default function ChatMessage({ message, isAI }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex ${isAI ? 'justify-start' : 'justify-end'} items-end space-x-2`}
    >
      {isAI && (
        <div className="w-8 h-8 rounded-lg bg-purple-600 flex-shrink-0 flex items-center justify-center">
          <span className="text-sm text-white font-bold">P</span>
        </div>
      )}
      <div
        className={`max-w-[80%] p-4 rounded-2xl ${
          isAI 
            ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white' 
            : 'bg-purple-600 text-white ml-auto'
        }`}
      >
        <p className="text-sm sm:text-base">{message.text}</p>
      </div>
    </motion.div>
  );
}