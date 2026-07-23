import React, { useEffect } from 'react'
import Hero from './components/Hero'
import Products from './components/Products'
import Traction from './components/Traction'
import About from './components/About'
import Footer from './components/Footer'
import { initGA, usePageTracking } from './utils/analytics'
import './index.css'

function App() {
  // Initialize Google Analytics on mount
  useEffect(() => {
    const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID
    if (measurementId) {
      initGA(measurementId)
    }
  }, [])

  // Track page views
  usePageTracking()

  return (
    <div className="min-h-screen bg-nimph-dark">
      <Hero />
      <Products />
      <Traction />
      <About />
      <Footer />
    </div>
  )
}

export default App
