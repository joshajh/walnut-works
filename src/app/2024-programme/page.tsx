'use client';

import { useState } from 'react';
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
  const [activeTab, setActiveTab] = useState('programme');

  return (
    <div className="min-h-screen bg-[#F0EEDE] noise-bg pb-[48px]">
      <Navigation
        pageTitle="Artists in Residence 2024"
        pageDescription="Explore our 2024 programme showcasing the creative work and community engagement from the past year."
        tabButtons={
          <div className="flex gap-2 md:gap-4 overflow-x-auto">
            <button
              onClick={() => setActiveTab('programme')}
              className={`px-3 md:px-6 py-2 font-serif text-sm md:text-lg whitespace-nowrap transition-all duration-300 ${
                activeTab === 'programme'
                  ? 'border-b-2 border-[#c4342e] text-[#c4342e]'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Programme
            </button>
            <button
              onClick={() => setActiveTab('partners')}
              className={`px-3 md:px-6 py-2 font-serif text-sm md:text-lg whitespace-nowrap transition-all duration-300 ${
                activeTab === 'partners'
                  ? 'border-b-2 border-[#c4342e] text-[#c4342e]'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Partners
            </button>
          </div>
        }
      />

      <div className="pt-48 md:pt-48 px-4 md:px-8 max-w-5xl mx-auto">
        {/* Programme Tab */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: activeTab === 'programme' ? 1 : 0,
            y: activeTab === 'programme' ? 0 : 20,
          }}
          transition={{ duration: 0.6 }}
          className={activeTab === 'programme' ? 'block' : 'hidden'}
        >
          <PDFFlipBook pdfUrl="/walnut-works-24.pdf" />
        </motion.div>

        {/* Partners Tab */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: activeTab === 'partners' ? 1 : 0,
            y: activeTab === 'partners' ? 0 : 20,
          }}
          transition={{ duration: 0.6 }}
          className={activeTab === 'partners' ? 'block' : 'hidden'}
        >
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 text-gray-800">
                Partners & Funders
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Logo section for partners and funders
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
