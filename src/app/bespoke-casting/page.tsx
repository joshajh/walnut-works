'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

export default function BespokeCastingPage() {
    return (
        <div className="bg-[#F0EEDE] noise-bg">
            <Navigation pageTitle="Bespoke Casting" />

            {/* Under Construction */}
            <section className="min-h-screen flex items-center justify-center px-8 pt-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-3xl"
                >
                    <h1 className="text-5xl md:text-7xl font-serif font-normal leading-tight mb-8 text-gray-800">
                        Under Construction
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-12">
                        We&apos;re currently developing this page.
                    </p>
                </motion.div>
            </section>

            <Footer />
        </div>
    )
}
