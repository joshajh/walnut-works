'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface AboutContent {
  section: string;
  content: string;
}

const defaultBlocks = [
  {
    title: 'Lorem Ipsum Dolor',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    image: '/foundry.webp',
  },
  {
    title: 'Consectetur Adipiscing',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
    image: '/denise-2.webp',
  },
  {
    title: 'Sed Do Eiusmod',
    text: 'Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: '/laura-wilson.webp',
  },
  {
    title: 'Ullamco Laboris',
    text: 'Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.',
    image: '/julie-lockhart-1.webp',
  },
];

function ContentBlock({ block, index }: { block: typeof defaultBlocks[0]; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <div className="min-h-screen flex items-center py-24 px-16">
      <div className={`max-w-7xl mx-auto w-full grid grid-cols-2 gap-16 items-center ${isEven ? '' : 'direction-rtl'}`}>
        {isEven ? (
          <>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-5xl font-spectral font-bold">{block.title}</h2>
              <p className="text-xl leading-relaxed text-gray-800">{block.text}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="aspect-[4/3] rounded-lg overflow-hidden relative"
            >
              <img src={block.image} alt={block.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-[#c4342e] mix-blend-multiply opacity-40"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#c4342e]/25 to-[#8b1a14]/25"></div>
            </motion.div>
          </>
        ) : (
          <>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="aspect-[4/3] rounded-lg overflow-hidden relative"
            >
              <img src={block.image} alt={block.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-[#c4342e] mix-blend-multiply opacity-40"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#c4342e]/25 to-[#8b1a14]/25"></div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-5xl font-spectral font-bold">{block.title}</h2>
              <p className="text-xl leading-relaxed text-gray-800">{block.text}</p>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
}

export default function About() {
  const [aboutContent, setAboutContent] = useState<AboutContent[]>([]);
  const [contentBlocks, setContentBlocks] = useState(defaultBlocks);
  const [heroText, setHeroText] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');

  useEffect(() => {
    fetchAboutContent();
  }, []);

  const fetchAboutContent = async () => {
    try {
      const res = await fetch('/api/about');
      const data = await res.json();
      setAboutContent(data);

      // Update hero text if available
      const hero = data.find((item: AboutContent) => item.section === 'hero');
      if (hero) setHeroText(hero.content);

      // Update content blocks if available
      const blocks = data.filter((item: AboutContent) => item.section.startsWith('block_'));
      if (blocks.length > 0) {
        const updatedBlocks = blocks.map((block: AboutContent, index: number) => {
          const lines = block.content.split('\n');
          return {
            title: lines[0] || defaultBlocks[index]?.title || 'Untitled',
            text: lines.slice(1).join('\n') || defaultBlocks[index]?.text || '',
            image: defaultBlocks[index]?.image || 'from-gray-200 to-gray-400',
          };
        });
        setContentBlocks(updatedBlocks);
      }
    } catch (error) {
      console.error('Failed to fetch about content:', error);
    }
  };

  return (
    <div className="min-h-screen bg-[#F0EEDE] noise-bg pb-[48px]">
      <Navigation pageTitle="About" />

      <div>
        {/* Hero Section */}
        <section className="h-screen flex flex-col items-center justify-center px-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-8xl font-spectral font-bold mb-6"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xl text-gray-800 max-w-2xl text-center"
          >
            {heroText}
          </motion.p>
        </section>

        {/* Content Blocks */}
        <div>
          {contentBlocks.map((block, index) => (
            <ContentBlock key={index} block={block} index={index} />
          ))}
        </div>

        {/* Closing Section */}
        <section className="min-h-screen flex items-center justify-center px-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl text-center"
          >
            <h2 className="text-6xl font-spectral font-bold mb-8">Lorem Ipsum Dolor Sit</h2>
            <p className="text-2xl leading-relaxed text-gray-800">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              Nisi ut aliquip ex ea commodo consequat.
            </p>
          </motion.div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
