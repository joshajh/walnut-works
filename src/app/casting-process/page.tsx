'use client'

import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

export default function CastingProcess() {
    return (
        <div className="bg-[#F0EEDE] noise-bg">
            <Navigation pageTitle="The Process" />

            {/* Opening Statement */}
            <section className="min-h-screen flex items-center justify-center px-4 md:px-8 pt-32 md:pt-24 pb-16 relative">
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

            {/* Image: Kit Bags */}
            <section className="py-12 px-8 bg-stone-100">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="aspect-[4/3] flex flex-col items-center justify-center"
                    >
                        <div className="relative w-full h-full">
                            <Image
                                src="/process-figs/process-1.png"
                                alt="Kit bags arrive at the studio"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <p className="text-gray-700 text-center px-4 font-serif text-sm mt-4">
                            Kit bags arrive at the studio, and are labelled with the artist's details.
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
                        className="aspect-[4/3] flex flex-col items-center justify-center"
                    >
                        <div className="relative w-full h-full">
                            <Image
                                src="/process-figs/process-2.png"
                                alt="Runners and risers"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <p className="text-gray-700 text-center px-4 font-serif text-sm mt-4">
                            We roll out runners (thick ones) and risers (thin ones). The thick ones will leave a wide gap in the mould after it's been fired in the kiln for the metal to flow. The thin ones leave a space for the air to escape.
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
                            className="aspect-square flex flex-col items-center justify-center"
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    src="/process-figs/process-3.png"
                                    alt="Brushing the first coat"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <p className="text-gray-700 text-center px-4 font-serif text-sm mt-4">
                                Kabir brushes on the first coat of the mould; a mixture of herculite plaster and fine casting plaster. This coat has to be very strong to pick up the details on the wax.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="aspect-square flex flex-col items-center justify-center"
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    src="/process-figs/process-4.png"
                                    alt="A mix of plaster and water"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <p className="text-gray-700 text-center px-4 font-serif text-sm mt-4">
                                A mix of plaster and water to make the mould.
                            </p>
                        </motion.div>
                    </div>
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
                            className="aspect-[3/4] flex flex-col items-center justify-center"
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    src="/process-figs/process-5.png"
                                    alt="Crushing waste plaster"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <p className="text-gray-700 text-center px-4 font-serif text-sm mt-4">
                                To make a plaster for the second coat of the mould, Vicky is crushing waste plaster from the fired broken moulds.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="aspect-[3/4] flex flex-col items-center justify-center"
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    src="/process-figs/process-7.png"
                                    alt="Building up the second layer"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <p className="text-gray-700 text-center px-4 font-serif text-sm mt-4">
                                Kabir builds up the second layer of two parts luto to one part fine casting plaster.
                            </p>
                        </motion.div>
                    </div>
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
                            className="aspect-square flex flex-col items-center justify-center"
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    src="/process-figs/process-8.png"
                                    alt="Taking finished moulds to the kiln"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <p className="text-gray-700 text-center px-4 font-serif text-sm mt-4">
                                We take the finished moulds to the foundry kiln.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="aspect-square flex flex-col items-center justify-center"
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    src="/process-figs/process-9.png"
                                    alt="Five days of firing"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <p className="text-gray-700 text-center px-4 font-serif text-sm mt-4">
                                Kabir puts the moulds into the kiln to fire for five days. The wax burns out to leave a space to pour the hot metal.
                            </p>
                        </motion.div>
                    </div>
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
                        className="aspect-[4/3] flex flex-col items-center justify-center"
                    >
                        <div className="relative w-full h-full">
                            <Image
                                src="/process-figs/process-10.png"
                                alt="Wrapping scrim around warm moulds"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <p className="text-gray-700 text-center px-4 font-serif text-sm mt-4">
                            The moulds are cooked and still warm from the kiln. The wax has melted away and the mould is fragile. Kabir wraps some scrim dipped in plaster around the moulds to strengthen them for the hot metal.
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
                            className="aspect-[3/4] flex flex-col items-center justify-center"
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    src="/process-figs/process-11.png"
                                    alt="Bronze ingots heating in the furnace"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <p className="text-gray-700 text-center px-4 font-serif text-sm mt-4">
                                Meanwhile the bronze ingots are being heated up in the furnace.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="aspect-[3/4] flex flex-col items-center justify-center"
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    src="/process-figs/process-12.png"
                                    alt="Molten metal ready to pour"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <p className="text-gray-700 text-center px-4 font-serif text-sm mt-4">
                                The bronze is heated up to 1080 degrees Celsius.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Full Bleed: The Pour */}
            <section className="py-12 px-4 md:px-8">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="aspect-[4/3] flex flex-col items-center justify-center"
                    >
                        <div className="relative w-full h-full">
                            <Image
                                src="/process-figs/process-13.png"
                                alt="The melted metal ready to be poured"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <p className="text-gray-700 text-center px-4 font-serif text-sm mt-4">
                            The melted metal ready to be poured into the moulds.
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
                            className="aspect-[4/3] flex flex-col items-center justify-center"
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    src="/process-figs/process-14.jpg"
                                    alt="Breaking the mould with an axe"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <p className="text-gray-700 text-center px-4 font-serif text-sm mt-4">
                                The moulds have cooled down and an axe is used to break the mould and find the bronze.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="aspect-[4/3] flex flex-col items-center justify-center"
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    src="/process-figs/process-15.jpg"
                                    alt="The sculpture emerges"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <p className="text-gray-700 text-center px-4 font-serif text-sm mt-4">
                                When the plaster is washed off the bronze. The runners and risers of sprue system are left with the small bronze sculpture attached.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Images: Fettling */}
            <section className="py-12 px-4 md:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="aspect-square flex flex-col items-center justify-center"
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    src="/process-figs/process-16.png"
                                    alt="Fettling process 1"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="aspect-square flex flex-col items-center justify-center"
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    src="/process-figs/process-17.png"
                                    alt="Fettling process 2"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="aspect-square flex flex-col items-center justify-center"
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    src="/process-figs/process-18.jpg"
                                    alt="Fettling process 3"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>
                    <p className="text-gray-700 text-center px-4 font-serif text-sm mt-6">
                        Fettling the bronze.
                    </p>
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
                            className="aspect-[3/4] flex flex-col items-center justify-center"
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    src="/process-figs/process-20.png"
                                    alt="Applying chemicals to create the patina"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <p className="text-gray-700 text-center px-4 font-serif text-sm mt-4">
                                Patination. Using chemicals to burn a colour the metal.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="aspect-[3/4] flex flex-col items-center justify-center"
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    src="/process-figs/process-22.jpg"
                                    alt="The finished bronze sculptures"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <p className="text-gray-700 text-center px-4 font-serif text-sm mt-4">
                                The finished small bronze sculptures.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
