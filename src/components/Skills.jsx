import React from 'react';
import { techShelf } from '../data/portfolioData';

export default function Skills({ onOpenModal }) {
  const handleTechClick = (tool) => {
    onOpenModal({
      stamp: tool.stamp,
      statusText: tool.specRole,
      title: `${tool.name} Architecture Spec`,
      contentHtml: `
        <p>${tool.desc}</p>
        <div class="modal-spec-grid">
          <div class="modal-spec-item"><span class="modal-spec-label">Discipline</span><span class="modal-spec-val">Production Core</span></div>
          <div class="modal-spec-item"><span class="modal-spec-label">Standard</span><span class="modal-spec-val">Strict / Modern</span></div>
          <div class="modal-spec-item"><span class="modal-spec-label">Testing</span><span class="modal-spec-val">Automated</span></div>
          <div class="modal-spec-item"><span class="modal-spec-label">Execution</span><span class="modal-spec-val">High Performance</span></div>
        </div>
      `,
      primaryBtnText: "Dismiss [✓]"
    });
  };

  return (
    <section id="skills" className="section-block skills-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Skills and Capabilities</h2>
          <p className="section-subtitle">Technologies and disciplines I apply to bring digital products to life.</p>
        </div>

        {/* Handcrafted Shelf: 12 Colorful Icons8 Programming Languages & Tools */}
        <div className="tech-languages-shelf">
          <div className="shelf-header">
            <div className="shelf-title-group">
              <h3>Programming Languages &amp; Core Tools</h3>
              <p>Authentic technologies used daily to architect, build, and deploy production software.</p>
            </div>
          </div>

          <div className="tech-grid-shelf">
            {techShelf.map((tool, idx) => (
              <div
                key={idx}
                className="tech-lang-card"
                title={`${tool.name} (${tool.role})`}
                onClick={() => handleTechClick(tool)}
              >
                <div className="tech-icon-wrapper">
                  <img src={tool.icon} alt={tool.name} className="tech-icon-img" loading="lazy" />
                </div>
                <div className="tech-lang-info">
                  <span className="tech-lang-name">{tool.name}</span>
                  <span className="tech-lang-role">{tool.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2 Core Discipline Cards (Header icons are strictly Black & White) */}
        <div className="skills-grid">
          {/* Card: UI/UX Design */}
          <div className="pencil-box">
            <div className="box-header">
              <div className="box-title-with-icon">
                <span className="box-header-icon" title="UI/UX Design">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#141414" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 19l7-7 3 3-7 7-3-3z"/>
                    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
                    <path d="M2 2l7.586 7.586"/>
                    <circle cx="11" cy="11" r="2" fill="#141414"/>
                  </svg>
                </span>
                <h3>UI/UX Design</h3>
              </div>
            </div>
            <p className="box-desc">User research, wireframing, layout architecture, and interface design systems.</p>

            <div className="skill-meters-list">
              <div className="skill-meter">
                <div className="skill-info">
                  <span className="skill-name">Wireframing and Prototyping</span>
                  <span className="skill-pct">95%</span>
                </div>
                <div className="pencil-hatch-bar">
                  <div className="hatch-fill" style={{ width: '95%' }}></div>
                </div>
              </div>

              <div className="skill-meter">
                <div className="skill-info">
                  <span className="skill-name">Figma and Design Systems</span>
                  <span className="skill-pct">90%</span>
                </div>
                <div className="pencil-hatch-bar">
                  <div className="hatch-fill" style={{ width: '90%' }}></div>
                </div>
              </div>

              <div className="skill-meter">
                <div className="skill-info">
                  <span className="skill-name">User Journey Mapping</span>
                  <span className="skill-pct">88%</span>
                </div>
                <div className="pencil-hatch-bar">
                  <div className="hatch-fill" style={{ width: '88%' }}></div>
                </div>
              </div>
            </div>

            <div className="chips-row">
              <span className="pencil-chip">
                <img src="assets/icons/figma.png" alt="FigJam" className="chip-icon-img" width="14" height="14" />
                <span>FigJam</span>
              </span>
              <span className="pencil-chip">
                <svg className="chip-svg-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="3" width="7" height="7" rx="1.5" />
                  <rect x="14" y="3" width="7" height="7" rx="1.5" />
                  <rect x="3" y="14" width="7" height="7" rx="1.5" />
                  <rect x="14" y="14" width="7" height="7" rx="1.5" />
                </svg>
                <span>Design Tokens</span>
              </span>
              <span className="pencil-chip">
                <svg className="chip-svg-icon" viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
                  <circle cx="12" cy="4" r="2.5" />
                  <path d="M4 8.5h16v2h-6v11.5h-2V14h-1v8H9V10.5H4v-2z" />
                </svg>
                <span>Accessibility (WCAG)</span>
              </span>
              <span className="pencil-chip">
                <svg className="chip-svg-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="11" cy="11" r="7" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
                <span>User Research</span>
              </span>
            </div>
          </div>

          {/* Card: Front-End Development */}
          <div className="pencil-box">
            <div className="box-header">
              <div className="box-title-with-icon">
                <span className="box-header-icon" title="Front-End Development">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#141414" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"/>
                    <polyline points="8 6 2 12 8 18"/>
                  </svg>
                </span>
                <h3>Front-End Development</h3>
              </div>
            </div>
            <p className="box-desc">Translating interface designs into clean, responsive, production-ready code.</p>

            <div className="skill-meters-list">
              <div className="skill-meter">
                <div className="skill-info">
                  <span className="skill-name">HTML5 &amp; Semantic Markup</span>
                  <span className="skill-pct">98%</span>
                </div>
                <div className="pencil-hatch-bar">
                  <div className="hatch-fill" style={{ width: '98%' }}></div>
                </div>
              </div>

              <div className="skill-meter">
                <div className="skill-info">
                  <span className="skill-name">Modern CSS &amp; Responsive Layouts</span>
                  <span className="skill-pct">92%</span>
                </div>
                <div className="pencil-hatch-bar">
                  <div className="hatch-fill" style={{ width: '92%' }}></div>
                </div>
              </div>

              <div className="skill-meter">
                <div className="skill-info">
                  <span className="skill-name">Vanilla JS &amp; DOM Manipulation</span>
                  <span className="skill-pct">90%</span>
                </div>
                <div className="pencil-hatch-bar">
                  <div className="hatch-fill" style={{ width: '90%' }}></div>
                </div>
              </div>
            </div>

            <div className="chips-row">
              <span className="pencil-chip">
                <img src="assets/icons/tailwind.png" alt="Tailwind" className="chip-icon-img" width="14" height="14" />
                <span>Tailwind CSS</span>
              </span>
              <span className="pencil-chip">
                <img src="assets/icons/react.png" alt="React" className="chip-icon-img" width="14" height="14" />
                <span>React Components</span>
              </span>
              <span className="pencil-chip">
                <img src="assets/icons/typescript.png" alt="TypeScript" className="chip-icon-img" width="14" height="14" />
                <span>TypeScript</span>
              </span>
              <span className="pencil-chip">
                <img src="assets/icons/git.png" alt="Git" className="chip-icon-img" width="14" height="14" />
                <span>Git / GitHub</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
