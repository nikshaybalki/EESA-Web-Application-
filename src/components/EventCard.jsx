








// // src/components/EventCard.jsx
// import React from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function EventCard({
//   title,
//   shortDesc,
//   extraInfo,
//   img,
//   posterImg,
//   registerLink,
//   showDetails,
//   onToggleDetails,
//   onOpenPoster,
// }) {
//   return (
//     <motion.div
//       layout
//       transition={{ duration: 0.5, ease: "easeInOut" }}
//       className="bg-black border border-blue-500/40 rounded-xl shadow-lg overflow-hidden hover:shadow-[0_0_25px_rgba(30,144,255,0.5)] transition-all duration-300"
//     >
//       {/* Top section */}
//       <div className="flex flex-col md:flex-row items-center md:items-start">
//         {/* Left - Image */}
//         <div className="w-full md:w-1/3">
//           <img
//             src={img}
//             alt={title}
//             className="w-full h-48 md:h-full object-cover rounded-t-lg md:rounded-l-lg"
//           />
//         </div>

//         {/* Right - Info */}
//         <div className="flex-1 p-6 space-y-4">
//           <h2 className="text-2xl font-bold text-blue-400">{title}</h2>
//           <p className="text-white/70">{shortDesc}</p>

//           {/* Buttons */}
//           <div className="flex flex-wrap gap-3 mt-4">
//             <a
//               href={registerLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-blue-500 transition transform hover:scale-105"
//             >
//               Register
//             </a>
//             <button
//               onClick={() => onOpenPoster(posterImg)}
//               className="px-5 py-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg font-semibold hover:from-blue-500 hover:to-purple-600 transition transform hover:scale-105"
//             >
//               Poster
//             </button>
//             <button
//               onClick={onToggleDetails}
//               className="px-5 py-2 border border-blue-500 text-blue-400 rounded-lg font-semibold hover:bg-blue-500 hover:text-black transition transform hover:scale-105"
//             >
//               {showDetails ? "Hide Details" : "View More Detail"}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Expanded Section */}
//       <AnimatePresence>
//         {showDetails && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.4 }}
//             className="p-6 border-t border-blue-500/30 space-y-6"
//           >
//             {/* Long description */}
//             <p className="text-white/80 leading-relaxed text-justify">
//               {extraInfo || (
//                 <>
//                   <span className="text-blue-400 font-semibold">
//                     This event
//                   </span>{" "}
//                   provides students an opportunity to showcase their{" "}
//                   <span className="text-purple-400">knowledge</span>,{" "}
//                   <span className="text-purple-400">creativity</span>, and{" "}
//                   <span className="text-purple-400">problem-solving skills</span>{" "}
//                   through competitions and real-world challenges. Participants
//                   will engage in multiple rounds designed to test{" "}
//                   <span className="text-purple-400">technical expertise</span>,{" "}
//                   <span className="text-purple-400">teamwork</span>, and{" "}
//                   <span className="text-purple-400">innovation</span> while
//                   receiving guidance from mentors and industry experts.
//                 </>
//               )}
//             </p>

//             {/* Sub-cards */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 className="p-4 bg-black border border-blue-500/50 rounded-lg shadow-md text-center hover:shadow-[0_0_15px_rgba(30,144,255,0.7)]"
//               >
//                 <img
//                   src="https://picsum.photos/300/200?random=41"
//                   alt="Sub-event"
//                   className="w-full h-40 object-cover rounded-md mb-3"
//                 />
//                 <h3 className="text-blue-400 font-semibold">Aspire</h3>
//                 <p className="text-white/70 text-sm">
//                   Mock placement drives with real interview experience.
//                 </p>
//               </motion.div>

//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 className="p-4 bg-black border border-blue-500/50 rounded-lg shadow-md text-center hover:shadow-[0_0_15px_rgba(138,43,226,0.7)]"
//               >
//                 <img
//                   src="https://picsum.photos/300/200?random=42"
//                   alt="Sub-event"
//                   className="w-full h-40 object-cover rounded-md mb-3"
//                 />
//                 <h3 className="text-purple-400 font-semibold">Nitigya</h3>
//                 <p className="text-white/70 text-sm">
//                   Geopolitical challenge with debates & strategy rounds.
//                 </p>
//               </motion.div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   );
// }




// src/components/EventCard.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * EventCard
 * Props:
 *  - title, shortDesc, extraInfo, img, posterImg, registerLink
 *  - showDetails (bool), onToggleDetails(), onOpenPoster(posterUrl)
 *
 * Behavior:
 *  - compact card (md height ~300px), expand shows long text + 2 sub-cards
 *  - themed to blue/purple neon look
 */

export default function EventCard({
  title = "Event Title",
  shortDesc = "Short description up to 2-3 lines.",
  extraInfo = null,
  img = "https://picsum.photos/800/600?random=1",
  posterImg = null,
  registerLink = "#",
  showDetails = false,
  onToggleDetails = () => {},
  onOpenPoster = () => {},
}) {
  return (
    <motion.article
      layout
      transition={{ duration: 0.45, ease: "easeInOut" }}
      className="w-full"
      aria-live="polite"
    >
      <motion.div
        layout
        className="bg-black border border-blue-500/20 rounded-2xl overflow-hidden shadow-[0_6px_30px_rgba(0,0,0,0.6)]"
        whileHover={{ translateY: -4, boxShadow: "0 18px 50px rgba(30,144,255,0.06)" }}
      >
        {/* Top row: image + summary */}
        <div className="flex flex-col md:flex-row">
          {/* Image: full height on md, top on mobile */}
          <div className="w-full md:w-1/3 flex-shrink-0 bg-black">
            <img
              src={img}
              alt={title}
              className="w-full h-48 md:h-[300px] object-cover block"
            />
          </div>

          {/* Text & actions */}
          <div className="flex-1 p-5 md:p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-blue-300 mb-2">
                {title}
              </h3>

              <p className="text-white/75 text-sm md:text-base leading-relaxed mb-3">
                {shortDesc}
              </p>

              {/* small accent / meta line */}
              <div className="flex items-center gap-3 mt-2">
                <div className="w-12 h-[2px] bg-gradient-to-r from-blue-400 to-purple-500 rounded" />
                <span className="text-xs text-white/50">EESA Events</span>
              </div>
            </div>

            {/* Action buttons (bottom-right area) */}
            <div className="mt-4 flex flex-wrap gap-3 items-center">
              <a
                href={registerLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md
                           hover:scale-[1.03] transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-label={`Register for ${title}`}
              >
                Register
              </a>

              <button
                type="button"
                onClick={() => onOpenPoster(posterImg)}
                className="px-4 py-2 rounded-lg text-sm font-semibold border border-blue-600 text-white bg-black/30 hover:bg-blue-700/10 transition"
                aria-label={`Open poster for ${title}`}
              >
                Poster
              </button>

              <button
                type="button"
                onClick={onToggleDetails}
                className="ml-auto md:ml-0 px-4 py-2 rounded-lg text-sm font-semibold border border-blue-500 text-blue-300 hover:bg-blue-500/10 hover:text-white transition"
                aria-expanded={showDetails}
                aria-controls={`details-${title.replace(/\s+/g, "-").toLowerCase()}`}
              >
                {showDetails ? "Hide Details" : "View More Detail"}
              </button>
            </div>
          </div>
        </div>

        {/* Expandable details block */}
        <AnimatePresence initial={false}>
          {showDetails && (
            <motion.div
              id={`details-${title.replace(/\s+/g, "-").toLowerCase()}`}
              layout
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="p-6 border-t border-blue-500/20 bg-[#050508]"
            >
              {/* Long description (8-10 lines) */}
              <div className="max-w-4xl mx-auto text-justify text-white/80 leading-relaxed space-y-4">
                <p className="text-base md:text-lg">
                  {extraInfo ? (
                    extraInfo
                  ) : (
                    <>
                      <span className="text-blue-300 font-semibold">Overview: </span>
                      This event provides students a platform to present their technical ideas
                      and soft skills through a sequence of challenges and interactive
                      sessions. Participants gain hands-on experience in designing,
                      prototyping, and presenting solutions relevant to current industry
                      trends. Collaboration with mentors and industry professionals ensures
                      meaningful feedback and real-world direction.
                    </>
                  )}
                </p>

                <p className="text-sm text-white/70">
                  The format includes multiple rounds — idea submission, prototype demo,
                  technical interviews, and final presentations. Teams are judged on
                  innovation, feasibility, technical depth, and presentation quality. The
                  event also hosts workshops and panel discussions for wider learning.
                </p>

                <p className="text-sm text-white/70">
                  Winners receive certificates, mentorship opportunities, and prizes to
                  further their projects. All attendees are encouraged to network, learn,
                  and collaborate to build impactful solutions.
                </p>
              </div>

              {/* Two sub-cards row */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {/* sub-card 1 */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="bg-black border border-blue-500/25 rounded-lg overflow-hidden shadow-sm hover:shadow-[0_8px_30px_rgba(30,144,255,0.08)]"
                >
                  <img
                    src="https://picsum.photos/600/360?random=51"
                    alt="sub-1"
                    className="w-full h-36 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="text-lg font-semibold text-blue-300">Technocrat</h4>
                    <p className="text-white/70 text-sm mt-1">
                      Mock placement drive simulating real campus interviews with expert panels.
                    </p>
                  </div>
                </motion.div>

                {/* sub-card 2 */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="bg-black border border-purple-500/20 rounded-lg overflow-hidden shadow-sm hover:shadow-[0_8px_30px_rgba(138,43,226,0.08)]"
                >
                  <img
                    src="https://picsum.photos/600/360?random=52"
                    alt="sub-2"
                    className="w-full h-36 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="text-lg font-semibold text-purple-300">Vision</h4>
                    <p className="text-white/70 text-sm mt-1">
                      High-stakes geopolitical & strategy challenge with debate-style rounds.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.article>
  );
}
