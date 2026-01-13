'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

const projects = [
  {
    id: 'project-1',
    title: 'Artisan Workspace',
    image: 'from-amber-200 to-amber-400',
    align: 'left',
  },
  {
    id: 'project-2',
    title: 'Coastal Retreat',
    image: 'from-blue-200 to-blue-400',
    align: 'right',
  },
  {
    id: 'project-3',
    title: 'Urban Garden',
    image: 'from-green-200 to-green-400',
    align: 'left',
  },
  {
    id: 'project-4',
    title: 'Heritage Collection',
    image: 'from-stone-200 to-stone-400',
    align: 'right',
  },
  {
    id: 'project-5',
    title: 'Modern Dwelling',
    image: 'from-slate-200 to-slate-400',
    align: 'left',
  },
  {
    id: 'project-6',
    title: 'Studio Series',
    image: 'from-neutral-200 to-neutral-400',
    align: 'right',
  },
];

export default function Work() {
  return (
    <div className="min-h-screen pb-24 bg-[#F0EEDE] noise-bg">
      <Navigation />

      <div className="pt-32 px-4 md:px-16 space-y-24">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/work/${project.id}`}
            className="block group"
          >
            <div
              className={`flex items-center gap-8 ${
                project.align === 'right' ? 'justify-end' : 'justify-start'
              }`}
            >
              {project.align === 'left' ? (
                <>
                  <div className="w-1/2 aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                    <div
                      className={`w-full h-full bg-gradient-to-br ${project.image} transition-transform duration-500 group-hover:scale-105`}
                    />
                  </div>
                  <h2 className="text-3xl font-spectral font-bold group-hover:opacity-60 transition-opacity">
                    {project.title}
                  </h2>
                </>
              ) : (
                <>
                  <h2 className="text-3xl font-spectral font-bold group-hover:opacity-60 transition-opacity">
                    {project.title}
                  </h2>
                  <div className="w-1/2 aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                    <div
                      className={`w-full h-full bg-gradient-to-br ${project.image} transition-transform duration-500 group-hover:scale-105`}
                    />
                  </div>
                </>
              )}
            </div>
          </Link>
        ))}
      </div>

      <Footer />
    </div>
  );
}
