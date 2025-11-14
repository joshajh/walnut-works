'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationProps {
  theme?: 'light' | 'dark';
  pageTitle?: string;
  pageDescription?: string;
}

export default function Navigation({ theme = 'dark', pageTitle, pageDescription }: NavigationProps) {
  const [workMenuOpen, setWorkMenuOpen] = useState(false);
  const [learnMenuOpen, setLearnMenuOpen] = useState(false);
  const pathname = usePathname();

  const textColor = theme === 'light' ? 'text-gray-100' : 'text-gray-800';
  const borderColor = theme === 'light' ? 'border-gray-700' : 'border-gray-300';
  const menuBg = theme === 'light' ? 'bg-gray-900' : 'bg-white';
  const menuTextColor = theme === 'light' ? 'text-gray-100' : 'text-gray-800';
  const menuBorderColor = theme === 'light' ? 'border-gray-700' : 'border-gray-300';

  const isActive = (path: string) => {
    if (path === '/work') {
      return pathname === '/work' || pathname?.startsWith('/work/');
    }
    if (path === '/learn') {
      return pathname === '/history' || pathname === '/process';
    }
    return pathname === path;
  };

  return (
    <>
      {/* Spanning border line and background */}
      <div className="fixed top-0 left-0 right-0 z-40 border-b border-gray-300 h-[48px] bg-[#F0EEDE]/80 backdrop-blur-md" />

      {/* Home link - far left */}
      <Link
        href="/"
        className="fixed top-0 left-0 z-50 text-base tracking-widest text-[#c4342e] px-6 py-3 hover:opacity-60 transition-all duration-300"
        style={{ letterSpacing: '0.08em', fontWeight: 500 }}
      >
        WW.
      </Link>

      {/* Page Title & Description */}
      <AnimatePresence>
        {pageTitle && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-[48px] left-0 right-0 z-30 flex border-b border-gray-300 backdrop-blur-md bg-[#F0EEDE]/80"
          >
            {/* Title Tab - Vertical */}
            <div
              className="border-r border-gray-300 flex-shrink-0"
              style={{ writingMode: 'vertical-rl' }}
            >
              <div className="px-3 py-6 text-[#c4342e] font-serif text-lg" style={{ letterSpacing: '0.08em', fontWeight: 500 }}>
                {pageTitle}
              </div>
            </div>

            {/* Description - Horizontal */}
            {pageDescription && (
              <div className="flex-1 px-6 py-3 text-gray-700 text-base leading-relaxed flex items-center">
                {pageDescription}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main nav - right */}
      <nav className={`fixed top-0 right-0 z-50 flex text-base ${textColor}`}>
        <Link
          href="/about"
          className={`px-6 py-3 hover:opacity-60 transition-all duration-300 ${
            isActive('/about') ? 'bg-[#c4342e]/10' : ''
          }`}
        >
          About
        </Link>
        <div
          className="relative"
          onMouseEnter={() => setLearnMenuOpen(true)}
          onMouseLeave={() => setLearnMenuOpen(false)}
        >
          <div
            className={`px-6 py-3 hover:opacity-60 transition-all duration-300 cursor-pointer ${
              isActive('/learn') ? 'bg-[#c4342e]/10' : ''
            }`}
          >
            Learn
          </div>
        </div>
        <Link
          href="/bespoke-casting"
          className={`px-6 py-3 hover:opacity-60 transition-all duration-300 ${
            isActive('/bespoke-casting') ? 'bg-[#c4342e]/10' : ''
          }`}
        >
          Bespoke Casting
        </Link>
        <Link
          href="/workshops"
          className={`px-6 py-3 hover:opacity-60 transition-all duration-300 ${
            isActive('/workshops') ? 'bg-[#c4342e]/10' : ''
          }`}
        >
          Workshops
        </Link>
        <Link
          href="/journal"
          className={`px-6 py-3 hover:opacity-60 transition-all duration-300 ${
            isActive('/journal') ? 'bg-[#c4342e]/10' : ''
          }`}
        >
          Journal
        </Link>
        <Link
          href="/artists"
          className={`px-6 py-3 hover:opacity-60 transition-all duration-300 ${
            isActive('/artists') ? 'bg-[#c4342e]/10' : ''
          }`}
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
            className={`px-6 py-3 hover:opacity-60 transition-all duration-300 block ${
              isActive('/work') ? 'bg-[#c4342e]/10' : ''
            }`}
          >
            Work
          </Link>
        </div>
      </nav>

      {/* Learn submenu - full width */}
      {learnMenuOpen && (
        <div
          className="fixed top-[48px] left-0 right-0 z-40 border-b border-gray-300 backdrop-blur-md bg-[#F0EEDE]/80"
          onMouseEnter={() => setLearnMenuOpen(true)}
          onMouseLeave={() => setLearnMenuOpen(false)}
        >
          <div className="flex justify-evenly">
            <Link
              href="/history"
              className={`flex-1 text-center px-6 py-2 hover:opacity-60 transition-all duration-300 text-base ${textColor}`}
              style={{ letterSpacing: '0.08em', fontWeight: 500 }}
            >
              History
            </Link>
            <Link
              href="/process"
              className={`flex-1 text-center px-6 py-2 hover:opacity-60 transition-all duration-300 text-base ${textColor}`}
              style={{ letterSpacing: '0.08em', fontWeight: 500 }}
            >
              Process
            </Link>
          </div>
        </div>
      )}

      {/* Work submenu - full width */}
      {workMenuOpen && (
        <div
          className="fixed top-[48px] left-0 right-0 z-40 border-b border-gray-300 backdrop-blur-md bg-[#F0EEDE]/80"
          onMouseEnter={() => setWorkMenuOpen(true)}
          onMouseLeave={() => setWorkMenuOpen(false)}
        >
          <div className="flex justify-evenly">
            <Link
              href="/work/project-1"
              className={`flex-1 text-center px-6 py-2 hover:opacity-60 transition-all duration-300 text-base ${textColor}`}
              style={{ letterSpacing: '0.08em', fontWeight: 500 }}
            >
              Project One
            </Link>
            <Link
              href="/work/project-2"
              className={`flex-1 text-center px-6 py-2 hover:opacity-60 transition-all duration-300 text-base ${textColor}`}
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
