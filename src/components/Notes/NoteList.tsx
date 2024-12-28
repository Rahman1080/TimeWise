import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../store/useStore';
import { Plus, Trash2 } from 'lucide-react';
import { BackButton } from '../common/BackButton';
import { toast } from 'sonner';

export function NoteList() {
  const navigate = useNavigate();
  const { notes, deleteNote } = useStore();

  const handleDelete = (id: string) => {
    deleteNote(id);
    toast.success('Note deleted successfully!');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <BackButton />
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">My Notes</h2>
          <button
            onClick={() => navigate('/add-note')}
            className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            <Plus className="w-5 h-5" />
            Add Note
          </button>
        </div>

        <div className="space-y-4">
          {notes.length === 0 ? (
            <p className="text-center text-gray-500 dark:text-gray-400">
              No notes yet. Click the button above to add one!
            </p>
          ) : (
            notes.map((note) => (
              <div
                key={note.id}
                className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {note.title}
                    </h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300 whitespace-pre-wrap">
                      {note.content}
                    </p>
                  </div>
                  <button
                    onClick={() => handleDelete(note.id)}
                    className="text-red-500 hover:text-red-600"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}