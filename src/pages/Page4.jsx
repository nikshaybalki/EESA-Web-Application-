import React from "react";
import { motion } from "framer-motion";

export default function Page4() {
  const boardMembers = [
    { post: "President", name: "Rahul Patil", img: "/member1.jpg" },
    { post: "Vice President", name: "Sneha Kulkarni", img: "/member2.jpg" },
    { post: "Secretary", name: "Amit Deshmukh", img: "/member3.jpg" },
    { post: "Joint Secretary", name: "Priya Shinde", img: "/member4.jpg" },
    { post: "Treasurer", name: "Vikas Jadhav", img: "/member5.jpg" },
    { post: "Technical Head", name: "Kiran Pawar", img: "/member6.jpg" },
    { post: "Cultural Head", name: "Anjali Patil", img: "/member7.jpg" },
    { post: "Sports Head", name: "Rohit Mane", img: "/member8.jpg" },
    { post: "PR Head", name: "Neha Chavan", img: "/member9.jpg" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* ===== Heading ===== */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-extrabold text-center mb-16 
                   text-transparent bg-clip-text bg-gradient-to-r 
                   from-blue-400 to-purple-600 drop-shadow-[0_0_20px_#1E90FF]"
      >
        CHIEF BOARD
      </motion.h1>

      {/* ===== Board Cards ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {boardMembers.map((member, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ scale: 1.08, rotateX: 5, rotateY: -5 }}
            className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/20
                       hover:border-accent relative overflow-hidden
                       hover:shadow-[0_0_40px_#1E90FF] transition-all duration-300"
          >
            {/* Neon border glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-600/20 blur-xl opacity-0 hover:opacity-100 transition duration-500"></div>

            {/* Content */}
            <div className="relative flex flex-col items-center text-center">
              {/* Image */}
              <img
                src={member.img}
                alt={member.name}
                className="w-28 h-28 rounded-full object-cover border-2 border-accent shadow-[0_0_25px_#1E90FF]"
              />

              {/* Post */}
              <h3 className="mt-6 text-lg font-semibold text-accent uppercase tracking-wide">
                {member.post}
              </h3>

              {/* Name */}
              <p className="text-white/90 text-xl font-bold mt-2">{member.name}</p>

              {/* Gradient bar */}
              <div className="w-16 h-1 mt-4 rounded-full bg-gradient-to-r from-blue-400 to-purple-600"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
