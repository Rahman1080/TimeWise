export interface Reminder {
  id: string;
  title: string;
  datetime: string;
  notes?: string;
  completed: boolean;
}

export interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}

export interface Settings {
  theme: 'light' | 'dark';
  alarmSound: string;
  notifications: {
    sound: boolean;
    vibration: boolean;
  };
}

export type View = 'month' | 'week';