import React from 'react';
import { useStore } from '../../store/useStore';
import { Moon, Sun, Volume2, Vibrate } from 'lucide-react';
import { BackButton } from '../common/BackButton';

export function Settings() {
  const { settings, updateSettings } = useStore();

  return (
    <div>
      <BackButton />
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Settings</h2>
        
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {settings.theme === 'dark' ? (
                <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              ) : (
                <Sun className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              )}
              <span className="text-gray-700 dark:text-gray-200">Theme</span>
            </div>
            <button
              onClick={() => updateSettings({ theme: settings.theme === 'dark' ? 'light' : 'dark' })}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              {settings.theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Volume2 className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              <span className="text-gray-700 dark:text-gray-200">Sound</span>
            </div>
            <button
              onClick={() => updateSettings({ 
                notifications: { 
                  ...settings.notifications, 
                  sound: !settings.notifications.sound 
                } 
              })}
              className={`px-4 py-2 ${
                settings.notifications.sound ? 'bg-blue-500' : 'bg-gray-400'
              } text-white rounded-lg hover:opacity-90`}
            >
              {settings.notifications.sound ? 'On' : 'Off'}
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Vibrate className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              <span className="text-gray-700 dark:text-gray-200">Vibration</span>
            </div>
            <button
              onClick={() => updateSettings({ 
                notifications: { 
                  ...settings.notifications, 
                  vibration: !settings.notifications.vibration 
                } 
              })}
              className={`px-4 py-2 ${
                settings.notifications.vibration ? 'bg-blue-500' : 'bg-gray-400'
              } text-white rounded-lg hover:opacity-90`}
            >
              {settings.notifications.vibration ? 'On' : 'Off'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}