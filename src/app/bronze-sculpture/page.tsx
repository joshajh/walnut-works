'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function BronzeSculpture() {
  return (
    <div className="bg-[#F0EEDE] noise-bg">
      <Navigation pageTitle="Bronze Sculpture" />

      {/* Opening Statement */}
      <section className="min-h-screen flex items-center justify-center px-4 md:px-8 pt-32 md:pt-24 relative">
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
            Modern historians believe that setting up stones around a fire enabled early people to extract metals from rocks.
          </p>
        </motion.div>

        {/* Animated down arrow */}
        <motion.div
          className="absolute bottom-20 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1, duration: 0.5 },
            y: { delay: 1, duration: 1.5, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-500"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </motion.div>
      </section>

      {/* Discovery of Bronze */}
      <section className="py-20 px-4 md:px-4 md:px-8">
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
              The earliest bronze artefacts were found in the Middle East and East Asia approximately 7000 years ago. Bronze artefacts were also found at this time in parts of Serbia. The historical Bronze Age in Britain started approximately 5000 years ago.
            </p>
            <p className="text-lg leading-relaxed mb-6 text-gray-800">
              Bronze was discovered by mixing two weak metals (which were absolutely no good for making tools because they had no tensile strength.) Copper and tin makes a stronger alloy material; bronze. Copper has been mixed to make other bronze alloys; lead and arsenic as well as tin. Lead until very recently was used in a bronze alloy.
            </p>
            <p className="text-lg leading-relaxed text-gray-800">
              Tools and weapons, armour and fittings for chariots as well as musical instruments were made of bronze in the ancient world. In the later Bronze Age cannons were invented in East Asia. Sparks in bronze cannons do not cause explosions or erode in water. Bronze is still used today for electrical components, weapons, anchors and nautical equipment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image Placeholders: Fire and Copper + Tin = Bronze */}
      <section className="py-12 px-4 md:px-8 bg-stone-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="aspect-square bg-gray-300 flex items-center justify-center"
            >
              <p className="text-gray-600 text-center px-8 font-serif">Fig. 1 - Fire</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="aspect-square bg-gray-300 flex items-center justify-center"
            >
              <p className="text-gray-600 text-center px-8 font-serif">Fig. 2 - Copper + Tin = Bronze</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Smith's Power */}
      <section className="py-20 px-4 md:px-8">
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
              In her book 'Hoards Hidden History' published by The British Museum Press, Eleanor Ghey writes: "Trade spread the knowledge throughout the ancient world. Many later Bronze Age hordes were composed of scraps of objects to be recycled as raw material for metal work and have traditionally been referred to as founders hordes. These groups tend to include ingots and unfinished items. It is likely that we have here the evidence for Smiths at work - this is not to say these deposits were not seen as having a special character."
            </p>
            <p className="text-lg leading-relaxed mb-6 text-gray-800 italic border-l-4 border-[#c4342e] pl-6">
              "In some societies the Smith is seen as the possessor of supernatural powers."
            </p>
            <p className="text-lg leading-relaxed text-gray-800">
              As casting methods improved small figurative sculptures appear. Bronze expands when heated and fills all cavities in the mould which gives the surface of the material texture.
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
              The earliest bronze figurative sculptures appear in Mohenjo-daro, now modern Pakistan, circa 2500 BCE. Traces of this early civilisation were found throughout India and modern day Pakistan. A young female and the head of a man were discovered by archaeologists in the 1920's. They were kept together for many years but separated during the partition of British India - the young female moving to a Museum in Pakistan and the male head staying in Delhi.
            </p>
            <p className="text-lg leading-relaxed text-gray-800">
              The ancient Greeks developed the casting process to make full sized figurative sculptures. Few Greek full-sized statues survive, the bronze being repurposed and recycled. Romans emulated the Greeks and bronze was used for all sizes of statues and statuettes reproducing sculptures using moulds to make multiple figures and figurines.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image Placeholders: Ancient Sculptures */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="aspect-[3/4] bg-gray-300 flex items-center justify-center"
            >
              <p className="text-gray-600 text-center px-8 font-serif">Fig. 3 - Female sculpture, Mohenjo-daro</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="aspect-[3/4] bg-gray-300 flex items-center justify-center"
            >
              <p className="text-gray-600 text-center px-8 font-serif">Fig. 4 - The bust of the emperor Hadrian, found in 1853 in the Thames</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Medieval to Renaissance */}
      <section className="py-20 px-4 md:px-8">
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
              In the European mediaeval period bronze statues and decorations would have been found mainly in religious contexts, churches and palaces. During the Renaissance artists started to rediscover Roman and Greek sculpture and architecture and create their own large-scale sculpture. The sculpture was patronised by powerful families in Europe and the Italian kingdoms.
            </p>
            <p className="text-lg leading-relaxed mb-6 text-gray-800">
              The horses of Saint Marks' arrived in Venice in 1204 after being looted from Constantinople during the fourth crusade. The crusaders who were equipped by the great Venetian shipbuilders took a detour from the Holy Land (modern Palestine) and raided Constantinople (modern Istanbul). They used this loot to pay their debt to the Venice boatbuilders. The payment included the ancient horses; originally part of an ancient stadium and were placed in the grand St. Mark's Square.
            </p>
            <p className="text-lg leading-relaxed text-gray-800">
              Rich and powerful families of the Italian kingdoms became the patrons of artists fuelling the rediscovery of bronze casting techniques throughout Europe.
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
              className="aspect-[4/3] bg-gray-300 flex items-center justify-center"
            >
              <p className="text-gray-600 text-center px-8 font-serif">Fig. 5 - Crusader ship</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="aspect-[4/3] bg-gray-300 flex items-center justify-center"
            >
              <p className="text-gray-600 text-center px-8 font-serif">Fig. 6 - Duke Cosimo I commissioning Cellini's 'Perseus and Medusa'</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The British Empire */}
      <section className="py-20 px-4 md:px-8">
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
              In the 18th-century interest in Italian and Greek art and architecture was prominent in British culture. Wealthy young men, as a way of finishing their education, went on 'The Grand Tour' around the cultural cities of Europe. They bought souvenirs of art including bronze statues and statuettes back to fill the collections of stately homes and museums.
            </p>
            <p className="text-lg leading-relaxed mb-6 text-gray-800">
              Patronage of large-scale public sculpture was a way of showing power in public spaces. The wealth of the British was often gained as a result of slavery, colonialism and the new technology impacting the Industrial Revolution. Public statues were made of important and powerful people. These were mainly of men who were generals, industrialists, politicians or royalty.
            </p>
            <p className="text-lg leading-relaxed mb-6 text-gray-800">
              Queen Victoria being an exception. Sculptures of her were placed throughout the British Empire. Women were often represented in sculpture as mythical creatures, nymphs and fairies. Queen Victoria herself often bought her husband sculptures of semi clad woodland nymphs bordering on the erotica. Sculptures of semi clad nubile figures were very popular with the Victorian public who were notoriously prudish - covering furniture legs as not to be indecent.
            </p>
            <p className="text-lg leading-relaxed text-gray-800">
              The statue commemorating the slave owner Edward Colston, a 17th century slaveowner, was toppled in 2020 by protesters into the Bristol harbour. There is a debate today on how we should view and show these works.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image Placeholders: Victorian Era */}
      <section className="py-12 px-8 bg-stone-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="aspect-[3/4] bg-gray-300 flex items-center justify-center"
            >
              <p className="text-gray-600 text-center px-8 font-serif">Fig. 7 - Queen Victoria</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="aspect-[3/4] bg-gray-300 flex items-center justify-center"
            >
              <p className="text-gray-600 text-center px-8 font-serif">Fig. 8 - Toppling Colston</p>
            </motion.div>
          </div>
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
              At the beginning of the 20th century foundries were set up to produce war memorials to honour the First World War dead. There were huge shifts in the arts with modernism in Europe. Postwar Britain – British art and design exploded in the 50s and 60s with art colleges reflecting the new modernist teaching. Britain was the centre of the Art World.
            </p>
            <p className="text-lg leading-relaxed mb-6 text-gray-800">
              The Festival of Britain introduced new ideas of sculpture, architecture and textiles, ceramics and music. Colleges were set up reflecting this new patronage from the postwar government encouraging the rebuilding of industry and infrastructure. The Arts Council was established in 1946 to support and develop arts and culture in Britain.
            </p>
            <p className="text-lg leading-relaxed mb-6 text-gray-800">
              Architecture and town planning often included public modern sculpture. Harlow Sculpture Town architect Sir Frederick Gibberd designed areas where people could step out of their front door and find a Barbara Hepworth sculpture. Originally built for people not cars, sculpture and landscape informed his designs and planning. Students from Harlow College could take a few steps away from the college and be surrounded by bronze sculpture in the water gardens. Liz Frink, Henry Moore, Rodin. In the area walking towards the marketplace there is a Ralph Brown, a Lynn Chadwick, amongst others. Sadly the college has been knocked down with the Sir Frederick Gibberd town hall.
            </p>
            <p className="text-lg leading-relaxed text-gray-800">
              'Old Flo' sold by Henry Moore at a modest price to Tower Hamlets Council to say thank you to the people of the East End after the war and placed outside council flats, since demolished. Beloved by local children and tenants it was moved to Yorkshire Sculpture Park after the council tried to sell it causing a scandal. Recently it was moved to a site in Canary Wharf surrounded by the financial district. Worth millions and apparently expensive to maintain, it is deemed a temporary safe site.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contemporary Practice */}
      <section className="py-20 px-4 md:px-8">
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
              Artist tutors from the 40's, 50's, and 60's have influenced the last decades of the 20th century and have in turn influenced modern bronze sculptors such as Gavin Turk, Anish Kapoor, Grayson Perry, Antony Gormley, Anya Gallaccio, Louise Bourgeois to name a few.
            </p>
            <p className="text-lg leading-relaxed mb-6 text-gray-800">
              Today college foundries are disappearing. Commercial arts foundries often use ceramic shell to process sculpture which is cost effective in mechanised foundries. The lost wax process using Luto is at risk of becoming obsolete in college foundries - this hands on method used by Renaissance founders is in danger of becoming a heritage craft.
            </p>
            <p className="text-lg leading-relaxed text-gray-800">
              Working with artists directly with this process we wish to share our knowledge and skill with our resident artists to experience it for themselves.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Closing Image */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="aspect-[4/3] bg-gray-300 flex items-center justify-center"
          >
            <p className="text-gray-600 text-center px-8 font-serif">Fig. 9 - Contemporary bronze sculpture</p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
