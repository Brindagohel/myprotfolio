import React, { useState, useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import SharedPortrait from './components/SharedPortrait'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

// Stylesheets
import './components/Navbar.css'
import './components/SharedPortrait.css'
import './components/HeroSection.css'
import './components/AboutSection.css'
import './components/SkillsSection.css'
import './components/ProjectsSection.css'
import './components/ContactSection.css'
import './components/Footer.css'
import './components/ScrollToTop.css'

export default function App() {
  const [activeSection, setActiveSection] = useState('home')

  // Dedicated anchor refs for the 5 student portfolio sections
  const anchorRefs = {
    home: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  }

  const isNavigatingRef = useRef(false)
  const navTimeoutRef = useRef(null)

  // Handle explicit navigation clicks (Navbar, buttons, links)
  const handleNavigate = (sectionId) => {
    isNavigatingRef.current = true
    setActiveSection(sectionId)
    if (navTimeoutRef.current) clearTimeout(navTimeoutRef.current)
    navTimeoutRef.current = setTimeout(() => {
      isNavigatingRef.current = false
    }, 850)
  }

  // Synchronize active section with viewport scroll position
  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'projects', 'contact']

    const observer = new IntersectionObserver(
      (entries) => {
        if (isNavigatingRef.current) return
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.35) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        root: null,
        threshold: [0.35, 0.6],
        rootMargin: '-10% 0px -20% 0px',
      }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="portfolio-app-root">
      {/* The Single Shared Portrait Element that animates across all sections */}
      <SharedPortrait activeSection={activeSection} anchorRefs={anchorRefs} />

      {/* Navigation Bar */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* 5 Student Portfolio Sections in exact required order */}
      <main className="portfolio-main-content">
        <HeroSection
          anchorRef={anchorRefs.home}
          onNavigate={handleNavigate}
        />
        <AboutSection anchorRef={anchorRefs.about} />
        <SkillsSection anchorRef={anchorRefs.skills} />
        <ProjectsSection anchorRef={anchorRefs.projects} />
        <ContactSection anchorRef={anchorRefs.contact} />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating Scroll to Top button matching reference */}
      <ScrollToTop />
    </div>
  )
}
