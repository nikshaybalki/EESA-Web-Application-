import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

export default function Page4() {
  const boardMembers = [
    { post: "President", name: "Vishwadeep Telgote", img: assets.vishwadeep },

    { post: "Vice President", name: "Darshan Nandurge", img: assets.darshan },

    { post: "Secretary", name: "Shruti Hore",img: assets.shruti },

    { post: "program director in event", name: "Akash Andhare", img: assets.akash },
    { post: "program director in event", name: "Yash Kothale", img: assets.yash },
    { post: "program director in event", name: "Omkar Aher", img: assets },
    { post: "program director in event", name: "Rajwardhan Kadam", img: assets.rajvardhan },


    { post: "Program Director in publicity", name: "Aishwarya Arve", img: assets.aishwarya },

    { post: "Program Director in Finance", name: "Vishwajeet Pawar", img: assets.vishwajeet },

    { post: "Club Service Director", name: "Omprasad Tandale",img: assets.omprasad },
    { post: "Club Service Director", name: "Nandini Chavande",img: assets },

    { post: "Art Director", name: "Sanika Banne", img: assets},
    { post: "Art Director", name: "Sakshi Koli", img: assets.sakshi },
    { post: "Art Director", name: "Prathamesh Wanare", img: assets },
    { post: "Art Director", name: "Pratiksha Patil",  img: assets.pratiksha  },

    { post: "Technical Skill Developer ", name: "Dhanashree Mali",img: assets.dhanashree},

    { post: "Aptitude Developer", name: "Aditya Wadkar", img: assets.aditya },

    { post: "Alumani Relation Officer ", name: "Samruddhi Shinde", img: assets.samrudhi },

    { post: "Members", name: "Tejashree Sutar", img: assets.tejshree },
    { post: "Members", name: "Meghana Ghadge",img: assets },
{ post: "Members", name: "Jivika Bodhee",img: assets.jivika },




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
