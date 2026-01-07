'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function WorkshopsPage() {
  return (
    <div className="min-h-screen bg-[#F0EEDE] noise-bg pb-[48px]">
      <Navigation
        pageTitle="Workshops"
        pageDescription="Join us for hands-on workshops in traditional bronze casting techniques. Learn from master craftspeople in our Suffolk studio."
      />

      <div className="pt-32 px-8 max-w-7xl mx-auto">

        {/* Workshop 1: Wax to Bronze Kits */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-serif font-bold mb-8 text-gray-800">Wax to Bronze Kits</h2>

          <div className="md:flex gap-12 items-start">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                The kits include 40g wax, a tool, instructions and a tea light. 40g of wax equals half a kilo of bronze.
              </p>

              <div className="bg-white p-6 border border-gray-200 mb-8">
                <p className="text-2xl font-serif font-bold text-[#c4342e] mb-2">£75</p>
                <p className="text-gray-600">Includes postage and one finished patinated bronze sculpture.</p>
              </div>

              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Group workshops using Walnut Works kits are currently undertaken annually by Lauderdale House London in their schools project, artist Carole Griffiths at North Lights Studios, Craven College Yorkshire and MASS Sculpture, London.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This year we facilitated Orford Primary School and Woodbridge care homes using our kits, and previously Saffron Walden Museum.
                </p>
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="aspect-[4/3] overflow-hidden relative bg-gray-200">
                <Image
                  src="/images/workshops/wax-kit.jpg"
                  alt="Wax to Bronze Kit"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-sm text-gray-500 mt-2 italic">Wax to Bronze Kit</p>
            </div>
          </div>
        </motion.section>

        {/* Divider */}
        <div className="border-t border-gray-300 my-16"></div>

        {/* Workshop 2: Six Day Workshops */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-serif font-bold mb-4 text-gray-800">Six Day Workshops</h2>
          <p className="text-xl text-gray-600 mb-8 font-serif">At Walnut Works over three visits with master founder Kabir Hussain</p>

          <div className="p-6 mb-12 border-l-4 border-[#c4342e]">
            <p className="text-gray-700 leading-relaxed text-lg">
              A unique opportunity for artists to cast a small body of work in bronze ready for an exhibition using approximately 20kg of bronze for 10 objects 10cm x 10cm x 10cm.
            </p>
          </div>

          {/* Day 1-2 */}
          <div className="md:flex gap-12 items-start mb-16">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h3 className="text-2xl font-serif font-bold mb-4 text-gray-800">Days 1–2</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Artists arrive with a ready-made wax sculpture and would be supported to make an investment of a block mould ready for firing.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="aspect-[4/3] overflow-hidden relative bg-gray-200">
                <Image
                  src="/images/workshops/six-day-1.jpg"
                  alt="Days 1-2: Investment and mould preparation"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Casting Note */}
          <div className="p-6 mb-16 border-l-4 border-[#c4342e]">
            <p className="text-gray-700 leading-relaxed text-lg italic">
              Walnut Works will undertake the casting and fettling of the bronze in preparation for the finishing by the artist.
            </p>
          </div>

          {/* Image 2 */}
          <div className="mb-16">
            <div className="md:w-2/3 mx-auto">
              <div className="aspect-[4/3] overflow-hidden relative bg-gray-200">
                <Image
                  src="/images/workshops/six-day-2.jpg"
                  alt="Bronze casting process"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Day 3-4 */}
          <div className="md:flex gap-12 items-start mb-16 flex-row-reverse">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h3 className="text-2xl font-serif font-bold mb-4 text-gray-800">Days 3–4</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Artist under supervision to finish and fettle the metal.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="aspect-[4/3] overflow-hidden relative bg-gray-200">
                <Image
                  src="/images/workshops/six-day-3.jpg"
                  alt="Days 3-4: Metal finishing and fettling"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Day 5-6 */}
          <div className="md:flex gap-12 items-start mb-16">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h3 className="text-2xl font-serif font-bold mb-4 text-gray-800">Days 5–6</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Artist to continue metalwork finishing and complete process with patination to make artwork ready for exhibition.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="aspect-[4/3] overflow-hidden relative bg-gray-200">
                <Image
                  src="/images/workshops/six-day-4.jpg"
                  alt="Days 5-6: Patination and final finishing"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-white border border-gray-200 p-8">
            <h3 className="text-2xl font-serif font-bold mb-6 text-gray-800">Workshop Pricing</h3>

            <div className="space-y-6">
              <div className="pb-6 border-b border-gray-200">
                <p className="text-3xl font-serif font-bold text-[#c4342e] mb-2">£3,655</p>
                <p className="text-lg text-gray-700 font-medium mb-1">One-to-One Workshop</p>
                <p className="text-gray-600">Inclusive of all materials up to 20kg of bronze, tuition and technical support.</p>
              </div>

              <div>
                <p className="text-3xl font-serif font-bold text-[#c4342e] mb-2">£2,746 <span className="text-lg text-gray-600 font-normal">per person</span></p>
                <p className="text-lg text-gray-700 font-medium mb-1">Group Workshop (up to 4 people)</p>
                <p className="text-gray-600">25% discount per person for groups of up to 4 artists attending together.</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Book a Workshop Section */}
        <section id="booking" className="mb-20 pt-12 border-t border-gray-300">
          <h2 className="text-4xl font-serif font-bold mb-4 text-gray-800">Book a Workshop</h2>
          <p className="text-gray-700 mb-8 text-lg leading-relaxed">
            Interested in joining a workshop? Get in touch to discuss your requirements.
          </p>

          <a
            href="mailto:kabirhussain11@gmail.com"
            className="inline-block font-serif text-lg text-[#c4342e] border-b border-[#c4342e] pb-1 hover:opacity-60 transition-opacity"
          >
            Email Us →
          </a>
        </section>

      </div>

      <Footer />
    </div>
  );
}
