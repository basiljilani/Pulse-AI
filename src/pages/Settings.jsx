import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import SettingsSection from '../components/settings/SettingsSection';
import ToggleSetting from '../components/settings/ToggleSetting';

export default function Settings() {
  const { darkMode, toggleDarkMode } = useTheme();
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    weeklyReports: true,
    soundEnabled: true,
    autoInvest: false,
    twoFactorAuth: true,
  });

  const updateSetting = (key) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Settings</h1>

        <SettingsSection 
          title="Appearance" 
          description="Customize how Pulse AI looks on your device"
        >
          <ToggleSetting
            label="Dark Mode"
            description="Enable dark mode for a better viewing experience in low light"
            enabled={darkMode}
            onChange={toggleDarkMode}
          />
        </SettingsSection>

        <SettingsSection 
          title="Notifications" 
          description="Manage how you receive updates and alerts"
        >
          <ToggleSetting
            label="Email Notifications"
            description="Receive important updates and insights via email"
            enabled={settings.emailNotifications}
            onChange={() => updateSetting('emailNotifications')}
          />
          <ToggleSetting
            label="Push Notifications"
            description="Get real-time alerts on your device"
            enabled={settings.pushNotifications}
            onChange={() => updateSetting('pushNotifications')}
          />
          <ToggleSetting
            label="Weekly Reports"
            description="Receive detailed financial reports every week"
            enabled={settings.weeklyReports}
            onChange={() => updateSetting('weeklyReports')}
          />
        </SettingsSection>

        <SettingsSection 
          title="Security" 
          description="Configure your account security preferences"
        >
          <ToggleSetting
            label="Two-Factor Authentication"
            description="Add an extra layer of security to your account"
            enabled={settings.twoFactorAuth}
            onChange={() => updateSetting('twoFactorAuth')}
          />
        </SettingsSection>

        <SettingsSection 
          title="Automation" 
          description="Configure automated financial actions"
        >
          <ToggleSetting
            label="Auto-Invest"
            description="Automatically invest based on AI recommendations"
            enabled={settings.autoInvest}
            onChange={() => updateSetting('autoInvest')}
          />
        </SettingsSection>
      </motion.div>
    </div>
  );
}