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
    <div className="min-h-screen bg-[#F0EEDE] noise-bg">
      <Navigation />

      <article className="pt-32 px-12 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/workshops" className="text-gray-600 hover:text-[#c4342e] mb-8 inline-block">
            ← Back to Workshops
          </Link>

          {example.image_url && (
            <div className="aspect-[21/9] bg-gray-200 rounded-lg overflow-hidden mb-8">
              <img
                src={example.image_url}
                alt={example.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <h1 className="text-5xl font-serif font-bold mb-8">{example.title}</h1>

          <div className="prose prose-lg max-w-none mb-12">
            {example.description.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-lg text-gray-800 leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Gallery */}
          {galleryImages.length > 0 && (
            <div className="mt-12">
              <h2 className="text-3xl font-serif font-bold mb-8">Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {galleryImages.map((imageUrl: string, index: number) => (
                  <div key={index} className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                    <img
                      src={imageUrl}
                      alt={`${example.title} - Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-12 p-8 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-serif font-bold mb-4">Interested in this activity?</h2>
            <p className="text-gray-700 mb-6">
              We offer bespoke workshops and experiences. Get in touch to discuss your requirements.
            </p>
            <Link
              href="/workshops#booking"
              className="inline-block px-8 py-3 bg-[#c4342e] text-white rounded hover:opacity-80 transition-opacity"
            >
              Enquire About Workshops
            </Link>
          </div>
        </motion.div>
      </article>

      <Footer />
    </div>
  );
}
