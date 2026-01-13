'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

interface NavigationProps {
    theme?: 'light' | 'dark'
    pageTitle?: string
    pageDescription?: string
    tabButtons?: React.ReactNode
}

export default function Navigation({
    theme = 'dark',
    pageTitle,
    pageDescription,
    tabButtons,
}: NavigationProps) {
    const [workMenuOpen, setWorkMenuOpen] = useState(false)
    const [learnMenuOpen, setLearnMenuOpen] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const pathname = usePathname()

    const textColor = theme === 'light' ? 'text-gray-100' : 'text-gray-800'
    const borderColor = theme === 'light' ? 'border-gray-700' : 'border-gray-300'
    const menuBg = theme === 'light' ? 'bg-gray-900' : 'bg-white'
    const menuTextColor = theme === 'light' ? 'text-gray-100' : 'text-gray-800'
    const menuBorderColor = theme === 'light' ? 'border-gray-700' : 'border-gray-300'

    const isActive = (path: string) => {
        if (path === '/artists') {
            return (
                pathname === '/artists' ||
                pathname?.startsWith('/artists/') ||
                pathname === '/2025-programme' ||
                pathname === '/2024-programme'
            )
        }
        if (path === '/learn') {
            return pathname === '/history' || pathname === '/process'
        }
        return pathname === path
    }

    return (
        <>
            {/* Spanning border line and background */}
            <div className="fixed top-0 left-0 right-0 z-40 border-b border-gray-300 h-[48px] bg-[#F0EEDE]/80 backdrop-blur-md" />

            {/* Home link - far left */}
            <Link
                href="/"
                className="fixed top-0 left-0 z-50 text-base tracking-widest text-[#c4342e] px-6 py-3 hover:opacity-60 transition-all duration-300 font-serif"
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
                        className="fixed top-[48px] left-0 right-0 z-20"
                    >
                        {/* Mobile Layout - Horizontal */}
                        <div className="md:hidden">
                            <div className="backdrop-blur-md bg-[#F0EEDE]/80 border-b border-gray-300">
                                <div
                                    className="px-4 py-3 text-[#c4342e] font-serif text-base"
                                    style={{ letterSpacing: '0.08em', fontWeight: 500 }}
                                >
                                    {pageTitle}
                                </div>
                            </div>
                            {pageDescription && !learnMenuOpen && !workMenuOpen && (
                                <div className="px-4 py-3 text-gray-700 text-sm leading-relaxed border-b border-gray-300 backdrop-blur-md bg-[#F0EEDE]/80">
                                    {pageDescription}
                                </div>
                            )}
                            {tabButtons && (
                                <div className="border-b border-gray-300 backdrop-blur-md bg-[#F0EEDE]/80 overflow-x-auto">
                                    {tabButtons}
                                </div>
                            )}
                        </div>

                        {/* Desktop Layout - Vertical Tab */}
                        <div className="hidden md:flex items-start">
                            {/* Title Tab - Vertical */}
                            <div
                                className="flex-shrink-0 backdrop-blur-md bg-[#F0EEDE]/80 border-r border-b border-gray-300"
                                style={{ writingMode: 'vertical-rl' }}
                            >
                                <div
                                    className="px-3 py-6 text-[#c4342e] font-serif text-lg"
                                    style={{ letterSpacing: '0.08em', fontWeight: 500 }}
                                >
                                    {pageTitle}
                                </div>
                            </div>

                            {/* Description & Tabs Column */}
                            <div className="flex-1">
                                {/* Description - Horizontal (hidden when submenu is open) */}
                                {pageDescription && !learnMenuOpen && !workMenuOpen && (
                                    <div className="px-6 py-3 text-gray-700 text-base leading-relaxed border-b border-gray-300 backdrop-blur-md bg-[#F0EEDE]/80">
                                        {pageDescription}
                                    </div>
                                )}

                                {/* Learn submenu */}
                                {learnMenuOpen && (
                                    <div className="border-b border-gray-300 backdrop-blur-md bg-[#F0EEDE]/80">
                                        <div className="flex">
                                            <div className="flex-1"></div>
                                            <div
                                                className="flex"
                                                onMouseEnter={() => setLearnMenuOpen(true)}
                                                onMouseLeave={() => setLearnMenuOpen(false)}
                                            >
                                                <Link
                                                    href="/bronze-sculpture"
                                                    className={`px-6 py-2 hover:opacity-60 transition-all duration-300 text-base ${textColor}`}
                                                    style={{
                                                        letterSpacing: '0.08em',
                                                        fontWeight: 500,
                                                    }}
                                                >
                                                    History
                                                </Link>
                                                <Link
                                                    href="/casting-process"
                                                    className={`px-6 py-2 hover:opacity-60 transition-all duration-300 text-base ${textColor}`}
                                                    style={{
                                                        letterSpacing: '0.08em',
                                                        fontWeight: 500,
                                                    }}
                                                >
                                                    Process
                                                </Link>
                                            </div>
                                            {/* Spacers for Bespoke Casting, Workshops, Work */}
                                            <div style={{ width: '185px' }}></div>
                                            <div style={{ width: '133px' }}></div>
                                            <div style={{ width: '73px' }}></div>
                                        </div>
                                    </div>
                                )}

                                {/* Work submenu */}
                                {workMenuOpen && (
                                    <div className="border-b border-gray-300 backdrop-blur-md bg-[#F0EEDE]/80">
                                        <div className="flex">
                                            <div className="flex-1"></div>
                                            <div
                                                className="flex"
                                                onMouseEnter={() => setWorkMenuOpen(true)}
                                                onMouseLeave={() => setWorkMenuOpen(false)}
                                            >
                                                <Link
                                                    href="/2024-programme"
                                                    className={`px-6 py-2 hover:opacity-60 transition-all duration-300 text-base ${textColor}`}
                                                    style={{
                                                        letterSpacing: '0.08em',
                                                        fontWeight: 500,
                                                    }}
                                                >
                                                    2024 Programme
                                                </Link>
                                                <Link
                                                    href="/2025-programme"
                                                    className={`px-6 py-2 hover:opacity-60 transition-all duration-300 text-base ${textColor}`}
                                                    style={{
                                                        letterSpacing: '0.08em',
                                                        fontWeight: 500,
                                                    }}
                                                >
                                                    2025 Programme
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Tab Buttons */}
                                {tabButtons && (
                                    <div className="border-b border-gray-300 backdrop-blur-md bg-[#F0EEDE]/80">
                                        {tabButtons}
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Submenus when no page title */}
            {!pageTitle && (
                <div className="fixed top-[48px] left-0 right-0 z-20">
                    {/* Learn submenu */}
                    {learnMenuOpen && (
                        <div className="border-b border-gray-300 backdrop-blur-md bg-[#F0EEDE]/80">
                            <div className="flex">
                                <div className="flex-1"></div>
                                <div
                                    className="flex"
                                    onMouseEnter={() => setLearnMenuOpen(true)}
                                    onMouseLeave={() => setLearnMenuOpen(false)}
                                >
                                    <Link
                                        href="/bronze-sculpture"
                                        className={`px-6 py-2 hover:opacity-60 transition-all duration-300 text-base ${textColor}`}
                                        style={{ letterSpacing: '0.08em', fontWeight: 500 }}
                                    >
                                        History
                                    </Link>
                                    <Link
                                        href="/casting-process"
                                        className={`px-6 py-2 hover:opacity-60 transition-all duration-300 text-base ${textColor}`}
                                        style={{ letterSpacing: '0.08em', fontWeight: 500 }}
                                    >
                                        Process
                                    </Link>
                                </div>
                                {/* Spacers for Bespoke Casting, Workshops, Work */}
                                <div style={{ width: '185px' }}></div>
                                <div style={{ width: '133px' }}></div>
                                <div style={{ width: '73px' }}></div>
                            </div>
                        </div>
                    )}

                    {/* Work submenu */}
                    {workMenuOpen && (
                        <div className="border-b border-gray-300 backdrop-blur-md bg-[#F0EEDE]/80">
                            <div className="flex">
                                <div className="flex-1"></div>
                                <div
                                    className="flex"
                                    onMouseEnter={() => setWorkMenuOpen(true)}
                                    onMouseLeave={() => setWorkMenuOpen(false)}
                                >
                                    <Link
                                        href="/2024-programme"
                                        className={`px-6 py-2 hover:opacity-60 transition-all duration-300 text-base ${textColor}`}
                                        style={{ letterSpacing: '0.08em', fontWeight: 500 }}
                                    >
                                        2024 Programme
                                    </Link>
                                    <Link
                                        href="/2025-programme"
                                        className={`px-6 py-2 hover:opacity-60 transition-all duration-300 text-base ${textColor}`}
                                        style={{ letterSpacing: '0.08em', fontWeight: 500 }}
                                    >
                                        2025 Programme
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* Hamburger button - mobile only */}
            <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="fixed top-0 right-0 z-50 px-6 py-3 md:hidden text-gray-800"
                aria-label="Toggle menu"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {mobileMenuOpen ? (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    ) : (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    )}
                </svg>
            </button>

            {/* Main nav - desktop only */}
            <nav className={`fixed top-0 right-0 z-50 hidden md:flex text-base ${textColor}`}>
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
                <div
                    className="relative"
                    onMouseEnter={() => setWorkMenuOpen(true)}
                    onMouseLeave={() => setWorkMenuOpen(false)}
                >
                    <div
                        className={`px-6 py-3 hover:opacity-60 transition-all duration-300 cursor-pointer ${
                            isActive('/artists') ? 'bg-[#c4342e]/10' : ''
                        }`}
                    >
                        Artists in Residence
                    </div>
                </div>
            </nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 top-[48px] bg-[#F0EEDE] z-40 md:hidden overflow-y-auto"
                    >
                        <nav className="flex flex-col px-6 py-6">
                            <Link
                                href="/about"
                                onClick={() => setMobileMenuOpen(false)}
                                className={`py-3 text-xl text-gray-800 hover:text-[#c4342e] transition-colors ${
                                    isActive('/about') ? 'text-[#c4342e]' : ''
                                }`}
                            >
                                About
                            </Link>

                            {/* Learn submenu */}
                            <div className="border-t border-gray-300 mt-3 pt-3">
                                <div className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                                    Learn
                                </div>
                                <Link
                                    href="/bronze-sculpture"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block py-2 pl-4 text-lg text-gray-800 hover:text-[#c4342e] transition-colors"
                                >
                                    History
                                </Link>
                                <Link
                                    href="/casting-process"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block py-2 pl-4 text-lg text-gray-800 hover:text-[#c4342e] transition-colors"
                                >
                                    Process
                                </Link>
                            </div>

                            <Link
                                href="/bespoke-casting"
                                onClick={() => setMobileMenuOpen(false)}
                                className={`py-3 text-xl text-gray-800 hover:text-[#c4342e] transition-colors border-t border-gray-300 mt-3 pt-3 ${
                                    isActive('/bespoke-casting') ? 'text-[#c4342e]' : ''
                                }`}
                            >
                                Bespoke Casting
                            </Link>

                            <Link
                                href="/workshops"
                                onClick={() => setMobileMenuOpen(false)}
                                className={`py-3 text-xl text-gray-800 hover:text-[#c4342e] transition-colors ${
                                    isActive('/workshops') ? 'text-[#c4342e]' : ''
                                }`}
                            >
                                Workshops
                            </Link>

                            {/* Guest Artists submenu */}
                            <div className="border-t border-gray-300 mt-3 pt-3">
                                <div className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                                    Artists in Residence
                                </div>
                                <Link
                                    href="/2024-programme"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block py-2 pl-4 text-lg text-gray-800 hover:text-[#c4342e] transition-colors"
                                >
                                    2024 Programme
                                </Link>
                                <Link
                                    href="/2025-programme"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block py-2 pl-4 text-lg text-gray-800 hover:text-[#c4342e] transition-colors"
                                >
                                    2025 Programme
                                </Link>
                            </div>

                            {/* Artists direct link */}
                            <Link
                                href="/artists"
                                onClick={() => setMobileMenuOpen(false)}
                                className={`py-3 text-xl text-gray-800 hover:text-[#c4342e] transition-colors border-t border-gray-300 mt-3 pt-3 ${
                                    pathname === '/artists' ? 'text-[#c4342e]' : ''
                                }`}
                            >
                                All Artists
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
