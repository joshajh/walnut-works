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

export default function ArtistsPage() {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedArtists, setExpandedArtists] = useState<Set<number>>(new Set());

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

  const toggleExpanded = (artistId: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setExpandedArtists(prev => {
      const newSet = new Set(prev);
      if (newSet.has(artistId)) {
        newSet.delete(artistId);
      } else {
        newSet.add(artistId);
      }
      return newSet;
    });
  };

  const truncateBio = (bio: string, maxLength: number = 400) => {
    if (bio.length <= maxLength) return { text: bio, isTruncated: false };
    const truncated = bio.substring(0, maxLength);
    const lastSpace = truncated.lastIndexOf(' ');
    return {
      text: truncated.substring(0, lastSpace) + '...',
      isTruncated: true
    };
  };

  const renderBioWithParagraphs = (bio: string) => {
    return bio.split('\n\n').map((paragraph, index) => (
      <p key={index} className={index > 0 ? 'mt-4' : ''}>
        {paragraph}
      </p>
    ));
  };

  return (
    <div className="min-h-screen bg-[#F0EEDE] noise-bg pb-[48px]">
      <Navigation
        pageTitle="Artists"
        pageDescription="Meet the talented artists working within our foundry, creating exceptional bronze sculptures and exploring innovative casting techniques."
      />

      <div className="pt-48 md:pt-48 px-4 md:px-8 max-w-7xl mx-auto">

        {/* Artists */}
        {loading ? (
          <p className="text-gray-600">Loading...</p>
        ) : artists.length === 0 ? (
          <p className="text-gray-600">No artists to display.</p>
        ) : (
          <div className="space-y-12 mb-20">
            {artists.map((artist, index) => {
              const isExpanded = expandedArtists.has(artist.id);
              const { text: truncatedText, isTruncated } = truncateBio(artist.bio);
              const displayText = isExpanded ? artist.bio : truncatedText;

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
              );
            })}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
