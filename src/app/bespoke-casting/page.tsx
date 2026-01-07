'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

export default function BespokeCastingPage() {
    const images = [
        '/bespoke-1.png',
        '/bespoke-2.png',
        '/bespoke-3.png',
    ]

    return (
        <div className="bg-[#F0EEDE] noise-bg">
            <Navigation pageTitle="Bespoke Casting" />

            {/* Combined Hero + Gallery Section */}
            <section className="min-h-screen flex flex-col justify-center px-4 md:px-8 pt-32 md:pt-24 pb-12">
                <div className="max-w-6xl mx-auto w-full">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-4xl md:text-6xl font-serif font-normal leading-tight mb-4">
                            Bespoke Casting
                        </h1>
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                            Commissions welcome. Please let us know the details.
                        </p>
                        <a
                            href="mailto:kabirhussain11@gmail.com"
                            className="inline-block font-serif text-[#c4342e] border-b border-[#c4342e] pb-1 hover:opacity-60 transition-opacity"
                        >
                            Email Us →
                        </a>
                    </motion.div>

                    {/* Image Gallery */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
                    >
                        {images.map((src, index) => (
                            <motion.div
                                key={src}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                                className="relative aspect-square overflow-hidden group"
                            >
                                <img
                                    src={src}
                                    alt={`Bespoke casting example ${index + 1}`}
                                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
