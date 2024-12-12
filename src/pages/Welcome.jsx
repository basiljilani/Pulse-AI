import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PulseLogo from '../components/shared/PulseLogo';

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md mx-auto"
      >
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <PulseLogo />
        </div>

        {/* Welcome Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Welcome to Pulse AI
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Your Personal Financial Decision Assistant
          </p>
        </motion.div>

        {/* Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="card mb-8"
        >
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Make smarter financial decisions
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Get AI-powered insights to help you achieve your financial goals and secure your future.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="space-y-4"
        >
          <button
            onClick={() => navigate('/assistant')}
            className="btn-primary w-full"
          >
            Get Started
          </button>
          <button
            onClick={() => navigate('/dashboard')}
            className="btn-secondary w-full"
          >
            I already have an account
          </button>
        </motion.div>

        {/* Terms */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400"
        >
          By continuing, you agree to our{' '}
          <a href="#" className="text-purple-600 hover:text-purple-500">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="#" className="text-purple-600 hover:text-purple-500">
            Privacy Policy
          </a>
        </motion.p>
      </motion.div>
    </div>
  );
}