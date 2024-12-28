import React, { useState } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns';
import { useStore } from '../../store/useStore';
import { CalendarHeader } from './CalendarHeader';
import { CalendarGrid } from './CalendarGrid';
import { BackButton } from '../common/BackButton';

export function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const reminders = useStore((state) => state.reminders);

  const days = eachDayOfInterval({
    start: startOfMonth(currentDate),
    end: endOfMonth(currentDate),
  });

  return (
    <div>
      <BackButton />
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <CalendarHeader 
          currentDate={currentDate}
          onPrevMonth={() => setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() - 1))}
          onNextMonth={() => setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() + 1))}
        />
        <CalendarGrid days={days} reminders={reminders} />
      </div>
    </div>
  );
}