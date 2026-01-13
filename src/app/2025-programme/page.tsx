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
    const [expandedArtists, setExpandedArtists] = useState<Set<number>>(new Set())
    const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set())

    const toggleExpanded = (artistId: number, e: React.MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()
        setExpandedArtists(prev => {
            const newSet = new Set(prev)
            if (newSet.has(artistId)) {
                newSet.delete(artistId)
            } else {
                newSet.add(artistId)
            }
            return newSet
        })
    }

    const toggleSectionExpanded = (sectionKey: string) => {
        setExpandedSections(prev => {
            const newSet = new Set(prev)
            if (newSet.has(sectionKey)) {
                newSet.delete(sectionKey)
            } else {
                newSet.add(sectionKey)
            }
            return newSet
        })
    }

    const truncateBio = (bio: string, maxLength: number = 400) => {
        if (bio.length <= maxLength) return { text: bio, isTruncated: false }
        const truncated = bio.substring(0, maxLength)
        const lastSpace = truncated.lastIndexOf(' ')
        return {
            text: truncated.substring(0, lastSpace) + '...',
            isTruncated: true
        }
    }

    const renderBioWithParagraphs = (bio: string) => {
        return bio.split('\n\n').map((paragraph, index) => (
            <p key={index} className={index > 0 ? 'mt-4' : ''}>
                {paragraph}
            </p>
        ))
    }

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
            text: `There are four artists in residence. The first selection of two established artists was made by Walnut Works, Denise de Cordova, and Laura Wilson. We then worked with our partners to select from their intake - from MASS sculpture, Clare Jarrett; and from the University of the Suffolk, Juliet Lockhart.

Denise de Cordova has a long practice based on carving, predominantly in wood. The figures can be well over one metre tall and the surfaces are painted to describe the features and clothing. This process is a very labour intensive and challenging process and immense amount of patience and foresight has to be extended to realise the work. We felt that if Denise could work directly with the wax and make very small 10 centimeter tall figures, it would afford Denise the opportunity for spontaneity and to make a crowd to encourage dialogue within the piece. It was revelatory to see Denise exploit her skill set and to build a bridge between her work and create a large cluster of charms.

Laura Wilson works across sculpture and performance and video. We worked with Laura in 2021 when she was developing Trained on Veda, her long-term research project around veda bread. We cast Laura's baked loaves - full size, whole, sliced and miniature. It felt a poignant way of making an artwork which is conceived in part, to be eaten, more permanent and it also mirrored the baking process. More recently, Laura has been exploring fabric, weaving and women's workwear through her V&A X Bow Arts Fellowship.

Specific pieces of woven linen were made in Laura's studio on her loom to go through the casting process, an exploratory journey challenging the casting process and the development of a new context for the finished artwork.

We met Clare Jarrett on the Mass Sculpture programme, there was deep interest by her in binding combustible materials and making small hand sized pieces. We felt that it would be enriching to work with Clare to create a body of work using "burn outs". Clare arrived with some long twigs up to 40cm, along their length rolled material was bound with thread in a blanket stitch. We discussed at length the narrative and were struck by the intimate and profound content of the work. The cloth was her husband's clothing she had with intensity sewn around a twig - a plant from her garden that she had grown. We encouraged Clare to make smaller works to support the long ones. The finished artworks high-light the rigor that Clare employed in sewing the cloth around the twig and the emotional bond.

Juliet Lockhart was selected from the workshop run with the University of Suffolk. We were struck that her objects sought to convey a great sense of narrative. Juliet's work focuses on the seventeenth century painter Mary Beale. The work manifests itself through puppets made of cardboard, stitching and papier mache. We found Juliet's aspirations to combine bronze and cloth fascinating.

The University of Suffolk Fine Art Students Katherine Kingston, Ella Chapman, Belinda Downing and Gemma Upson have works created during the workshop and they are part of the Walnut Works show.`,
            images: Array(16).fill('/foundry.webp'),
        },
        'care-homes': {
            title: 'Woodbridge Care Homes',
            text: `It was an absolute joy working with care home residents and the Woodbridge community.

We had some really funny moments when creating the wax sculptures and as time went by I watched everyone's confidence grow, revealing great skills and imagination.

I can't wait to see the finished artworks.

Foteini Araka - Creative Mojo`,
            isQuote: true,
            images: [
                '/work/care-homes/edits/care-1-draft.png',
                '/work/care-homes/edits/care-2-draft.png',
                '/work/care-homes/edits/care-3-draft.png',
                '/work/care-homes/edits/care-4-draft.png',
            ],
        },
        'orford-primary': {
            title: 'Orford Primary',
            text: `Walnut Works have worked with diverse groups of people. Kabir has conducted workshops with partially sighted and blind people at Leeds City art gallery and the Sainsbury Centre for the Visual Arts, Norwich.

We felt that it would be important to work with a senior age group to build a link to the very young children at Orford Primary School. The wax to bronze workshops give an accessibility that allows for active participation and the satisfaction of solid permanent objects at the end.

It was key to work with Foteini Araka from Creative Mojo, who ran the workshops. Foteini's experience and established relationships with the participants were key to an enriching experience.

It has been wonderful to work with the Woodbridge care homes - Cavell Manor Care Home, Haughgate House Care Home, Highlands Care Home, and the over 60s meeting group Woodbridge Chinwags.

Walnut Works also has a history of working in education. Vicky put together a project Hop Skip and Jump at Highgate primary school, Kings Lynn. We currently annually work with Lauderdale House, Highgate on the Cabinet of Curiosities project, an outreach programme doing Wax to Bronze workshops with four local secondary schools.

We felt that it was important to introduce bronze workshops to young people and enjoyed very much working with Orford Primary School curriculum and varied age groups down to nursery. Truly a great experience.`,
            images: [
                '/work/school/edits/schools-1-draft.png',
                '/work/school/edits/schools-2-draft.png',
                '/work/school/edits/schools-3-draft.png',
                '/work/school/edits/schools-4-draft.png',
            ],
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
                pageDescription="Explore the 2025 Artists in Residence programme."
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

            <div className="pt-48 md:pt-48 px-4 md:px-8 max-w-7xl mx-auto">
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
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-2 md:max-h-[calc(100vh-250px)] overflow-y-auto scrollbar-hide pr-0 md:pr-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
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
                                    </div>
                                ))}
                            </div>

                            {/* Right column: Text */}
                            <div className="max-h-auto md:max-h-[calc(100vh-250px)] overflow-y-auto scrollbar-hide pr-0 md:pr-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                                <h2 className="text-2xl md:text-4xl font-serif font-bold mb-4 md:mb-6 text-gray-800">
                                    {section.title}
                                </h2>
                                {(() => {
                                    const isSectionExpanded = expandedSections.has(key)
                                    const { text: truncatedText, isTruncated } = truncateBio(section.text, 600)
                                    const displayText = isSectionExpanded ? section.text : truncatedText
                                    const isQuote = 'isQuote' in section && section.isQuote
                                    return (
                                        <>
                                            <div className={`text-base md:text-lg leading-relaxed text-gray-700 ${isQuote ? 'italic' : ''}`}>
                                                {renderBioWithParagraphs(displayText)}
                                            </div>
                                            {isTruncated && (
                                                <button
                                                    onClick={() => toggleSectionExpanded(key)}
                                                    className="inline-block mt-4 text-[#c4342e] font-medium hover:underline"
                                                >
                                                    {isSectionExpanded ? 'Show less' : 'Read more...'}
                                                </button>
                                            )}
                                        </>
                                    )
                                })()}
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
                            {artists.map((artist, index) => {
                                const isExpanded = expandedArtists.has(artist.id)
                                const { text: truncatedText, isTruncated } = truncateBio(artist.bio)
                                const displayText = isExpanded ? artist.bio : truncatedText

                                return (
                                    <motion.article
                                        key={artist.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                    >
                                        <div className="block md:flex gap-8 items-start">
                                            {artist.profile_image_url && (
                                                <Link href={`/artists/${artist.slug}`} className="block md:w-2/5 aspect-[4/3] overflow-hidden relative mb-6 md:mb-0 group">
                                                    <img
                                                        src={artist.profile_image_url}
                                                        alt={artist.name}
                                                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                                                    />
                                                </Link>
                                            )}
                                            <div className="md:w-3/5">
                                                <Link href={`/artists/${artist.slug}`}>
                                                    <h2 className="text-3xl font-serif font-bold mb-3 hover:text-[#c4342e] transition-colors">
                                                        {artist.name}
                                                    </h2>
                                                </Link>
                                                <div className="text-gray-700 leading-relaxed">
                                                    {renderBioWithParagraphs(displayText)}
                                                </div>
                                                {isTruncated && (
                                                    <button
                                                        onClick={(e) => toggleExpanded(artist.id, e)}
                                                        className="inline-block mt-3 text-[#c4342e] font-medium hover:underline"
                                                    >
                                                        {isExpanded ? 'Show less' : 'Read more...'}
                                                    </button>
                                                )}
                                                <Link
                                                    href={`/artists/${artist.slug}`}
                                                    className="inline-block mt-4 ml-4 text-[#c4342e] font-medium hover:underline"
                                                >
                                                    View profile →
                                                </Link>
                                            </div>
                                        </div>
                                    </motion.article>
                                )
                            })}
                        </div>
                    )}
                </motion.div>
            </div>

            <Footer />
        </div>
    )
}
