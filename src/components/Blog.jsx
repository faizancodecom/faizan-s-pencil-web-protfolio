import React from 'react';
import { blogArticles } from '../data/portfolioData';

export default function Blog({ onOpenArticle }) {
  return (
    <section id="blog" className="section-block blog-section">
      <div className="section-container">
        <div className="section-header">
          <h2 class="section-title">Articles and Insights</h2>
          <p className="section-subtitle">Practical observations on interface usability, design clarity, and web standards.</p>
        </div>

        <div className="articles-list">
          {blogArticles.map((article) => (
            <article key={article.id} className="article-card">
              <div className="article-date">{article.date}</div>
              <h3 className="article-title">{article.title}</h3>
              <p className="article-snippet">{article.snippet}</p>
              <div className="article-action-row" style={{ marginTop: '12px' }}>
                <button
                  type="button"
                  className="article-popup-trigger-btn"
                  onClick={() => onOpenArticle(article.id)}
                >
                  Read Note ↗
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
