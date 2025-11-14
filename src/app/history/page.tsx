'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function History() {
  return (
    <div className="bg-[#F0EEDE] noise-bg">
      <Navigation />

      {/* Opening Statement */}
      <section className="min-h-screen flex items-center justify-center px-8 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl text-center"
        >
          <h1 className="text-5xl md:text-7xl font-serif font-normal leading-tight mb-8">
            The Ancient Art of Bronze Casting
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
            For over 5,000 years, humanity has transformed molten bronze into objects of
            beauty, utility, and power. This is the story of an enduring craft.
          </p>
        </motion.div>
      </section>

      {/* Origins */}
      <section className="py-20 px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-normal mb-8">
              Origins in the Ancient World
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-gray-800">
              Bronze casting emerged independently in multiple ancient civilizations around 3500 BCE.
              The discovery that copper and tin, when combined, created a metal stronger than either
              element alone revolutionized human society. This alloy could be melted, poured into moulds,
              and shaped into forms impossible with stone or pure copper.
            </p>
            <p className="text-lg leading-relaxed mb-6 text-gray-800">
              In Mesopotamia, early metallurgists developed the lost-wax technique—a process so
              sophisticated that its fundamental principles remain unchanged today. Artisans would
              sculpt a model in wax, encase it in clay, heat the assembly to melt away the wax,
              then pour molten bronze into the resulting cavity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Full Bleed Image */}
      <section className="w-full h-[60vh] md:h-screen relative overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="w-full h-full bg-gradient-to-br from-amber-600 via-orange-700 to-red-900"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white text-xl md:text-2xl font-serif px-8 text-center max-w-3xl">
              "To work bronze is to participate in a tradition that spans millennia,
              connecting us directly to the hands of ancient masters."
            </p>
          </div>
        </motion.div>
      </section>

      {/* Chinese Bronze Age */}
      <section className="py-20 px-8 bg-[#E8E6D6]">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-normal mb-8">
              The Chinese Bronze Age
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-gray-800">
              In ancient China, bronze casting reached extraordinary heights during the Shang and
              Zhou dynasties (1600–256 BCE). Chinese bronzesmiths developed piece-mould casting,
              an alternative to lost-wax that allowed for intricate surface decoration and precise
              reproduction of patterns.
            </p>
            <p className="text-lg leading-relaxed mb-6 text-gray-800">
              Ritual vessels known as <em>ding</em> and <em>gui</em> served as connections between
              the earthly and spiritual realms. These bronzes were not merely functional objects but
              embodiments of political power, religious devotion, and artistic achievement. Some
              weighed hundreds of kilograms, requiring teams of skilled craftspeople working in
              perfect coordination.
            </p>
            <p className="text-lg leading-relaxed text-gray-800">
              The sophistication of these ancient Chinese bronzes—with their complex geometric
              patterns, mythological imagery, and technical precision—continues to astound
              contemporary metallurgists and artists.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Greek and Roman Innovation */}
      <section className="py-20 px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-normal mb-8">
              Greek and Roman Mastery
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-gray-800">
              Classical Greek and Roman civilizations elevated bronze casting to new artistic
              heights. The Greeks perfected the lost-wax method for creating life-size and
              larger-than-life sculptures. Works like the <em>Riace Warriors</em> demonstrate
              an understanding of human anatomy, movement, and expression that seems to transcend
              the limitations of metal.
            </p>
            <p className="text-lg leading-relaxed mb-6 text-gray-800">
              These bronzes were often hollow, constructed in sections that were later joined—a
              technique requiring profound mathematical and spatial understanding. The Greeks
              discovered that bronze could capture the subtlest details: the tension in a muscle,
              the fall of draped cloth, the expression in a face.
            </p>
            <p className="text-lg leading-relaxed text-gray-800">
              Romans inherited and adapted these techniques, casting not only statues but also
              architectural elements, tools, weapons, and everyday objects. Bronze became the
              material of empire, durable enough to last centuries while remaining workable
              enough for intricate detail.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Side by Side */}
      <section className="py-20 px-8 bg-stone-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="aspect-[3/4] bg-gradient-to-br from-emerald-700 via-teal-800 to-cyan-900 rounded-lg"
            />
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-serif font-normal mb-6">
                The Patina of Time
              </h3>
              <p className="text-lg leading-relaxed text-gray-800">
                Bronze develops a patina—a surface layer that forms through oxidation and
                environmental exposure. This chemical transformation can produce stunning greens,
                blues, and browns. Ancient bronzes recovered from the sea often bear the most
                spectacular patinas, their surfaces transformed by centuries underwater.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Renaissance Revival */}
      <section className="py-20 px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-normal mb-8">
              Renaissance and Revival
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-gray-800">
              After centuries of decline following the fall of Rome, bronze casting experienced
              a dramatic renaissance in 15th-century Italy. Artists like Donatello and Lorenzo
              Ghiberti rediscovered lost techniques and pushed the medium in new directions.
            </p>
            <p className="text-lg leading-relaxed mb-6 text-gray-800">
              Ghiberti's bronze doors for the Florence Baptistery, which Michelangelo called
              the "Gates of Paradise," took 27 years to complete. These panels demonstrate the
              Renaissance fusion of technical mastery and artistic vision—each relief a perfect
              marriage of narrative clarity, spatial depth, and surface beauty.
            </p>
            <p className="text-lg leading-relaxed text-gray-800">
              The Renaissance bronze casters developed new alloys, improved casting techniques,
              and pioneered methods for creating larger, more complex works. Their innovations
              laid the groundwork for modern bronze casting practices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Modern Practice */}
      <section className="py-20 px-8 bg-[#c4342e]/5">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-normal mb-8">
              Contemporary Bronze Casting
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-gray-800">
              Today's bronze casters work within a living tradition that connects directly to
              ancient practices. While modern foundries employ electric furnaces and precise
              temperature controls, the fundamental process remains remarkably unchanged: a
              model is created, a mould is formed, wax is melted away, and bronze is poured.
            </p>
            <p className="text-lg leading-relaxed mb-6 text-gray-800">
              Contemporary sculptors continue to choose bronze for its unique qualities—the
              way it captures fine detail, its structural strength, its ability to withstand
              outdoor exposure, and the rich surface treatments it accepts. From monumental
              public sculptures to intimate gallery pieces, bronze remains unmatched in its
              versatility and permanence.
            </p>
            <p className="text-lg leading-relaxed text-gray-800">
              At Walnut Works, we honor this ancient lineage while exploring new possibilities.
              Our foundry combines time-tested methods with contemporary artistic vision,
              ensuring that the tradition of bronze casting continues to evolve and inspire.
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
          className="w-full h-full bg-gradient-to-br from-slate-800 via-gray-700 to-stone-600"
        />
      </section>

      <Footer />
    </div>
  );
}
