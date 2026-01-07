'use client';

import { useState, useEffect } from 'react';
import { use } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface JournalEntry {
  id: number;
  title: string;
  slug: string;
  content: string;
  image_url: string | null;
  created_at: string;
  updated_at: string;
}

export default function JournalEntryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const [entry, setEntry] = useState<JournalEntry | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEntry();
  }, [slug]);

  const fetchEntry = async () => {
    try {
      const res = await fetch(`/api/journal?slug=${slug}`);
      const data = await res.json();
      setEntry(data);
    } catch (error) {
      console.error('Failed to fetch journal entry:', error);
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

  if (!entry) {
    return (
      <div className="min-h-screen bg-[#F0EEDE] noise-bg">
        <Navigation />
        <div className="pt-32 px-12 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-serif font-bold mb-6">Entry Not Found</h1>
          <Link href="/journal" className="text-[#c4342e] hover:underline">
            ← Back to Journal
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F0EEDE] noise-bg">
      <Navigation />

      <article className="pt-32 px-12 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/journal" className="text-gray-600 hover:text-[#c4342e] mb-8 inline-block">
            ← Back to Journal
          </Link>

          {entry.image_url && (
            <div className="aspect-[16/9] bg-gray-200 rounded-lg overflow-hidden mb-8">
              <img
                src={entry.image_url}
                alt={entry.title}
                className="w-full h-full object-contain"
              />
            </div>
          )}

          <time className="text-sm text-gray-500">
            {new Date(entry.created_at).toLocaleDateString('en-GB', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>

          <h1 className="text-5xl font-serif font-bold mt-2 mb-8">{entry.title}</h1>

          <div className="prose prose-lg max-w-none">
            {entry.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-lg text-gray-800 leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>

          {entry.updated_at !== entry.created_at && (
            <p className="text-sm text-gray-500 mt-12 pt-6 border-t border-gray-300">
              Last updated: {new Date(entry.updated_at).toLocaleDateString('en-GB')}
            </p>
          )}
        </motion.div>
      </article>

      <Footer />
    </div>
  );
}
