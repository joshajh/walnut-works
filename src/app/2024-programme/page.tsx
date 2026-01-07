'use client';

import dynamic from 'next/dynamic';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const PDFFlipBook = dynamic(() => import('@/components/PDFFlipBook'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-[60vh]">
      <div className="text-gray-600 font-serif text-lg">Loading...</div>
    </div>
  ),
});

export default function Programme2024Page() {
  return (
    <div className="min-h-screen bg-[#F0EEDE] noise-bg pb-[48px]">
      <Navigation
        pageTitle="Artists in Residence 2024"
        pageDescription="Explore our 2024 programme showcasing the creative work and community engagement from the past year."
      />

      <div className="pt-32 md:pt-48 px-4 md:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <PDFFlipBook pdfUrl="/walnut-works-24.pdf" />
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
