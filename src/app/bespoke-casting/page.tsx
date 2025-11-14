'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState } from 'react';

export default function BespokeCastingPage() {
  const [activeService, setActiveService] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const services = [
    {
      title: "Lost Wax Casting",
      description: "Precision casting for capturing the finest sculptural detail",
      details: "The ancient lost wax method refined through generations of master craftspeople. Perfect for sculptures, architectural elements, and commemorative pieces requiring exceptional surface fidelity.",
      icon: "🔥"
    },
    {
      title: "Sand Casting",
      description: "Robust process for larger works and limited editions",
      details: "Our sand casting capabilities allow for substantial monumental pieces while maintaining exceptional surface quality. Ideal for both unique commissions and edition runs.",
      icon: "⚒️"
    },
    {
      title: "Patination & Finishing",
      description: "Expert chemical treatments and surface preparation",
      details: "From traditional verdigris to contemporary chemical patinas, we create finishes that enhance and protect your work for generations. Each piece sealed with museum-quality wax.",
      icon: "✨"
    },
    {
      title: "Installation & Conservation",
      description: "Complete project support from concept to placement",
      details: "Structural engineering consultation, armature design, professional installation, and ongoing conservation services for bronze works of all scales.",
      icon: "🏛️"
    }
  ];

  const process = [
    {
      number: "01",
      title: "Consultation",
      description: "In-depth discussion of vision, technical requirements, and timeline. Site visits and material samples provided."
    },
    {
      number: "02",
      title: "Technical Planning",
      description: "Detailed casting strategy addressing wall thickness, armature requirements, sectioning, and finishing specifications."
    },
    {
      number: "03",
      title: "Mould Making",
      description: "Precision mould-making using traditional and contemporary methods. Exacting attention to surface quality and detail retention."
    },
    {
      number: "04",
      title: "Bronze Pouring",
      description: "Casting at our Suffolk foundry with temperature controls and finest bronze alloys. Each pour monitored by master casters."
    },
    {
      number: "05",
      title: "Finishing",
      description: "Meticulous surface preparation, welding, chasing, and chosen patina application. Museum-quality sealing and protection."
    },
    {
      number: "06",
      title: "Delivery",
      description: "Professional packing, transportation, and installation services. Your work positioned exactly as envisioned."
    }
  ];

  return (
    <div className="bg-[#F0EEDE] noise-bg">
      <Navigation pageTitle="Bespoke Casting" />

      {/* Hero - Full Viewport */}
      <section className="min-h-screen flex items-center justify-center px-8 pt-24 relative overflow-hidden">
        <motion.div
          style={{ opacity, scale }}
          className="text-center max-w-5xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-serif font-normal leading-tight mb-8"
          >
            Bespoke Bronze Casting
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl text-gray-700 leading-relaxed"
          >
            Transform vision into enduring bronze sculpture.<br />
            Master craftsmanship meets contemporary artistry.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16"
          >
            <a
              href="#services"
              className="inline-block px-12 py-4 border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-[#F0EEDE] transition-all duration-500 text-lg tracking-wide"
            >
              Explore Our Craft
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Services - Interactive Grid */}
      <section id="services" className="min-h-screen py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-serif font-normal mb-20 text-center"
          >
            Our Services
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-1 bg-gray-800">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setActiveService(index)}
                onMouseLeave={() => setActiveService(null)}
                className="bg-[#F0EEDE] p-12 cursor-pointer group relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gray-800"
                  initial={{ x: '-100%' }}
                  animate={{ x: activeService === index ? '0%' : '-100%' }}
                  transition={{ duration: 0.4 }}
                />

                <div className="relative z-10">
                  <div className={`text-6xl mb-6 transition-all duration-300 ${activeService === index ? 'scale-110' : ''}`}>
                    {service.icon}
                  </div>
                  <h3 className={`text-3xl font-serif font-normal mb-4 transition-colors duration-300 ${activeService === index ? 'text-[#F0EEDE]' : 'text-gray-800'}`}>
                    {service.title}
                  </h3>
                  <p className={`text-lg mb-4 transition-colors duration-300 ${activeService === index ? 'text-gray-300' : 'text-gray-600'}`}>
                    {service.description}
                  </p>
                  <p className={`text-base leading-relaxed transition-all duration-300 ${activeService === index ? 'text-gray-200 opacity-100' : 'text-gray-700 opacity-0 h-0'}`}>
                    {activeService === index && service.details}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process - Timeline */}
      <section className="min-h-screen py-20 px-8 bg-gray-800 text-[#F0EEDE]">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-serif font-normal mb-20 text-center"
          >
            The Process
          </motion.h2>

          <div className="space-y-16">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-8 group"
              >
                <div className="flex-shrink-0">
                  <div className="text-6xl font-serif font-normal text-[#c4342e] group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1 border-l-2 border-gray-600 pl-8 pb-8 group-hover:border-[#c4342e] transition-colors duration-300">
                  <h3 className="text-3xl font-serif font-normal mb-4">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scale & Capability */}
      <section className="min-h-screen py-20 px-8 flex items-center">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-serif font-normal mb-8">
                Any Scale.<br />
                Any Vision.
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                From intimate gallery pieces to monumental public commissions,
                our foundry has the capability and expertise to realize works of any scale.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                We've cast pieces weighing from 500 grams to over 5 tonnes,
                working with artists, architects, and institutions worldwide.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-8"
            >
              <div className="text-center p-8 border border-gray-300">
                <div className="text-5xl font-serif font-normal text-[#c4342e] mb-4">45+</div>
                <div className="text-lg text-gray-700">Years Experience</div>
              </div>
              <div className="text-center p-8 border border-gray-300">
                <div className="text-5xl font-serif font-normal text-[#c4342e] mb-4">500+</div>
                <div className="text-lg text-gray-700">Works Cast</div>
              </div>
              <div className="text-center p-8 border border-gray-300">
                <div className="text-5xl font-serif font-normal text-[#c4342e] mb-4">5T</div>
                <div className="text-lg text-gray-700">Max Capacity</div>
              </div>
              <div className="text-center p-8 border border-gray-300">
                <div className="text-5xl font-serif font-normal text-[#c4342e] mb-4">20+</div>
                <div className="text-lg text-gray-700">Countries</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="min-h-screen flex items-center justify-center px-8 bg-gray-900 text-[#F0EEDE]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl"
        >
          <h2 className="text-5xl md:text-7xl font-serif font-normal mb-12">
            Begin Your Commission
          </h2>
          <p className="text-2xl text-gray-300 leading-relaxed mb-12">
            Let's discuss how we can bring your artistic vision to life in bronze.
          </p>

          <div className="space-y-6 text-xl text-gray-300">
            <p>
              <span className="text-[#c4342e] font-medium">Email:</span>{' '}
              <a href="mailto:commissions@walnutworks.co.uk" className="hover:text-[#c4342e] transition-colors">
                commissions@walnutworks.co.uk
              </a>
            </p>
            <p>
              <span className="text-[#c4342e] font-medium">Phone:</span>{' '}
              <a href="tel:+441394450XXX" className="hover:text-[#c4342e] transition-colors">
                +44 (0) 1394 450 XXX
              </a>
            </p>
            <p className="pt-8">
              <span className="text-[#c4342e] font-medium">Studio:</span><br />
              Butley Mills Studio<br />
              Woodbridge, Suffolk IP12 3NR
            </p>
          </div>

          <div className="mt-16">
            <a
              href="mailto:commissions@walnutworks.co.uk"
              className="inline-block px-12 py-4 border-2 border-[#F0EEDE] text-[#F0EEDE] hover:bg-[#F0EEDE] hover:text-gray-900 transition-all duration-500 text-lg tracking-wide"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
