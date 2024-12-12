import React from 'react';
import { motion } from 'framer-motion';
import { 
  CurrencyDollarIcon, 
  ChartBarIcon, 
  ArrowTrendingUpIcon,
  SparklesIcon,
  BanknotesIcon,
  ClockIcon
} from '@heroicons/react/24/outline';
import StatCard from '../components/shared/StatCard';
import { Doughnut, Line } from 'react-chartjs-2';
import { 
  Chart as ChartJS, 
  ArcElement, 
  Tooltip, 
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler
} from 'chart.js';

ChartJS.register(
  ArcElement, 
  Tooltip, 
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler
);

export default function Dashboard() {
  const chartData = {
    labels: ['Savings', 'Investments', 'Expenses'],
    datasets: [{
      data: [45, 30, 25],
      backgroundColor: [
        'rgba(124, 58, 237, 0.8)',
        'rgba(139, 92, 246, 0.8)',
        'rgba(167, 139, 250, 0.8)',
      ],
      borderColor: [
        'rgba(124, 58, 237, 1)',
        'rgba(139, 92, 246, 1)',
        'rgba(167, 139, 250, 1)',
      ],
      borderWidth: 1,
    }],
  };

  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Portfolio Value',
      data: [30000, 34000, 32000, 37000, 39000, 42000],
      fill: true,
      borderColor: 'rgb(124, 58, 237)',
      backgroundColor: 'rgba(124, 58, 237, 0.1)',
      tension: 0.4,
    }],
  };

  const upcomingPayments = [
    { id: 1, name: 'Mortgage Payment', amount: 2000, due: '2024-02-20' },
    { id: 2, name: 'Car Insurance', amount: 150, due: '2024-02-25' },
    { id: 3, name: 'Utility Bills', amount: 200, due: '2024-02-28' },
  ];

  const recentTransactions = [
    { id: 1, name: 'Grocery Shopping', amount: -120, date: '2024-02-15', category: 'Expenses' },
    { id: 2, name: 'Salary Deposit', amount: 5000, date: '2024-02-14', category: 'Income' },
    { id: 3, name: 'Investment Transfer', amount: -1000, date: '2024-02-13', category: 'Investment' },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard
          title="Total Balance"
          value="$24,563"
          change={8.2}
          icon={CurrencyDollarIcon}
        />
        <StatCard
          title="Monthly Savings"
          value="$2,845"
          change={12.5}
          icon={ChartBarIcon}
        />
        <StatCard
          title="Investment Returns"
          value="$4,125"
          change={-2.3}
          icon={ArrowTrendingUpIcon}
        />
      </div>

      {/* Main Charts Row */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card"
        >
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Portfolio Growth
          </h2>
          <div className="h-64">
            <Line 
              data={lineChartData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    display: false
                  }
                },
                scales: {
                  y: {
                    beginAtZero: true,
                    grid: {
                      display: false
                    }
                  },
                  x: {
                    grid: {
                      display: false
                    }
                  }
                }
              }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card"
        >
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Asset Allocation
          </h2>
          <div className="h-64">
            <Doughnut 
              data={chartData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                cutout: '70%',
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Additional Information Row */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Upcoming Payments */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Upcoming Payments
            </h2>
            <ClockIcon className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {upcomingPayments.map((payment) => (
              <div key={payment.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">{payment.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Due: {new Date(payment.due).toLocaleDateString()}</p>
                </div>
                <span className="text-lg font-semibold text-gray-900 dark:text-white">
                  ${payment.amount.toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recent Transactions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Recent Transactions
            </h2>
            <BanknotesIcon className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {recentTransactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">{transaction.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{transaction.category}</p>
                </div>
                <span className={`text-lg font-semibold ${
                  transaction.amount >= 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {transaction.amount >= 0 ? '+' : ''}{transaction.amount.toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* AI Insights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card bg-gradient-to-br from-purple-500 to-purple-600"
      >
        <div className="flex items-start space-x-4">
          <div className="p-2 bg-white/20 rounded-lg">
            <SparklesIcon className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white mb-2">AI Insights</h2>
            <p className="text-purple-50">
              Your savings rate has increased by 12.5% this month. Consider investing the extra savings in your retirement account to maximize long-term growth.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}