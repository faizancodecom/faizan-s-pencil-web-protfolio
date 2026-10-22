import React, { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const canvasRef = useRef(null);
  const pointsRef = useRef([]);
  const prevMouseRef = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!isFinePointer) return;

    document.body.classList.add('drawn-cursor-active');

    const canvas = canvasRef.current;
    const cursor = cursorRef.current;
    if (!canvas || !cursor) return;

    const ctx = canvas.getContext('2d');
    let hasMoved = false;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth * window.devicePixelRatio;
      canvas.height = window.innerHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const INK_LIFETIME = 320;

    let animId;
    const renderInkTrail = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      const now = performance.now();

      while (pointsRef.current.length > 0 && (now - pointsRef.current[0].time) > INK_LIFETIME) {
        pointsRef.current.shift();
      }

      const pts = pointsRef.current;
      if (pts.length > 1) {
        for (let i = 0; i < pts.length - 1; i++) {
          const p1 = pts[i];
          const p2 = pts[i + 1];
          const age1 = 1 - (now - p1.time) / INK_LIFETIME;
          const age2 = 1 - (now - p2.time) / INK_LIFETIME;
          const avgAge = Math.max(0, (age1 + age2) / 2);

          const strokeWidth = 1.8 + avgAge * 5.8;
          const opacity = Math.min(1, 0.2 + avgAge * 0.8);

          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(20, 20, 20, ${opacity})`;
          ctx.lineWidth = strokeWidth;
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
          ctx.stroke();
        }
      }

      animId = requestAnimationFrame(renderInkTrail);
    };
    animId = requestAnimationFrame(renderInkTrail);

    const handleMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;

      if (!hasMoved) {
        hasMoved = true;
        cursor.style.opacity = '1';
      }

      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;

      const target = e.target;
      const isInteractive = target && typeof target.closest === 'function' && target.closest(
        'a, button, input, textarea, select, [role="button"], .swipe-card, .tech-lang-card, .article-card, .pricing-card, .blog-nav-card, .blog-back-btn, .blog-contact-btn, .capsule-pill, .card-action-btn, .quick-contact-pill, .sketch-modal-close, .modal-btn-primary, .modal-btn-secondary'
      );

      if (isInteractive) {
        cursor.classList.add('is-pointer');
      } else {
        cursor.classList.remove('is-pointer');
      }

      const prev = prevMouseRef.current;
      if (prev.x > 0 && prev.y > 0) {
        const dist = Math.hypot(x - prev.x, y - prev.y);
        if (dist > 3) {
          const steps = Math.min(25, Math.ceil(dist / 3));
          const now = performance.now();
          for (let s = 1; s <= steps; s++) {
            pointsRef.current.push({
              x: prev.x + ((x - prev.x) * s) / steps,
              y: prev.y + ((y - prev.y) * s) / steps,
              time: now
            });
          }
        }
      }
      prevMouseRef.current = { x, y };
    };

    const handleMouseDown = () => {
      cursor.classList.add('clicking');
    };

    const handleMouseUp = () => {
      cursor.classList.remove('clicking');
    };

    const handleMouseLeave = () => {
      cursor.style.opacity = '0';
      prevMouseRef.current = { x: -100, y: -100 };
    };

    const handleMouseEnter = () => {
      if (hasMoved) {
        cursor.style.opacity = '1';
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.body.classList.remove('drawn-cursor-active');
    };
  }, []);

  return (
    <>
      <canvas id="ink-trail-canvas" ref={canvasRef} className="ink-trail-canvas" aria-hidden="true" />
      <div
        id="custom-cursor"
        ref={cursorRef}
        className="drawn-cursor"
        aria-hidden="true"
        style={{ opacity: 0 }}
      >
        <svg className="cursor-svg cursor-arrow" viewBox="0 0 32 32" width="26" height="26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 3 L4 23 L9 18 L14 27 L18 25 L13 16 L20 16 Z" fill="#ffffff" stroke="#141414" strokeWidth="2" strokeLinejoin="round" />
          <path d="M5.5 5.5 L5.5 20.5 L9.5 16.5 L14 24.5 L16.5 23 L12 15 L17.5 15 Z" fill="none" stroke="#444444" strokeWidth="1" strokeLinejoin="round" opacity="0.6" />
          <circle cx="4" cy="3" r="1.2" fill="#141414" />
        </svg>

        <svg className="cursor-svg cursor-pointer-hand" viewBox="0 0 32 32" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 2 C9.5 2, 9 3.5, 9 5 L9 13 L8 13 C6.5 13, 5 14.5, 5 16 L5 20 C5 25, 9 28, 15 28 C21 28, 25 24, 25 19 L25 15 C25 13.5, 23.5 13, 22 13 C21.5 13, 21 13.2, 20.5 13.5 C20 12.5, 18.5 12, 17 12 C16.5 12, 16 12.2, 15.5 12.5 L15.5 5 C15.5 3.5, 14.5 2, 13 2 Z" fill="#ffffff" stroke="#141414" strokeWidth="2" strokeLinejoin="round" />
          <path d="M11 8 L13 8 M16 16 L19 16 M20 17 L23 17" stroke="#141414" strokeWidth="1.2" strokeLinecap="round" />
          <circle cx="12" cy="3" r="1.2" fill="#141414" />
        </svg>
      </div>
    </>
  );
}
