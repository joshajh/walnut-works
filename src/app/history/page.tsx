'use client';

import Navigation from '@/components/Navigation';

export default function History() {
  return (
    <div className="min-h-screen bg-[#F0EEDE] noise-bg">
      <Navigation />

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center">
        <h1 className="text-8xl font-spectral font-bold">Walnut Works</h1>
      </section>

      {/* Two Column Section with Independent Scrolling */}
      <section className="h-screen flex">
        {/* Left Column - Images */}
        <div className="w-1/2 overflow-y-auto p-16 space-y-8 hide-scrollbar">
          <div className="aspect-[3/4] bg-gradient-to-br from-amber-100 to-amber-300 rounded-lg" />
          <div className="aspect-[3/4] bg-gradient-to-br from-slate-100 to-slate-300 rounded-lg" />
          <div className="aspect-[3/4] bg-gradient-to-br from-stone-100 to-stone-300 rounded-lg" />
          <div className="aspect-[3/4] bg-gradient-to-br from-neutral-100 to-neutral-300 rounded-lg" />
        </div>

        {/* Right Column - Text */}
        <div className="w-1/2 overflow-y-auto p-16 hide-scrollbar">
          <div className="max-w-xl">
            <h2 className="text-4xl font-spectral font-bold mb-8">Our Story</h2>
            <p className="text-lg leading-relaxed mb-6">
              Founded in the heart of Suffolk, Walnut Works emerged from a passion
              for creating meaningful design that connects people with places and
              ideas.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Our studio is housed in the historic Butley Mills, a converted
              industrial space that reflects our philosophy of honoring tradition
              while embracing innovation.
            </p>

            <h3 className="text-3xl font-spectral font-bold mt-12 mb-6">
              Our Approach
            </h3>
            <p className="text-lg leading-relaxed mb-6">
              We believe in the power of simplicity and clarity. Every project
              begins with deep listening and understanding, allowing us to craft
              solutions that are both beautiful and functional.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Collaboration is at the heart of what we do. We work closely with
              our clients, treating each project as a partnership in creating
              something exceptional.
            </p>

            <h3 className="text-3xl font-spectral font-bold mt-12 mb-6">
              Our Values
            </h3>
            <p className="text-lg leading-relaxed mb-6">
              Craftsmanship, integrity, and sustainability guide everything we
              create. We&apos;re committed to work that stands the test of time,
              both aesthetically and ethically.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              From typography to architecture, furniture to digital experiences,
              we approach each discipline with the same dedication to excellence
              and attention to detail.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Our work has been recognized internationally, but what matters most
              to us is the lasting impact we create for our clients and their
              communities.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
