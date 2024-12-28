import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Reminder, Settings, Note } from '../types';

interface State {
  reminders: Reminder[];
  notes: Note[];
  settings: Settings;
  addReminder: (reminder: Omit<Reminder, 'id' | 'completed'>) => void;
  deleteReminder: (id: string) => void;
  toggleReminder: (id: string) => void;
  addNote: (note: Omit<Note, 'id' | 'createdAt'>) => void;
  deleteNote: (id: string) => void;
  updateSettings: (settings: Partial<Settings>) => void;
}

export const useStore = create<State>()(
  persist(
    (set) => ({
      reminders: [],
      notes: [],
      settings: {
        theme: 'light',
        alarmSound: 'default',
        notifications: {
          sound: true,
          vibration: true,
        },
      },
      addReminder: (reminder) =>
        set((state) => ({
          reminders: [
            ...state.reminders,
            { ...reminder, id: crypto.randomUUID(), completed: false },
          ],
        })),
      deleteReminder: (id) =>
        set((state) => ({
          reminders: state.reminders.filter((r) => r.id !== id),
        })),
      toggleReminder: (id) =>
        set((state) => ({
          reminders: state.reminders.map((r) =>
            r.id === id ? { ...r, completed: !r.completed } : r
          ),
        })),
      addNote: (note) =>
        set((state) => ({
          notes: [
            ...state.notes,
            {
              ...note,
              id: crypto.randomUUID(),
              createdAt: new Date().toISOString(),
            },
          ],
        })),
      deleteNote: (id) =>
        set((state) => ({
          notes: state.notes.filter((n) => n.id !== id),
        })),
      updateSettings: (newSettings) =>
        set((state) => ({
          settings: { ...state.settings, ...newSettings },
        })),
    }),
    {
      name: 'time-management-store',
    }
  )
);