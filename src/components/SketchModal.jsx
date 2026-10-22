import React from 'react';

export default function SketchModal({ modalData, onClose }) {
  if (!modalData) return null;

  const {
    stamp = "Studio Note",
    statusText = "Drafted by Faizan",
    title = "Modal Note",
    contentHtml = "",
    specs = [],
    paragraphs = [],
    primaryBtnText = "Dismiss ✕",
    secondaryBtnText = null,
    secondaryBtnHref = null
  } = modalData;

  return (
    <div
      id="sketch-modal-overlay"
      className="sketch-modal-overlay is-open"
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target.id === 'sketch-modal-overlay') onClose();
      }}
    >
      <div className="sketch-modal-dialog" data-lenis-prevent>
        <button
          type="button"
          className="sketch-modal-close"
          onClick={onClose}
          aria-label="Close popup"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#141414" stroke-width="2.4" stroke-linecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="modal-top-tag-row">
          <span className="modal-stamp-pill">{stamp}</span>
          <span className="modal-status-text">{statusText}</span>
        </div>

        <h3 className="modal-heading">{title}</h3>

        <div className="modal-scribble-divider" aria-hidden="true">
          <svg viewBox="0 0 280 12" fill="none" preserveAspectRatio="none">
            <path d="M2 6 C 50 2, 100 10, 150 4 C 200 1, 240 9, 278 6" stroke="#141414" stroke-width="2" stroke-linecap="round" />
          </svg>
        </div>

        <div className="modal-body-content">
          {contentHtml ? (
            <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
          ) : (
            <>
              {specs && specs.length > 0 && (
                <div className="modal-spec-grid">
                  {specs.map((item, idx) => (
                    <div key={idx} className="modal-spec-item">
                      <span className="modal-spec-label">{item.label}</span>
                      <span className="modal-spec-val">{item.val}</span>
                    </div>
                  ))}
                </div>
              )}
              {paragraphs && paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </>
          )}
        </div>

        <div className="modal-actions-row">
          {secondaryBtnText && secondaryBtnHref && (
            <a
              href={secondaryBtnHref}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-btn-secondary"
            >
              <span>{secondaryBtnText}</span>
              <span>↗</span>
            </a>
          )}
          <button type="button" className="modal-btn-primary" onClick={onClose}>
            {primaryBtnText}
          </button>
        </div>
      </div>
    </div>
  );
}
