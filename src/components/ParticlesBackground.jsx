// import React from "react"
// import Particles from "react-tsparticles"
// import { loadFull } from "tsparticles"

// export default function ParticlesBackground() {
//   const particlesInit = async (engine) => {
//     await loadFull(engine)
//   }

//   return (
//     <Particles
//       id="tsparticles"
//       init={particlesInit}
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100%",
//         zIndex: -1,
//       }}
//       options={{
//         background: { color: "#000000" },
//         fpsLimit: 60,
//         particles: {
//           number: { value: 60, density: { enable: true, area: 800 } },
//           color: { value: "#1E90FF" },
//           links: {
//             enable: true,
//             color: "#1E90FF",
//             distance: 120,
//             opacity: 0.4,
//             width: 1,
//           },
//           move: {
//             enable: true,
//             speed: 0.8,
//             direction: "none",
//             outModes: { default: "bounce" },
//           },
//           opacity: {
//             value: 0.6,
//             anim: { enable: true, speed: 1, opacity_min: 0.3 },
//           },
//           size: {
//             value: 2,
//             random: true,
//             anim: { enable: true, speed: 2, size_min: 0.5 },
//           },
//           shape: { type: "circle" },
//         },
//         interactivity: {
//           events: {
//             onHover: { enable: true, mode: "repulse" },
//             onClick: { enable: true, mode: "push" },
//           },
//           modes: {
//             repulse: { distance: 100, duration: 0.4 },
//             push: { quantity: 4 },
//           },
//         },
//         detectRetina: true,
//       }}
//     />
//   )
// }


// import React from "react"
// import Particles from "react-tsparticles"
// import { loadFull } from "tsparticles"

// export default function ParticlesBackground() {
//   const particlesInit = async (engine) => {
//     await loadFull(engine)
//   }

//   return (
//     <Particles
//       id="tsparticles"
//       init={particlesInit}
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100%",
//         zIndex: -1,
//       }}
//       options={{
//         background: {
//           color: "#000000",
//         },
//         fpsLimit: 60,
//         particles: {
//           number: { value: 70, density: { enable: true, area: 900 } },
//           color: { value: ["#1E90FF", "#FF00FF", "#00FFFF"] }, // blue, magenta, cyan
//           links: {
//             enable: true,
//             color: "#1E90FF",
//             distance: 140,
//             opacity: 0.3,
//             width: 1.2,
//           },
//           move: {
//             enable: true,
//             speed: 1.2,
//             direction: "none",
//             outModes: { default: "bounce" },
//             trail: {
//               enable: true,
//               length: 5,
//               fillColor: "#000000",
//             },
//           },
//           opacity: {
//             value: 0.7,
//             anim: { enable: true, speed: 1, opacity_min: 0.3 },
//           },
//           size: {
//             value: 3,
//             random: true,
//             anim: { enable: true, speed: 2, size_min: 0.8 },
//           },
//           shape: { type: "circle" },
//           glow: {
//             enable: true, // custom glow effect
//             color: "#1E90FF",
//             blur: 10,
//           },
//         },
//         interactivity: {
//           events: {
//             onHover: { enable: true, mode: "repulse" },
//             onClick: { enable: true, mode: "push" },
//           },
//           modes: {
//             repulse: { distance: 120, duration: 0.6 },
//             push: { quantity: 5 },
//           },
//         },
//         detectRetina: true,
//       }}
//     />
//   )
// }
