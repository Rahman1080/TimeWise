import React from 'react';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import {
  Clock,
  Calendar,
  Bell,
  Settings as SettingsIcon,
  StickyNote,
} from 'lucide-react';

export function Dashboard() {
  const navigate = useNavigate();

  const menuItems = [
    {
      title: 'Add Reminder',
      icon: <Bell className="w-8 h-8 text-orange-500" />,
      path: '/add-reminder',
      color: 'bg-orange-100 hover:bg-orange-200',
    },
    {
      title: 'Calendar',
      icon: <Calendar className="w-8 h-8 text-blue-500" />,
      path: '/calendar',
      color: 'bg-blue-100 hover:bg-blue-200',
    },
    {
      title: 'Clock',
      icon: <Clock className="w-8 h-8 text-orange-500" />,
      path: '/clock',
      color: 'bg-orange-100 hover:bg-orange-200',
    },
    {
      title: 'Notes',
      icon: <StickyNote className="w-8 h-8 text-blue-500" />,
      path: '/notes',
      color: 'bg-blue-100 hover:bg-blue-200',
    },
    {
      title: 'Settings',
      icon: <SettingsIcon className="w-8 h-8 text-orange-500" />,
      path: '/settings',
      color: 'bg-orange-100 hover:bg-orange-200',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-black rounded-lg p-6 text-white">
        <h2 className="text-2xl font-bold">Welcome back!</h2>
        <p className="text-lg">{format(new Date(), 'EEEE, MMMM do, yyyy')}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {menuItems.map((item) => (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`${item.color} p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer`}
          >
            <div className="flex flex-col items-center gap-4">
              {item.icon}
              <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}