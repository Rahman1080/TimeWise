import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { Clock } from './components/Clock';
import { Calendar } from './components/Calendar';
import { Settings } from './components/Settings';
import { ReminderForm } from './components/Reminders/ReminderForm';
import { NoteList } from './components/Notes/NoteList';
import { NoteForm } from './components/Notes/NoteForm';
import { Toaster } from 'sonner';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/clock" element={<Clock />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/add-reminder" element={<ReminderForm />} />
          <Route path="/notes" element={<NoteList />} />
          <Route path="/add-note" element={<NoteForm />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
        <Toaster position="top-right" />
      </Layout>
    </Router>
  );
}

export default App;