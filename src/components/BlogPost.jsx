import React, { useEffect, useState } from 'react';
import { blogArticles } from '../data/portfolioData';

export default function BlogPost({ articleId, onBackToPortfolio, onSelectArticle }) {
  const [scrollProgress, setScrollProgress] = useState(0);

  const article = blogArticles.find((a) => a.id === articleId) || blogArticles[0];
  const total = blogArticles.length;
  const prevId = (article.id - 1 + total) % total;
  const nextId = (article.id + 1) % total;
  const prevArticle = blogArticles[prevId];
  const nextArticle = blogArticles[nextId];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [articleId]);

  return (
    <div className="blog-page-view">
      {/* Reading Progress Indicator */}
      <div
        className="reading-progress-bar"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* Top Header */}
      <header className="blog-page-header">
        <div className="blog-header-container">
          <button
            type="button"
            className="blog-back-btn"
            onClick={onBackToPortfolio}
            title="Return to Portfolio"
          >
            <span className="back-arrow">←</span>
            <span>Back to Portfolio</span>
          </button>

          <div className="blog-header-brand">
            <span className="brand-name">Faizan</span>
            <span className="brand-badge">Design Notes</span>
          </div>

          <button
            type="button"
            className="blog-contact-btn"
            onClick={() => {
              onBackToPortfolio();
              setTimeout(() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
          >
            <span>Get in Touch ↗</span>
          </button>
        </div>
      </header>

      {/* Main Article Container */}
      <main className="blog-main-container">
        <article className="blog-article-card">
          {/* Top Meta Row */}
          <div className="blog-meta-top">
            <span className="blog-category-badge">{article.badge}</span>
            <span className="blog-date-text">{article.date}</span>
          </div>

          {/* Article Title */}
          <h1 className="blog-article-heading">{article.title}</h1>

          {/* Author Byline */}
          <div className="blog-author-byline">
            <span className="byline-prefix">Written by</span>
            <span className="byline-name">Faizan</span>
            <span className="byline-role">• UI/UX Developer &amp; Web Designer</span>
          </div>

          {/* Hand-Drawn Scribble Divider */}
          <div className="blog-scribble-divider" aria-hidden="true">
            <svg viewBox="0 0 600 12" fill="none" preserveAspectRatio="none">
              <path d="M2 6 C 100 2, 200 10, 300 4 C 400 1, 500 9, 598 6" stroke="#141414" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>

          {/* Article Body */}
          <div className="blog-article-body">
            <p className="lead-text">{article.lead}</p>

            {article.sections && article.sections.map((sec, idx) => (
              <React.Fragment key={idx}>
                {sec.heading && <h2>{sec.heading}</h2>}
                {sec.body && <p>{sec.body}</p>}
                {sec.callout && (
                  <div className="pencil-callout-box">
                    <h4>{sec.callout.title}</h4>
                    <p>{sec.callout.text}</p>
                  </div>
                )}
              </React.Fragment>
            ))}

            {article.steps && (
              <>
                <h2>Key Actionable Protocol:</h2>
                <ul className="article-steps-list">
                  {article.steps.map((step, sIdx) => (
                    <li key={sIdx}>{step}</li>
                  ))}
                </ul>
              </>
            )}
          </div>

          {/* Pagination / Article Switcher */}
          <div className="blog-article-pagination">
            <button
              type="button"
              className="blog-nav-card prev-card"
              onClick={() => onSelectArticle(prevId)}
            >
              <span className="nav-label">← Previous Note</span>
              <span className="nav-title">{prevArticle.title}</span>
            </button>
            <button
              type="button"
              className="blog-nav-card next-card"
              onClick={() => onSelectArticle(nextId)}
            >
              <span className="nav-label">Next Note →</span>
              <span className="nav-title">{nextArticle.title}</span>
            </button>
          </div>

          {/* CTA Box */}
          <div className="blog-cta-box">
            <div className="cta-paper-clip" aria-hidden="true">
              <svg viewBox="0 0 24 38" width="22" height="34" fill="none">
                <path d="M12 4 C 7 4, 3 8, 3 14 L 3 26 C 3 31, 7 35, 12 35 C 17 35, 21 31, 21 26 L 21 11 C 21 8, 18 5, 15 5 C 12 5, 9 8, 9 11 L 9 24 C 9 26, 10 27, 12 27 C 14 27, 15 26, 15 24 L 15 12" stroke="#141414" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="cta-content">
              <h3>Have a design challenge or project to build?</h3>
              <p>Every great digital product starts with intentional wireframes and clean code. Let’s collaborate on your next interface.</p>
            </div>
            <button
              type="button"
              className="blog-cta-btn"
              onClick={() => {
                onBackToPortfolio();
                setTimeout(() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
            >
              <span>Start a Conversation ↗</span>
            </button>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-pencil-divider" aria-hidden="true">
          <svg viewBox="0 0 1200 20" preserveAspectRatio="none" fill="none">
            <path d="M0 8 C 150 4, 300 12, 450 7 C 600 3, 750 13, 900 8 C 1050 5, 1150 11, 1200 8" stroke="#141414" strokeWidth="2.4" />
          </svg>
        </div>
        <div className="footer-container">
          <div className="footer-bottom-bar">
            <p className="footer-made-by">Made by Faizan</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
