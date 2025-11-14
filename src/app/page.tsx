'use client';

import Navigation from '@/components/Navigation';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const MapSection = dynamic(() => import('@/components/MapSection'), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <Navigation />

      {/* Section 1: Hero */}
      <section className="h-screen snap-start flex items-end justify-end p-16">
        <h1 className="text-8xl font-spectral font-bold">Walnut Works</h1>
      </section>

      {/* Section 2: Introduction */}
      <section className="h-screen snap-start flex items-center justify-center p-16">
        <div className="max-w-6xl grid grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-xl leading-relaxed mb-8">
              Welcome to Walnut Works, a creative studio dedicated to crafting
              exceptional design experiences. We blend traditional craftsmanship
              with modern innovation.
            </p>
            <p className="text-xl leading-relaxed">
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
      <section className="h-screen snap-start">
        <MapSection />
      </section>
    </div>
  );
}
