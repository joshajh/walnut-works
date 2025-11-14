'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const MapSection = dynamic(() => import('@/components/MapSection'), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="h-screen overflow-y-auto snap-y snap-mandatory bg-[#F0EEDE] noise-bg">
      <Navigation />

      {/* Section 1: Hero */}
      <section className="h-screen snap-start snap-always flex items-end justify-end p-16 relative">
        <div className="text-right">
          <h1 className="text-7xl font-spectral font-normal drop-shadow-md !text-[#c4342e]">Walnut Works</h1>
          <p className="text-base tracking-widest mt-2 text-gray-800 uppercase" style={{ letterSpacing: '0.08em', fontWeight: 500 }}>
            Master bronze foundry. Suffolk, UK.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 border-b border-gray-900 mx-12 my-8"></div>
      </section>

      {/* Section 2: Introduction */}
      <section className="h-screen snap-start snap-always flex items-center justify-center p-16 overflow-hidden relative">
        <div className="max-w-6xl grid grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-xl leading-relaxed mb-8 text-gray-800">
                Welcome to Walnut Works, a creative studio dedicated to crafting
                exceptional design experiences. We blend traditional craftsmanship
                with modern innovation.
              </p>
              <p className="text-xl leading-relaxed text-gray-800">
                Our work spans multiple disciplines, always with an eye for detail
                and a commitment to quality.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-6">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="aspect-square bg-gray-200 rounded-lg overflow-hidden"
              >
                <div className="w-full h-full bg-gradient-to-br from-amber-100 to-amber-300" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="aspect-square bg-gray-200 rounded-lg overflow-hidden"
              >
                <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-300" />
              </motion.div>
            </div>
          </div>
      </section>

      {/* Section 3: Visit */}
      <section className="h-screen snap-start snap-always">
        <MapSection />
      </section>

      {/* Footer */}
      <section className="min-h-screen snap-start snap-always flex items-end">
        <Footer />
      </section>
    </div>
  );
}
