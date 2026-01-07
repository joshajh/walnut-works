'use client';

import { useState, useEffect } from 'react';
import { use } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface WorkshopExample {
  id: number;
  title: string;
  slug: string;
  description: string;
  image_url: string | null;
  gallery_images: string | null;
  created_at: string;
}

export default function WorkshopExampleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const [example, setExample] = useState<WorkshopExample | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchExample();
  }, [slug]);

  const fetchExample = async () => {
    try {
      const res = await fetch(`/api/workshop-examples?slug=${slug}`);
      const data = await res.json();
      setExample(data);
    } catch (error) {
      console.error('Failed to fetch workshop example:', error);
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

  if (!example) {
    return (
      <div className="min-h-screen bg-[#F0EEDE] noise-bg">
        <Navigation />
        <div className="pt-32 px-12 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-serif font-bold mb-6">Example Not Found</h1>
          <Link href="/workshops" className="text-[#c4342e] hover:underline">
            ← Back to Workshops
          </Link>
        </div>
      </div>
    );
  }

  const galleryImages = example.gallery_images ? JSON.parse(example.gallery_images) : [];

  return (
    <div className="min-h-screen bg-[#F0EEDE] noise-bg pb-[48px]">
      <Navigation
        pageTitle="Workshop Example"
        pageDescription="Explore examples of our past workshop sessions and creative outcomes."
      />

      <article className="pt-32 px-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl font-serif font-bold mb-4">{example.title}</h1>

          <Link href="/workshops" className="text-gray-600 hover:text-[#c4342e] transition-colors flex items-center gap-2 text-sm mb-12 inline-flex">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-current">
              <path d="M10 4L4 10L10 16M4 10H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Workshops
          </Link>

          <div className="grid grid-cols-2 gap-16 mb-16">
            {/* Left: Image */}
            {example.image_url && (
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={example.image_url}
                  alt={example.title}
                  className="w-full h-full object-contain"
                />
              </div>
            )}

            {/* Right: Content */}
            <div>
              <div className="max-w-none mb-12">
                {example.description.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-lg text-gray-800 leading-relaxed mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-6 border-t border-gray-300">
                <Link
                  href="/workshops#booking"
                  className="inline-block text-[#c4342e] hover:opacity-60 transition-opacity font-serif text-lg border-b border-[#c4342e]"
                >
                  Enquire About Workshops
                </Link>
              </div>
            </div>
          </div>

          {/* Gallery */}
          {galleryImages.length > 0 && (
            <div className="mt-16">
              <h2 className="text-3xl font-serif font-bold mb-8">Gallery</h2>
              <div className="grid grid-cols-2 gap-6">
                {galleryImages.map((imageUrl: string, index: number) => (
                  <div key={index} className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={imageUrl}
                      alt={`${example.title} - Image ${index + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
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
