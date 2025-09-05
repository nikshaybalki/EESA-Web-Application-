import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section id="hero" className="min-h-screen flex items-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-24 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
          >
            Collage Club
            <br />
            <span className="text-accent">Make. Share. Collage.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="mt-6 text-base sm:text-lg text-white/70 max-w-2xl mx-auto md:mx-0"
          >
            A minimal, futuristic canvas for creative collages — subtle motion, clean layout, community features.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Link to="/page1" className="px-6 py-3 rounded-md bg-accent text-black font-semibold">
              Join the Club
            </Link>
            <a href="#section2" className="px-6 py-3 rounded-md border border-white/10 text-white/80">
              Explore ↓
            </a>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 */}
      <motion.section
        id="section2"
        className="min-h-screen flex items-center border-t border-white/10 scroll-mt-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 text-center md:text-left">
          <h2 className="text-3xl font-bold">Gallery Preview</h2>
          <p className="mt-4 text-white/70 max-w-2xl">
            Sample formatting: grid of collages, hover anims, filters.
          </p>

          <motion.div
            className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2 }
              }
            }}
          >
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="h-48 bg-white/5 rounded-lg"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
              />
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* SECTION 3 */}
      <motion.section
        id="section3"
        className="min-h-screen flex items-center border-t border-white/10 scroll-mt-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 text-center md:text-left">
          <h2 className="text-3xl font-bold">How it works</h2>
          <p className="mt-4 text-white/70 max-w-2xl">
            Steps to create a collage, share, and join challenges.
          </p>
          <motion.div
            className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2 }
              }
            }}
          >
            {['Upload', 'Arrange', 'Share'].map((step, i) => (
              <motion.div
                key={i}
                className="p-6 bg-white/5 rounded-lg"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                {i + 1}. {step}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* SECTION 4 */}
      <motion.section
        id="section4"
        className="min-h-screen flex items-center border-t border-white/10 scroll-mt-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 text-center md:text-left">
          <h2 className="text-3xl font-bold">Community</h2>
          <p className="mt-4 text-white/70">
            Follow creators, like collages, join weekly prompts.
          </p>
        </div>
      </motion.section>
    </div>
  )
}
