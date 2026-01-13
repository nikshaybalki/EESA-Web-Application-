// src/pages/Recruitment.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaUserPlus, FaRocket, FaUsers, FaLightbulb } from "react-icons/fa";

export default function Recruitment() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      {/* ===== Hero Section ===== */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
          <span className="text-white">JOIN THE </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 drop-shadow-[0_0_25px_rgba(30,144,255,0.7)]">
            LEGACY
          </span>
        </h1>
        <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
          Be a part of the Assistant Board 2025. Shape your technical expertise, 
          leadership skills, and managerial dexterity with EESA.
        </p>
      </motion.div>

      {/* ===== Why Join Section ===== */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {[
          { icon: <FaRocket />, title: "Growth", desc: "Accelerate your professional and personal journey." },
          { icon: <FaUsers />, title: "Community", desc: "Work with the most passionate minds in the department." },
          { icon: <FaLightbulb />, title: "Innovation", desc: "Bring your ideas to life through our flagship events." }
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center hover:border-blue-500/50 transition-all shadow-xl"
          >
            <div className="text-4xl text-blue-400 mb-4 flex justify-center">{item.icon}</div>
            <h3 className="text-2xl font-bold mb-2 text-white">{item.title}</h3>
            <p className="text-white/60">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* ===== Call to Action Section ===== */}
      <motion.section 
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        className="relative p-12 rounded-3xl overflow-hidden bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-white/20 text-center"
      >
        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to take the lead?</h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Applications are currently open for all First Year and Second Year students. 
            Click the button below to fill out the recruitment form.
          </p>
          <a
            href="https://forms.gle/your-google-form-link" // Replace with actual form link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-xl hover:shadow-[0_0_30px_rgba(30,144,255,0.6)] transition-all hover:scale-105"
          >
            <FaUserPlus /> Apply Now
          </a>
        </div>
        
        {/* Decorative Background Glow */}
        <div className="absolute top-0 left-0 w-full h-full bg-blue-500/10 blur-[100px] pointer-events-none"></div>
      </motion.section>
    </div>
  );
}