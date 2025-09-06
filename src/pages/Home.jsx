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
            EESA Club
            <br />
            <span className="text-accent">Empowering. Elites. Endeavours.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="mt-6 text-base sm:text-lg text-white/70 max-w-2xl mx-auto md:mx-0"
          >
           Electrical Engineering Students' association is departmental club in WCE Sangli, which focuses on technical skills and soft skills of students that plays important role in corporate life of students.
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
            <a href="#section-1" className="px-6 py-3 rounded-md border border-white/10 text-white/80">
              Explore ↓
            </a>






          </motion.div>
        </div>
      </section>

      {/* =====  Section-1 ===== */}
<section
  id="section-1"
  className="min-h-screen flex flex-col items-center justify-center text-center px-6"
>
  {/* Heading */}
  <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 drop-shadow-lg">
    EVENTS
  </h2>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
  {[
    {
      name: "PRUDENCE",
      description: "National level fest fostering managerial intellect since 2001.",
      img: "https://picsum.photos/id/1011/800/600"
    },
    {
      name: "ElectroSpark",
      description: "Flagship event showcasing innovation in electronics and robotics.",
      img: "https://picsum.photos/id/1015/800/600"
    },
    {
      name: "TechVision",
      description: "Annual tech conference featuring guest lectures & project expo.",
      img: "https://picsum.photos/id/1016/800/600"
    }
  ].map((event, i) => (
    <div key={i} className="group card w-full h-96">
      <div className="card-inner w-full h-full">
        {/* FRONT */}
        <div className="card-front flex flex-col rounded-xl overflow-hidden bg-black">
          <div className="flex-1 w-full">
            <img
              src={event.img}
              alt={event.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-20 flex items-center justify-center bg-black/30">
            <p className="text-xl md:text-2xl font-bold text-accent tracking-wider">
              {event.name}
            </p>
          </div>
        </div>

        {/* BACK */}
        <div className="card-back rounded-xl p-6 flex flex-col items-center justify-center text-center">
          <h3 className="text-2xl font-extrabold mb-2 text-yellow-300">{event.name}</h3>
          <p className="text-sm text-white/80">{event.description}</p>
        </div>
      </div>
    </div>
  ))}
</div>



  {/* Explore Button */}
  <div className="mt-12">
  
<Link
  to="/page1"
  className="px-8 py-3 rounded-lg text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_#1E90FF]"
>
  Explore Events →
</Link>
  </div>
</section>


      {/* SECTION-2 */}
      <motion.section
       id="section-2"
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

      {/* SECTION-3 */}
      <motion.section
        id="section-3"
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
