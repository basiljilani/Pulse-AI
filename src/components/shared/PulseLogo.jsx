import React from 'react';
import { motion } from 'framer-motion';

export default function PulseLogo() {
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-24 h-24"
    >
      {/* Pulse Rings */}
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute inset-0 rounded-full border-4 border-purple-600"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.8, 0.3, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}
      
      {/* Center Circle with Heartbeat Line */}
      <motion.div
        className="absolute inset-0 bg-purple-600 rounded-full flex items-center justify-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, type: "spring" }}
      >
        <svg
          viewBox="0 0 100 20"
          className="w-16 h-8"
        >
          <motion.path
            d="M 0,10 L 20,10 L 30,3 L 40,17 L 50,10 L 60,10 L 70,3 L 80,17 L 90,10 L 100,10"
            fill="none"
            stroke="white"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}