// src/pages/Page2.jsx
import React, { useState } from "react";
import EventCard from "../components/EventCard";
import { motion } from "framer-motion";

const sampleEvents = [
  {
    title: "TECHNOCRAT 2K24",
    shortDesc:
      "Covers all aspects of professional life — economics, entrepreneurship, governance, environment, and more.",
    extraInfo:
      "A multidisciplinary event that brings together leaders and students for impactful discussions.",
    img: "https://picsum.photos/500/300?random=11",
    posterImg: "https://picsum.photos/800/600?random=12",
    registerLink: "https://example.com/prudence",
  },
  {
    title: "CSR 2K24",
    shortDesc:
      "A flagship initiative focused on social responsibility and uplifting underprivileged communities.",
    extraInfo:
      "Dedicated to giving back to society through volunteering, awareness campaigns, and meaningful actions.",
    img: "https://picsum.photos/500/300?random=13",
    posterImg: "https://picsum.photos/800/600?random=14",
    registerLink: "https://example.com/csr",
  },
  {
    title: "TECH FEST 2K24",
    shortDesc:
      "A fusion of innovation and creativity — hackathons, robotics, and futuristic tech challenges.",
    extraInfo:
      "A platform for students to showcase their technical brilliance and compete at the highest level.",
    img: "https://picsum.photos/500/300?random=15",
    posterImg: "https://picsum.photos/800/600?random=16",
    registerLink: "https://example.com/techfest",
  },
  {
    title: "CULTURAL NIGHT",
    shortDesc:
      "A vibrant evening of art, music, and dance where talent meets passion under one roof.",
    extraInfo:
      "The stage comes alive with mesmerizing performances, creativity, and celebration.",
    img: "https://picsum.photos/500/300?random=17",
    posterImg: "https://picsum.photos/800/600?random=18",
    registerLink: "https://example.com/culturalnight",
  },
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
          UPCOMING EVENTS
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
