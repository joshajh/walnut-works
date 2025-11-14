'use client';

import { useState, useEffect } from 'react';
import { use } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Artwork {
  id: number;
  title: string;
  description: string | null;
  image_url: string;
  year: string | null;
  medium: string | null;
  dimensions: string | null;
}

interface Artist {
  id: number;
  name: string;
  slug: string;
  bio: string;
  profile_image_url: string | null;
  website: string | null;
  instagram: string | null;
  twitter: string | null;
  email: string | null;
  artworks: Artwork[];
}

export default function ArtistDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const [artist, setArtist] = useState<Artist | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArtist();
  }, [slug]);

  const fetchArtist = async () => {
    try {
      const res = await fetch(`/api/artists?slug=${slug}`);
      const data = await res.json();
      setArtist(data);
    } catch (error) {
      console.error('Failed to fetch artist:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F0EEDE] noise-bg flex items-center justify-center">
        <Navigation />
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  if (!artist) {
    return (
      <div className="min-h-screen bg-[#F0EEDE] noise-bg">
        <Navigation />
        <div className="pt-32 px-12 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-serif font-bold mb-6">Artist Not Found</h1>
          <Link href="/artists" className="text-[#c4342e] hover:underline">
            ← Back to Artists
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F0EEDE] noise-bg">
      <Navigation />

      <article className="pt-32 px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/artists" className="text-gray-600 hover:text-[#c4342e] mb-8 inline-block">
            ← Back to Artists
          </Link>

          {/* Artist Profile Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {artist.profile_image_url && (
              <div className="md:col-span-1">
                <div className="aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden sticky top-32">
                  <img
                    src={artist.profile_image_url}
                    alt={artist.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}

            <div className="md:col-span-2">
              <h1 className="text-5xl font-serif font-bold mb-6">{artist.name}</h1>

              <div className="prose prose-lg max-w-none mb-8">
                {artist.bio.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-lg text-gray-800 leading-relaxed mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Social Links */}
              {(artist.website || artist.instagram || artist.twitter || artist.email) && (
                <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-300">
                  {artist.website && (
                    <a
                      href={artist.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-gray-900 hover:bg-gray-900 hover:text-white transition-colors text-sm"
                    >
                      Website
                    </a>
                  )}
                  {artist.instagram && (
                    <a
                      href={artist.instagram.startsWith('http') ? artist.instagram : `https://instagram.com/${artist.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-gray-900 hover:bg-gray-900 hover:text-white transition-colors text-sm"
                    >
                      Instagram
                    </a>
                  )}
                  {artist.twitter && (
                    <a
                      href={artist.twitter.startsWith('http') ? artist.twitter : `https://twitter.com/${artist.twitter}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-gray-900 hover:bg-gray-900 hover:text-white transition-colors text-sm"
                    >
                      Twitter
                    </a>
                  )}
                  {artist.email && (
                    <a
                      href={`mailto:${artist.email}`}
                      className="px-4 py-2 border border-gray-900 hover:bg-gray-900 hover:text-white transition-colors text-sm"
                    >
                      Email
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Artworks Section */}
          {artist.artworks && artist.artworks.length > 0 && (
            <div className="mt-16">
              <h2 className="text-3xl font-serif font-bold mb-8">Selected Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {artist.artworks.map((artwork, index) => (
                  <motion.div
                    key={artwork.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                  >
                    <div className="aspect-square bg-gray-200 overflow-hidden">
                      <img
                        src={artwork.image_url}
                        alt={artwork.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-serif font-bold mb-2">{artwork.title}</h3>
                      {artwork.year && (
                        <p className="text-sm text-gray-600 mb-2">{artwork.year}</p>
                      )}
                      {artwork.medium && (
                        <p className="text-sm text-gray-700 mb-2">{artwork.medium}</p>
                      )}
                      {artwork.dimensions && (
                        <p className="text-xs text-gray-600 mb-3">{artwork.dimensions}</p>
                      )}
                      {artwork.description && (
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {artwork.description}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </article>

      <Footer />
    </div>
  );
}
