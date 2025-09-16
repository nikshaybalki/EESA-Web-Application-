// import React from 'react'
// import { Link } from 'react-router-dom'

// export default function Page1() {
//   return (
//     <div className="min-h-screen flex items-center justify-center py-24">
//       <div className="max-w-4xl text-center px-6">
//         <h1 className="text-4xl font-bold">Page 1</h1>
//         <p className="mt-4 text-white/70">
//           This is the placeholder for Page 1. We'll design details after you approve the home layout.
//         </p>
//         <div className="mt-6">
//           <Link to="/" className="text-accent underline">Back to Home</Link>
//         </div>
//       </div>
//     </div>
//   )
// }

import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

// Event data (replace img paths later with actual images)
const events = [
  {
    title: "🔧 Technocrat",
    description:
      "TECHNOCRAT is a state-level technical symposium arranged by Electrical Engineering Students Association (EESA). This event is organized each year with the focus to give students irrespective of their departments and colleges a biased platform to showcase their skill and a chance to share their technical knowledge will be helpful to apply this knowledge in practical life.",
    img: assets.homeEvent1,
  },
  {
    title: "🤖 Robowar",
    description:
      "Gear up for high-voltage robotic battles in the arena! Robowar pits custom-built robots against each other in a test of power, durability, and strategy.",
    img: assets.homeEvent2,
  },
  {
    title: "🏁 Roborace",
    description:
      "In Roborace, speed meets engineering brilliance. Participants compete with self-designed robots on challenging tracks, navigating twists and turns to claim victory.",
    img: assets.homeEvent3,
  },
  {
    title: "GIM",
    description:
      "General interest meet is an orientation meeting organized for the newly admitted First Year students. We introduce the students with the department and its various staff members, with a departmental tour, followed by a fun session where the first years get to know about EESA through various activities organized for them. ",
    img: assets.gim,
  },
  {
    title: "Alumani Meet",
    description:
      "Alumni Meet is a gathering of an institution’s former students, and it is a venue where the institution can be proud of its successful alumni. During their gathering, the alumni community shares their experiences in the outside world that they encountered after leaving, Admission Management, the institution. The Alumni Meet is a unique opportunity for both the academy and its alumni.",
    img: assets.alumni,
  },
];

export default function Page1() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      {/* ===== Heading ===== */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl md:text-6xl font-extrabold text-center mb-20"
      >
        <span className="text-white">OUR </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 drop-shadow-[0_0_20px_rgba(30,144,255,0.7)]">
          EVENTS
        </span>
        
      </motion.h1>

      {/* ===== Event Cards ===== */}
      <div className="flex flex-col gap-20">
        {events.map((event, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="flex flex-col md:flex-row items-center gap-10 
                       bg-white/5 border border-white/10 rounded-2xl p-6 md:p-10 
                       backdrop-blur-lg shadow-lg 
                       hover:shadow-[0_0_35px_#1E90FF] hover:border-accent/50 
                       transition-all duration-500"
          >
            {/* Image */}
            <div className="w-full md:w-1/2">
              <img
                src={event.img}
                alt={event.title}
                className="w-full h-64 md:h-80 object-cover rounded-xl 
                           border border-white/10 shadow-md 
                           hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Text */}
            <div className="flex-1 text-center md:text-left space-y-4">
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                {event.title}
              </h2>
              <p className="text-white/70 leading-relaxed text-lg">
                {event.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
