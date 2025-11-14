'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [workMenuOpen, setWorkMenuOpen] = useState(false);

  return (
    <nav className="fixed top-8 right-8 z-50 flex gap-8 text-sm text-gray-800">
      <Link href="/about" className="hover:opacity-60 transition-opacity">
        About
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
          <div className="absolute top-full right-0 mt-2 bg-white shadow-lg p-4 min-w-[150px]">
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
