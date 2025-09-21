// import React from "react";
// import { motion } from "framer-motion";
// import { FaLightbulb, FaBullseye, FaClipboardList, FaUserTie } from "react-icons/fa";

// export default function Page3() {
//   const staffAdvisors = [
//     {
//       name: "Darshan Nandurge",
//       img: "/advisor1.jpg",
//       feedback:
//         "Guiding students to excel in both technical and managerial skills, inspiring innovation and teamwork.",
//     },
//     {
//       name: "Vishwadeep Telgote",
//       img: "/advisor2.jpg",
//       feedback:
//         "Encouraging every student to push boundaries and achieve their potential through EESA activities.",
//     },
//     {
//       name: "Shruti Hore",
//       img: "/advisor3.jpg",
//       feedback:
//         "Providing the right mentorship and direction, ensuring that the club continues its legacy since 1976.",
//     },
//   ];

//   return (
//     <div className="max-w-6xl mx-auto px-6 py-16">
//       {/* ===== Heading ===== */}
//       <motion.h1
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-5xl md:text-6xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 drop-shadow-lg"
//       >
//         ABOUT EESA
//       </motion.h1>

//       {/* ===== About Info ===== */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="space-y-6 text-lg text-white/80 leading-relaxed"
//       >
//         <p>
//           <span className="font-bold text-blue-400">Electrical Engineering Students’ Association (EESA)</span> is a student organization pioneered in technical activities, founded by U. Gudaru. It is the first and foremost established club at WCE, Sangli. Active since 1976, EESA has grown under the guidance of staff advisors, leadership of senior students, and enthusiastic participation of juniors.
//         </p>
//         <p>
//           EESA conducts various activities throughout the year to help students in increasing their technical knowledge and soft skills. It encourages students to pursue their technical interests while improving personality and management skills.
//         </p>
//         <p className="italic text-blue-300 font-medium">
//           Motto: “To enhance technical comprehension, soft skills, and managerial dexterity.”
//         </p>
//       </motion.div>

//       {/* ===== Vision & Mission ===== */}
//       <div className="grid md:grid-cols-2 gap-10 mt-16">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="p-6 bg-white/5 rounded-xl border border-white/10 hover:shadow-[0_0_25px_#1E90FF] transition"
//         >
//           <FaLightbulb className="text-3xl text-yellow-400 mb-4" />
//           <h2 className="text-2xl font-bold text-yellow-400 mb-3">VISION</h2>
//           <p className="text-white/70">
//             To create opportunities for everyone to enhance their technical and soft skills,
//             making them better individuals and functional engineers.
//           </p>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="p-6 bg-white/5 rounded-xl border border-white/10 hover:shadow-[0_0_25px_#1E90FF] transition"
//         >
//           <FaBullseye className="text-3xl text-green-400 mb-4" />
//           <h2 className="text-2xl font-bold text-green-400 mb-3">MISSION</h2>
//           <p className="text-white/70">
//             To empower every Electrical Engineering student at WCE to achieve their goals
//             through personal growth, teamwork, and innovation.
//           </p>
//         </motion.div>
//       </div>

//       {/* ===== Activities ===== */}
//       {/* <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//         className="mt-20"
//       >
//         <div className="flex items-center gap-3 mb-8">
//           <FaClipboardList className="text-2xl text-purple-400" />
//           <h2 className="text-3xl font-bold text-purple-400">Activities</h2>
//         </div>

//         <ul className="list-disc list-inside space-y-4 text-white/80">
//           <li>
//             <span className="font-semibold text-blue-300">Weekly Club Services:</span>{" "}
//             Technical and non-technical sessions to build knowledge and professional skills.
//           </li>
//           <li>
//             <span className="font-semibold text-blue-300">Future of Electrical Engineering:</span>{" "}
//             Sessions on Hyperloop, Wireless Power, Electric Vehicles, Fuel Cell Vehicles, and debates like “War of Currents”.
//           </li>
//           <li>
//             <span className="font-semibold text-blue-300">TECHNOCRAT 2019:</span>{" "}
//             A state-level symposium providing a platform for innovation and collaboration.
//           </li>
//           <li>
//             <span className="font-semibold text-blue-300">CSR Activity:</span>{" "}
//             Visits to social organizations like “Dilasa Bhavan” supporting AIDS-affected children.
//           </li>
//           <li>
//             <span className="font-semibold text-blue-300">General Interest Meet (GIM):</span>{" "}
//             Orientation for new students with departmental tours and fun sessions.
//           </li>
//           <li>
//             <span className="font-semibold text-blue-300">FE Special Activity:</span>{" "}
//             Events designed for first-year students to encourage interaction and collaboration.
//           </li>
//         </ul>
//       </motion.div> */}

//       {/* ===== Staff Advisor Section ===== */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//         className="mt-24"
//       >
//         <div className="flex items-center justify-center gap-3 mb-12">
//           <FaUserTie className="text-3xl text-blue-400 drop-shadow-[0_0_10px_rgba(30,144,255,0.8)]" />
//           <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 drop-shadow-lg">
//             STAFF ADVISORS
//           </h2>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//           {staffAdvisors.map((advisor, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: idx * 0.2 }}
//               whileHover={{ scale: 1.05 }}
//               className="p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:shadow-[0_0_30px_#1E90FF] transition"
//             >
//               {/* Image */}
//               <div className="flex justify-center mb-6">
//                 <img
//                   src={advisor.img}
//                   alt={advisor.name}
//                   className="w-28 h-28 rounded-full border-2 border-blue-400/50 shadow-[0_0_15px_rgba(30,144,255,0.6)] object-cover"
//                 />
//               </div>

//               {/* Name */}
//               <h3 className="text-xl font-bold text-center text-blue-400 mb-3">
//                 {advisor.name}
//               </h3>

//               {/* Feedback */}
//               <p className="text-white/70 text-center text-sm leading-relaxed">
//                 {advisor.feedback}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </div>
//   );
// }










import React from "react";
import { motion } from "framer-motion";
import { FaLightbulb, FaBullseye, FaUserTie } from "react-icons/fa";
import { assets } from "../assets/assets";

export default function Page3() {
  const staffAdvisors = [
    {
      role: "HOD",
      name: " V.P Mohale sir ",
      img:assets.hod,
      feedback:
        "Guiding students to excel in both technical and managerial skills, inspiring innovation and teamwork.",
    },
    {
      role: "Staff Advisor",
      name: "R P Hasbe sir ",
      img: assets.staff,
      feedback:
        "Encouraging every student to push boundaries and achieve their potential through EESA activities.",
    },
    {
      role: "President",
      name: "Vishwadeep Telgote",
      img: assets.vishwadeep,
      feedback:
        "Providing the right mentorship and direction, ensuring that the club continues its legacy since 1976.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* ===== Heading ===== */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 drop-shadow-lg"
      >
        ABOUT EESA
      </motion.h1>

      {/* ===== About Info ===== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6 text-lg text-white/80 leading-relaxed"
      >
        <p>
          <span className="font-bold text-blue-400">
            Electrical Engineering Students’ Association (EESA)
          </span>{" "}
          is a student organization pioneered in technical activities, founded
          by U. Gudaru. It is the first and foremost established club at WCE,
          Sangli. Active since 1976, EESA has grown under the guidance of staff
          advisors, leadership of senior students, and enthusiastic
          participation of juniors.
        </p>
        <p>
          EESA conducts various activities throughout the year to help students
          in increasing their technical knowledge and soft skills. It encourages
          students to pursue their technical interests while improving
          personality and management skills.
        </p>
        <p className="italic text-blue-300 font-medium">
          Motto: “To enhance technical comprehension, soft skills, and
          managerial dexterity.”
        </p>
      </motion.div>

      {/* ===== Vision & Mission ===== */}
      <div className="grid md:grid-cols-2 gap-10 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05, rotate: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative p-8 rounded-2xl bg-gradient-to-br from-blue-900/40 to-blue-700/20 backdrop-blur-xl border border-blue-400/30 hover:shadow-[0_0_40px_rgba(0,150,255,0.5)] transition-transform"
        >
          <FaLightbulb className="text-4xl text-yellow-400 mb-4 animate-pulse" />
          <h2 className="text-3xl font-bold text-yellow-400 mb-3 drop-shadow-lg">
            VISION
          </h2>
          <p className="text-white/80 leading-relaxed">
            To create opportunities for everyone to enhance their technical and
            soft skills, making them better individuals and functional engineers.
          </p>
          <div className="absolute inset-0 rounded-2xl border border-yellow-400/20 pointer-events-none"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05, rotate: -1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative p-8 rounded-2xl bg-gradient-to-br from-green-900/40 to-green-700/20 backdrop-blur-xl border border-green-400/30 hover:shadow-[0_0_40px_rgba(0,255,150,0.5)] transition-transform"
        >
          <FaBullseye className="text-4xl text-green-400 mb-4 animate-ping" />
          <h2 className="text-3xl font-bold text-green-400 mb-3 drop-shadow-lg">
            MISSION
          </h2>
          <p className="text-white/80 leading-relaxed">
            To empower every Electrical Engineering student at WCE to achieve
            their goals through personal growth, teamwork, and innovation.
          </p>
          <div className="absolute inset-0 rounded-2xl border border-green-400/20 pointer-events-none"></div>
        </motion.div>
      </div>

      {/* ===== Advisor Sections ===== */}
      {staffAdvisors.map((advisor, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24"
        >
          {/* Dynamic Heading */}
          <div className="flex items-center justify-center gap-3 mb-12">
            <FaUserTie className="text-3xl text-blue-400 drop-shadow-[0_0_10px_rgba(30,144,255,0.8)]" />
            <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 drop-shadow-lg">
              {advisor.role.toUpperCase()}
            </h2>
          </div>

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="p-6 rounded-xl bg-gradient-to-br from-blue-900/30 to-purple-900/20 backdrop-blur-lg border border-white/20 hover:shadow-[0_0_40px_rgba(30,144,255,0.6)] transition max-w-sm mx-auto"
          >
            {/* Image */}
            <div className="flex justify-center mb-6">
              <img
                src={advisor.img}
                alt={advisor.name}
                className="w-28 h-28 rounded-full border-2 border-blue-400/50 shadow-[0_0_20px_rgba(30,144,255,0.8)] object-cover"
              />
            </div>

            {/* Name */}
            <h3 className="text-2xl font-bold text-center text-blue-400 mb-3">
              {advisor.name}
            </h3>

            {/* Feedback */}
            <p className="text-white/80 text-center text-base leading-relaxed">
              {advisor.feedback}
            </p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
