import React from 'react';

export default function SettingsSection({ title, description, children }) {
  return (
    <div className="card">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h2>
      {description && (
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{description}</p>
      )}
      <div className="space-y-4">
        {children}
      </div>
    </div>
  );
}