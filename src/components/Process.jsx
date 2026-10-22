import React from 'react';

export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Discovery and Sketching",
      desc: "Understanding user requirements and sketching initial ideas on paper to explore layout solutions quickly."
    },
    {
      num: "02",
      title: "Lo-Fi Wireframing",
      desc: "Structuring the hierarchy, navigation flow, and interaction touchpoints before applying visual styling."
    },
    {
      num: "03",
      title: "Design System and UI",
      desc: "Establishing accessible typography scales, consistent spacing rules, and reusable component libraries."
    },
    {
      num: "04",
      title: "Clean Code Implementation",
      desc: "Building the interface with semantic HTML, responsive CSS, and clean JavaScript that runs smoothly across devices."
    }
  ];

  return (
    <section id="process" className="section-block process-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">From Concept to Browser</h2>
          <p className="section-subtitle">A straightforward workflow focused on collaboration and execution.</p>
        </div>

        <div className="process-steps-row">
          {steps.map((step, idx) => (
            <React.Fragment key={idx}>
              <div className="step-card">
                <div className="step-num">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>

              {idx < steps.length - 1 && (
                <div className="step-arrow-svg" aria-hidden="true">
                  <svg viewBox="0 0 32 16" width="28" height="14" fill="none">
                    <path d="M2 8 L28 8 M20 2 L28 8 L20 14" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
