import React from "react"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"

export default function ParticlesBackground() {
  const particlesInit = async (engine) => {
    await loadFull(engine)
  }

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
      options={{
        background: { color: "#000000" },
        fpsLimit: 60,
        particles: {
          number: { value: 60, density: { enable: true, area: 800 } },
          color: { value: "#1E90FF" },
          links: {
            enable: true,
            color: "#1E90FF",
            distance: 120,
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.8,
            direction: "none",
            outModes: { default: "bounce" },
          },
          opacity: {
            value: 0.6,
            anim: { enable: true, speed: 1, opacity_min: 0.3 },
          },
          size: {
            value: 2,
            random: true,
            anim: { enable: true, speed: 2, size_min: 0.5 },
          },
          shape: { type: "circle" },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { quantity: 4 },
          },
        },
        detectRetina: true,
      }}
    />
  )
}
