'use client';

import { useState, useEffect } from 'react';
import { use } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Workshop {
  id: number;
  title: string;
  slug: string;
  description: string;
  date: string;
  location: string;
  image_url: string | null;
  is_upcoming: number;
  created_at: string;
}

export default function WorkshopDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const [workshop, setWorkshop] = useState<Workshop | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWorkshop();
  }, [slug]);

  const fetchWorkshop = async () => {
    try {
      const res = await fetch(`/api/workshops?slug=${slug}`);
      const data = await res.json();
      setWorkshop(data);
    } catch (error) {
      console.error('Failed to fetch workshop:', error);
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

  if (!workshop) {
    return (
      <div className="min-h-screen bg-[#F0EEDE] noise-bg">
        <Navigation />
        <div className="pt-32 px-12 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-serif font-bold mb-6">Workshop Not Found</h1>
          <Link href="/workshops" className="text-[#c4342e] hover:underline">
            ← Back to Workshops
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F0EEDE] noise-bg">
      <Navigation />

      <article className="pt-32 px-12 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/workshops" className="text-gray-600 hover:text-[#c4342e] mb-8 inline-block">
            ← Back to Workshops
          </Link>

          {workshop.image_url && (
            <div className="aspect-[21/9] bg-gray-200 rounded-lg overflow-hidden mb-8">
              <img
                src={workshop.image_url}
                alt={workshop.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {workshop.date && workshop.location && (
            <div className="mb-6">
              <p className="text-sm text-gray-600 mb-2">
                {new Date(workshop.date).toLocaleDateString('en-GB', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
                {' • '}
                {workshop.location}
              </p>
            </div>
          )}

          <h1 className="text-5xl font-serif font-bold mb-8">{workshop.title}</h1>

          <div className="prose prose-lg max-w-none">
            {workshop.description.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-lg text-gray-800 leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>

          {workshop.is_upcoming === 1 && (
            <div className="mt-12 p-8 bg-white rounded-lg shadow-lg">
              <h2 className="text-2xl font-serif font-bold mb-4">Interested in this workshop?</h2>
              <p className="text-gray-700 mb-6">
                Get in touch with us to learn more or register your interest.
              </p>
              <Link
                href="/workshops#booking"
                className="inline-block px-8 py-3 bg-[#c4342e] text-white rounded hover:opacity-80 transition-opacity"
              >
                Book This Workshop
              </Link>
            </div>
          )}
        </motion.div>
      </article>

      <Footer />
    </div>
  );
}
