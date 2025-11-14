'use client';

import Link from 'next/link';
import { useState } from 'react';

interface NavigationProps {
  theme?: 'light' | 'dark';
}

export default function Navigation({ theme = 'dark' }: NavigationProps) {
  const [workMenuOpen, setWorkMenuOpen] = useState(false);

  const textColor = theme === 'light' ? 'text-gray-100' : 'text-gray-800';
  const borderColor = theme === 'light' ? 'border-gray-700' : 'border-gray-300';
  const menuBg = theme === 'light' ? 'bg-gray-900' : 'bg-white';
  const menuTextColor = theme === 'light' ? 'text-gray-100' : 'text-gray-800';
  const menuBorderColor = theme === 'light' ? 'border-gray-700' : 'border-gray-300';

  return (
    <>
      {/* Spanning border line */}
      <div className={`fixed top-8 left-8 right-8 z-40 border-t border-b ${borderColor} h-[42px] pointer-events-none`} />

      {/* Home link - top left */}
      <Link
        href="/"
        className={`fixed top-8 left-8 z-50 text-sm ${textColor} border-l border-r ${borderColor} px-4 py-2 hover:opacity-60 transition-opacity bg-[#F0EEDE]`}
      >
        WW.
      </Link>

      {/* Main nav - top right */}
      <nav className={`fixed top-8 right-8 z-50 flex text-sm ${textColor}`}>
        <Link
          href="/about"
          className={`border-l border-r ${borderColor} px-4 py-2 hover:opacity-60 transition-opacity bg-[#F0EEDE]`}
        >
          About
        </Link>
        <Link
          href="/history"
          className={`border-r ${borderColor} px-4 py-2 hover:opacity-60 transition-opacity bg-[#F0EEDE]`}
        >
          History
        </Link>
        <div
          className="relative"
          onMouseEnter={() => setWorkMenuOpen(true)}
          onMouseLeave={() => setWorkMenuOpen(false)}
        >
          <Link
            href="/work"
            className={`border-r ${borderColor} px-4 py-2 hover:opacity-60 transition-opacity block bg-[#F0EEDE]`}
          >
            Work
          </Link>
          {workMenuOpen && (
            <div className={`absolute top-full right-0 mt-2 ${menuBg} ${menuTextColor} border ${menuBorderColor}`}>
              <Link
                href="/work/project-1"
                className={`block px-4 py-3 border-b ${menuBorderColor} hover:opacity-60 transition-opacity`}
              >
                Project One
              </Link>
              <Link
                href="/work/project-2"
                className={`block px-4 py-3 hover:opacity-60 transition-opacity`}
              >
                Project Two
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
