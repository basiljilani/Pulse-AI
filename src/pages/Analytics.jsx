import React from 'react';
import { motion } from 'framer-motion';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Analytics() {
  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Savings',
        data: [65, 59, 80, 81, 56, 90],
        borderColor: 'rgb(124, 58, 237)',
        tension: 0.1,
      },
      {
        label: 'Investments',
        data: [28, 48, 40, 59, 86, 77],
        borderColor: 'rgb(139, 92, 246)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 gap-6 md:grid-cols-2"
      >
        {/* Financial Trends */}
        <div className="card md:col-span-2">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Financial Trends
          </h2>
          <div className="h-80">
            <Line data={lineChartData} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </div>

        {/* Key Metrics */}
        <div className="card">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Key Metrics
          </h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-300">Monthly Savings Rate</span>
              <span className="text-green-600 font-semibold">+12.5%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-300">Investment Returns</span>
              <span className="text-green-600 font-semibold">+8.3%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-300">Expense Ratio</span>
              <span className="text-red-600 font-semibold">-2.1%</span>
            </div>
          </div>
        </div>

        {/* Insights */}
        <div className="card">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            AI Insights
          </h2>
          <div className="space-y-4">
            <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <p className="text-gray-700 dark:text-gray-300">
                Your savings rate has improved by 12.5% compared to last month. Keep up the good work!
              </p>
            </div>
            <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <p className="text-gray-700 dark:text-gray-300">
                Consider increasing your emergency fund contributions to reach your goal faster.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}