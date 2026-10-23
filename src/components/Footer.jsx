import React from 'react'

export default function Footer({ onNavigate }) {
  const handleNavClick = (e, id) => {
    e.preventDefault()
    if (onNavigate) onNavigate(id)
    const target = document.getElementById(id)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer-wrap">
      <div className="container footer-container">
        <div className="footer-top-row">
          {/* Brand */}
          <div className="footer-brand">
            <div className="logo-badge">
              <span className="logo-bars"></span>
              <span className="logo-letter">IP</span>
            </div>
            <div>
              <span className="brand-sub">STUDENT PORTFOLIO</span>
              <h3 className="brand-name">Portfolio</h3>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-nav">
            <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home</a>
            <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a>
            <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')}>Skills</a>
            <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
          </div>

          {/* External Links */}
          <div className="footer-socials">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="social-pill">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-pill">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="footer-bottom-row">
          <p className="copyright-text">
            &copy; 2024 Student Portfolio. Built with React &amp; custom shared-element animations.
          </p>
          <div className="craft-note">
            Designed with blush-pink aesthetic &amp; responsive typography
          </div>
        </div>
      </div>
    </footer>
  )
}
