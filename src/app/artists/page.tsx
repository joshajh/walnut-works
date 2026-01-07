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

  return (
    <div className="min-h-screen bg-[#F0EEDE] noise-bg pb-[48px]">
      <Navigation
        pageTitle="Artists"
        pageDescription="Meet the talented artists working within our foundry, creating exceptional bronze sculptures and exploring innovative casting techniques."
      />

      <div className="pt-20 px-8 max-w-7xl mx-auto">

        {/* Artists */}
        {loading ? (
          <p className="text-gray-600">Loading...</p>
        ) : artists.length === 0 ? (
          <p className="text-gray-600">No artists to display.</p>
        ) : (
          <div className="space-y-12 mb-20">
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
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      />
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
      </div>

      <Footer />
    </div>
  );
}
