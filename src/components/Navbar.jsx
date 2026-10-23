import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar({ activeSection = 'home', onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ]

  const handleLinkClick = (e, id) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    if (onNavigate) {
      onNavigate(id)
    }
    const target = document.getElementById(id)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Student Brand Monogram */}
        <a href="#home" className="brand-logo" onClick={(e) => handleLinkClick(e, 'home')}>
          <div className="logo-badge logo-photo">
          <img src="/assets/logo.png" alt="Brinda Gohel" className="logo" />
          </div>
          <div className="brand-text">
            <span className="brand-sub">STUDENT PORTFOLIO</span>
            <span className="brand-name">Brinda Gohel</span>
</div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
              onClick={(e) => handleLinkClick(e, link.id)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="navbar-actions">
          <a
            href="#contact"
            className="btn-pill nav-contact-btn"
            onClick={(e) => handleLinkClick(e, 'contact')}
          >
            <span>Get in Touch</span>
          </a>

          {/* Mobile hamburger button */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer">
          <div className="mobile-links">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
                onClick={(e) => handleLinkClick(e, link.id)}
              >
                {link.label}
              </a>
            ))}
            <div className="mobile-actions">
              <a
                href="#contact"
                className="btn-pill full-width"
                onClick={(e) => handleLinkClick(e, 'contact')}
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
