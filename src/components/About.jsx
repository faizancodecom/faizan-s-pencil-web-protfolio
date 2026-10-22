import React from 'react';

export default function About() {
  return (
    <section id="about" className="section-block about-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">About My Approach</h2>
          <p className="section-subtitle">Why good design begins with paper, empathy, and clear structure.</p>
        </div>

        <div className="sketchbook-grid">
          {/* Left Column: Polaroid & Bio */}
          <div className="sketchbook-col-left">
            <div className="polaroid-frame">
              <div className="sketch-avatar">
                <svg viewBox="0 0 160 160" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="80" cy="65" r="38" stroke="#141414" strokeWidth="2.4" fill="#ffffff" />
                  <path d="M48 60 C 50 35, 75 30, 85 30 C 105 30, 115 42, 112 60 C 105 50, 95 48, 80 48 C 65 48, 55 52, 48 60 Z" fill="#141414" stroke="#141414" strokeWidth="1.8" />
                  <circle cx="68" cy="65" r="9" stroke="#141414" strokeWidth="2" fill="none" />
                  <circle cx="92" cy="65" r="9" stroke="#141414" strokeWidth="2" fill="none" />
                  <path d="M77 65 L83 65" stroke="#141414" strokeWidth="2" />
                  <circle cx="69" cy="65" r="2.2" fill="#141414" />
                  <circle cx="93" cy="65" r="2.2" fill="#141414" />
                  <path d="M72 82 C 76 87, 84 87, 88 82" stroke="#141414" strokeWidth="2" strokeLinecap="round" fill="none" />
                  <path d="M36 145 C 46 112, 65 106, 80 106 C 95 106, 114 112, 124 145 Z" stroke="#141414" strokeWidth="2.4" fill="#fafafa" />
                </svg>
              </div>
              <div className="polaroid-caption">Faizan — UI/UX Developer</div>
            </div>

            <div className="bio-text">
              <h3>Design with purpose</h3>
              <p>
                I am a web designer and front-end developer focused on human-centered software. I believe digital products should be clear, easy to navigate, and purposeful.
              </p>
              <p>
                Before writing lines of code, I sketch out user journeys and wireframes to validate usability. Once the structure makes total sense, I build it using semantic, high-performance web standards.
              </p>
            </div>
          </div>

          {/* Right Column: Core Principles (No numeric indexing) */}
          <div className="sketchbook-col-right">
            <h3 className="pillars-heading">Core Principles</h3>

            <div className="pencil-card">
              <h4>Clarity Over Clutter</h4>
              <p>Every element on the screen must serve a clear purpose for the person using it. Clean layouts reduce cognitive load.</p>
            </div>

            <div className="pencil-card">
              <h4>Ergonomics and Accessibility</h4>
              <p>Designing interfaces that respect natural hand movements, clear font scaling, and keyboard accessibility for everyone.</p>
            </div>

            <div className="pencil-card">
              <h4>Clean Front-End Code</h4>
              <p>Writing semantic HTML, lightweight CSS, and structured JavaScript that loads fast without unnecessary bloat.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
