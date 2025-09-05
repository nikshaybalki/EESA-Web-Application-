import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-12">
      <div className="max-w-6xl mx-auto px-6 py-8 text-center text-sm text-white/70">
        © {new Date().getFullYear()} Collage Club — Minimal · Futuristic · Motion
      </div>
    </footer>
  )
}
