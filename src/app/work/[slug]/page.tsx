'use client';

import Navigation from '@/components/Navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { use } from 'react';

const projectData: Record<string, {
  title: string;
  description: string;
  year: string;
  category: string;
  images: string[];
}> = {
  'project-1': {
    title: 'Artisan Workspace',
    description: 'A thoughtfully designed workspace that celebrates traditional craftsmanship while incorporating modern functionality. Natural materials and abundant light create an inspiring environment for creative work.',
    year: '2024',
    category: 'Interior Design',
    images: ['from-amber-200 to-amber-400', 'from-amber-100 to-amber-300', 'from-orange-200 to-orange-300'],
  },
  'project-2': {
    title: 'Coastal Retreat',
    description: 'A serene coastal dwelling that blurs the boundary between interior and exterior. Expansive windows frame ocean views, while natural materials echo the surrounding landscape.',
    year: '2023',
    category: 'Architecture',
    images: ['from-blue-200 to-blue-400', 'from-cyan-100 to-cyan-300', 'from-sky-200 to-sky-300'],
  },
  'project-3': {
    title: 'Urban Garden',
    description: 'Transforming a compact urban space into a lush green sanctuary. Vertical gardens and thoughtful plant selection maximize greenery in minimal square footage.',
    year: '2024',
    category: 'Landscape',
    images: ['from-green-200 to-green-400', 'from-emerald-100 to-emerald-300', 'from-lime-200 to-lime-300'],
  },
  'project-4': {
    title: 'Heritage Collection',
    description: 'A furniture collection inspired by traditional joinery techniques, reimagined for contemporary living. Each piece showcases the beauty of solid wood and honest construction.',
    year: '2023',
    category: 'Furniture Design',
    images: ['from-stone-200 to-stone-400', 'from-stone-100 to-stone-300', 'from-zinc-200 to-zinc-300'],
  },
  'project-5': {
    title: 'Modern Dwelling',
    description: 'A minimalist residence that prioritizes space, light, and materiality. Clean lines and neutral tones create a calm backdrop for daily life.',
    year: '2024',
    category: 'Architecture',
    images: ['from-slate-200 to-slate-400', 'from-slate-100 to-slate-300', 'from-gray-200 to-gray-300'],
  },
  'project-6': {
    title: 'Studio Series',
    description: 'A curated collection of objects for the creative workspace. Each item is designed to be both functional and beautiful, enhancing the daily ritual of making.',
    year: '2023',
    category: 'Product Design',
    images: ['from-neutral-200 to-neutral-400', 'from-neutral-100 to-neutral-300', 'from-stone-200 to-stone-300'],
  },
};

export default function WorkDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const project = projectData[slug];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Navigation />
        <p>Project not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-24">
      <Navigation />

      <div className="pt-32 px-16 max-w-7xl mx-auto">
        {/* Back Link */}
        <Link
          href="/work"
          className="inline-block mb-12 hover:opacity-60 transition-opacity"
        >
          ← Back to Work
        </Link>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-6xl font-spectral font-bold mb-6">
            {project.title}
          </h1>
          <div className="flex gap-12 text-lg">
            <div>
              <span className="text-gray-500">Year:</span> {project.year}
            </div>
            <div>
              <span className="text-gray-500">Category:</span> {project.category}
            </div>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full aspect-[16/9] bg-gray-200 rounded-lg overflow-hidden mb-16"
        >
          <div className={`w-full h-full bg-gradient-to-br ${project.images[0]}`} />
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl mb-24"
        >
          <p className="text-xl leading-relaxed">{project.description}</p>
        </motion.div>

        {/* Additional Images */}
        <div className="grid grid-cols-2 gap-8">
          {project.images.slice(1).map((gradient, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
              className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden"
            >
              <div className={`w-full h-full bg-gradient-to-br ${gradient}`} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
