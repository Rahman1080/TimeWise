import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { BackButton } from './common/BackButton';

export function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <BackButton />
      <div className="flex flex-col items-center justify-center min-h-[60vh] bg-black rounded-lg p-8">
        <div className="text-6xl font-bold text-blue-500 mb-4">
          {format(time, 'HH:mm:ss')}
        </div>
        <div className="text-2xl text-white">
          {format(time, 'EEEE, MMMM do, yyyy')}
        </div>
        <div className="text-lg text-orange-500 mt-2">
          {format(time, 'zzz')}
        </div>
      </div>
    </div>
  );
}