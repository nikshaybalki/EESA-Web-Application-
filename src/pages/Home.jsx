import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ChiefBoard from "../components/ChiefBoard"
import { assets } from "../assets/assets"


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
            <Link to="/page2" className="px-6 py-3 rounded-md bg-accent text-black font-semibold">
              Explore Event 
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
      name: "🔧 Technocrat",
      description: "TECHNOCRAT is a state-level technical symposium arranged by Electrical Engineering Students Association (EESA). This event is organized each year with the focus to give students irrespective of their departments and colleges a biased platform to showcase their skill and a chance to share their technical knowledge will be helpful to apply this knowledge in practical life. ",
      img: assets.homeEvent1
    },
    {
      name: "🤖 Robowar ",
      description: "Gear up for high-voltage robotic battles in the arena! Robowar pits custom-built robots against each other in a test of power, durability, and strategy.",
      img: assets.homeEvent2
    },
    {
      name: "🏁 Roborace",
      description: "In Roborace, speed meets engineering brilliance. Participants compete with self-designed robots on challenging tracks, navigating twists and turns to claim victory.",
      img: assets.homeEvent3
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
     {/* ===== SECTION 2: Chief Board ===== */}


<ChiefBoard />



      {/* SECTION-3 */}
      {/* <motion.section
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
      </motion.section> */}

      {/* ===== SECTION 3: ABOUT EESA ===== */}
<section
  id="section-3"
  className="min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center"
>
  {/* Heading */}
  <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 drop-shadow-[0_0_20px_rgba(30,144,255,0.6)]">
    ABOUT EESA
  </h2>

  {/* Content Box */}
  <div className="max-w-4xl bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-md shadow-lg hover:shadow-[0_0_40px_#1E90FF] transition-all duration-500">
    <p className="text-lg leading-relaxed text-white/80 text-justify">
      <span className="block mb-4">
        Electrical Engineering Students‟ Association (EESA) is a student
        organization pioneered in technical activities, founded by U. Gudaru. It
        is the first and foremost established club at WCE, Sangli. It is active
        since 1976, with the concept of the founder, guidance of staff advisor,
        an executive row of third year students with the guidance of final year
        students and full-fledged support of first year and second year students
        together enhances the power of EESA.
      </span>

      <span className="block">
        EESA conducts various activities throughout the year to help students in
        increasing their technical knowledge and soft skills. EESA helps students
        pursue their technical interests thereby increasing their engineering
        expertise along with imparting skills. Since its inception, EESA is
        striving hard to meet its motto{" "}
        <span className="text-accent font-semibold">
          “To enhance technical comprehension, soft skills and managerial
          dexterity”
        </span>{" "}
        of students pursuing electrical engineering in Walchand College of
        Engineering, Sangli.
      </span>
    </p>
  </div>
</section>

    </div>
  )
}
