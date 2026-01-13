import React from 'react'

import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import Page4 from './pages/Page4'
import Recruitment from './pages/Recruitment' // Import the new page

// import ParticlesBackground from './components/ParticlesBackground'   ---->>>>>>>change here


// export default function App() {
//   return (
//     <div className="relative min-h-screen bg-black text-white">
//   <ParticlesBackground />   {/* ✅ must be here */}
//   <Header />
//   {/* <main className="relative z-10"> */}
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/page1" element={<Page1 />} />
//       <Route path="/page2" element={<Page2 />} />
//       <Route path="/page3" element={<Page3 />} />
//       <Route path="/page4" element={<Page4 />} />
//     </Routes>
//   </main>
//   <Footer />
// </div>

//   )
// }


export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">









      {/* Background */}
      {/* <div className="absolute inset-0 -z-10">                   ---->>>>>>>change here
        <ParticlesBackground />                       ---->>>>>>>change here
       </div> */}     
                            {/* ---->>>>>>>change here */}










      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow z-10 relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
          {/* Add the new route here */}
          <Route path="/recruitment" element={<Recruitment />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}





