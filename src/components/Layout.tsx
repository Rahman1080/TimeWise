import React from 'react';
import { useStore } from '../store/useStore';
import { Navigation } from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const theme = useStore((state) => state.settings.theme);

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 min-h-screen">
        <Navigation />
        <main className="container mx-auto p-4">{children}</main>
      </div>
    </div>
  );
}