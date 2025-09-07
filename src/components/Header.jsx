

import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const NavItem = ({ to, children, onClick }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `block px-3 py-2 rounded-md text-sm uppercase tracking-wider transition-colors ${
        isActive ? 'text-accent' : 'text-white/80 hover:text-white'
      }`
    }
    onClick={onClick}
  >
    {children}
  </NavLink>
)

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3" onClick={closeMenu}>


          <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="6" fill="#1E90FF" />
            <path d="M6 8h12v1H6zM6 11h12v1H6zM6 14h8v1H6z" fill="#000" />
          </svg>




          <span className="font-semibold tracking-wider">EESA Club</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-4">
          <NavItem to="/page1">Our Events</NavItem>
          <NavItem to="/page2">Upcoming Events</NavItem>
          <NavItem to="/page3">About EESA</NavItem>
          <NavItem to="/page4">Chief Board</NavItem>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white/80 hover:text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <motion.div
            animate={menuOpen ? { rotate: 45 } : { rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            {menuOpen ? (
              <span className="text-2xl">✕</span>
            ) : (
              <span className="text-2xl">☰</span>
            )}
          </motion.div>
        </button>
      </div>

      {/* Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black md:hidden"
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="md:hidden absolute top-16 left-0 right-0 bg-black/95 border-t border-white/10 px-6 py-6 space-y-4"
          >
            <NavItem to="/page1" onClick={closeMenu}>Our Events</NavItem>
            <NavItem to="/page2" onClick={closeMenu}>Upcoming Events</NavItem>
            <NavItem to="/page3" onClick={closeMenu}>About EESA</NavItem>
            <NavItem to="/page4" onClick={closeMenu}>Chief Board</NavItem>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
