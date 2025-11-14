'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface JournalEntry {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string | null;
  image_url: string | null;
  created_at: string;
}

export default function JournalPage() {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    try {
      const res = await fetch('/api/journal?published=true');
      const data = await res.json();
      setEntries(data);
    } catch (error) {
      console.error('Failed to fetch journal entries:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F0EEDE] noise-bg pb-[48px]">
      <Navigation
        pageTitle="Journal"
        pageDescription="Thoughts, insights, and stories from the foundry."
      />

      <div className="pt-20 px-8 max-w-7xl mx-auto">

        {/* Journal Entries */}
        {loading ? (
          <p className="text-gray-600">Loading...</p>
        ) : entries.length === 0 ? (
          <p className="text-gray-600">No journal entries yet. Check back soon!</p>
        ) : (
          <div className="grid grid-cols-1 gap-16 mb-20">
            {entries.map((entry, index) => (
              <motion.article
                key={entry.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <Link href={`/journal/${entry.slug}`} className="block group">
                  {entry.image_url && (
                    <div className="aspect-[21/9] bg-gray-200 overflow-hidden">
                      <img
                        src={entry.image_url}
                        alt={entry.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-8">
                    <time className="text-sm text-gray-500">
                      {new Date(entry.created_at).toLocaleDateString('en-GB', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                    <h2 className="text-4xl font-serif font-normal mt-2 mb-4 group-hover:text-[#c4342e] transition-colors">
                      {entry.title}
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {entry.excerpt || entry.content.substring(0, 200)}...
                    </p>
                    <span className="inline-block mt-6 text-[#c4342e] font-medium group-hover:underline">
                      Read more →
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
