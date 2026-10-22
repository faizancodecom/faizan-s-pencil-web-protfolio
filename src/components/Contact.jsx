import React, { useState } from 'react';

export default function Contact({ prefilledMessage, onOpenModal }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: prefilledMessage || ''
  });
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Sync if prefilledMessage changes
  React.useEffect(() => {
    if (prefilledMessage) {
      setFormData((prev) => ({ ...prev, message: prefilledMessage }));
    }
  }, [prefilledMessage]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      onOpenModal({
        stamp: 'Notice',
        statusText: 'Required Fields Incomplete',
        title: 'Missing Details',
        contentHtml: '<p>Please complete your <strong>Name</strong>, <strong>Email Address</strong>, and <strong>Project Details</strong> before dispatching the paper airplane.</p>',
        primaryBtnText: 'Understood [✓]'
      });
      return;
    }

    setIsSending(true);

    setTimeout(() => {
      setIsSending(false);
      setIsSuccess(true);
      const sentName = formData.name;
      const sentEmail = formData.email;
      setFormData({ name: '', email: '', message: '' });

      onOpenModal({
        stamp: 'Transmission Confirmed',
        statusText: "Dispatched to Faizan's Desk",
        title: 'Paper Airplane Dispatched!',
        contentHtml: `
          <p>Thank you <strong>${sentName}</strong>! Your note has been folded, stamped, and dispatched.</p>
          <p>I typically review inquiries within 24 hours and will reply to <em>${sentEmail}</em> promptly.</p>
        `,
        primaryBtnText: 'Done [✓]'
      });
    }, 1000);
  };

  return (
    <section id="contact" className="section-block contact-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">Have a project, a UI/UX challenge, or want to collaborate? Send a message below.</p>
        </div>

        <div className="contact-box">
          <div className="contact-grid">
            {/* Form Column */}
            <div className="contact-form-col">
              <form id="contact-form" className="pencil-form" onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="form-name">Your Name or Organization</label>
                  <input
                    type="text"
                    id="form-name"
                    className="pencil-field"
                    placeholder="Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                  <div className="field-line"></div>
                </div>

                <div className="form-group">
                  <label htmlFor="form-email">Email Address</label>
                  <input
                    type="email"
                    id="form-email"
                    className="pencil-field"
                    placeholder="alex@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                  <div className="field-line"></div>
                </div>

                <div className="form-group">
                  <label htmlFor="form-message">Project Details</label>
                  <textarea
                    id="form-message"
                    className="pencil-field textarea"
                    rows="4"
                    placeholder="Tell me about your product or idea..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  ></textarea>
                  <div className="field-line"></div>
                </div>

                <div className="form-submit-row">
                  <button type="submit" id="submit-plane-btn" className="sketch-contact-capsule submit-btn" disabled={isSending}>
                    <span className="capsule-label" id="btn-label-text">
                      {isSending ? 'sending...' : isSuccess ? 'note sent' : 'send note'}
                    </span>
                    <span
                      className="capsule-plane"
                      id="submit-plane-icon"
                      style={
                        isSending
                          ? { transform: 'translate(120px, -70px) rotate(-30deg) scale(1.5)', transition: 'transform 1s cubic-bezier(0.2, 0.8, 0.2, 1)' }
                          : {}
                      }
                    >
                      <svg viewBox="0 0 40 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 13 L36 2 L24 24 L17 15 L2 13 Z" fill="#ffffff" stroke="#141414" strokeWidth="2.2" strokeLinejoin="round" />
                        <path d="M36 2 L17 15" stroke="#141414" strokeWidth="2" />
                        <path d="M17 15 L21 22 L24 18" fill="none" stroke="#141414" strokeWidth="1.8" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </button>
                </div>

                {isSuccess && (
                  <div id="form-success" className="form-success">
                    Message sent successfully. Faizan will get back to you shortly.
                  </div>
                )}
              </form>
            </div>

            {/* Details Column */}
            <div className="contact-details-col">
              <div className="details-inner">
                <h4 className="details-heading">Direct Contact</h4>

                <div className="detail-item">
                  <span className="detail-label">Location:</span>
                  <span className="detail-val">Remote / Worldwide</span>
                </div>

                <div className="detail-item">
                  <span className="detail-label">Email:</span>
                  <a href="mailto:thetriquetradeveloper@gmail.com" className="colorful-badge-btn badge-email" title="Send Email">
                    <img src="assets/icons/gmail.png" alt="Gmail" className="colorful-badge-img" />
                    <span>thetriquetradeveloper@gmail.com</span>
                  </a>
                </div>

                <div className="socials-box">
                  <span className="detail-label">Online:</span>
                  <div className="social-links-row">
                    <a href="https://github.com/Faizan-code-arch" target="_blank" rel="noopener noreferrer" className="colorful-badge-btn badge-github" title="Faizan on GitHub">
                      <svg className="colorful-badge-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      <span>GitHub</span>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="colorful-badge-btn badge-linkedin" title="Faizan on LinkedIn">
                      <img src="assets/icons/linkedin.png" alt="LinkedIn" className="colorful-badge-img" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>

                <div className="signature-box">
                  <span className="sig-prefix">Designed by</span>
                  <span className="sig-name">Faizan</span>
                  <span className="sig-role">UI/UX Developer and Web Designer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
