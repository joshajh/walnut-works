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
    <div className="min-h-screen bg-[#F0EEDE] noise-bg">
      <Navigation />

      <div className="pt-32 px-12 max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h1 className="text-6xl font-serif font-bold mb-6">Artists In Residence</h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            Meet the talented artists working within our foundry, creating exceptional bronze sculptures and exploring innovative casting techniques.
          </p>
        </motion.div>

        {/* Artists Grid */}
        {loading ? (
          <p className="text-gray-600">Loading...</p>
        ) : artists.length === 0 ? (
          <p className="text-gray-600">No artists to display.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            {artists.map((artist, index) => (
              <motion.article
                key={artist.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/artists/${artist.slug}`} className="block">
                  {artist.profile_image_url && (
                    <div className="aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden mb-6">
                      <img
                        src={artist.profile_image_url}
                        alt={artist.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <h2 className="text-3xl font-serif font-bold mb-3 group-hover:text-[#c4342e] transition-colors">
                    {artist.name}
                  </h2>
                  <p className="text-gray-700 leading-relaxed line-clamp-4">
                    {artist.bio}
                  </p>
                  <span className="inline-block mt-4 text-[#c4342e] font-medium group-hover:underline">
                    View profile →
                  </span>
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
