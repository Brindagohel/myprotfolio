import React from 'react'
import { GraduationCap, BookOpen } from 'lucide-react'
import {
  BotanicalLeafBottomLeft,
  DotGrid,
  SparkleStar,
} from './Decorations'

export default function AboutSection({ anchorRef }) {
  const education = [
    {
      degree: 'B.E. in Information Technology',
      institution: 'Institute of Technology',
      university: 'Gujarat Technological University',
      result: '8.57 CGPA',
      status: 'Currently Pursuing',
    },
    {
      degree: 'Diploma in Information Technology',
      institution: 'Sir Bhavsinhji Polytechnic Institute',
      university: 'Gujarat Technological University',
      result: '8.82 CGPA',
      status: 'Completed · 2024',
    },
    {
      degree: '10th Standard',
      institution: 'B. N. Virani School',
      university: 'Gujarat Secondary and Higher Secondary Education Board (GSEB)',
      result: '78.00%',
      status: 'Completed · 2021',
    },
  ]

  const interests = [
    {
      title: 'Full-Stack Development',
      desc: 'Building modern web applications using React, Node.js, Express.js, and MongoDB.',
    },
    {
      title: 'AI & Emerging Technologies',
      desc: 'Exploring Generative AI, Agentic AI, and fundamental AI/ML concepts.',
    },
    {
      title: 'Mobile App Development',
      desc: 'Developing Android applications using Java, Firebase, and TensorFlow Lite basics.',
    },
    {
      title: 'Problem Solving',
      desc: 'Learning new technologies and applying technical skills to practical projects.',
    },
  ]

  return (
    <section id="about" className="about-section">
      <div className="container about-container">
        {/* Left Column: Portrait in Circular Decorative Frame */}
        <div className="about-portrait-column">
          <div className="about-badge-stage">
            <div className="about-dot-grid-wrap">
              <DotGrid
                rows={6}
                cols={4}
                dotSize={5}
                gap={14}
                color="#D4A2A9"
              />
            </div>

            <div className="about-botanical-wrap">
              <BotanicalLeafBottomLeft size={160} color="#A85A64" />
            </div>

            <div className="about-sparkle sparkle-tr">
              <SparkleStar size={20} color="#B8727C" />
            </div>

            <div className="about-outer-ring">
              <div className="about-orbital-dot"></div>
            </div>

            <div className="about-circle-canvas"></div>

            {/* Keep this anchor for the existing shared portrait animation */}
            <div
              ref={anchorRef}
              className="portrait-slot portrait-slot-about"
            ></div>
          </div>
        </div>

        {/* Right Column: Introduction, Education, and Interests */}
        <div className="about-content-column">
          <div className="script-subtitle-wrap">
            <span className="script-font">About Me</span>
          </div>

          <h2 className="about-main-title">
            Academic Background &amp; <br />
            <span className="serif-italic-accent">
              Creative Exploration
            </span>
          </h2>

          <p className="about-bio">
            Hello! I am Brinda Gohel, an Information Technology student
            currently pursuing a Bachelor of Engineering degree. I am
            passionate about MERN stack and full-stack web development,
            with an additional interest in AI-based applications. Through
            individual and team projects, I continue to develop my
            technical skills and build practical software solutions.
          </p>

          {/* Academic Qualifications */}
          <div className="education-card">
            <div className="education-header">
              <div className="education-icon-box">
                <GraduationCap size={22} color="#9C4F5B" />
              </div>

              <div>
                <h3 className="education-degree">
                  Education &amp; Qualifications
                </h3>
                <span className="education-school">
                  My Academic Journey
                </span>
              </div>
            </div>

            <div className="coursework-section">
              <div className="coursework-title">
                <BookOpen size={15} color="#9C4F5B" />
                <span>Academic Background</span>
              </div>

              <div className="education-list">
                {education.map((item) => (
                  <div
                    key={item.degree}
                    className="education-entry"
                  >
                    <h4 className="education-entry-degree">
                      {item.degree}
                    </h4>

                    <p className="education-entry-institution">
                      {item.institution}
                    </p>

                    <p className="education-entry-university">
                      {item.university}
                    </p>

                    <div className="education-entry-meta">
                      <span className="education-result">
                        {item.result}
                      </span>
                      <span className="education-status">
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Technical Interests */}
          <div className="interests-grid">
            {interests.map((item) => (
              <div key={item.title} className="interest-item">
                <h4 className="interest-title">{item.title}</h4>
                <p className="interest-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
