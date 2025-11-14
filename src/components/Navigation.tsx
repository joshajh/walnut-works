'use client';

import Link from 'next/link';
import { useState } from 'react';

interface NavigationProps {
  theme?: 'light' | 'dark';
}

export default function Navigation({ theme = 'dark' }: NavigationProps) {
  const [workMenuOpen, setWorkMenuOpen] = useState(false);

  const textColor = theme === 'light' ? 'text-gray-100' : 'text-gray-800';
  const menuBg = theme === 'light' ? 'bg-gray-900' : 'bg-white';
  const menuTextColor = theme === 'light' ? 'text-gray-100' : 'text-gray-800';

  return (
    <nav className={`fixed top-8 right-8 z-50 flex gap-8 text-sm ${textColor}`}>
      <Link href="/about" className="hover:opacity-60 transition-opacity">
        About
      </Link>
      <Link href="/history" className="hover:opacity-60 transition-opacity">
        History
      </Link>
      <div
        className="relative"
        onMouseEnter={() => setWorkMenuOpen(true)}
        onMouseLeave={() => setWorkMenuOpen(false)}
      >
        <Link href="/work" className="hover:opacity-60 transition-opacity">
          Work
        </Link>
        {workMenuOpen && (
          <div className={`absolute top-full right-0 mt-2 ${menuBg} ${menuTextColor} shadow-lg p-4 min-w-[150px]`}>
            <Link
              href="/work/project-1"
              className="block py-2 hover:opacity-60 transition-opacity"
            >
              Project One
            </Link>
            <Link
              href="/work/project-2"
              className="block py-2 hover:opacity-60 transition-opacity"
            >
              Project Two
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
