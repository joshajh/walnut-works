'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Home() {
    return (
        <div className="min-h-screen bg-[#F0EEDE] noise-bg">
            <Navigation />

            {/* Section 1: Hero */}
            <section className="min-h-screen flex items-center justify-center px-4 md:px-6 relative">
                {/* Text - centred */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center"
                >
                    <h1 className="text-5xl md:text-8xl font-spectral font-normal drop-shadow-md !text-[#c4342e]">
                        Walnut Works
                    </h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="text-sm md:text-lg tracking-widest mt-4 text-gray-800 uppercase"
                        style={{ letterSpacing: '0.08em', fontWeight: 500 }}
                    >
                        Traditional Block Investment Foundry.
                        <br />
                        Suffolk, UK.
                    </motion.p>
                </motion.div>
            </section>

            {/* Section 2: Introduction */}
            <section className="py-16 md:py-24 flex items-center justify-center px-4 md:px-6 md:pl-16 overflow-hidden relative">
                {/* Section Title Tab - Vertical on desktop, horizontal on mobile */}
                <div
                    className="absolute top-[48px] left-0 border-r border-b border-gray-300 backdrop-blur-md bg-[#F0EEDE]/80 hidden md:block"
                    style={{ writingMode: 'vertical-rl' }}
                >
                    <div
                        className="px-3 py-6 text-[#c4342e] font-serif text-lg"
                        style={{ letterSpacing: '0.08em', fontWeight: 500 }}
                    >
                        Introduction
                    </div>
                </div>

                <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Left column: Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex flex-col justify-center"
                    >
                        <h2 className="text-2xl md:text-4xl font-serif font-bold mb-4 md:mb-8 text-gray-800">
                            Ancient Meets Modern
                        </h2>
                        <p className="text-base md:text-xl leading-relaxed text-gray-800">
                            Walnut Works was established in 2019. The idea had been formulated many years earlier to utilise master founder Kabir Hussain's 30 years of experience working in commercial fine art foundries with prominent 20th and 21st century artists and Vicky Hussain's experience in schools and as a founder member, gallery organiser, and curator of five bronze shows at Greyfriars Art Space in King's Lynn.
                        </p>
                    </motion.div>

                    {/* Right column: Image Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 gap-2 md:gap-4 max-w-md mx-auto md:mx-0"
                    >
                        <div className="w-full aspect-square flex items-center justify-center">
                            <img
                                src="/foundry.webp"
                                alt="Walnut Works Foundry"
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                        <div className="w-full aspect-square flex items-center justify-center">
                            <img
                                src="/denise-2.webp"
                                alt="Bronze casting work"
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                        <div className="w-full aspect-square flex items-center justify-center">
                            <img
                                src="/laura-wilson.webp"
                                alt="Artist work"
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                        <div className="w-full aspect-square flex items-center justify-center">
                            <img
                                src="/julie-lockhart-1.webp"
                                alt="Bronze sculpture"
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Section 3: Explore */}
            <section className="py-16 md:py-24 flex items-center justify-center px-4 md:px-6 md:pl-16 relative">
                {/* Section Title Tab - Desktop only */}
                <div
                    className="absolute top-[48px] left-0 border-r border-b border-gray-300 backdrop-blur-md bg-[#F0EEDE]/80 hidden md:block"
                    style={{ writingMode: 'vertical-rl' }}
                >
                    <div
                        className="px-3 py-6 text-[#c4342e] font-serif text-lg"
                        style={{ letterSpacing: '0.08em', fontWeight: 500 }}
                    >
                        Explore
                    </div>
                </div>

                <div className="max-w-6xl w-full">
                    <div className="space-y-4 md:space-y-6">
                        {/* About Card */}
                        <motion.article
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Link href="/about" className="block group md:flex gap-4 items-start">
                                <div className="w-1/3 md:w-1/5 aspect-[4/3] relative mb-4 md:mb-0 flex items-center justify-center flex-shrink-0">
                                    <img
                                        src="/clare-jarrett-1.webp"
                                        alt="About Walnut Works"
                                        className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="md:w-4/5">
                                    <h3 className="text-xl font-serif font-bold mb-1 group-hover:text-[#c4342e] transition-colors inline-block border-b border-transparent group-hover:border-[#c4342e]">
                                        About
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed text-sm">
                                        Walnut Works was established in 2019. The idea had been formulated many years earlier to utilise Kabir's 30 years of experience working in commercial fine art foundries with prominent 20th and 21st century artists and Vicky's experience in schools and as a founder member, gallery organiser, and curator of five bronze shows at Greyfriars Art Space in King's Lynn.
                                    </p>
                                </div>
                            </Link>
                        </motion.article>

                        {/* Bespoke Casting Card */}
                        <motion.article
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <Link
                                href="/bespoke-casting"
                                className="block group md:flex gap-4 items-start"
                            >
                                <div className="w-1/3 md:w-1/5 aspect-[4/3] relative mb-4 md:mb-0 flex items-center justify-center flex-shrink-0">
                                    <img
                                        src="/bespoke-2.png"
                                        alt="Bespoke Casting"
                                        className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="md:w-4/5">
                                    <h3 className="text-xl font-serif font-bold mb-1 group-hover:text-[#c4342e] transition-colors inline-block border-b border-transparent group-hover:border-[#c4342e]">
                                        Bespoke Casting
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed text-sm">
                                        Master bronze caster Kabir Hussain welcomes commissions and enquiries from artists interested in casting their work in bronze. Walnut Works is one of very few remaining investment foundries in the UK, continuing to use the ancient methods.
                                    </p>
                                </div>
                            </Link>
                        </motion.article>

                        {/* Workshops Card */}
                        <motion.article
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <Link
                                href="/workshops"
                                className="block group md:flex gap-4 items-start"
                            >
                                <div className="w-1/3 md:w-1/5 aspect-[4/3] relative mb-4 md:mb-0 flex items-center justify-center flex-shrink-0">
                                    <img
                                        src="/julie-lockhart-2.webp"
                                        alt="Workshops"
                                        className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="md:w-4/5">
                                    <h3 className="text-xl font-serif font-bold mb-1 group-hover:text-[#c4342e] transition-colors inline-block border-b border-transparent group-hover:border-[#c4342e]">
                                        Workshops
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed text-sm">
                                        Visit the foundry at Walnut Works, nestled in the Suffolk countryside, and join us for a hands-on experience of bronze casting led by master founder Kabir Hussain and curator-educator Vicky Hussain. Arrive with an idea, leave with a sculpture.
                                    </p>
                                </div>
                            </Link>
                        </motion.article>
                    </div>
                </div>
            </section>

            {/* Section 4: Visit */}
            <section className="py-16 md:py-24 flex items-center justify-center px-4 md:px-6 md:pl-16 relative">
                {/* Section Title Tab - Desktop only */}
                <div
                    className="absolute top-[48px] left-0 border-r border-b border-gray-300 backdrop-blur-md bg-[#F0EEDE]/80 hidden md:block"
                    style={{ writingMode: 'vertical-rl' }}
                >
                    <div
                        className="px-3 py-6 text-[#c4342e] font-serif text-lg"
                        style={{ letterSpacing: '0.08em', fontWeight: 500 }}
                    >
                        Visit
                    </div>
                </div>

                <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Left column: Visit Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl md:text-4xl font-serif font-bold mb-6 text-gray-800">
                            Visit Us
                        </h2>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-serif font-bold text-[#c4342e] mb-2">Address</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Walnut Works<br />
                                    The Old Foundry<br />
                                    Orford, Suffolk<br />
                                    IP12 2NR
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-serif font-bold text-[#c4342e] mb-2">Opening Hours</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    By appointment only.<br />
                                    Please contact us to arrange a visit.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-serif font-bold text-[#c4342e] mb-2">Contact</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    <a href="mailto:info@walnutworks.org" className="hover:text-[#c4342e] transition-colors underline">
                                        info@walnutworks.org
                                    </a>
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right column: Map placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="aspect-square md:aspect-[4/3] bg-gray-200 rounded-sm overflow-hidden"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2445.8!2d1.5344!3d52.0956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zT3Jmb3JkLCBTdWZmb2xr!5e0!3m2!1sen!2suk!4v1"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Walnut Works Location"
                            className="grayscale hover:grayscale-0 transition-all duration-500"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    )
}
