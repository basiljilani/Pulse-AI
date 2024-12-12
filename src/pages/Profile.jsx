import React from 'react';
import { motion } from 'framer-motion';
import SubscriptionCard from '../components/profile/SubscriptionCard';

export default function Profile() {
  const profile = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    subscription: 'Basic',
  };

  const subscriptionPlans = [
    {
      plan: 'Basic',
      price: '0',
      features: [
        'Basic financial insights',
        'Limited decision support',
        'Standard reports',
      ],
    },
    {
      plan: 'Pro',
      price: '19.99',
      features: [
        'Advanced AI insights',
        'Unlimited decision support',
        'Custom reports',
        'Priority support',
        'Investment recommendations',
      ],
    },
    {
      plan: 'Enterprise',
      price: '49.99',
      features: [
        'All Pro features',
        'Custom AI models',
        'API access',
        'Dedicated account manager',
        'Custom integrations',
        'Team collaboration',
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        {/* Profile Header */}
        <div className="card">
          <div className="flex items-center space-x-4">
            <div className="h-16 w-16 bg-purple-600 rounded-full flex items-center justify-center">
              <span className="text-2xl text-white font-bold">
                {profile.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {profile.name}
              </h1>
              <p className="text-gray-600 dark:text-gray-300">{profile.email}</p>
            </div>
          </div>
        </div>

        {/* Subscription Section */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Subscription Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {subscriptionPlans.map((plan) => (
              <SubscriptionCard
                key={plan.plan}
                {...plan}
                isActive={plan.plan === profile.subscription}
                onSelect={() => console.log(`Selected ${plan.plan} plan`)}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}