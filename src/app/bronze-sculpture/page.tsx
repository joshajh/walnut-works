'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function BronzeSculpture() {
  return (
    <div className="bg-[#F0EEDE] noise-bg">
      <Navigation pageTitle="Bronze Sculpture" />

      {/* Opening Statement */}
      <section className="min-h-screen flex items-center justify-center px-8 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl text-center"
        >
          <h1 className="text-5xl md:text-7xl font-serif font-normal leading-tight mb-8">
            Bronze Sculpture from the Beginning
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </motion.div>
      </section>

      {/* Discovery of Bronze */}
      <section className="py-20 px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-normal mb-8">
              The Discovery
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-lg leading-relaxed mb-6 text-gray-800">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="text-lg leading-relaxed text-gray-800">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image Placeholders: Fire and Copper + Tin = Bronze */}
      <section className="py-12 px-8 bg-stone-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="aspect-square bg-gradient-to-br from-orange-600 via-red-700 to-amber-900 flex items-center justify-center"
            >
              <p className="text-white text-center px-8 font-serif">Fig. 1 - Fire</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="aspect-square bg-gradient-to-br from-amber-700 via-orange-800 to-red-900 flex items-center justify-center"
            >
              <p className="text-white text-center px-8 font-serif">Fig. 2 - Copper + Tin = Bronze</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Smith's Power */}
      <section className="py-20 px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-normal mb-8">
              The Smith as Sorcerer
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-lg leading-relaxed text-gray-800">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Early Civilizations */}
      <section className="py-20 px-8 bg-[#E8E6D6]">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-normal mb-8">
              Ancient Masterworks
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <p className="text-lg leading-relaxed text-gray-800">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image Placeholders: Ancient Sculptures */}
      <section className="py-12 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="aspect-[3/4] bg-gradient-to-br from-amber-600 via-orange-700 to-red-800 flex items-center justify-center"
            >
              <p className="text-white text-center px-8 font-serif">Fig. 3 - Female sculpture, Mohenjo-daro</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-lg leading-relaxed text-gray-800 italic">
                "In some societies the Smith is seen as the possessor of supernatural powers."
              </p>
              <p className="text-base text-gray-600 mt-4">— Eleanor Ghey, 'Hoards Hidden History'</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Medieval to Renaissance */}
      <section className="py-20 px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-normal mb-8">
              Medieval Splendor and Renaissance Revival
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
            </p>
            <p className="text-lg leading-relaxed mb-6 text-gray-800">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="text-lg leading-relaxed text-gray-800">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image Placeholders: Crusaders and Renaissance */}
      <section className="py-12 px-8 bg-stone-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="aspect-[4/3] bg-gradient-to-br from-blue-800 via-cyan-700 to-teal-600 flex items-center justify-center"
            >
              <p className="text-white text-center px-8 font-serif">Fig. 5 - Crusader ship</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="aspect-[4/3] bg-gradient-to-br from-red-900 via-orange-800 to-amber-700 flex items-center justify-center"
            >
              <p className="text-white text-center px-8 font-serif">Fig. 6 - Duke Cosimo I commissioning Cellini's 'Perseus and Medusa'</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The British Empire */}
      <section className="py-20 px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-normal mb-8">
              Bronze in the Age of Empire
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <p className="text-lg leading-relaxed mb-6 text-gray-800">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.
            </p>
            <p className="text-lg leading-relaxed mb-6 text-gray-800">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.
            </p>
            <p className="text-lg leading-relaxed text-gray-800">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 20th Century Britain */}
      <section className="py-20 px-8 bg-[#c4342e]/5">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-normal mb-8">
              Postwar Britain and the Golden Age
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-lg leading-relaxed mb-6 text-gray-800">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <p className="text-lg leading-relaxed mb-6 text-gray-800">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
            </p>
            <p className="text-lg leading-relaxed text-gray-800">
              Totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contemporary Practice */}
      <section className="py-20 px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-normal mb-8">
              Preserving a Living Tradition
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <p className="text-lg leading-relaxed mb-6 text-gray-800">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="text-lg leading-relaxed text-gray-800">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Closing Image */}
      <section className="w-full h-[60vh] md:h-screen relative overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="w-full h-full bg-gradient-to-br from-amber-700 via-orange-800 to-red-900 flex items-center justify-center"
        >
          <p className="text-white text-center px-8 font-serif text-xl">Fig. 9 - Ol' Flo</p>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
