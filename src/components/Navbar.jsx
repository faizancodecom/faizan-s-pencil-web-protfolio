import React, { useEffect, useState } from 'react';

export default function Navbar({ onNavigateHome }) {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPos = window.scrollY + 140;

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          setActiveSection(section.getAttribute('id'));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, targetId) => {
    if (onNavigateHome) {
      onNavigateHome(targetId);
    }
  };

  return (
    <header className="site-header">
      <div className="nav-container">
        <nav className="hand-drawn-nav-capsule" aria-label="Main Navigation">
          <svg className="capsule-svg-border" viewBox="0 0 550 70" preserveAspectRatio="none">
            <path className="capsule-path-bg" d="M35 10 C 180 6, 370 8, 515 10 C 545 12, 548 58, 515 60 C 370 63, 180 61, 35 60 C 5 58, 5 12, 35 10 Z" />
            <path className="capsule-path-stroke" d="M38 12 C 185 9, 372 10, 512 12 C 542 14, 544 56, 512 58 C 372 60, 182 59, 38 58 C 8 56, 8 14, 38 12 Z" />
            <path className="capsule-path-rough" d="M32 9 C 190 7, 360 9, 518 11 C 540 15, 542 54, 510 62 C 360 59, 170 63, 30 58 C 7 54, 10 13, 32 9 Z" />
          </svg>

          <ul className="nav-links-list">
            <li>
              <a
                href="#home"
                className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                onClick={(e) => handleLinkClick(e, 'home')}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
                onClick={(e) => handleLinkClick(e, 'skills')}
              >
                Skill
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
                onClick={(e) => handleLinkClick(e, 'projects')}
              >
                Project
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className={`nav-link ${activeSection === 'pricing' ? 'active' : ''}`}
                onClick={(e) => handleLinkClick(e, 'pricing')}
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#blog"
                className={`nav-link ${activeSection === 'blog' ? 'active' : ''}`}
                onClick={(e) => handleLinkClick(e, 'blog')}
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                onClick={(e) => handleLinkClick(e, 'contact')}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
