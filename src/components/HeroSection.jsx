import React from 'react'
import { ArrowRight, GraduationCap } from 'lucide-react'
import { BotanicalLeafTopRight, BotanicalLeafBottomLeft, SparkleStar } from './Decorations'

export default function HeroSection({ anchorRef, onNavigate }) {
  return (
    <section id="home" className="hero-section">
      {/* Background with blush pink waves and botanicals inspired by reference */}
      <div className="hero-background-canvas">
        {/* Soft Organic Pink Curves */}
        <div className="hero-wave-curve wave-curve-1"></div>
        <div className="hero-wave-curve wave-curve-2"></div>

        {/* Botanical Line Art Corners */}
        <div className="hero-botanical-corner corner-tr">
          <BotanicalLeafTopRight size={160} color="#9C4F5B" />
        </div>
        <div className="hero-botanical-corner corner-bl">
          <BotanicalLeafBottomLeft size={180} color="#9C4F5B" />
        </div>

        {/* Subtle Sparkle Stars */}
        <div className="hero-sparkle-item sparkle-1">
          <SparkleStar size={22} color="#B8727C" />
        </div>
        <div className="hero-sparkle-item sparkle-2">
          <SparkleStar size={16} color="#C4848E" />
        </div>
      </div>

      <div className="container hero-container">
        {/* Left Column: The Prominent PORTFOLIO Title & Student Profile */}
        <div className="hero-left-col">
          <div className="badge-chip">
            <GraduationCap size={15} />
            <span>Hi, I'm Brinda Gohel</span>
             <span>Information Technology Student</span>
          </div>

          {/* Fully visible, elegant serif PORTFOLIO heading */}
          <h1 className="hero-portfolio-heading">
            PORTFOLIO
          </h1>

          <p className="hero-student-subheading">
   MERN Stack Developer · Full-Stack Web Development · AI Enthusiast
          </p>

          <p className="hero-bio-summary">
           I'm an Information Technology student passionate about
            building modern web applications and exploring AI-powered solutions. I have independently developed a complete MERN stack e-commerce platform and contributed to an AI-based Android application as part of a team.
          </p>

          {/* Action Navigation Buttons */}
          <div className="hero-cta-group">
            <a
              href="#about"
              className="btn-pill"
              onClick={(e) => {
                e.preventDefault()
                onNavigate('about')
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <span>About My Studies</span>
              <ArrowRight size={16} />
            </a>
            <a
              href="#projects"
              className="btn-outline"
              onClick={(e) => {
                e.preventDefault()
                onNavigate('projects')
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <span>View Projects</span>
            </a>
          </div>

          {/* Student Status Quick Tags */}
          <div className="hero-status-strip">
            <div className="status-pill">
              <span className="status-dot"></span>
              <span>B.E. Information Technology</span>
            </div>
            <div className="status-pill">
              <span className="status-dot"></span>
              <span>Open for work</span>
            </div>
          </div>
        </div>

        {/* Right Column: Balanced Portrait Stage */}
        <div className="hero-right-col">
          <div className="hero-portrait-frame-pedestal">
            {/* Soft Organic Circular Backdrop */}
            <div className="hero-portrait-circle-bg"></div>
            <div className="hero-portrait-ring">
              <div className="hero-ring-dot"></div>
            </div>

            {/* Dedicated Anchor Slot measured by SharedPortrait */}
            <div ref={anchorRef} className="portrait-slot portrait-slot-home"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
