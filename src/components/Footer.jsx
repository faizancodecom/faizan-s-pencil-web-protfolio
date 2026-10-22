import React from 'react';

export default function Footer({ onNavigateHome }) {
  const handleNavClick = (e, targetId) => {
    if (onNavigateHome) {
      onNavigateHome(targetId);
    }
  };

  return (
    <footer className="site-footer">
      {/* Hand-drawn SVG Top Graphite Border */}
      <div className="footer-pencil-divider" aria-hidden="true">
        <svg viewBox="0 0 1200 20" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 8 C 150 4, 300 12, 450 7 C 600 3, 750 13, 900 8 C 1050 5, 1150 11, 1200 8" stroke="#141414" strokeWidth="2.4" />
          <path d="M0 13 C 140 10, 290 17, 440 12 C 590 8, 740 17, 890 13 C 1040 10, 1160 15, 1200 13" stroke="#555555" strokeWidth="1.4" opacity="0.6" />
        </svg>
      </div>

      <div className="footer-container">
        <div className="footer-main-grid">
          {/* Col 1: Brand & Philosophy */}
          <div className="footer-col footer-col-brand">
            <div className="footer-brand-header">
              <span className="footer-brand-name">Faizan</span>
              <span className="footer-badge">UI/UX Dev</span>
            </div>
            <p className="footer-brand-title">Web Designer &amp; UI/UX Developer</p>
            <p className="footer-brand-desc">
              Crafting clean, accessible, and human-centered digital products. Every wireframe begins with pencil on paper before transforming into high-performance web code. Zero AI slop, pure craftsmanship.
            </p>
            <div className="footer-colorful-links">
              <a href="https://github.com/Faizan-code-arch" target="_blank" rel="noopener noreferrer" className="colorful-badge-btn badge-github" title="Visit Faizan on GitHub">
                <svg className="colorful-badge-icon" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span>GitHub / Faizan-code-arch</span>
                <span className="badge-arrow">↗</span>
              </a>

              <a href="mailto:thetriquetradeveloper@gmail.com" className="colorful-badge-btn badge-email" title="Send Email to Faizan">
                <img src="assets/icons/gmail.png" alt="Gmail" className="colorful-badge-img" />
                <span>thetriquetradeveloper@gmail.com</span>
                <span className="badge-arrow">↗</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="footer-col footer-col-nav">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-nav-list">
              <li><a href="#home" className="footer-nav-link" onClick={(e) => handleNavClick(e, 'home')}>Home</a></li>
              <li><a href="#about" className="footer-nav-link" onClick={(e) => handleNavClick(e, 'about')}>About &amp; Approach</a></li>
              <li><a href="#skills" className="footer-nav-link" onClick={(e) => handleNavClick(e, 'skills')}>Core Toolkit</a></li>
              <li><a href="#projects" className="footer-nav-link" onClick={(e) => handleNavClick(e, 'projects')}>Featured Work</a></li>
              <li><a href="#process" className="footer-nav-link" onClick={(e) => handleNavClick(e, 'process')}>Design Process</a></li>
              <li><a href="#pricing" className="footer-nav-link" onClick={(e) => handleNavClick(e, 'pricing')}>Pricing &amp; Plans</a></li>
              <li><a href="#blog" className="footer-nav-link" onClick={(e) => handleNavClick(e, 'blog')}>Design Notes</a></li>
              <li><a href="#contact" className="footer-nav-link" onClick={(e) => handleNavClick(e, 'contact')}>Get in Touch</a></li>
            </ul>
          </div>

          {/* Col 3: Studio Desk & Connect */}
          <div className="footer-col footer-col-contact">
            <h4 className="footer-col-title">Studio Desk</h4>
            <div className="footer-contact-details">
              <div className="contact-entry">
                <span className="contact-entry-label">Direct Correspondence:</span>
                <a href="mailto:thetriquetradeveloper@gmail.com" className="colorful-badge-btn badge-email-mini" title="Send Email">
                  <img src="assets/icons/gmail.png" alt="Gmail" className="colorful-badge-img" />
                  <span>thetriquetradeveloper@gmail.com</span>
                </a>
              </div>
              <div className="contact-entry">
                <span className="contact-entry-label">Working Hours &amp; Location:</span>
                <span className="contact-entry-val">Remote Worldwide • Flexible Timezones</span>
              </div>
              <div className="contact-entry">
                <span className="contact-entry-label">Online Networks:</span>
                <div className="footer-social-row">
                  <a href="https://github.com/Faizan-code-arch" target="_blank" rel="noopener noreferrer" className="colorful-badge-btn badge-github-mini" title="Faizan on GitHub">
                    <svg className="colorful-badge-icon" viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    <span>GitHub</span>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="colorful-badge-btn badge-linkedin-mini" title="Faizan on LinkedIn">
                    <img src="assets/icons/linkedin.png" alt="LinkedIn" className="colorful-badge-img" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Colophon Bottom Bar: Strictly "Made by Faizan" */}
        <div className="footer-bottom-bar">
          <p className="footer-made-by">Made by Faizan</p>
        </div>
      </div>
    </footer>
  );
}
