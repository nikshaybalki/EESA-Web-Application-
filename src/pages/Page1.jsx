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

// Event data (replace img paths later with actual images)
const events = [
  {
    title: "PRUDENCE 2K24",
    description:
      "PRUDENCE includes sectors of professional life, right from economics, entrepreneurship, marketing, debate, politics, governance, social responsibilities, journalism, environment, etc.",
    img: "https://picsum.photos/800/500?random=1",
  },
  {
    title: "CSR 2K24",
    description:
      "Every year PACE conducts CSR which is an event exclusively aiming to conduct social activities to benefit the less privileged people around Sangli.",
    img: "https://picsum.photos/800/500?random=2",
  },
  {
    title: "TECH FEST 2K24",
    description:
      "A fusion of innovation and creativity. Students showcase projects, hackathons, robotics and more with futuristic ideas.",
    img: "https://picsum.photos/800/500?random=3",
  },
  {
    title: "CULTURAL NIGHT",
    description:
      "An evening celebrating art, dance, and music — where creativity and performance meet under one roof.",
    img: "https://picsum.photos/800/500?random=4",
  },
  {
    title: "SPORTS WEEK",
    description:
      "Bringing together energy, passion, and team spirit across multiple sports tournaments.",
    img: "https://picsum.photos/800/500?random=5",
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
