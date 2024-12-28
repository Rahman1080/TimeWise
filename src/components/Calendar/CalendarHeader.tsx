import React from 'react';
import { format } from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CalendarHeaderProps {
  currentDate: Date;
  onPrevMonth: () => void;
  onNextMonth: () => void;
}

export function CalendarHeader({ currentDate, onPrevMonth, onNextMonth }: CalendarHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-6">
      <button
        onClick={onPrevMonth}
        className="p-2 hover:bg-gray-100 rounded-full dark:hover:bg-gray-700"
      >
        <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
      </button>
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
        {format(currentDate, 'MMMM yyyy')}
      </h2>
      <button
        onClick={onNextMonth}
        className="p-2 hover:bg-gray-100 rounded-full dark:hover:bg-gray-700"
      >
        <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
      </button>
    </div>
  );
}