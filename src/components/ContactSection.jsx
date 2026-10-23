import React, { useState } from 'react'
import { Mail, MapPin, Send } from 'lucide-react'
import {
  BotanicalLeafBottomLeft,
  DotGrid,
  SparkleStar,
  GithubIcon,
  LinkedinIcon,
} from './Decorations'

export default function ContactSection({ anchorRef }) {
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  // Contact information from your resume
  const emailTo = 'brindagohel92@gmail.com'
  const location = 'Bhavnagar, Gujarat, India'

  // Add your actual profile URLs when available.
  const githubUrl = ''
  const linkedinUrl = 'https://www.linkedin.com/'

  const handleMailto = (e) => {
    e.preventDefault()

    const mailtoUrl = `mailto:${emailTo}?subject=${encodeURIComponent(
      subject.trim() || 'Portfolio Inquiry'
    )}&body=${encodeURIComponent(message)}`

    window.location.href = mailtoUrl
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container contact-container">
        {/* Left Column: Portrait in Floral Frame */}
        <div className="contact-portrait-column">
          <div className="contact-badge-stage">
            <div className="contact-botanical-wrap">
              <BotanicalLeafBottomLeft
                size={160}
                color="#A85A64"
              />
            </div>

            <div className="contact-dot-grid-wrap">
              <DotGrid
                rows={6}
                cols={4}
                dotSize={5}
                gap={14}
                color="#D4A2A9"
              />
            </div>

            <div className="contact-sparkle">
              <SparkleStar size={20} color="#B8727C" />
            </div>

            <div className="contact-outer-ring">
              <div className="contact-orbital-dot"></div>
            </div>

            <div className="contact-circle-canvas"></div>

            {/* Preserve the shared portrait animation anchor */}
            <div
              ref={anchorRef}
              className="portrait-slot portrait-slot-contact"
            ></div>
          </div>
        </div>

        {/* Right Column: Contact Information */}
        <div className="contact-content-column">
          <div className="script-subtitle-wrap">
            <span className="script-font">Get in Touch</span>
          </div>

          <h2 className="contact-main-title">
            Open for Internships, <br />
            <span className="serif-italic-accent">
              Research &amp; Collaboration
            </span>
          </h2>

          <p className="contact-lead">
            I am an Information Technology student interested in
            full-stack development, MERN stack technologies, and
            AI-based applications. Feel free to reach out to discuss
            my projects, internship opportunities, or collaborations.
          </p>

          {/* Contact Information Cards */}
          <div className="student-contact-cards">
            <a
              href={`mailto:${emailTo}`}
              className="contact-link-card"
            >
              <div className="contact-card-icon">
                <Mail size={20} color="#9C4F5B" />
              </div>

              <div>
                <span className="card-sub">Email Address</span>
                <span className="card-val">{emailTo}</span>
              </div>
            </a>

            <a
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="contact-link-card"
            >
              <div className="contact-card-icon">
                <LinkedinIcon size={20} color="#9C4F5B" />
              </div>

              <div>
                <span className="card-sub">LinkedIn Profile</span>
                <span className="card-val">
                  Visit LinkedIn
                </span>
              </div>
            </a>

            {githubUrl ? (
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="contact-link-card"
              >
                <div className="contact-card-icon">
                  <GithubIcon size={20} color="#9C4F5B" />
                </div>

                <div>
                  <span className="card-sub">GitHub Profile</span>
                  <span className="card-val">
                    View GitHub
                  </span>
                </div>
              </a>
            ) : (
              <div className="contact-link-card no-hover">
                <div className="contact-card-icon">
                  <GithubIcon size={20} color="#9C4F5B" />
                </div>

                <div>
                  <span className="card-sub">GitHub Profile</span>
                  <span className="card-val">
                    Profile link to be added
                  </span>
                </div>
              </div>
            )}

            <div className="contact-link-card no-hover">
              <div className="contact-card-icon">
                <MapPin size={20} color="#9C4F5B" />
              </div>

              <div>
                <span className="card-sub">Location</span>
                <span className="card-val">{location}</span>
              </div>
            </div>
          </div>

          {/* Email Launcher Form */}
          <form
            onSubmit={handleMailto}
            className="direct-mailto-form"
          >
            <h4 className="quick-msg-title">
              Send a Quick Email
            </h4>

            <div className="quick-form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject (e.g. Internship Opportunity)"
                aria-label="Email subject"
                className="quick-input"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>

            <div className="quick-form-group">
              <textarea
                name="message"
                rows={3}
                placeholder="Write your message here..."
                aria-label="Email message"
                className="quick-input quick-textarea"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <button type="submit" className="btn-pill">
              <span>Open in Email App</span>
              <Send size={15} />
            </button>

            <span className="mailto-note">
              This opens your default email application with your
              message addressed to {emailTo}.
            </span>
          </form>
        </div>
      </div>
    </section>
  )
}