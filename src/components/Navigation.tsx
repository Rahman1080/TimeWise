import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Clock, Calendar, Bell, Settings as SettingsIcon } from 'lucide-react';

export function Navigation() {
  const location = useLocation();

  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">TimeWise</Link>
        <div className="flex gap-4">
          <Link to="/clock" className={`${location.pathname === '/clock' ? 'text-orange-500' : 'text-white'}`}>
            <Clock className="w-6 h-6" />
          </Link>
          <Link to="/calendar" className={`${location.pathname === '/calendar' ? 'text-blue-500' : 'text-white'}`}>
            <Calendar className="w-6 h-6" />
          </Link>
          <Link to="/add-reminder" className={`${location.pathname === '/add-reminder' ? 'text-orange-500' : 'text-white'}`}>
            <Bell className="w-6 h-6" />
          </Link>
          <Link to="/settings" className={`${location.pathname === '/settings' ? 'text-blue-500' : 'text-white'}`}>
            <SettingsIcon className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </nav>
  );
}