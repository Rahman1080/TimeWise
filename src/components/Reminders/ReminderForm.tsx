import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useStore } from '../../store/useStore';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { BackButton } from '../common/BackButton';

const reminderSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  datetime: z.string().min(1, 'Date and time are required'),
  notes: z.string().optional(),
});

type ReminderFormData = z.infer<typeof reminderSchema>;

export function ReminderForm() {
  const navigate = useNavigate();
  const addReminder = useStore((state) => state.addReminder);
  const { register, handleSubmit, formState: { errors } } = useForm<ReminderFormData>({
    resolver: zodResolver(reminderSchema),
  });

  const onSubmit = (data: ReminderFormData) => {
    addReminder(data);
    toast.success('Reminder added successfully!');
    navigate('/calendar');
  };

  return (
    <div className="max-w-md mx-auto">
      <BackButton />
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Add Reminder</h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Title
            </label>
            <input
              type="text"
              {...register('title')}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.title && (
              <p className="mt-1 text-sm text-red-500">{errors.title.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Date and Time
            </label>
            <input
              type="datetime-local"
              {...register('datetime')}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.datetime && (
              <p className="mt-1 text-sm text-red-500">{errors.datetime.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Notes (optional)
            </label>
            <textarea
              {...register('notes')}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
          >
            Add Reminder
          </button>
        </form>
      </div>
    </div>
  );
}