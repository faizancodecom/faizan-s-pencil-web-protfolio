import React, { useState, useRef } from 'react';
import { heroPlatforms } from '../data/portfolioData';

export default function Hero({ onOpenModal }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swapState, setSwapState] = useState(null); // { outgoingIdx, nextIdx, direction, phase }
  const [dragDelta, setDragDelta] = useState({ x: 0, y: 0, isDragging: false });

  const isSwappingRef = useRef(false);
  const pointerStartRef = useRef({ x: 0, y: 0, time: 0 });
  const hasMovedRef = useRef(false);

  // Smooth two-phase physical card shuffle:
  // Phase 1: Outgoing card slides outward to the left (or direction) while next card steps forward.
  // Phase 2: Outgoing card swings to the very back of the deck (stacked-2).
  const swapCardToBack = (direction = -1) => {
    if (isSwappingRef.current) return;
    isSwappingRef.current = true;

    const total = heroPlatforms.length;
    const currentIdx = activeIndex;
    const nextIdx = (currentIdx + 1) % total;

    // Phase 1: Outward fling
    setSwapState({
      outgoingIdx: currentIdx,
      nextIdx: nextIdx,
      direction: direction,
      phase: 1
    });

    setTimeout(() => {
      // Phase 2: Slip behind into stacked-2
      setSwapState({
        outgoingIdx: currentIdx,
        nextIdx: nextIdx,
        direction: direction,
        phase: 2
      });

      setTimeout(() => {
        setActiveIndex(nextIdx);
        setSwapState(null);
        isSwappingRef.current = false;
      }, 220);
    }, 220);
  };

  const handlePointerDown = (e) => {
    if (isSwappingRef.current) return;
    if (e.target.closest('a, button, .platform-thumb-link, .card-launch-btn')) return;

    pointerStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      time: performance.now()
    };
    hasMovedRef.current = false;
    setDragDelta({ x: 0, y: 0, isDragging: true });

    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch (err) {}
  };

  const handlePointerMove = (e) => {
    if (!dragDelta.isDragging || isSwappingRef.current) return;

    const dx = e.clientX - pointerStartRef.current.x;
    const dy = e.clientY - pointerStartRef.current.y;
    if (Math.hypot(dx, dy) > 5) {
      hasMovedRef.current = true;
    }
    setDragDelta({ x: dx, y: dy, isDragging: true });
  };

  const handlePointerUp = (e) => {
    if (!dragDelta.isDragging) return;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch (err) {}

    const dx = dragDelta.x;
    const duration = performance.now() - pointerStartRef.current.time;
    setDragDelta({ x: 0, y: 0, isDragging: false });

    if (isSwappingRef.current) return;

    // Swiped left
    if (dx < -35 || (dx < -15 && duration < 250)) {
      swapCardToBack(-1);
    }
    // Swiped right
    else if (dx > 35 || (dx > 15 && duration < 250)) {
      swapCardToBack(1);
    }
    // Tap or quick click without dragging: fling to the left
    else if (!hasMovedRef.current || (Math.abs(dx) < 10 && duration < 300)) {
      swapCardToBack(-1);
    }
    // Otherwise spring back to center
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-grid">
        {/* Hero Left Column */}
        <div className="hero-left">
          <h1 className="hero-title">
            <div className="hero-title-row">
              <span className="name-line">Faizan</span>
              <span className="role-line">UI/UX</span>
            </div>
            <span className="sub-role-line">Developer</span>
          </h1>

          {/* Hand-drawn wavy scribble underline */}
          <div className="scribble-underline" aria-hidden="true">
            <svg viewBox="0 0 340 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 14 C 45 4, 90 22, 135 12 C 180 3, 225 21, 270 11 C 295 5, 320 18, 337 13" stroke="#141414" strokeWidth="2.6" strokeLinecap="round" />
              <path d="M8 17 C 55 7, 100 24, 145 15 C 190 6, 235 23, 280 14 C 305 8, 325 19, 335 16" stroke="#444444" strokeWidth="1.6" strokeLinecap="round" opacity="0.6" />
            </svg>
          </div>

          <p className="hero-description">
            Web Designer and UI/UX Developer. I design and build clean digital products, turning rough paper ideas into intuitive, accessible web interfaces.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="sketch-contact-capsule">
              <span className="capsule-label">contact</span>
              <span className="capsule-plane">
                <svg viewBox="0 0 40 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 13 L36 2 L24 24 L17 15 L2 13 Z" fill="#ffffff" stroke="#141414" strokeWidth="2.2" strokeLinejoin="round" />
                  <path d="M36 2 L17 15" stroke="#141414" strokeWidth="2" />
                  <path d="M17 15 L21 22 L24 18" fill="none" stroke="#141414" strokeWidth="1.8" strokeLinejoin="round" />
                </svg>
              </span>
            </a>

            {/* Hand-Drawn Paper Plane & Upward Loop Wave (Beside Contact Button - Hand-Drawn Blueprint Match) */}
            <div className="hero-plane-wave" id="hero-plane-wave" aria-hidden="true">
              <svg className="plane-wave-svg" viewBox="0 0 65 160" width="65" height="160" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Ghost pencil dashed trail */}
                <path d="M 28 152 C 28 132, 26 116, 28 100 C 30 84, 52 74, 52 90 C 52 108, 28 106, 28 80 C 28 58, 28 40, 28 26" stroke="rgba(20, 20, 20, 0.2)" strokeWidth="1.4" strokeDasharray="3 3" strokeLinecap="round" />
                
                {/* Solid 2B pencil sketch trail */}
                <path d="M 27 150 C 27 130, 25 115, 27 98 C 29 82, 50 72, 50 88 C 50 106, 27 104, 27 78 C 27 56, 27 38, 27 24" stroke="#141414" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                
                {/* Upward arrowhead */}
                <path d="M 20 32 L 27 22 L 34 32" stroke="#141414" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                
                {/* Upward Paper Airplane perched at tip */}
                <g transform="translate(27, 16)">
                  {/* Left Wing */}
                  <polygon points="0,-14 -12,8 0,4" fill="#ffffff" stroke="#141414" strokeWidth="2" strokeLinejoin="round" />
                  {/* Right Wing */}
                  <polygon points="0,-14 12,8 0,4" fill="#f4f4ee" stroke="#141414" strokeWidth="2" strokeLinejoin="round" />
                  {/* Center Fold Crease */}
                  <line x1="0" y1="-14" x2="0" y2="4" stroke="#141414" strokeWidth="1.8" />
                  {/* Underbody Keel */}
                  <polygon points="0,4 -3,8 0,6 3,8" fill="#deded6" stroke="#141414" strokeWidth="1.2" strokeLinejoin="round" />
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/* Hero Right Column: 3D Animated Swipeable Wireframe Cards Stack */}
        <div className="hero-right">
          <div className="browser-stack-container">
            <div
              className="swipe-cards-stack"
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              title="Click or drag to shuffle websites"
            >
              {heroPlatforms.map((platform, idx) => {
                const total = heroPlatforms.length;
                let cardClass = 'browser-frame swipe-card';
                let style = {};

                if (swapState) {
                  const { outgoingIdx, nextIdx, direction, phase } = swapState;
                  const thirdIdx = (nextIdx + 1) % total;

                  if (idx === outgoingIdx) {
                    if (phase === 1) {
                      cardClass += ' is-swapping-out';
                      style = {
                        transform: `translate3d(${direction * 380}px, 24px, 0) rotate(${direction * 15}deg)`,
                        zIndex: 14,
                        opacity: 1,
                        transition: 'transform 0.26s cubic-bezier(0.25, 1, 0.5, 1)'
                      };
                    } else {
                      cardClass += ' is-stacked-2 is-swapping-in';
                      style = {
                        transform: 'translate3d(28px, -18px, 0) rotate(2.8deg)',
                        zIndex: 2,
                        opacity: 1,
                        transition: 'transform 0.24s cubic-bezier(0.2, 0.8, 0.2, 1)'
                      };
                    }
                  } else if (idx === nextIdx) {
                    cardClass += ' is-active is-stepping-up';
                    style = {
                      transform: 'translate3d(0, 0, 0) rotate(-1deg)',
                      zIndex: 10,
                      opacity: 1,
                      transition: 'transform 0.28s cubic-bezier(0.2, 0.8, 0.2, 1)'
                    };
                  } else if (idx === thirdIdx) {
                    cardClass += ' is-stacked-1';
                    style = {
                      transform: 'translate3d(14px, -10px, 0) rotate(1.4deg)',
                      zIndex: 5,
                      opacity: 1,
                      transition: 'transform 0.28s cubic-bezier(0.2, 0.8, 0.2, 1)'
                    };
                  }
                } else {
                  const offset = (idx - activeIndex + total) % total;

                  if (offset === 0) {
                    cardClass += ' is-active';
                    if (dragDelta.isDragging) {
                      cardClass += ' is-dragging';
                      const rot = dragDelta.x * 0.08 - 1;
                      style = {
                        transform: `translate3d(${dragDelta.x}px, ${dragDelta.y * 0.35}px, 0) rotate(${rot}deg) scale(1.02)`,
                        zIndex: 10,
                        opacity: 1,
                        transition: 'none'
                      };
                    } else {
                      style = {
                        transform: 'translate3d(0, 0, 0) rotate(-1deg)',
                        zIndex: 10,
                        opacity: 1,
                        transition: 'transform 0.32s cubic-bezier(0.2, 0.8, 0.2, 1)'
                      };
                    }
                  } else if (offset === 1) {
                    cardClass += ' is-stacked-1';
                    style = {
                      transform: 'translate3d(14px, -10px, 0) rotate(1.4deg)',
                      zIndex: 5,
                      opacity: 1,
                      transition: 'transform 0.32s cubic-bezier(0.2, 0.8, 0.2, 1)'
                    };
                  } else if (offset === 2) {
                    cardClass += ' is-stacked-2';
                    style = {
                      transform: 'translate3d(28px, -18px, 0) rotate(2.8deg)',
                      zIndex: 2,
                      opacity: 1,
                      transition: 'transform 0.32s cubic-bezier(0.2, 0.8, 0.2, 1)'
                    };
                  } else {
                    cardClass += ' is-hidden';
                    style = {
                      transform: 'translate3d(0, 0, 0) scale(0.9)',
                      zIndex: 1,
                      opacity: 0
                    };
                  }
                }

                const currentOffset = (idx - activeIndex + total) % total;

                return (
                  <div key={platform.id} className={cardClass} style={style}>
                    {/* Window Top Bar with Hand-Drawn "o o o" dots */}
                    <div className="frame-topbar">
                      <div className="dots-group" aria-hidden="true">
                        <span className="window-dot"></span>
                        <span className="window-dot"></span>
                        <span className="window-dot"></span>
                      </div>
                      <div className="frame-url-bar">
                        <span className="url-text">{platform.url}</span>
                      </div>
                      <div
                        className="frame-view-tag"
                        onClick={(e) => {
                          e.stopPropagation();
                          swapCardToBack(-1);
                        }}
                        style={{ cursor: 'pointer' }}
                        title="Click to swap card"
                      >
                        <span>tap to swap</span>
                      </div>
                    </div>

                    {/* Viewport Content */}
                    <div className="frame-viewport">
                      <div className="card-platform-header">
                        <div className="platform-badge-row">
                          <span className="platform-tag">{platform.tag}</span>
                        </div>
                        <h3 className="platform-title">{platform.title}</h3>
                        <p className="platform-snippet">{platform.desc}</p>
                      </div>

                      {/* Taller Thumbnail Container (height: 235px) */}
                      <a
                        href={platform.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="platform-thumb-link"
                        title={`Open ${platform.title}`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="platform-thumbnail-container">
                          <div className="thumb-tag-badge">LIVE PREVIEW</div>
                          <img
                            src={platform.previewImg}
                            alt={`${platform.title} preview`}
                            className="platform-thumb-img"
                            loading="eager"
                          />
                          <div className="thumb-hover-overlay">
                            <span className="thumb-hover-pill">
                              <span>Visit Website</span>
                              <span className="thumb-hover-arrow">↗</span>
                            </span>
                          </div>
                        </div>
                      </a>

                      <div className="wf-pill-tags-row">
                        {platform.techTags.map((tech, tIdx) => (
                          <span key={tIdx} className="wf-mini-tag">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="platform-card-actions">
                        <a
                          href={platform.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="card-launch-btn"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span>Visit {platform.url.replace('https://', '')}</span>
                          <span className="launch-arrow">↗</span>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
