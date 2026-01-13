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
    title: 'Our Story',
    text: 'Walnut Works was established in 2019. The idea had been formulated many years earlier to utilise Kabir\'s 30 years of experience working in commercial fine art foundries with prominent 20th and 21st century artists and Vicky\'s experience in schools and as a founder member, gallery organiser, and curator of five bronze shows at Greyfriars Art Space in King\'s Lynn.',
    image: '/foundry.webp',
  },
  {
    title: 'The Craft',
    text: 'Kabir wanted to encourage artists and give them the opportunity to work directly with the processes of fire \'cire perdue\' or lost wax casting mainly utilising direct burning out technique used in his own sculpture practice. Both artists have used the medium of bronze in their own practice as sculptors since 1985.',
    image: '/denise-2.webp',
  },
  {
    title: 'Workshops',
    text: 'Vicky has organised group wax modelling workshops for all ages and practices nationwide using her wax to bronze kits. Over the years we have developed a joint teaching facility offering a one-to-one course of consultation and group workshops for adults and children nationwide.',
    image: '/laura-wilson.webp',
  },
];

function ContentBlock({ block, index }: { block: typeof defaultBlocks[0]; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <div className="min-h-screen flex items-center py-24 px-4 md:px-16">
      <div className={`max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center ${isEven ? '' : 'direction-rtl'}`}>
        {isEven ? (
          <>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-5xl font-spectral font-bold">{block.title}</h2>
              <p className="text-base md:text-xl leading-relaxed text-gray-800">{block.text}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="aspect-[4/3] rounded-lg overflow-hidden relative"
            >
              <img src={block.image} alt={block.title} className="w-full h-full object-contain" />
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
              <img src={block.image} alt={block.title} className="w-full h-full object-contain" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-5xl font-spectral font-bold">{block.title}</h2>
              <p className="text-base md:text-xl leading-relaxed text-gray-800">{block.text}</p>
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
  const [heroText, setHeroText] = useState('Kabir Hussain MA and Vicky Hussain MA PGCE are both artists with individual art practices.');

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
        <section className="h-screen flex flex-col items-center justify-center px-4 md:px-16 pt-16 md:pt-0">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-8xl font-spectral font-bold mb-6"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-base md:text-xl text-gray-800 max-w-2xl text-center"
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
        <section className="min-h-screen flex items-center justify-center px-4 md:px-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl text-center"
          >
            <h2 className="text-3xl md:text-6xl font-spectral font-bold mb-8">Welcome to Walnut Works</h2>
            <p className="text-lg md:text-2xl leading-relaxed text-gray-800 mb-8">
              A traditional block investment foundry in Suffolk, UK.
            </p>
            <a
              href="mailto:kabirhussain11@gmail.com"
              className="inline-block font-serif text-lg text-[#c4342e] border-b border-[#c4342e] pb-1 hover:opacity-60 transition-opacity"
            >
              Email Us →
            </a>
          </motion.div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
