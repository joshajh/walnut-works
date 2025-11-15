'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="h-screen overflow-y-auto snap-y snap-mandatory bg-[#F0EEDE] noise-bg">
      <Navigation />

      {/* Section 1: Hero */}
      <section className="h-screen snap-start snap-always flex items-end justify-end px-6 py-16 relative">
        {/* Text - bottom right */}
        <div className="text-right">
          <h1 className="text-7xl font-spectral font-normal drop-shadow-md !text-[#c4342e]">Walnut Works</h1>
          <p className="text-base tracking-widest mt-2 text-gray-800 uppercase" style={{ letterSpacing: '0.08em', fontWeight: 500 }}>
            Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 border-b border-gray-900 mx-6 my-8"></div>
      </section>

      {/* Section 2: Introduction */}
      <section className="h-screen snap-start snap-always flex items-center justify-center px-6 overflow-hidden relative pt-[48px]">
        {/* Section Title Tab */}
        <div className="absolute top-[48px] left-0 border-r border-b border-gray-300 backdrop-blur-md bg-[#F0EEDE]/80" style={{ writingMode: 'vertical-rl' }}>
          <div className="px-3 py-6 text-[#c4342e] font-serif text-lg" style={{ letterSpacing: '0.08em', fontWeight: 500 }}>
            Introduction
          </div>
        </div>

        <div className="max-w-6xl grid grid-cols-2 gap-12 items-center">
            {/* Left column: Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <h2 className="text-4xl font-serif font-bold mb-8 text-gray-800">
                Lorem Ipsum Dolor Sit
              </h2>
              <p className="text-xl leading-relaxed mb-8 text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-xl leading-relaxed text-gray-800">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </motion.div>

            {/* Right column: Image Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4 max-w-md"
            >
              <div className="w-full aspect-square flex items-center justify-center">
                <img
                  src="/foundry.webp"
                  alt="Walnut Works Foundry"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="w-full aspect-square flex items-center justify-center">
                <img
                  src="/denise-2.webp"
                  alt="Bronze casting work"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="w-full aspect-square flex items-center justify-center">
                <img
                  src="/laura-wilson.webp"
                  alt="Artist work"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="w-full aspect-square flex items-center justify-center">
                <img
                  src="/julie-lockhart-1.webp"
                  alt="Bronze sculpture"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </motion.div>
          </div>
      </section>

      {/* Section 3: Explore */}
      <section className="min-h-screen snap-start snap-always flex items-center justify-center px-6 py-16 relative pt-[48px]">
        {/* Section Title Tab */}
        <div className="absolute top-[48px] left-0 border-r border-b border-gray-300 backdrop-blur-md bg-[#F0EEDE]/80" style={{ writingMode: 'vertical-rl' }}>
          <div className="px-3 py-6 text-[#c4342e] font-serif text-lg" style={{ letterSpacing: '0.08em', fontWeight: 500 }}>
            Explore
          </div>
        </div>

        <div className="max-w-6xl w-full">
          <div className="space-y-6">
            {/* About Card */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Link href="/about" className="block group md:flex gap-4 items-start">
                <div className="md:w-1/5 aspect-[4/3] relative mb-4 md:mb-0 flex items-center justify-center">
                  <img
                    src="/clare-jarrett-1.webp"
                    alt="About Walnut Works"
                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#c4342e] mix-blend-multiply opacity-40"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#c4342e]/25 to-[#8b1a14]/25"></div>
                </div>
                <div className="md:w-4/5">
                  <h3 className="text-xl font-serif font-bold mb-1 group-hover:text-[#c4342e] transition-colors">
                    About
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                  </p>
                </div>
              </Link>
            </motion.article>

            {/* Bespoke Casting Card */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link href="/bespoke-casting" className="block group md:flex gap-4 items-start">
                <div className="md:w-1/5 aspect-[4/3] relative mb-4 md:mb-0 flex items-center justify-center">
                  <img
                    src="/foundry.webp"
                    alt="Bespoke Casting"
                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#c4342e] mix-blend-multiply opacity-40"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#c4342e]/25 to-[#8b1a14]/25"></div>
                </div>
                <div className="md:w-4/5">
                  <h3 className="text-xl font-serif font-bold mb-1 group-hover:text-[#c4342e] transition-colors">
                    Bespoke Casting
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                  </p>
                </div>
              </Link>
            </motion.article>

            {/* Workshops Card */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Link href="/workshops" className="block group md:flex gap-4 items-start">
                <div className="md:w-1/5 aspect-[4/3] relative mb-4 md:mb-0 flex items-center justify-center">
                  <img
                    src="/julie-lockhart-2.webp"
                    alt="Workshops"
                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#c4342e] mix-blend-multiply opacity-40"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#c4342e]/25 to-[#8b1a14]/25"></div>
                </div>
                <div className="md:w-4/5">
                  <h3 className="text-xl font-serif font-bold mb-1 group-hover:text-[#c4342e] transition-colors">
                    Workshops
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
                  </p>
                </div>
              </Link>
            </motion.article>

          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="min-h-screen snap-start snap-always flex items-end">
        <Footer />
      </section>
    </div>
  );
}
