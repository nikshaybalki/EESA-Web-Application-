// src/components/ChiefBoard.jsx
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

/**
 * ChiefBoard - smooth circular auto-scroller (RAF-based)
 * - Uses duplicated items for seamless looping
 * - Auto-scrolls by pixel delta (time-based)
 * - Arrow buttons scroll by one card and pause auto-scroll briefly
 * - Pauses on user interaction (pointerdown / wheel / touch)
 */

const PEOPLE = [
  { name: "Vishwadeep Telgote", role: "President", img: assets.vishwadeep },
  { name: "Darshan Nandurge", role: "Vice President",  img: assets.darshan },
  { name: "Shruti Hore", role: "Secretary", img: assets.shruti },
  { name: "Akash Andhare", role: "Program Director in Event",img: assets.akash },
  { name: "Omprasad Tandale", role: "Club Service Director", img: assets.omprasad},
  
];

export default function ChiefBoard() {
  const trackRef = useRef(null);
  const pausedRef = useRef(false);
  const pauseTimeoutRef = useRef(null);
  const rafRef = useRef(null);
  const halfRef = useRef(0);
  const lastRef = useRef(0);
  const speedRef = useRef(0.06); // pixels per millisecond (tweak for faster/slower)

  // Pause helper
  const pauseFor = (ms = 1400) => {
    pausedRef.current = true;
    clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = setTimeout(() => {
      pausedRef.current = false;
    }, ms);
  };

  // Compute half (width of one set). Also keep track.scrollLeft in-range when resize occurs
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // ensure browser doesn't smooth-scroll while RAF drives scrollLeft
    track.style.scrollBehavior = "auto";

    const updateHalf = () => {
      // total width of items (two sets) / 2 = single set width
      halfRef.current = track.scrollWidth / 2 || 0;
      // keep scrollLeft in-range if it's > half after resize
      if (halfRef.current > 0) {
        track.scrollLeft = track.scrollLeft % halfRef.current;
      }
    };

    // initial compute after layout
    updateHalf();

    // Resize observer to recalc on layout changes (images loading, window resize)
    const ro = new ResizeObserver(updateHalf);
    ro.observe(track);

    return () => {
      ro.disconnect();
    };
  }, []);

  // RAF loop to advance scrollLeft and wrap seamlessly
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    lastRef.current = performance.now();

    const step = (now) => {
      const dt = Math.max(0, now - lastRef.current);
      lastRef.current = now;

      if (!pausedRef.current && halfRef.current > 0) {
        // advance proportional to time
        const delta = speedRef.current * dt;
        track.scrollLeft += delta;

        // wrap when we pass half (exact subtraction keeps visual continuity)
        if (track.scrollLeft >= halfRef.current) {
          track.scrollLeft -= halfRef.current;
        } else if (track.scrollLeft < 0) {
          // in case any negative drift occurs
          track.scrollLeft += halfRef.current;
        }
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      clearTimeout(pauseTimeoutRef.current);
    };
  }, []);

  // Pause on user interactions (pointer/touch/wheel)
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onUser = () => pauseFor(1400);
    track.addEventListener("pointerdown", onUser, { passive: true });
    track.addEventListener("touchstart", onUser, { passive: true });
    track.addEventListener("wheel", onUser, { passive: true });

    return () => {
      track.removeEventListener("pointerdown", onUser);
      track.removeEventListener("touchstart", onUser);
      track.removeEventListener("wheel", onUser);
    };
  }, []);

  // Scroll by one card (arrow)
  const scrollByCard = (dir = 1) => {
    const track = trackRef.current;
    if (!track) return;
    const first = track.querySelector(".board-card");
    if (!first) return;

    // compute card width including margin
    const style = getComputedStyle(first);
    const marginRight = parseFloat(style.marginRight || 0);
    const cardW = first.offsetWidth + marginRight;

    // pause auto-scroll during manual smooth scroll
    pauseFor(1400);
    track.scrollBy({ left: cardW * dir, behavior: "smooth" });
  };

  // Render duplicated items for seamless loop
  const items = PEOPLE.concat(PEOPLE);

  return (
    <section id="section-2" className="min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden relative">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
        CHIEF BOARD 2025
      </h2>

      <div className="relative w-full max-w-6xl">
        {/* Left arrow */}
        <button
          aria-label="Prev"
          onClick={() => scrollByCard(-1)}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-[0_0_16px_rgba(30,144,255,0.12)] text-white"
        >
          ◀
        </button>

        {/* Right arrow */}
        <button
          aria-label="Next"
          onClick={() => scrollByCard(1)}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 shadow-[0_0_16px_rgba(30,144,255,0.12)] text-white"
        >
          ▶
        </button>

        {/* Track */}
        <div
          ref={trackRef}
          className="carousel flex items-center gap-6 py-6 overflow-x-auto scroll-smooth"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {items.map((p, i) => (
            <div
              key={i}
              className="board-card flex-shrink-0 min-w-[260px] bg-black rounded-xl border border-white/6 p-6 text-center shadow-lg"
              style={{ transition: "transform .25s ease" }}
              onMouseEnter={() => pauseFor(1000)}
            >
              <img
                src={p.img}
                alt={p.name}
                className="w-36 h-36 mx-auto rounded-full border-4 border-blue-500 shadow-[0_0_18px_rgba(30,144,255,0.12)] object-cover"
              />
              <p className="mt-4 text-sm text-white/70">{p.role}</p>
              <h3 className="mt-1 text-lg font-bold text-white">{p.name}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <Link
          to="/page4"
          className="px-8 py-3 rounded-lg text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 transition-all duration-300 shadow-lg"
        >
          View Full Board →
        </Link>
      </div>
    </section>
  );
}
