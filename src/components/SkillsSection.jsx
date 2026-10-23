import React, { useState } from 'react'
import { Code2, Terminal, Wrench, Cpu } from 'lucide-react'
import {
  BotanicalLeafTopRight,
  DotGrid,
  SparkleStar,
} from './Decorations'

export default function SkillsSection({ anchorRef }) {
  const [activeCategory, setActiveCategory] = useState('languages')

  const studentSkills = {
    languages: {
      category: 'Programming Languages',
      desc: 'Programming languages used in academic learning and hands-on development projects.',
      items: [
        {
          name: 'Java',
          level: 'Technical Skill',
          note: 'Programming and Android development',
        },
        {
          name: 'JavaScript',
          level: 'Technical Skill',
          note: 'Frontend and full-stack web development',
        },
        {
          name: 'Python',
          level: 'Basics',
          note: 'Fundamental programming concepts',
        },
        {
          name: 'HTML',
          level: 'Technical Skill',
          note: 'Web page structure and markup',
        },
        {
          name: 'CSS',
          level: 'Technical Skill',
          note: 'Styling and responsive interfaces',
        },
      ],
    },

    frameworks: {
      category: 'Frameworks & Libraries',
      desc: 'Frameworks and libraries from your web and Android development experience.',
      items: [
        {
          name: 'React',
          level: 'Technical Skill',
          note: 'Component-based frontend development',
        },
        {
          name: 'Redux Toolkit',
          level: 'Technical Skill',
          note: 'Frontend state management',
        },
        {
          name: 'Node.js',
          level: 'Technical Skill',
          note: 'JavaScript backend development',
        },
        {
          name: 'Express.js',
          level: 'Technical Skill',
          note: 'REST API backend development',
        },
        {
          name: 'Tailwind CSS',
          level: 'Technical Skill',
          note: 'Utility-first styling',
        },
        {
          name: 'Android (Java)',
          level: 'Technical Skill',
          note: 'Android UI and navigation',
        },
      ],
    },

    tools: {
      category: 'Tools & Technologies',
      desc: 'Tools and technologies used in your projects and development workflow.',
      items: [
        {
          name: 'Git',
          level: 'Technical Skill',
          note: 'Version control',
        },
        {
          name: 'GitHub',
          level: 'Technical Skill',
          note: 'Source code hosting and collaboration',
        },
        {
          name: 'Gradle',
          level: 'Technical Skill',
          note: 'Android project build tooling',
        },
        {
          name: 'Firebase',
          level: 'Project Experience',
          note: 'Authentication in the SAMUDRA Android app',
        },
        {
          name: 'Cloudinary',
          level: 'Project Experience',
          note: 'Image uploads in the Loomé e-commerce project',
        },
        {
          name: 'PayPal API',
          level: 'Project Experience',
          note: 'Payment integration in the Loomé project',
        },
      ],
    },

    fundamentals: {
      category: 'Databases, APIs & AI',
      desc: 'Database systems, API integration, and AI technologies listed in your resume.',
      items: [
        {
          name: 'MongoDB',
          level: 'Technical Skill',
          note: 'Database for MERN stack applications',
        },
        {
          name: 'MySQL',
          level: 'Technical Skill',
          note: 'Relational database technology',
        },
        {
          name: 'REST APIs',
          level: 'Technical Skill',
          note: 'Backend endpoints and API integration',
        },
        {
          name: 'JWT Authentication',
          level: 'Project Experience',
          note: 'Authentication in the Loomé backend',
        },
        {
          name: 'Generative AI',
          level: 'Area of Interest',
          note: 'Generative AI technologies',
        },
        {
          name: 'Agentic AI',
          level: 'Area of Interest',
          note: 'Agentic AI concepts',
        },
        {
          name: 'TensorFlow Lite',
          level: 'Basics',
          note: 'Model integration in the SAMUDRA app',
        },
        {
          name: 'AI/ML Concepts',
          level: 'Basics',
          note: 'Foundational AI and machine learning concepts',
        },
      ],
    },
  }

  const currentData = studentSkills[activeCategory]

  return (
    <section id="skills" className="skills-section">
      <div className="container skills-container">
        {/* Left Column: Skills Content */}
        <div className="skills-content-column">
          <div className="script-subtitle-wrap">
            <span className="script-font">Technical Abilities</span>
          </div>

          <h2 className="skills-main-title">
            Skills &amp; Technologies <br />
            <span className="serif-italic-accent">
              In My Toolbox
            </span>
          </h2>

          <p className="skills-description">
            My technical skills span frontend and backend web development,
            databases, Android application development, and emerging AI
            technologies. I continue to strengthen these skills through
            hands-on projects, internships, and academic learning.
          </p>

          {/* Category Tabs */}
          <div className="skills-category-tabs">
            <button
              type="button"
              className={`cat-pill ${
                activeCategory === 'languages' ? 'active' : ''
              }`}
              onClick={() => setActiveCategory('languages')}
              aria-pressed={activeCategory === 'languages'}
            >
              <Code2 size={15} />
              <span>Languages</span>
            </button>

            <button
              type="button"
              className={`cat-pill ${
                activeCategory === 'frameworks' ? 'active' : ''
              }`}
              onClick={() => setActiveCategory('frameworks')}
              aria-pressed={activeCategory === 'frameworks'}
            >
              <Terminal size={15} />
              <span>Frameworks</span>
            </button>

            <button
              type="button"
              className={`cat-pill ${
                activeCategory === 'tools' ? 'active' : ''
              }`}
              onClick={() => setActiveCategory('tools')}
              aria-pressed={activeCategory === 'tools'}
            >
              <Wrench size={15} />
              <span>Tools</span>
            </button>

            <button
              type="button"
              className={`cat-pill ${
                activeCategory === 'fundamentals' ? 'active' : ''
              }`}
              onClick={() => setActiveCategory('fundamentals')}
              aria-pressed={activeCategory === 'fundamentals'}
            >
              <Cpu size={15} />
              <span>Databases &amp; AI</span>
            </button>
          </div>

          {/* Skills Cards */}
          <div className="skills-bars-grid">
            {currentData.items.map((item) => (
              <div key={item.name} className="skill-card">
                <div className="skill-card-top">
                  <div>
                    <h4 className="skill-item-name">
                      {item.name}
                    </h4>
                    <span className="skill-item-note">
                      {item.note}
                    </span>
                  </div>

                  <span className="skill-level-badge">
                    {item.level}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="skills-placeholder-hint">
            <em>
              Skills are based on my resume and project experience.
              Proficiency levels are included only where specified.
            </em>
          </p>
        </div>

        {/* Right Column: Shared Portrait Slot */}
        <div className="skills-portrait-column">
          <div className="skills-badge-stage">
            <div className="skills-botanical-wrap">
              <BotanicalLeafTopRight
                size={150}
                color="#A85A64"
              />
            </div>

            <div className="skills-sparkle-tr">
              <SparkleStar size={20} color="#B8727C" />
            </div>

            <div className="skills-dot-grid-wrap">
              <DotGrid
                rows={6}
                cols={4}
                dotSize={5}
                gap={14}
                color="#D4A2A9"
              />
            </div>

            <div className="skills-outer-ring">
              <div className="skills-orbital-dot"></div>
            </div>

            <div className="skills-circle-canvas"></div>

            {/* Preserve the shared portrait animation anchor */}
            <div
              ref={anchorRef}
              className="portrait-slot portrait-slot-skills"
            ></div>
          </div>
        </div>
      </div>
    </section>
  )
}