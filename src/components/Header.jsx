import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `px-3 py-2 rounded-md text-sm uppercase tracking-wider transition-colors ${
        isActive ? 'text-accent' : 'text-white/80 hover:text-white'
      }`
    }
  >
    <motion.span whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>
      {children}
    </motion.span>
  </NavLink>
)

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          {/* Inline simple SVG logo */}
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden>
            <rect width="24" height="24" rx="6" fill="#1E90FF" />
            <path d="M6 8h12v1H6zM6 11h12v1H6zM6 14h8v1H6z" fill="#000"/>
          </svg>
          <span className="font-semibold tracking-wider">Collage Club</span>
        </Link>

        <nav className="flex items-center gap-4">
          <NavItem to="/page1">&lt;page1&gt;</NavItem>
          <NavItem to="/page2">&lt;page2&gt;</NavItem>
          <NavItem to="/page3">&lt;page3&gt;</NavItem>
          <NavItem to="/page4">&lt;page4&gt;</NavItem>
        </nav>
      </div>
    </header>
  )
}
