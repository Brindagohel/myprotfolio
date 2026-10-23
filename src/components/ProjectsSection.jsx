import React, { useState } from 'react'
import { FolderGit2, ExternalLink } from 'lucide-react'
import { GithubIcon } from './Decorations'

export default function ProjectsSection({ anchorRef }) {
  const [filter, setFilter] = useState('all')

  const studentProjects = [
    {
      id: 1,
      title: 'Loomé – MERN Stack E-Commerce Website',
      type: 'fullstack',
      typeLabel: 'Solo Project',
      desc: 'Independently developed a complete MERN stack e-commerce platform with a customer-facing online store and a separate admin panel. Implemented a Node.js and Express REST API backend with MongoDB, JWT authentication, bcrypt, Cloudinary image uploads, and PayPal API integration. Built the frontend using React and Redux Toolkit, with admin tools for managing products, orders, and sales analytics.',
      tech: [
        'React',
        'Redux Toolkit',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Tailwind CSS',
        'JWT',
        'Cloudinary',
        'PayPal API',
      ],
      github: null,
      demo: null,
    },
    {
      id: 2,
      title: 'SAMUDRA – AI Fish Detection Android App',
      type: 'mobile',
      typeLabel: 'Team Project · Android Frontend Developer',
      desc: 'Contributed to an AI-based Android application as the Android frontend developer. Built the user interface, navigation flow, animated splash screen, and Firebase Authentication login. Implemented camera and gallery image capture with permissions, image processing, and TensorFlow Lite model integration.',
      tech: [
        'Android',
        'Java',
        'Firebase',
        'TensorFlow Lite',
        'Camera Integration',
        'Image Processing',
      ],
      github: null,
      demo: null,
    },
  ]

  const filtered =
    filter === 'all'
      ? studentProjects
      : studentProjects.filter((project) => project.type === filter)

  return (
    <section id="projects" className="projects-section">
      <div className="container projects-container">
        {/* Projects Header and Shared Portrait Anchor */}
        <div className="projects-spotlight-bar">
          <div className="spotlight-text">
            <div className="badge-chip">
              <FolderGit2 size={14} />
              <span>Selected Development Projects</span>
            </div>

            <h2 className="projects-heading">
              My Projects &amp; Creations
            </h2>

            <p className="projects-subtext">
              These projects reflect my hands-on experience in full-stack
              web development and Android application development, including
              an independently developed e-commerce platform and a
              collaborative AI-based mobile application.
            </p>
          </div>

          {/* Preserve the existing shared portrait animation */}
          <div className="projects-portrait-spot">
            <div className="projects-mini-badge">
              <div className="projects-circle-backdrop"></div>

              <div
                ref={anchorRef}
                className="portrait-slot portrait-slot-projects"
              ></div>
            </div>
          </div>
        </div>

        {/* Project Filters */}
        <div className="projects-filter-row">
          <button
            type="button"
            className={`proj-filter-btn ${
              filter === 'all' ? 'active' : ''
            }`}
            onClick={() => setFilter('all')}
            aria-pressed={filter === 'all'}
          >
            All Projects ({studentProjects.length})
          </button>

          <button
            type="button"
            className={`proj-filter-btn ${
              filter === 'fullstack' ? 'active' : ''
            }`}
            onClick={() => setFilter('fullstack')}
            aria-pressed={filter === 'fullstack'}
          >
            Full-Stack
          </button>

          <button
            type="button"
            className={`proj-filter-btn ${
              filter === 'mobile' ? 'active' : ''
            }`}
            onClick={() => setFilter('mobile')}
            aria-pressed={filter === 'mobile'}
          >
            Android &amp; AI
          </button>
        </div>

        {/* Actual Resume Projects */}
        <div className="student-projects-grid">
          {filtered.map((project) => (
            <article
              key={project.id}
              className="student-project-card"
            >
              <div className="proj-card-top">
                <div className="proj-folder-icon">
                  <FolderGit2 size={24} color="#9C4F5B" />
                </div>

                <div className="proj-links">
                  {project.github && (
                    <a
                      href={project.github}
                      className="proj-icon-link"
                      title="GitHub Repository"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GithubIcon size={18} />
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      className="proj-icon-link"
                      title="Live Project Demo"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <span className="proj-type-tag">
                {project.typeLabel}
              </span>

              <h3 className="proj-card-title">
                {project.title}
              </h3>

              <p className="proj-card-desc">
                {project.desc}
              </p>

              <div className="proj-tech-stack">
                {project.tech.map((technology) => (
                  <span
                    key={technology}
                    className="tech-badge"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <p className="projects-disclaimer">
          <em>
            Repository and live-demo links will appear here once you provide
            your actual project URLs.
          </em>
        </p>
      </div>
    </section>
  )
}