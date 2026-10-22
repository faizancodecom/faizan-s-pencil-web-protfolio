import React from 'react';
import { projectCaseStudies } from '../data/portfolioData';

export default function Projects({ onOpenModal }) {
  return (
    <section id="projects" className="section-block projects-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Selected Interface Work</h2>
          <p className="section-subtitle">Real problems solved with structural wireframes, clean tokens, and accessible code.</p>
        </div>

        <div className="projects-stack-list">
          {projectCaseStudies.map((project) => (
            <article key={project.id} className="project-wireframe-card">
              <div className="project-grid">
                {/* Project Mockup */}
                <div className="project-mockup">
                  <div className="mockup-window">
                    <div className="mockup-header">
                      <span className="mockup-dot"></span>
                      <span className="mockup-dot"></span>
                      <span className="mockup-dot"></span>
                      <span className="mockup-title">{project.url ? project.url.replace(/^https?:\/\//, '') : `${project.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}.sketch`}</span>
                    </div>
                    <div className="mockup-body">
                      {project.previewImg ? (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-thumb-link"
                          title={`Launch ${project.title}`}
                        >
                          <img
                            src={project.previewImg}
                            alt={`${project.title} Preview`}
                            className="project-preview-thumb"
                            loading="lazy"
                          />
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="project-info">
                  <div className="project-tag">{project.tag}</div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.desc}</p>
                  <div className="project-meta-row">
                    {project.meta.map((m, mIdx) => (
                      <span key={mIdx} className="meta-item">{m}</span>
                    ))}
                  </div>
                  <div className="project-tags-row">
                    {project.tags.map((tag, tIdx) => {
                      const t = tag.toLowerCase();
                      let icon = null;

                      if (t.includes('next')) {
                        icon = <img src="assets/icons/nextjs.png" alt="" className="project-tag-icon" width="14" height="14" />;
                      } else if (t.includes('type')) {
                        icon = <img src="assets/icons/typescript.png" alt="" className="project-tag-icon" width="14" height="14" />;
                      } else if (t.includes('react')) {
                        icon = <img src="assets/icons/react.png" alt="" className="project-tag-icon" width="14" height="14" />;
                      } else if (t.includes('tailwind')) {
                        icon = <img src="assets/icons/tailwind.png" alt="" className="project-tag-icon" width="14" height="14" />;
                      } else if (t.includes('git')) {
                        icon = <img src="assets/icons/git.png" alt="" className="project-tag-icon" width="14" height="14" />;
                      } else if (t.includes('figma')) {
                        icon = <img src="assets/icons/figma.png" alt="" className="project-tag-icon" width="14" height="14" />;
                      } else if (t.includes('canvas')) {
                        icon = (
                          <svg className="project-tag-svg" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <rect x="3" y="3" width="18" height="18" rx="2" />
                            <circle cx="8.5" cy="8.5" r="1.5" />
                            <polyline points="21 15 16 10 5 21" />
                          </svg>
                        );
                      } else if (t.includes('algorithm')) {
                        icon = (
                          <svg className="project-tag-svg" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <circle cx="12" cy="4" r="2" />
                            <circle cx="6" cy="18" r="2" />
                            <circle cx="18" cy="18" r="2" />
                            <path d="M12 6v6M12 12l-6 4M12 12l6 4" />
                          </svg>
                        );
                      } else if (t.includes('dsa')) {
                        icon = (
                          <svg className="project-tag-svg" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <rect x="3" y="4" width="18" height="4" rx="1" />
                            <rect x="3" y="10" width="18" height="4" rx="1" />
                            <rect x="3" y="16" width="18" height="4" rx="1" />
                          </svg>
                        );
                      } else if (t.includes('worker')) {
                        icon = (
                          <svg className="project-tag-svg" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <rect x="4" y="4" width="16" height="16" rx="2" />
                            <rect x="9" y="9" width="6" height="6" />
                            <line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" />
                            <line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" />
                            <line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="15" x2="23" y2="15" />
                            <line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="15" x2="4" y2="15" />
                          </svg>
                        );
                      }

                      return (
                        <span key={tIdx} className="project-tag-badge">
                          {icon}
                          <span className="project-tag-name">{tag}</span>
                        </span>
                      );
                    })}
                  </div>
                  <div className="project-action-row" style={{ marginTop: '18px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-launch-live-btn"
                      >
                        Visit Live Platform ↗
                      </a>
                    )}
                    <button
                      type="button"
                      className="project-popup-trigger-btn"
                      onClick={() => onOpenModal(project.modal)}
                    >
                      Inspect Case Study &amp; Specs ↗
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
