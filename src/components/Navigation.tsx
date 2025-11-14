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
      <div className={`fixed top-0 left-0 right-0 z-40 border-b ${borderColor} h-[48px] pointer-events-none`} />

      {/* Main nav - left */}
      <nav className={`fixed top-0 left-0 z-50 flex text-base ${textColor}`}>
        <Link
          href="/about"
          className={`border-l border-r ${borderColor} px-6 py-3 hover:opacity-60 transition-all duration-300 backdrop-blur-md`}
        >
          About
        </Link>
        <Link
          href="/history"
          className={`border-r ${borderColor} px-6 py-3 hover:opacity-60 transition-all duration-300 backdrop-blur-md`}
        >
          History
        </Link>
        <Link
          href="/workshops"
          className={`border-r ${borderColor} px-6 py-3 hover:opacity-60 transition-all duration-300 backdrop-blur-md`}
        >
          Workshops
        </Link>
        <Link
          href="/journal"
          className={`border-r ${borderColor} px-6 py-3 hover:opacity-60 transition-all duration-300 backdrop-blur-md`}
        >
          Journal
        </Link>
        <Link
          href="/artists"
          className={`border-r ${borderColor} px-6 py-3 hover:opacity-60 transition-all duration-300 backdrop-blur-md`}
        >
          Artists
        </Link>
        <div
          className="relative"
          onMouseEnter={() => setWorkMenuOpen(true)}
          onMouseLeave={() => setWorkMenuOpen(false)}
        >
          <Link
            href="/work"
            className={`border-r ${borderColor} px-6 py-3 hover:opacity-60 transition-all duration-300 block backdrop-blur-md`}
          >
            Work
          </Link>
        </div>
      </nav>

      {/* Home link - far right */}
      <Link
        href="/"
        className={`fixed top-0 right-0 z-50 text-base tracking-widest text-[#c4342e] border-r ${borderColor} px-6 py-3 hover:opacity-60 transition-all duration-300 backdrop-blur-md`}
        style={{ letterSpacing: '0.08em', fontWeight: 500 }}
      >
        WW.
      </Link>

      {/* Work submenu - full width */}
      {workMenuOpen && (
        <div
          className={`fixed top-[48px] left-0 right-0 z-40 border-b ${borderColor} backdrop-blur-md`}
          onMouseEnter={() => setWorkMenuOpen(true)}
          onMouseLeave={() => setWorkMenuOpen(false)}
        >
          <div className="flex justify-evenly">
            <Link
              href="/work/project-1"
              className={`flex-1 text-center px-6 py-3 border-r ${borderColor} hover:opacity-60 transition-all duration-300 text-base ${textColor}`}
              style={{ letterSpacing: '0.08em', fontWeight: 500 }}
            >
              Project One
            </Link>
            <Link
              href="/work/project-2"
              className={`flex-1 text-center px-6 py-3 hover:opacity-60 transition-all duration-300 text-base ${textColor}`}
              style={{ letterSpacing: '0.08em', fontWeight: 500 }}
            >
              Project Two
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
