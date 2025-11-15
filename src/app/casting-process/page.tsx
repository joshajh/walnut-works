'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function CastingProcess() {
  return (
    <div className="bg-[#F0EEDE] noise-bg">
      <Navigation pageTitle="The Process" />

      {/* Opening Statement */}
      <section className="min-h-screen flex items-center justify-center px-8 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl text-center"
        >
          <h1 className="text-5xl md:text-7xl font-serif font-normal leading-tight mb-8">
            The Bronze Casting Process
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
            A journey through fire and transformation—from wax to bronze, following techniques unchanged since the Renaissance.
          </p>
        </motion.div>
      </section>

      {/* Step 1: Arrival */}
      <section className="py-20 px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-normal mb-8">
              Beginning the Journey
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-gray-800">
              Kit bags arrive at the studio, carefully labelled with the artist's details. Each contains a wax sculpture—the beginning of its transformation from soft, temporary material into permanent bronze. This marks the start of an ancient process, one that connects contemporary artists directly to craftspeople working thousands of years ago.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image: Kit Bags */}
      <section className="py-12 px-8 bg-stone-100">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="aspect-[4/3] bg-gradient-to-br from-amber-100 via-stone-200 to-gray-300 flex items-center justify-center"
          >
            <p className="text-gray-700 text-center px-8 font-serif text-lg">Kit bags arrive at the studio, labelled with artist details</p>
          </motion.div>
        </div>
      </section>

      {/* Step 2: Sprue System */}
      <section className="py-20 px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-normal mb-8">
              Creating the Sprue System
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-gray-800">
              We roll out runners (thick ones) and risers (thin ones). The thick ones will leave a wide gap in the mould after it's been fired in the kiln for the metal to flow through. The thin ones leave a space for the air to escape—a critical detail that prevents air pockets and ensures the molten bronze fills every cavity of the mould.
            </p>
            <p className="text-lg leading-relaxed text-gray-800">
              This system of channels is both functional and beautiful—a necessary architecture that allows liquid metal to flow and displaced air to rise, creating the conditions for successful transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image: Runners and Risers */}
      <section className="py-12 px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="aspect-[4/3] bg-gradient-to-br from-amber-700 via-orange-600 to-red-700 flex items-center justify-center"
          >
            <p className="text-white text-center px-8 font-serif text-lg">Runners and risers—thick channels for metal flow, thin channels for air escape</p>
          </motion.div>
        </div>
      </section>

      {/* Step 3: First Coat */}
      <section className="py-20 px-8 bg-[#E8E6D6]">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-normal mb-8">
              The First Coat: Capturing Detail
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-gray-800">
              Kabir brushes on the first coat of the mould—a carefully mixed combination of herculite plaster and fine casting plaster. This coat has to be very strong to pick up the finest details on the wax surface. Every texture, every mark, every intentional gesture by the artist must be captured with absolute fidelity.
            </p>
            <p className="text-lg leading-relaxed text-gray-800">
              The mixing ratio is critical: plaster and water must achieve perfect consistency. Too thin and it won't capture detail; too thick and it won't flow into the recesses. This is knowledge gained through years of practice, measured as much by feel and experience as by precise measurement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Images: First Coat and Plaster Mix */}
      <section className="py-12 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="aspect-square bg-gradient-to-br from-stone-400 via-gray-500 to-slate-600 flex items-center justify-center"
            >
              <p className="text-white text-center px-8 font-serif">Brushing the first coat—capturing every detail</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="aspect-square bg-gradient-to-br from-gray-400 via-stone-500 to-slate-500 flex items-center justify-center"
            >
              <p className="text-white text-center px-8 font-serif">A mix of plaster and water to make the mould</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Step 4: Second Coat */}
      <section className="py-20 px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-normal mb-8">
              Building Strength: The Second Coat
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-gray-800">
              To make plaster for the second coat of the mould, Vicky crushes waste plaster from previously fired and broken moulds. Nothing is wasted in the foundry—old moulds become the foundation for new creations, a cycle of transformation and renewal.
            </p>
            <p className="text-lg leading-relaxed mb-6 text-gray-800">
              The wax sprue system is being encased in a second coat of luto and fine casting plaster, called grog. Kabir builds up the second layer using 2 parts luto to 1 part fine casting plaster. This coat provides the structural strength needed to withstand the intense heat of the kiln and the force of molten metal being poured.
            </p>
            <p className="text-lg leading-relaxed text-gray-800">
              Layer by layer, the mould takes form—protecting the delicate wax sculpture within while creating a vessel strong enough to contain liquid bronze at over 1000 degrees Celsius.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Images: Second Coat Process */}
      <section className="py-12 px-8 bg-stone-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="aspect-[3/4] bg-gradient-to-br from-stone-600 via-gray-700 to-slate-800 flex items-center justify-center"
            >
              <p className="text-white text-center px-8 font-serif">Crushing waste plaster from fired moulds</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="aspect-[3/4] bg-gradient-to-br from-gray-600 via-stone-700 to-slate-700 flex items-center justify-center"
            >
              <p className="text-white text-center px-8 font-serif">Building up the second layer: 2 parts luto, 1 part plaster</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Step 5: To the Kiln */}
      <section className="py-20 px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-normal mb-8">
              The Firing: Burning Away
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-gray-800">
              We take the finished moulds to the foundry kiln. Kabir places the moulds into the kiln to fire for five days. The wax burns out, leaving a perfect negative space where it once was—a cavity waiting to be filled with molten bronze. This is the heart of the "cire perdue" or lost wax process: the wax must be completely consumed by fire, vanishing to make way for metal.
            </p>
            <p className="text-lg leading-relaxed text-gray-800">
              The kiln temperature rises gradually, preventing the plaster from cracking. First the wax softens and melts, draining away. Then as temperatures climb higher, any remaining wax vaporizes completely, leaving the mould hollow and ready—a ghost of the original sculpture preserved in negative space.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Images: Kiln Process */}
      <section className="py-12 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="aspect-square bg-gradient-to-br from-slate-700 via-gray-800 to-stone-900 flex items-center justify-center"
            >
              <p className="text-white text-center px-8 font-serif">Taking finished moulds to the kiln</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="aspect-square bg-gradient-to-br from-orange-700 via-red-800 to-amber-900 flex items-center justify-center"
            >
              <p className="text-white text-center px-8 font-serif">Five days of firing—the wax burns away completely</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Step 6: Preparing for Metal */}
      <section className="py-20 px-8 bg-[#E8E6D6]">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-normal mb-8">
              Strengthening for the Pour
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-gray-800">
              The moulds are cooked and still warm from the kiln. The wax has melted away and the mould is fragile—porous and delicate after its time in the fire. Kabir wraps scrim dipped in plaster around the moulds to strengthen them for the hot metal. This reinforcement is essential: without it, the force and heat of molten bronze could shatter the investment.
            </p>
            <p className="text-lg leading-relaxed text-gray-800">
              Each mould is treated with care, assessed for any weaknesses. The plaster-soaked fabric binds the structure together, creating a shell strong enough to withstand the violent beauty of the pour.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image: Wrapping Moulds */}
      <section className="py-12 px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="aspect-[4/3] bg-gradient-to-br from-stone-500 via-gray-600 to-slate-700 flex items-center justify-center"
          >
            <p className="text-white text-center px-8 font-serif text-lg">Wrapping scrim around warm moulds to strengthen them</p>
          </motion.div>
        </div>
      </section>

      {/* Step 7: Melting the Bronze */}
      <section className="py-20 px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-normal mb-8">
              Transforming Metal
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-gray-800">
              Meanwhile, the bronze ingots are being heated in the furnace. The bronze is heated to 1080 degrees Celsius—hot enough to transform solid metal into glowing liquid, ready to take on new form. The furnace roars with heat, its interior a crucible of transformation.
            </p>
            <p className="text-lg leading-relaxed text-gray-800">
              The melted metal glows orange-yellow, almost too bright to look at directly. It ripples and flows like water made of fire. This is bronze at its most elemental—neither solid nor permanent, but pure potential waiting to be given shape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Images: Heating Bronze */}
      <section className="py-12 px-8 bg-stone-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="aspect-[3/4] bg-gradient-to-br from-red-700 via-orange-600 to-yellow-500 flex items-center justify-center"
            >
              <p className="text-white text-center px-8 font-serif">Bronze ingots heating in the furnace</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="aspect-[3/4] bg-gradient-to-br from-yellow-500 via-orange-600 to-red-700 flex items-center justify-center"
            >
              <p className="text-white text-center px-8 font-serif">Molten metal at 1080°C—ready to pour</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Step 8: The Pour */}
      <section className="py-20 px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-normal mb-8">
              The Moment of Truth
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-gray-800">
              The pour is the culmination of days of preparation. You can see the top of the mould—where the wax has melted and burned away in the kiln, before and after the metal has been poured. Molten bronze flows like liquid sunlight, filling the cavity left by the lost wax, seeking every detail, every surface.
            </p>
            <p className="text-lg leading-relaxed text-gray-800">
              This is a moment of both precision and surrender. All the preparation must be perfect, but once the pour begins, the bronze follows its own path, driven by gravity and heat. The artist and founder can only watch as transformation occurs—wax's absence becoming bronze's presence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Full Bleed: The Pour */}
      <section className="w-full h-[60vh] md:h-screen relative overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="w-full h-full bg-gradient-to-br from-yellow-400 via-orange-600 to-red-800"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white text-xl md:text-2xl font-serif px-8 text-center max-w-3xl">
              "The pour—before and after. Molten bronze fills the space where wax once was."
            </p>
          </div>
        </motion.div>
      </section>

      {/* Step 9: Breaking Open */}
      <section className="py-20 px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-normal mb-8">
              The Reveal
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-gray-800">
              The moulds have cooled down and an axe is used to break the mould and find the bronze. This is always a moment of anticipation—the first glimpse of what has been created through fire and transformation. The plaster cracks away to reveal bronze beneath, still bearing the marks of its journey.
            </p>
            <p className="text-lg leading-relaxed mb-6 text-gray-800">
              When the plaster is washed off the bronze, the runners and risers of the sprue system are left with the small bronze sculpture attached. The piece emerges looking like a strange tree—the sculpture as fruit hanging from branches of bronze that once channeled metal and released air.
            </p>
            <p className="text-lg leading-relaxed text-gray-800">
              This is the first time the artist sees their vision realized in permanent form—no longer soft wax but hard, enduring metal. The transformation is complete, yet work remains.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Images: Breaking and Revealing */}
      <section className="py-12 px-8 bg-[#E8E6D6]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="aspect-[4/3] bg-gradient-to-br from-stone-600 via-gray-700 to-slate-800 flex items-center justify-center"
            >
              <p className="text-white text-center px-8 font-serif">Breaking the mould with an axe</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="aspect-[4/3] bg-gradient-to-br from-amber-700 via-orange-800 to-red-900 flex items-center justify-center"
            >
              <p className="text-white text-center px-8 font-serif">The sculpture emerges with runners and risers attached</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Step 10: Fettling */}
      <section className="py-20 px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-normal mb-8">
              Fettling: Refining Form
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-gray-800">
              Fettling is the process of removing the sprue system and refining the bronze surface. The runners and risers that were necessary for casting must be carefully cut away. Saw marks are filed smooth. Any imperfections are addressed. The bronze is worked and reworked until it matches the artist's vision.
            </p>
            <p className="text-lg leading-relaxed text-gray-800">
              This stage requires patience and precision. Each cut must be considered—too much material removed cannot be replaced. The metalworker uses files, grinders, and hand tools to bring the sculpture closer to its final form, removing evidence of the casting process while preserving every intended detail.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Images: Fettling */}
      <section className="py-12 px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="aspect-[16/9] bg-gradient-to-br from-amber-600 via-orange-700 to-red-800 flex items-center justify-center"
          >
            <p className="text-white text-center px-8 font-serif text-lg">Fettling the bronze—cutting, filing, refining</p>
          </motion.div>
        </div>
      </section>

      {/* Step 11: Patination */}
      <section className="py-20 px-8 bg-[#c4342e]/5">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-normal mb-8">
              Patination: The Final Transformation
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-gray-800">
              Patination uses chemicals to burn color into the metal. Heat and chemistry combine to create the final surface—whether traditional browns and greens that echo ancient bronzes, or more experimental colors that push the medium in new directions.
            </p>
            <p className="text-lg leading-relaxed mb-6 text-gray-800">
              The bronze is heated with a torch, then chemicals are applied. They react with the hot metal, creating oxides and compounds that bond permanently to the surface. Each chemical produces different colors: ferric nitrate for browns, copper nitrate for greens and blues, liver of sulfur for blacks and grays.
            </p>
            <p className="text-lg leading-relaxed text-gray-800">
              This is the final stage, where the sculpture receives its skin. The patina is sealed with wax, protecting the surface while allowing the color to deepen with age. The bronze is now complete—a permanent record of the artist's vision, preserved through the ancient art of cire perdue.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Images: Patination and Finished Works */}
      <section className="py-12 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="aspect-[3/4] bg-gradient-to-br from-amber-700 via-orange-800 to-red-900 flex items-center justify-center"
            >
              <p className="text-white text-center px-8 font-serif">Applying chemicals to create the patina</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="aspect-[3/4] bg-gradient-to-br from-amber-800 via-orange-900 to-red-950 flex items-center justify-center"
            >
              <p className="text-white text-center px-8 font-serif">The finished bronze sculptures—complete</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-20 px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-normal mb-8">
              A Living Tradition
            </h2>
            <p className="text-lg leading-relaxed text-gray-800">
              From wax to bronze, this process connects contemporary artists to thousands of years of tradition. At Walnut Works, we preserve these Renaissance techniques, offering artists the opportunity to work hands-on with cire perdue—to experience the alchemy of transformation, the magic of making permanent what was temporary, solid what was soft, eternal what was fleeting.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
