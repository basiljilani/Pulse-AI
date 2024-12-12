import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import FinancialAssistant from './pages/FinancialAssistant';
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import Decisions from './pages/Decisions';
import Profile from './pages/Profile';
import Notifications from './pages/Notifications';
import Settings from './pages/Settings';
import DashboardLayout from './components/layout/DashboardLayout';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/assistant" element={<FinancialAssistant />} />
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/decisions" element={<Decisions />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}