import React from 'react';
import { format, isSameDay } from 'date-fns';
import type { Reminder } from '../../types';

interface CalendarGridProps {
  days: Date[];
  reminders: Reminder[];
}

export function CalendarGrid({ days, reminders }: CalendarGridProps) {
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div>
      <div className="grid grid-cols-7 gap-1 mb-2">
        {weekDays.map(day => (
          <div key={day} className="text-center text-sm font-semibold text-gray-600 dark:text-gray-400">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {days.map(day => {
          const dayReminders = reminders.filter(reminder => 
            isSameDay(new Date(reminder.datetime), day)
          );

          return (
            <div
              key={day.toISOString()}
              className="aspect-square p-2 border border-gray-200 dark:border-gray-700 rounded-lg"
            >
              <div className="text-sm font-medium text-gray-800 dark:text-gray-200">
                {format(day, 'd')}
              </div>
              {dayReminders.length > 0 && (
                <div className="mt-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}