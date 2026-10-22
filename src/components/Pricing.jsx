import React from 'react';
import { pricingTiers } from '../data/portfolioData';

export default function Pricing({ onSelectPlan }) {
  const handlePlanClick = (planName) => {
    if (onSelectPlan) {
      onSelectPlan(planName);
    }
  };

  return (
    <section id="pricing" className="section-block pricing-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Transparent Project Pricing</h2>
          <p className="section-subtitle">Scope-based packages handcrafted for early ventures, founders, and growing teams.</p>
        </div>

        <div className="pricing-grid">
          {pricingTiers.map((tier) => (
            <div
              key={tier.id}
              className={`pricing-card ${tier.featured ? 'featured' : ''}`}
              data-tier={tier.id}
            >
              {tier.ribbon && <div className="featured-ribbon-tag">{tier.ribbon}</div>}

              <div className="pricing-card-header">
                <span className={`pricing-badge ${tier.featured ? 'featured-badge' : ''}`}>{tier.badge}</span>
                <h3 className="pricing-tier-name">{tier.name}</h3>
                <p className="pricing-tier-desc">{tier.desc}</p>

                <div className="pricing-rate-row">
                  <span className="pricing-currency">$</span>
                  <span className="pricing-amount">{tier.price}</span>
                  <span className="pricing-period">{tier.period}</span>
                </div>
                <div className="pricing-timeline">
                  <svg
                    className="timeline-sketch-icon"
                    viewBox="0 0 16 16"
                    width="14"
                    height="14"
                    fill="none"
                    aria-hidden="true"
                  >
                    <circle cx="8" cy="8" r="6" stroke="#141414" strokeWidth="1.4" />
                    <path d="M8 4.5 V8.2 L10.6 9.4" stroke="#141414" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>{tier.timeline}</span>
                </div>
              </div>

              <div className="pricing-scribble-rule" aria-hidden="true">
                <svg viewBox="0 0 260 8" fill="none" preserveAspectRatio="none">
                  <path d="M2 4 C 50 1, 100 7, 160 3 C 210 6, 240 2, 258 4" stroke="#141414" strokeWidth={tier.featured ? 2 : 1.8} strokeLinecap="round" />
                </svg>
              </div>

              <ul className="pricing-features-list">
                {tier.features.map((feat, fIdx) => (
                  <li key={fIdx}>
                    <span className="feature-check">✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="pricing-cta-wrap">
                <a
                  href="#contact"
                  className={`pricing-cta-btn ${tier.featured ? 'primary-btn' : ''}`}
                  onClick={() => handlePlanClick(`${tier.name} ($${tier.price})`)}
                >
                  <span>{tier.ctaText}</span>
                  <span className="pricing-cta-arrow">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
