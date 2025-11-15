'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Artist {
  id: number;
  name: string;
  slug: string;
  bio: string;
  profile_image_url: string | null;
}

export default function Programme2024Page() {
  const [activeTab, setActiveTab] = useState('programme');
  const [artists, setArtists] = useState<Artist[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArtists();
  }, []);

  const fetchArtists = async () => {
    try {
      const res = await fetch('/api/artists');
      const data = await res.json();
      setArtists(data);
    } catch (error) {
      console.error('Failed to fetch artists:', error);
    } finally {
      setLoading(false);
    }
  };

  const sections = {
    programme: {
      title: 'The Programme',
      text: `Our 2024 programme celebrated the finest in contemporary bronze casting, bringing together established artists and emerging talent. Through a series of exhibitions, workshops, and residencies, we explored the intersection of traditional techniques and modern artistic vision.

Throughout the year, we hosted a diverse range of events and collaborations that celebrated the craft of bronze casting while pushing its boundaries into new creative territories.`,
      images: Array(16).fill('/foundry.webp'),
    },
    'care-homes': {
      title: 'Woodbridge Care Homes',
      text: `Our partnership with Woodbridge Care Homes in 2024 brought the art of bronze casting to older residents through hands-on creative sessions. This programme celebrated memory, storytelling, and creative expression through accessible bronze casting techniques.

Participants worked with our team to create personal pieces that reflected their stories and experiences, fostering connection and creativity within the care home community.`,
      images: Array(16).fill('/denise-2.webp'),
    },
    'orford-primary': {
      title: 'Orford Primary',
      text: `Our 2024 partnership with Orford Primary School introduced young students to the ancient craft of bronze casting. Through age-appropriate workshops, children learned about materials, processes, and creative problem-solving.

The programme connected art with science, history, and design, inspiring the next generation of makers and creative thinkers while building lasting connections between the school and our foundry.`,
      images: Array(16).fill('/laura-wilson.webp'),
    },
  };

  return (
    <div className="min-h-screen bg-[#F0EEDE] noise-bg pb-[48px]">
      <Navigation
        pageTitle="2024 Programme"
        pageDescription="Explore our 2024 programme, featuring exhibitions, guest artists, and community partnerships across Woodbridge and beyond."
      />

      <div className="pt-32 px-8 max-w-7xl mx-auto">
        {/* Tab Navigation */}
        <div className="flex gap-4 mb-12 border-b border-gray-300 bg-[#F0EEDE] relative z-30">
          <button
            onClick={() => setActiveTab('programme')}
            className={`px-6 py-3 font-serif text-lg transition-all duration-300 ${
              activeTab === 'programme'
                ? 'border-b-2 border-[#c4342e] text-[#c4342e]'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            The Programme
          </button>
          <button
            onClick={() => setActiveTab('guest-artists')}
            className={`px-6 py-3 font-serif text-lg transition-all duration-300 ${
              activeTab === 'guest-artists'
                ? 'border-b-2 border-[#c4342e] text-[#c4342e]'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Guest Artists
          </button>
          <button
            onClick={() => setActiveTab('care-homes')}
            className={`px-6 py-3 font-serif text-lg transition-all duration-300 ${
              activeTab === 'care-homes'
                ? 'border-b-2 border-[#c4342e] text-[#c4342e]'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Woodbridge Care Homes
          </button>
          <button
            onClick={() => setActiveTab('orford-primary')}
            className={`px-6 py-3 font-serif text-lg transition-all duration-300 ${
              activeTab === 'orford-primary'
                ? 'border-b-2 border-[#c4342e] text-[#c4342e]'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Orford Primary
          </button>
        </div>

        {/* Content */}
        {Object.entries(sections).map(([key, section]) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: activeTab === key ? 1 : 0, y: activeTab === key ? 0 : 20 }}
            transition={{ duration: 0.6 }}
            className={activeTab === key ? 'block' : 'hidden'}
          >
            <div className="grid grid-cols-2 gap-12 mb-20 items-start">
              {/* Left column: Image Grid */}
              <div className="grid grid-cols-4 gap-2 max-h-[calc(100vh-250px)] overflow-y-auto pr-4">
                {section.images.map((img, index) => (
                  <div key={index} className="aspect-square relative flex items-center justify-center">
                    <img
                      src={img}
                      alt={`${section.title} ${index + 1}`}
                      className="max-w-full max-h-full object-contain"
                    />
                    <div className="absolute inset-0 bg-[#c4342e] mix-blend-multiply opacity-40"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#c4342e]/25 to-[#8b1a14]/25"></div>
                  </div>
                ))}
              </div>

              {/* Right column: Text */}
              <div className="max-h-[calc(100vh-250px)] overflow-y-auto pr-4">
                <h2 className="text-4xl font-serif font-bold mb-6 text-gray-800">
                  {section.title}
                </h2>
                <div className="text-lg leading-relaxed text-gray-700 whitespace-pre-line">
                  {section.text}
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Guest Artists Tab */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: activeTab === 'guest-artists' ? 1 : 0, y: activeTab === 'guest-artists' ? 0 : 20 }}
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
                  <Link href={`/artists/${artist.slug}`} className="block group md:flex gap-8 items-center">
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
  );
}
