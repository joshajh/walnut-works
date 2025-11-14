'use client';

import Navigation from '@/components/Navigation';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const contentBlocks = [
  {
    title: 'Crafting Excellence',
    text: 'At Walnut Works, we believe in the power of thoughtful design. Every project begins with understanding—understanding your vision, your needs, and the story you want to tell.',
    image: 'from-amber-200 to-amber-400',
  },
  {
    title: 'Design Philosophy',
    text: 'Our approach combines traditional craftsmanship with contemporary innovation. We work with natural materials, honest construction, and timeless principles that ensure our work endures.',
    image: 'from-blue-200 to-blue-400',
  },
  {
    title: 'Collaborative Process',
    text: 'We see every project as a partnership. Through close collaboration, we transform ideas into tangible reality, creating spaces and objects that resonate with meaning and purpose.',
    image: 'from-green-200 to-green-400',
  },
  {
    title: 'Sustainable Future',
    text: 'Sustainability is not an afterthought—it is fundamental to everything we create. We are committed to practices that honor both craft and environment, building for generations to come.',
    image: 'from-stone-200 to-stone-400',
  },
];

function ContentBlock({ block, index }: { block: typeof contentBlocks[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      className="min-h-screen flex items-center py-24 px-16"
    >
      <div className={`max-w-7xl mx-auto w-full grid grid-cols-2 gap-16 items-center ${isEven ? '' : 'direction-rtl'}`}>
        {isEven ? (
          <>
            <motion.div className="space-y-6">
              <h2 className="text-5xl font-spectral font-bold">{block.title}</h2>
              <p className="text-xl leading-relaxed text-gray-200">{block.text}</p>
            </motion.div>
            <motion.div
              style={{ y: imageY }}
              className="aspect-[4/3] rounded-lg overflow-hidden"
            >
              <div className={`w-full h-full bg-gradient-to-br ${block.image}`} />
            </motion.div>
          </>
        ) : (
          <>
            <motion.div
              style={{ y: imageY }}
              className="aspect-[4/3] rounded-lg overflow-hidden"
            >
              <div className={`w-full h-full bg-gradient-to-br ${block.image}`} />
            </motion.div>
            <motion.div className="space-y-6">
              <h2 className="text-5xl font-spectral font-bold">{block.title}</h2>
              <p className="text-xl leading-relaxed text-gray-200">{block.text}</p>
            </motion.div>
          </>
        )}
      </div>
    </motion.div>
  );
}

export default function About() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <div className="min-h-screen noise-bg">
      <Navigation theme="light" />

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="h-screen flex flex-col items-center justify-center"
      >
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
          className="text-xl text-gray-200 max-w-2xl text-center"
        >
          We are a design studio dedicated to creating meaningful experiences
          through thoughtful craft and authentic collaboration.
        </motion.p>
      </motion.section>

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
          <h2 className="text-6xl font-spectral font-bold mb-8">Let&apos;s Create Together</h2>
          <p className="text-2xl leading-relaxed text-gray-200">
            We are always open to new collaborations and conversations.
            Reach out to discuss your next project.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
