'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

export default function CastingProcess() {
    return (
        <div className="bg-[#F0EEDE] noise-bg">
            <Navigation pageTitle="The Process" />

            {/* Opening Statement */}
            <section className="min-h-screen flex items-center justify-center px-4 md:px-8 pt-32 md:pt-24 pb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl text-center"
                >
                    <h1 className="text-4xl md:text-6xl font-serif font-normal leading-tight mb-6">
                        The Bronze Casting Process
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                        A step-by-step journey through the traditional lost-wax casting method
                    </p>
                </motion.div>
            </section>

            {/* Step 1: Arrival */}
            <section className="py-20 px-4 md:px-8">
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
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
                        <p className="text-gray-700 text-center px-8 font-serif text-lg">
                            Kit bags arrive at the studio, labelled with artist details
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Step 2: Sprue System */}
            <section className="py-20 px-4 md:px-8">
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris.
                        </p>
                        <p className="text-lg leading-relaxed text-gray-800">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Image: Runners and Risers */}
            <section className="py-12 px-4 md:px-8">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="aspect-[4/3] bg-gradient-to-br from-amber-700 via-orange-600 to-red-700 flex items-center justify-center"
                    >
                        <p className="text-white text-center px-8 font-serif text-lg">
                            Runners and risers—thick channels for metal flow, thin channels for air
                            escape
                        </p>
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris.
                        </p>
                        <p className="text-lg leading-relaxed text-gray-800">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Images: First Coat and Plaster Mix */}
            <section className="py-12 px-4 md:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="aspect-square bg-gradient-to-br from-stone-400 via-gray-500 to-slate-600 flex items-center justify-center"
                        >
                            <p className="text-white text-center px-8 font-serif">
                                Brushing the first coat—capturing every detail
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="aspect-square bg-gradient-to-br from-gray-400 via-stone-500 to-slate-500 flex items-center justify-center"
                        >
                            <p className="text-white text-center px-8 font-serif">
                                A mix of plaster and water to make the mould
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Step 4: Second Coat */}
            <section className="py-20 px-4 md:px-8">
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation.
                        </p>
                        <p className="text-lg leading-relaxed mb-6 text-gray-800">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim.
                        </p>
                        <p className="text-lg leading-relaxed text-gray-800">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab
                            illo.
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
                            <p className="text-white text-center px-8 font-serif">
                                Crushing waste plaster from fired moulds
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="aspect-[3/4] bg-gradient-to-br from-gray-600 via-stone-700 to-slate-700 flex items-center justify-center"
                        >
                            <p className="text-white text-center px-8 font-serif">
                                Building up the second layer: 2 parts luto, 1 part plaster
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Step 5: To the Kiln */}
            <section className="py-20 px-4 md:px-8">
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </p>
                        <p className="text-lg leading-relaxed text-gray-800">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Images: Kiln Process */}
            <section className="py-12 px-4 md:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="aspect-square bg-gradient-to-br from-slate-700 via-gray-800 to-stone-900 flex items-center justify-center"
                        >
                            <p className="text-white text-center px-8 font-serif">
                                Taking finished moulds to the kiln
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="aspect-square bg-gradient-to-br from-orange-700 via-red-800 to-amber-900 flex items-center justify-center"
                        >
                            <p className="text-white text-center px-8 font-serif">
                                Five days of firing—the wax burns away completely
                            </p>
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                        </p>
                        <p className="text-lg leading-relaxed text-gray-800">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Image: Wrapping Moulds */}
            <section className="py-12 px-4 md:px-8">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="aspect-[4/3] bg-gradient-to-br from-stone-500 via-gray-600 to-slate-700 flex items-center justify-center"
                    >
                        <p className="text-white text-center px-8 font-serif text-lg">
                            Wrapping scrim around warm moulds to strengthen them
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Step 7: Melting the Bronze */}
            <section className="py-20 px-4 md:px-8">
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation.
                        </p>
                        <p className="text-lg leading-relaxed text-gray-800">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia.
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
                            <p className="text-white text-center px-8 font-serif">
                                Bronze ingots heating in the furnace
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="aspect-[3/4] bg-gradient-to-br from-yellow-500 via-orange-600 to-red-700 flex items-center justify-center"
                        >
                            <p className="text-white text-center px-8 font-serif">
                                Molten metal at 1080°C—ready to pour
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Step 8: The Pour */}
            <section className="py-20 px-4 md:px-8">
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris.
                        </p>
                        <p className="text-lg leading-relaxed text-gray-800">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit.
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
                            "The pour—before and after. Molten bronze fills the space where wax once
                            was."
                        </p>
                    </div>
                </motion.div>
            </section>

            {/* Step 9: Breaking Open */}
            <section className="py-20 px-4 md:px-8">
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris.
                        </p>
                        <p className="text-lg leading-relaxed mb-6 text-gray-800">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia.
                        </p>
                        <p className="text-lg leading-relaxed text-gray-800">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam eaque ipsa.
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
                            <p className="text-white text-center px-8 font-serif">
                                Breaking the mould with an axe
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="aspect-[4/3] bg-gradient-to-br from-amber-700 via-orange-800 to-red-900 flex items-center justify-center"
                        >
                            <p className="text-white text-center px-8 font-serif">
                                The sculpture emerges with runners and risers attached
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Step 10: Fettling */}
            <section className="py-20 px-4 md:px-8">
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo.
                        </p>
                        <p className="text-lg leading-relaxed text-gray-800">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Images: Fettling */}
            <section className="py-12 px-4 md:px-8">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="aspect-[16/9] bg-gradient-to-br from-amber-600 via-orange-700 to-red-800 flex items-center justify-center"
                    >
                        <p className="text-white text-center px-8 font-serif text-lg">
                            Fettling the bronze—cutting, filing, refining
                        </p>
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation.
                        </p>
                        <p className="text-lg leading-relaxed mb-6 text-gray-800">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt.
                        </p>
                        <p className="text-lg leading-relaxed text-gray-800">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab
                            illo inventore veritatis.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Images: Patination and Finished Works */}
            <section className="py-12 px-4 md:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="aspect-[3/4] bg-gradient-to-br from-amber-700 via-orange-800 to-red-900 flex items-center justify-center"
                        >
                            <p className="text-white text-center px-8 font-serif">
                                Applying chemicals to create the patina
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="aspect-[3/4] bg-gradient-to-br from-amber-800 via-orange-900 to-red-950 flex items-center justify-center"
                        >
                            <p className="text-white text-center px-8 font-serif">
                                The finished bronze sculptures—complete
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Closing Statement */}
            <section className="py-20 px-4 md:px-8">
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </p>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
