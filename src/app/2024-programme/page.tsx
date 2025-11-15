'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function Programme2024Page() {
  return (
    <div className="bg-[#F0EEDE] noise-bg">
      <Navigation pageTitle="2024 Programme" />

      {/* Under Construction */}
      <section className="min-h-screen flex items-center justify-center px-8 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-serif font-normal leading-tight mb-8 text-gray-800">
            Under Construction
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-12">
            We're currently developing this page. Please check back soon for information about our 2024 programme.
          </p>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
