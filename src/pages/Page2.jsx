// src/pages/Page2.jsx
import React, { useState } from "react";
import EventCard from "../components/EventCard";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";


const sampleEvents = [
  {
    title: "Electroverse",
    shortDesc:"⚡ ElectroverseTest your knowledge and skills in this electrifying challenge.✨ Only the sharpest sparks will shine!",
    // extraInfo:
    //   "A multidisciplinary event that brings together leaders and students for impactful discussions.",
    img: assets.electroverse,
    posterImg: assets.poster,
    registerLink: "https://forms.gle/ufTPv7KYqRqf9Vmy6",
  },
  {
    title: "Matspark",
    shortDesc:
      "💡 MatSpark This year featuring a hands-on MATLAB Workshop.✨ Spark your skills and shape the future with the power of software!🚀",
    // extraInfo:
    //   "Dedicated to giving back to society through volunteering, awareness campaigns, and meaningful actions.",
    img: assets.matspark,
    posterImg: assets.poster,
    registerLink: "https://forms.gle/ufTPv7KYqRqf9Vmy6",
  },
  {
    title: "Revelio",
    shortDesc:
      "👻 Revelio 🎭 Step into a thrilling mystery event full of suspense, puzzles, and excitement! 🕵️‍♂️ ✨ Dare to uncover the unknown!",
    // extraInfo:
    //   "A platform for students to showcase their technical brilliance and compete at the highest level.",
    img: assets.revelio,
    posterImg: assets.poster,
    registerLink: "https://forms.gle/ufTPv7KYqRqf9Vmy6",
  },
  {
    title: "Roborace",
    shortDesc:
      "🤖 Robo Race🏎✨ Team up, build your bots, and feel the adrenaline rush on the racing track! 🚀",
    // extraInfo:
    //   "The stage comes alive with mesmerizing performances, creativity, and celebration.",
    img: assets.roborace,
    posterImg: assets.poster,
    registerLink: "https://forms.gle/ufTPv7KYqRqf9Vmy6",
  },
  {
    title: "Framefest",
    shortDesc:
      "📸 FrameFest 🎥 Show your talent through Photography & Reels. 🌟 ✨ Every click and reel tells a story!",
    // extraInfo:
    //   "The stage comes alive with mesmerizing performances, creativity, and celebration.",
    img:assets.framefest,
    posterImg: assets.poster,
    registerLink: "https://forms.gle/ufTPv7KYqRqf9Vmy6",
  }
];

export default function Page2() {
  const [poster, setPoster] = useState(null);
  const [expanded, setExpanded] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-12"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
         Technocrat'2k25
        </span>
      </motion.h1>

      {/* Events List */}
      <div className="flex flex-col gap-10">
        {sampleEvents.map((event, idx) => (
          <EventCard
            key={idx}
            {...event}
            showDetails={expanded === idx}
            onToggleDetails={() =>
              setExpanded(expanded === idx ? null : idx)
            }
            onOpenPoster={(posterImg) => setPoster(posterImg)}
          />
        ))}
      </div>

      {/* Poster Modal */}
      {poster && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="relative max-w-3xl w-full p-6">
            <img
              src={poster}
              alt="Poster"
              className="w-full rounded-lg shadow-xl"
            />
            <button
              onClick={() => setPoster(null)}
              className="absolute top-4 right-4 px-3 py-1 bg-black/60 rounded-lg text-white text-sm hover:bg-red-500 transition"
            >
              ✕ Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
