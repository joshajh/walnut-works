'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface Artist {
    id: number
    name: string
    slug: string
    bio: string
    profile_image_url: string | null
}

export default function Programme2025Page() {
    const [activeTab, setActiveTab] = useState('programme')
    const [artists, setArtists] = useState<Artist[]>([])
    const [loading, setLoading] = useState(true)
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

    useEffect(() => {
        fetchArtists()
    }, [])

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && selectedImage) {
                setSelectedImage(null)
            }
        }

        window.addEventListener('keydown', handleEscape)
        return () => window.removeEventListener('keydown', handleEscape)
    }, [selectedImage])

    const fetchArtists = async () => {
        try {
            const res = await fetch('/api/artists')
            const data = await res.json()
            setArtists(data)
        } catch (error) {
            console.error('Failed to fetch artists:', error)
        } finally {
            setLoading(false)
        }
    }

    const sections = {
        programme: {
            title: 'The Programme',
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.`,
            images: Array(16).fill('/foundry.webp'),
        },
        'care-homes': {
            title: 'Woodbridge Care Homes',
            text: `Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.`,
            images: Array(16).fill('/denise-2.webp'),
        },
        'orford-primary': {
            title: 'Orford Primary',
            text: `Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.`,
            images: Array(16).fill('/laura-wilson.webp'),
        },
    }

    return (
        <div className="min-h-screen bg-[#F0EEDE] noise-bg pb-[48px]">
            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[100] bg-black flex items-center justify-center p-8"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-6 right-6 text-white hover:opacity-60 transition-opacity text-4xl z-10"
                        aria-label="Close lightbox"
                    >
                        ×
                    </button>
                    <img
                        src={selectedImage}
                        alt="Full size"
                        className="max-w-full max-h-full object-contain relative z-10"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}

            <Navigation
                pageTitle="2025 Programme"
                pageDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                tabButtons={
                    <div className="flex gap-2 md:gap-4 overflow-x-auto">
                        <button
                            onClick={() => setActiveTab('programme')}
                            className={`px-3 md:px-6 py-2 font-serif text-sm md:text-lg whitespace-nowrap transition-all duration-300 ${
                                activeTab === 'programme'
                                    ? 'border-b-2 border-[#c4342e] text-[#c4342e]'
                                    : 'text-gray-600 hover:text-gray-800'
                            }`}
                        >
                            The Programme
                        </button>
                        <button
                            onClick={() => setActiveTab('guest-artists')}
                            className={`px-3 md:px-6 py-2 font-serif text-sm md:text-lg whitespace-nowrap transition-all duration-300 ${
                                activeTab === 'guest-artists'
                                    ? 'border-b-2 border-[#c4342e] text-[#c4342e]'
                                    : 'text-gray-600 hover:text-gray-800'
                            }`}
                        >
                            Guest Artists
                        </button>
                        <button
                            onClick={() => setActiveTab('care-homes')}
                            className={`px-3 md:px-6 py-2 font-serif text-sm md:text-lg whitespace-nowrap transition-all duration-300 ${
                                activeTab === 'care-homes'
                                    ? 'border-b-2 border-[#c4342e] text-[#c4342e]'
                                    : 'text-gray-600 hover:text-gray-800'
                            }`}
                        >
                            Care Homes
                        </button>
                        <button
                            onClick={() => setActiveTab('orford-primary')}
                            className={`px-3 md:px-6 py-2 font-serif text-sm md:text-lg whitespace-nowrap transition-all duration-300 ${
                                activeTab === 'orford-primary'
                                    ? 'border-b-2 border-[#c4342e] text-[#c4342e]'
                                    : 'text-gray-600 hover:text-gray-800'
                            }`}
                        >
                            Orford Primary
                        </button>
                    </div>
                }
            />

            <div className="pt-32 md:pt-48 px-4 md:px-8 max-w-7xl mx-auto">
                {/* Content */}
                {Object.entries(sections).map(([key, section]) => (
                    <motion.div
                        key={key}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                            opacity: activeTab === key ? 1 : 0,
                            y: activeTab === key ? 0 : 20,
                        }}
                        transition={{ duration: 0.6 }}
                        className={activeTab === key ? 'block' : 'hidden'}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-20 items-start">
                            {/* Left column: Image Grid */}
                            <div className="grid grid-cols-3 md:grid-cols-4 gap-1 md:gap-2 max-h-[50vh] md:max-h-[calc(100vh-250px)] overflow-y-auto pr-0 md:pr-4">
                                {section.images.map((img, index) => (
                                    <div
                                        key={index}
                                        className="aspect-square relative flex items-center justify-center cursor-pointer group"
                                        onClick={() => setSelectedImage(img)}
                                    >
                                        <img
                                            src={img}
                                            alt={`${section.title} ${index + 1}`}
                                            className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-[#c4342e] mix-blend-multiply opacity-40 group-hover:opacity-30 transition-opacity"></div>
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#c4342e]/25 to-[#8b1a14]/25"></div>
                                    </div>
                                ))}
                            </div>

                            {/* Right column: Text */}
                            <div className="max-h-auto md:max-h-[calc(100vh-250px)] overflow-y-auto pr-0 md:pr-4">
                                <h2 className="text-2xl md:text-4xl font-serif font-bold mb-4 md:mb-6 text-gray-800">
                                    {section.title}
                                </h2>
                                <div className="text-base md:text-lg leading-relaxed text-gray-700 whitespace-pre-line">
                                    {section.text}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}

                {/* Guest Artists Tab */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                        opacity: activeTab === 'guest-artists' ? 1 : 0,
                        y: activeTab === 'guest-artists' ? 0 : 20,
                    }}
                    transition={{ duration: 0.6 }}
                    className={activeTab === 'guest-artists' ? 'block mb-20' : 'hidden'}
                >
                    {loading ? (
                        <p className="text-gray-600">Loading artists...</p>
                    ) : artists.length === 0 ? (
                        <p className="text-gray-600">No artists to display.</p>
                    ) : (
                        <div className="space-y-12">
                            {artists.map((artist, index) => (
                                <motion.article
                                    key={artist.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                >
                                    <Link
                                        href={`/artists/${artist.slug}`}
                                        className="block group md:flex gap-8 items-center"
                                    >
                                        {artist.profile_image_url && (
                                            <div className="md:w-2/5 aspect-[4/3] overflow-hidden relative mb-6 md:mb-0">
                                                <img
                                                    src={artist.profile_image_url}
                                                    alt={artist.name}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                                <div className="absolute inset-0 bg-[#c4342e] mix-blend-multiply opacity-40"></div>
                                                <div className="absolute inset-0 bg-gradient-to-br from-[#c4342e]/25 to-[#8b1a14]/25"></div>
                                            </div>
                                        )}
                                        <div className="md:w-3/5">
                                            <h2 className="text-3xl font-serif font-bold mb-3 group-hover:text-[#c4342e] transition-colors">
                                                {artist.name}
                                            </h2>
                                            <p className="text-gray-700 leading-relaxed">
                                                {artist.bio}
                                            </p>
                                            <span className="inline-block mt-4 text-[#c4342e] font-medium group-hover:underline">
                                                View profile →
                                            </span>
                                        </div>
                                    </Link>
                                </motion.article>
                            ))}
                        </div>
                    )}
                </motion.div>
            </div>

            <Footer />
        </div>
    )
}
