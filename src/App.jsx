import React from 'react'

import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import Page4 from './pages/Page4'

import ParticlesBackground from './components/ParticlesBackground'


export default function App() {
  return (
    <div className="relative min-h-screen bg-black text-white">
  <ParticlesBackground />   {/* ✅ must be here */}
  <Header />
  <main className="relative z-10">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/page1" element={<Page1 />} />
      <Route path="/page2" element={<Page2 />} />
      <Route path="/page3" element={<Page3 />} />
      <Route path="/page4" element={<Page4 />} />
    </Routes>
  </main>
  <Footer />
</div>

  )
}





