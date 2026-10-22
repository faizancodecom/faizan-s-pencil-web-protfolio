/**
 * FAIZAN // UI/UX DEVELOPER PORTFOLIO
 * Handcrafted Script
 * Features:
 *  - Custom hand-drawn arrow & pointing-hand cursor
 *  - Thick, continuous, solid black ink trail (no dashes)
 *  - Direct mouse click-and-hold drag & swipe card stack in Hero (cycles cards to back of deck)
 *  - Handcrafted Sketch Toast popup (cool notifications instead of browser alert)
 *  - Sticky navigation active section tracking
 *  - Paper airplane contact form animation
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. HAND-DRAWN CUSTOM CURSOR & THICK CONTINUOUS BLACK INK TRAIL
     ========================================================================== */
  const drawnCursor = document.getElementById('custom-cursor');
  const trailCanvas = document.getElementById('ink-trail-canvas');
  let trailCtx = null;
  let cursorActive = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  let mouseX = -100, mouseY = -100;
  let prevMouseX = -100, prevMouseY = -100;
  let isPointerHover = false;

  const inkPoints = [];
  const INK_LIFETIME = 320; // milliseconds ink remains before fading

  if (cursorActive && drawnCursor) {
    document.body.classList.add('drawn-cursor-active');
  }

  // Setup Ink Trail Canvas
  if (trailCanvas) {
    trailCtx = trailCanvas.getContext('2d');

    function resizeTrailCanvas() {
      trailCanvas.width = window.innerWidth * window.devicePixelRatio;
      trailCanvas.height = window.innerHeight * window.devicePixelRatio;
      trailCtx.scale(window.devicePixelRatio, window.devicePixelRatio);
    }
    resizeTrailCanvas();
    window.addEventListener('resize', resizeTrailCanvas);

    // Continuous Thick Solid Ink Trail Loop
    function renderThickInkTrail() {
      if (!trailCtx) return;

      trailCtx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      const now = performance.now();

      // Remove dried ink points
      while (inkPoints.length > 0 && (now - inkPoints[0].time) > INK_LIFETIME) {
        inkPoints.shift();
      }

      // Draw continuous tapered black ink stroke (NO dashes, solid fluid ink)
      if (inkPoints.length > 1) {
        for (let i = 0; i < inkPoints.length - 1; i++) {
          const p1 = inkPoints[i];
          const p2 = inkPoints[i + 1];

          const age1 = 1 - (now - p1.time) / INK_LIFETIME;
          const age2 = 1 - (now - p2.time) / INK_LIFETIME;
          const avgAge = Math.max(0, (age1 + age2) / 2);

          const strokeWidth = 1.8 + avgAge * 5.8;
          const opacity = Math.min(1, 0.2 + avgAge * 0.8);

          trailCtx.beginPath();
          trailCtx.moveTo(p1.x, p1.y);
          trailCtx.lineTo(p2.x, p2.y);
          trailCtx.strokeStyle = `rgba(20, 20, 20, ${opacity})`;
          trailCtx.lineWidth = strokeWidth;
          trailCtx.lineCap = 'round';
          trailCtx.lineJoin = 'round';
          trailCtx.stroke();
        }
      }

      requestAnimationFrame(renderThickInkTrail);
    }
    requestAnimationFrame(renderThickInkTrail);
  }

  // Mouse move handler with point interpolation
  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (prevMouseX > 0 && prevMouseY > 0) {
      const dist = Math.hypot(mouseX - prevMouseX, mouseY - prevMouseY);
      if (dist > 3) {
        const steps = Math.min(25, Math.ceil(dist / 3));
        const now = performance.now();
        for (let s = 1; s <= steps; s++) {
          inkPoints.push({
            x: prevMouseX + ((mouseX - prevMouseX) * s) / steps,
            y: prevMouseY + ((mouseY - prevMouseY) * s) / steps,
            time: now
          });
        }
      }
    } else {
      inkPoints.push({ x: mouseX, y: mouseY, time: performance.now() });
    }

    prevMouseX = mouseX;
    prevMouseY = mouseY;

    if (!cursorActive || !drawnCursor) return;

    if (isPointerHover) {
      drawnCursor.style.transform = `translate(${e.clientX - 12}px, ${e.clientY - 3}px)`;
    } else {
      drawnCursor.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 3}px)`;
    }
  });

  window.addEventListener('mousedown', () => {
    if (drawnCursor) drawnCursor.classList.add('clicking');
  });

  window.addEventListener('mouseup', () => {
    if (drawnCursor) drawnCursor.classList.remove('clicking');
  });

  function initPointerHoverables() {
    const interactives = document.querySelectorAll('a, button, input, textarea, select, .swipe-card, .hero-plane-wave, .meta-item, .wf-card, .algo-control-btn, .tech-lang-card');
    interactives.forEach(el => {
      el.addEventListener('mouseenter', () => {
        isPointerHover = true;
        if (drawnCursor) drawnCursor.classList.add('is-pointer');
      });
      el.addEventListener('mouseleave', () => {
        isPointerHover = false;
        if (drawnCursor) drawnCursor.classList.remove('is-pointer');
      });
    });
  }
  initPointerHoverables();

  /* ==========================================================================
     2. HANDCRAFTED PENCIL SKETCH MODAL POPUP SYSTEM (No Alerts, Real Popups)
     ========================================================================== */
  const modalOverlay = document.getElementById('sketch-modal-overlay');
  const modalDialog = document.getElementById('sketch-modal-dialog');
  const modalCloseBtn = document.getElementById('sketch-modal-close');
  const modalStampPill = document.getElementById('modal-stamp-pill');
  const modalStatusText = document.getElementById('modal-status-text');
  const modalHeading = document.getElementById('modal-heading');
  const modalBodyContent = document.getElementById('modal-body-content');
  const modalActionsRow = document.getElementById('modal-actions-row');

  function openSketchPopup({
    stamp = 'Studio Note',
    statusText = 'Drafted by Faizan',
    title = 'Information',
    contentHtml = '',
    primaryBtnText = 'Dismiss',
    primaryBtnAction = null,
    secondaryBtnText = '',
    secondaryBtnHref = ''
  }) {
    if (!modalOverlay) return;

    if (modalStampPill) modalStampPill.textContent = stamp;
    if (modalStatusText) modalStatusText.textContent = statusText;
    if (modalHeading) modalHeading.textContent = title;
    if (modalBodyContent) modalBodyContent.innerHTML = contentHtml;

    // Render Action Buttons
    if (modalActionsRow) {
      modalActionsRow.innerHTML = '';

      if (secondaryBtnText && secondaryBtnHref) {
        const secLink = document.createElement('a');
        secLink.className = 'modal-btn-secondary';
        secLink.href = secondaryBtnHref;
        secLink.target = '_blank';
        secLink.rel = 'noopener';
        secLink.innerHTML = `<span>${secondaryBtnText}</span><span>↗</span>`;
        modalActionsRow.appendChild(secLink);
      }

      const primBtn = document.createElement('button');
      primBtn.type = 'button';
      primBtn.className = 'modal-btn-primary';
      primBtn.textContent = primaryBtnText;
      primBtn.addEventListener('click', () => {
        if (typeof primaryBtnAction === 'function') {
          primaryBtnAction();
        }
        closeSketchPopup();
      });
      modalActionsRow.appendChild(primBtn);
    }

    modalOverlay.classList.add('is-open');
    modalOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Hook custom cursor on new buttons
    initPointerHoverables();
  }

  function closeSketchPopup() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('is-open');
    modalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeSketchPopup);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeSketchPopup();
      }
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('is-open')) {
      closeSketchPopup();
    }
  });

  /* ==========================================================================
     3. DIRECT MOUSE CLICK-AND-HOLD SWIPE / DRAG ON HERO CARDS
     ========================================================================== */
  const swipeStack = document.getElementById('swipe-stack');
  const cards = Array.from(document.querySelectorAll('.swipe-card'));
  let activeIndex = 0;
  const totalCards = cards.length;

  let isDraggingCard = false;
  let dragStartX = 0;
  let dragStartY = 0;
  let dragStartTime = 0;
  let currentDragX = 0;
  let currentDragY = 0;
  let isSwappingInProgress = false;

  function updateCardStack() {
    cards.forEach((card, i) => {
      card.classList.remove('is-active', 'is-stacked-1', 'is-stacked-2', 'is-hidden', 'is-dragging');
      card.style.transform = '';
      card.style.opacity = '1';
      card.style.transition = '';

      const relativeIndex = (i - activeIndex + totalCards) % totalCards;

      if (relativeIndex === 0) {
        card.classList.add('is-active');
      } else if (relativeIndex === 1) {
        card.classList.add('is-stacked-1');
      } else if (relativeIndex === 2) {
        card.classList.add('is-stacked-2');
      } else {
        card.classList.add('is-hidden');
      }
    });
  }

  // Smooth physical shuffle: Top card slides out, then enters at the VERY BACK of stack (NO FADE OUT)
  function swapCardToBack(direction = 1) {
    if (isSwappingInProgress) return;
    isSwappingInProgress = true;

    const oldActiveCard = cards[activeIndex];
    const nextIndex = (activeIndex + 1) % totalCards;
    const newActiveCard = cards[nextIndex];
    const newStacked1Card = cards[(nextIndex + 1) % totalCards];

    // 1. Old active card slides outward - stays 100% solid, NO fade-out
    oldActiveCard.style.transition = 'transform 0.28s ease-out';
    oldActiveCard.style.transform = `translate3d(${direction * 350}px, 24px, 0) rotate(${direction * 14}deg)`;
    oldActiveCard.style.opacity = '1';

    // 2. The second card smoothly steps forward to become active
    newActiveCard.style.transition = 'transform 0.32s cubic-bezier(0.2, 0.8, 0.2, 1)';
    newActiveCard.style.transform = 'translate3d(0, 0, 0) rotate(-1deg)';
    newActiveCard.style.opacity = '1';
    newActiveCard.style.zIndex = '10';

    // 3. The third card smoothly steps up to stacked 1
    newStacked1Card.style.transition = 'transform 0.32s cubic-bezier(0.2, 0.8, 0.2, 1)';
    newStacked1Card.style.transform = 'translate3d(14px, -10px, 0) rotate(1.4deg)';
    newStacked1Card.style.opacity = '1';
    newStacked1Card.style.zIndex = '5';

    // 4. After flying out, the old card swings to the VERY BACK of the deck (is-stacked-2) - stays 100% solid
    setTimeout(() => {
      oldActiveCard.style.zIndex = '2';
      oldActiveCard.style.transition = 'transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)';
      oldActiveCard.style.transform = 'translate3d(28px, -18px, 0) rotate(2.8deg)';
      oldActiveCard.style.opacity = '1';

      setTimeout(() => {
        activeIndex = nextIndex;
        updateCardStack();
        isSwappingInProgress = false;
      }, 200);
    }, 220);
  }

  // Pointer event listeners on the card stack for seamless click-hold drag
  if (swipeStack) {
    function onPointerDown(e) {
      if (isSwappingInProgress) return;
      if (e.target.closest('button, a, input')) return;

      const activeCard = cards[activeIndex];
      if (!activeCard) return;

      isDraggingCard = true;
      dragStartX = e.clientX;
      dragStartY = e.clientY;
      currentDragX = e.clientX;
      currentDragY = e.clientY;
      dragStartTime = performance.now();

      activeCard.classList.add('is-dragging');
      try {
        activeCard.setPointerCapture(e.pointerId);
      } catch (err) {}
    }

    function onPointerMove(e) {
      if (!isDraggingCard) return;

      currentDragX = e.clientX;
      currentDragY = e.clientY;

      const deltaX = currentDragX - dragStartX;
      const deltaY = currentDragY - dragStartY;
      const rotateDeg = deltaX * 0.08;

      const activeCard = cards[activeIndex];
      if (activeCard) {
        activeCard.style.transform = `translate3d(${deltaX}px, ${deltaY * 0.35}px, 0) rotate(${rotateDeg}deg) scale(1.02)`;
      }
    }

    function onPointerUp(e) {
      if (!isDraggingCard) return;
      isDraggingCard = false;

      const activeCard = cards[activeIndex];
      if (!activeCard) return;

      activeCard.classList.remove('is-dragging');

      try {
        activeCard.releasePointerCapture(e.pointerId);
      } catch (err) {}

      const deltaX = currentDragX - dragStartX;
      const dragDuration = performance.now() - dragStartTime;

      if (deltaX > 40 || (deltaX > 18 && dragDuration < 200)) {
        // Swiped Right -> Swap card to back
        swapCardToBack(1);
      } else if (deltaX < -40 || (deltaX < -18 && dragDuration < 200)) {
        // Swiped Left -> Swap card to back
        swapCardToBack(-1);
      } else if (Math.abs(deltaX) < 10 && dragDuration < 250) {
        // Quick tap/click directly swaps card to back
        swapCardToBack(1);
      } else {
        // Spring back to active position
        activeCard.style.transition = 'transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)';
        activeCard.style.transform = 'translate3d(0, 0, 0) rotate(-1deg)';
      }
    }

    swipeStack.addEventListener('pointerdown', onPointerDown);
    swipeStack.addEventListener('pointermove', onPointerMove);
    swipeStack.addEventListener('pointerup', onPointerUp);
    swipeStack.addEventListener('pointercancel', onPointerUp);

    // Initial layout
    updateCardStack();

    // Interactive Hand-Drawn Paper Plane Wave Shuffle Trigger
    const heroPlaneWave = document.getElementById('hero-plane-wave');
    if (heroPlaneWave) {
      heroPlaneWave.addEventListener('click', (e) => {
        e.preventDefault();
        swapCardToBack(1);
      });
      heroPlaneWave.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          swapCardToBack(1);
        }
      });
    }
  }

  // 1. AlgoPlay Simulation Popup
  const algoControlBtn = document.querySelector('.algo-control-btn');
  if (algoControlBtn) {
    algoControlBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const bars = document.querySelectorAll('.algo-bar-col');
      const heights = ['25%', '45%', '85%', '60%', '35%', '90%'];
      bars.forEach((b, i) => {
        b.style.height = heights[(i + Math.floor(Math.random() * 3)) % heights.length];
      });
      openSketchPopup({
        stamp: 'Algorithm Engine',
        statusText: 'AlgoPlay QuickSort Simulation',
        title: 'Partition Step Completed',
        contentHtml: `
          <p><strong>Pivot Selected:</strong> Array element at index [2] with value <strong>42</strong>.</p>
          <div class="modal-spec-grid">
            <div class="modal-spec-item"><span class="modal-spec-label">Comparisons</span><span class="modal-spec-val">6 Steps</span></div>
            <div class="modal-spec-item"><span class="modal-spec-label">Time Complexity</span><span class="modal-spec-val">O(n log n)</span></div>
            <div class="modal-spec-item"><span class="modal-spec-label">Partition State</span><span class="modal-spec-val">Balanced</span></div>
            <div class="modal-spec-item"><span class="modal-spec-label">Canvas Engine</span><span class="modal-spec-val">Active (60fps)</span></div>
          </div>
          <p>Explore full step-by-step tree graphs, binary search trees, and pathfinding visualizers on the live platform.</p>
        `,
        primaryBtnText: 'Dismiss ✕',
        secondaryBtnText: 'Open algoplay.faizancode.com',
        secondaryBtnHref: 'https://algoplay.faizancode.com'
      });
    });
  }



  // 2. Interactive Tech Language Cards Popup
  const techDetailsData = {
    'JavaScript': {
      stamp: 'Core Language',
      role: 'ES2024+ / Logic & Web APIs',
      desc: 'Faizan utilizes modern ECMAScript features including async/await, Proxy objects, Canvas 2D API, Web Workers, and modular architecture without unnecessary polyfill bloat.'
    },
    'TypeScript': {
      stamp: 'Static Typing',
      role: 'Strict Type Safety & Interfaces',
      desc: 'Used across production codebases for strict type guarantees, generic component props, and robust contract definitions between client and server APIs.'
    },
    'React': {
      stamp: 'UI Library',
      role: 'Component Architecture & Hooks',
      desc: 'Architecting modular, accessible components with custom hooks, memoization, predictable state management, and ergonomic interaction flows.'
    },
    'Next.js': {
      stamp: 'Fullstack Framework',
      role: 'App Router, Server Components & SSR',
      desc: 'Production web applications leveraging Next.js App Router, edge middleware, image optimization, and static site generation for lightning-fast loads.'
    },
    'Python': {
      stamp: 'Data & Scripting',
      role: 'Algorithms, Data Structures & Automation',
      desc: 'Utilized for algorithmic problem-solving, data parsing scripts, automation pipelines, and backend logic prototyping.'
    },
    'HTML5': {
      stamp: 'Markup Standard',
      role: 'Semantic Structure & Accessibility',
      desc: '100% semantic HTML5 ensuring proper landmarks, ARIA live regions, readable heading hierarchy, and zero div-soup.'
    },
    'CSS3': {
      stamp: 'Styling Architecture',
      role: 'Custom Properties, Flexbox & CSS Grid',
      desc: 'Fluid responsive design, container queries, hardware-accelerated transforms, and pure hand-drawn aesthetic styling.'
    },
    'Tailwind': {
      stamp: 'Utility Engine',
      role: 'Rapid Responsive UI Engineering',
      desc: 'Custom-configured Tailwind tokens adhering to strict typography and spacing scales for rapid, consistent production builds.'
    },
    'Node.js': {
      stamp: 'Runtime Environment',
      role: 'HTTP Servers, REST APIs & Tooling',
      desc: 'Building lightweight local servers, custom build tools, and high-performance serverless endpoints.'
    },
    'Git': {
      stamp: 'Version Control',
      role: 'Branching, Clean Commits & CI/CD',
      desc: 'Disciplined version control workflows, semantic commit conventions, and collaborative code reviews.'
    },
    'Figma': {
      stamp: 'Design Software',
      role: 'Wireframing, Auto-Layout & Design Tokens',
      desc: 'Translating rough paper sketches into atomic design systems, interactive prototypes, and developer handoff specs.'
    },
    'C++': {
      stamp: 'Algorithmic Foundation',
      role: 'Data Structures, Memory & Performance',
      desc: 'Deep understanding of memory management, pointer arithmetic, algorithmic time complexity, and low-level computational efficiency.'
    }
  };

  const techCards = document.querySelectorAll('.tech-lang-card');
  techCards.forEach(card => {
    card.addEventListener('click', () => {
      const name = card.querySelector('.tech-lang-name')?.textContent || 'Technology';
      const info = techDetailsData[name] || {
        stamp: 'Technology Stack',
        role: card.querySelector('.tech-lang-role')?.textContent || 'Production Tool',
        desc: 'Production tool actively applied across responsive digital products and user interfaces.'
      };

      openSketchPopup({
        stamp: info.stamp,
        statusText: `Faizan's Toolkit • ${info.role}`,
        title: `${name} Specification`,
        contentHtml: `
          <p><strong>Role &amp; Proficiency:</strong> ${info.role}</p>
          <p>${info.desc}</p>
          <div class="modal-spec-grid">
            <div class="modal-spec-item"><span class="modal-spec-label">Status</span><span class="modal-spec-val">Production Active</span></div>
            <div class="modal-spec-item"><span class="modal-spec-label">Focus</span><span class="modal-spec-val">Accessibility &amp; Speed</span></div>
          </div>
        `,
        primaryBtnText: 'Close Spec ✕'
      });
    });
  });

  // 3. Interactive Project Case Study Popups
  const projectCaseStudies = [
    {
      stamp: 'FinTech Case Study',
      statusText: 'Produced for ScribblePay',
      title: 'ScribblePay — Digital Banking UI',
      contentHtml: `
        <p><strong>Overview:</strong> Transformed a complex, legacy multi-step mobile banking process into a fluid two-step money transfer workflow with real-time balance calculations.</p>
        <div class="modal-spec-grid">
          <div class="modal-spec-item"><span class="modal-spec-label">Process Reduction</span><span class="modal-spec-val">42% Fewer Steps</span></div>
          <div class="modal-spec-item"><span class="modal-spec-label">Accessibility</span><span class="modal-spec-val">WCAG AA 100%</span></div>
          <div class="modal-spec-item"><span class="modal-spec-label">Framework</span><span class="modal-spec-val">React + TypeScript</span></div>
          <div class="modal-spec-item"><span class="modal-spec-label">Key Outcome</span><span class="modal-spec-val">Zero Transfer Errors</span></div>
        </div>
        <p><strong>Design Approach:</strong> Every state was prototyped with tactile feedback. Interactive field validation ensures accounts and currencies are confirmed before sending funds.</p>
      `,
      primaryBtnText: 'Close Case Study ✕',
      secondaryBtnText: 'Open faizancode.com',
      secondaryBtnHref: 'https://faizancode.com'
    },
    {
      stamp: 'Design Systems',
      statusText: 'Architected by Faizan',
      title: 'ArtisanUI — Modular UI System',
      contentHtml: `
        <p><strong>Overview:</strong> A scalable graphite-to-code design system containing 45 reusable UI components, complete design tokens, and comprehensive keyboard navigation.</p>
        <div class="modal-spec-grid">
          <div class="modal-spec-item"><span class="modal-spec-label">Component Count</span><span class="modal-spec-val">45 Modules</span></div>
          <div class="modal-spec-item"><span class="modal-spec-label">Design Tokens</span><span class="modal-spec-val">Spacing &amp; Colors</span></div>
          <div class="modal-spec-item"><span class="modal-spec-label">Storybook Specs</span><span class="modal-spec-val">100% Documented</span></div>
          <div class="modal-spec-item"><span class="modal-spec-label">Bundle Size</span><span class="modal-spec-val">&lt; 14kB Gzipped</span></div>
        </div>
        <p><strong>Engineering Core:</strong> Built using clean CSS variables and semantic HTML elements, eliminating bulky runtime overhead.</p>
      `,
      primaryBtnText: 'Close Case Study ✕',
      secondaryBtnText: 'View Prototype',
      secondaryBtnHref: 'https://faizandev-prot.vercel.app'
    },
    {
      stamp: 'Productivity Application',
      statusText: 'Produced for FlowState',
      title: 'FlowState — Minimalist Workspace',
      contentHtml: `
        <p><strong>Overview:</strong> An ultra-focused, distraction-free markdown note-taking and visual thinking application with local offline storage.</p>
        <div class="modal-spec-grid">
          <div class="modal-spec-item"><span class="modal-spec-label">Storage Engine</span><span class="modal-spec-val">IndexedDB Offline</span></div>
          <div class="modal-spec-item"><span class="modal-spec-label">First Input Delay</span><span class="modal-spec-val">&lt; 16ms</span></div>
          <div class="modal-spec-item"><span class="modal-spec-label">Ergonomics</span><span class="modal-spec-val">Thumb-Reach Friendly</span></div>
          <div class="modal-spec-item"><span class="modal-spec-label">PWA Status</span><span class="modal-spec-val">Installable</span></div>
        </div>
        <p><strong>Human Ergonomics:</strong> Key formatting controls are positioned within comfortable single-hand reach zones on mobile screens.</p>
      `,
      primaryBtnText: 'Close Case Study ✕',
      secondaryBtnText: 'Launch Live Hub',
      secondaryBtnHref: 'https://faizancode.com'
    }
  ];

  const projectTriggerBtns = document.querySelectorAll('.project-popup-trigger-btn');
  projectTriggerBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const idx = parseInt(btn.getAttribute('data-project-idx') || '0', 10);
      const study = projectCaseStudies[idx] || projectCaseStudies[0];
      openSketchPopup(study);
    });
  });

  // 4. Interactive Article Reading Popups
  const articleReadings = [
    {
      stamp: 'Design Insights',
      statusText: 'October 2026 • 5 min read',
      title: 'Why Low-Fidelity Wireframes Save Weeks of Development',
      contentHtml: `
        <p>When design teams jump straight into high-fidelity mockups or premature code styling, conversations get derailed by button colors, border radiuses, and surface decoration instead of core user flows.</p>
        <p><strong>1. Structural Clarity:</strong> Rough pencil wireframes force everyone to evaluate the hierarchy: What is the primary user goal? Where is the friction?</p>
        <p><strong>2. Low Emotional Investment:</strong> A sketch on paper takes 2 minutes to iterate. A coded component takes hours. People are much more willing to discard a flawed idea when it's drawn in 2B graphite.</p>
        <p><strong>3. True Accessibility:</strong> When you strip away colors, you immediately see if the typographic hierarchy and reading order hold up on their own.</p>
      `,
      primaryBtnText: 'Finish Reading ✕'
    },
    {
      stamp: 'Design Insights',
      statusText: 'September 2026 • 7 min read',
      title: 'Designing Web Experiences with Human Warmth',
      contentHtml: `
        <p>Modern software often suffers from corporate sterility — flat geometric grids that feel designed by algorithms rather than humans. True craftsmanship comes from tactile character.</p>
        <p><strong>1. Organic Imperfection:</strong> Subtle variations in line weight, hand-drawn contours, and tactile hover feedback give an interface life without sacrificing usability.</p>
        <p><strong>2. Respect for Mental Energy:</strong> Warm design is calm design. It doesn't scream with push alerts; it guides the reader with generous margins and readable contrast.</p>
      `,
      primaryBtnText: 'Finish Reading ✕'
    },
    {
      stamp: 'Design Insights',
      statusText: 'August 2026 • 4 min read',
      title: 'The Physical Ergonomics of Responsive Layouts',
      contentHtml: `
        <p>Screens are physical objects held by human hands. Designing for mobile isn't just about shrinking columns from 1200px to 390px — it's about respecting the biomechanics of thumb movement.</p>
        <p><strong>1. The Natural Thumb Arc:</strong> The bottom-center and lower-right regions are easiest to reach single-handed. Critical CTAs belong here.</p>
        <p><strong>2. Desktop Gaze Comfort:</strong> On widescreen monitors, line lengths should never exceed 75 characters to prevent eye strain during sustained reading.</p>
      `,
      primaryBtnText: 'Finish Reading ✕'
    }
  ];

  const articleTriggerBtns = document.querySelectorAll('.article-popup-trigger-btn');
  articleTriggerBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const idx = parseInt(btn.getAttribute('data-article-idx') || '0', 10);
      const article = articleReadings[idx] || articleReadings[0];
      openSketchPopup(article);
    });
  });

  /* ==========================================================================
     4. PRICING CTA HOOK: PRE-FILL CONTACT MESSAGE
     ========================================================================== */
  const pricingCtaBtns = document.querySelectorAll('.pricing-cta-btn, .pricing-note-link');
  pricingCtaBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const plan = btn.getAttribute('data-plan');
      const messageField = document.getElementById('form-message');
      if (messageField) {
        if (plan) {
          messageField.value = `Hi Faizan, I would like to get started with the ${plan} package. Here are the details about my product: \n`;
        } else {
          messageField.value = `Hi Faizan, I am interested in a custom project consultation for my product: \n`;
        }
        setTimeout(() => {
          messageField.focus();
        }, 500);
      }
    });
  });

  /* ==========================================================================
     5. CONTACT FORM: PAPER AIRPLANE ANIMATION & SKETCH POPUP
     ========================================================================== */
  const contactForm = document.getElementById('contact-form');
  const submitPlaneIcon = document.getElementById('submit-plane-icon');
  const btnLabelText = document.getElementById('btn-label-text');
  const formSuccess = document.getElementById('form-success');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('form-name').value.trim();
      const email = document.getElementById('form-email').value.trim();
      const message = document.getElementById('form-message').value.trim();

      // REAL PENCIL POPUP INSTEAD OF BROWSER ALERT OR TOAST
      if (!name || !email || !message) {
        openSketchPopup({
          stamp: 'Notice',
          statusText: 'Required Fields Incomplete',
          title: 'Missing Details',
          contentHtml: '<p>Please complete your <strong>Name</strong>, <strong>Email Address</strong>, and <strong>Project Details</strong> before dispatching the paper airplane.</p>',
          primaryBtnText: 'Understood [✓]'
        });
        return;
      }

      if (btnLabelText) btnLabelText.textContent = 'sending...';
      if (submitPlaneIcon) {
        submitPlaneIcon.style.transition = 'transform 1s cubic-bezier(0.2, 0.8, 0.2, 1)';
        submitPlaneIcon.style.transform = 'translate(120px, -70px) rotate(-30deg) scale(1.5)';
      }

      setTimeout(() => {
        if (formSuccess) formSuccess.classList.remove('hidden');
        contactForm.reset();
        if (btnLabelText) btnLabelText.textContent = 'note sent';
        if (submitPlaneIcon) {
          submitPlaneIcon.style.transition = 'none';
          submitPlaneIcon.style.transform = 'none';
        }
        openSketchPopup({
          stamp: 'Transmission Confirmed',
          statusText: 'Dispatched to Faizan\'s Desk',
          title: 'Paper Airplane Dispatched! ✈',
          contentHtml: `
            <p>Thank you <strong>${name}</strong>! Your note has been folded, stamped, and dispatched.</p>
            <p>I typically review inquiries within 24 hours and will reply to <em>${email}</em> promptly.</p>
          `,
          primaryBtnText: 'Done [✓]'
        });
      }, 1000);
    });
  }

  /* ==========================================================================
     5. STICKY NAVIGATION ACTIVE SECTION TRACKER
     ========================================================================== */
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    let activeId = '';
    const scrollPos = window.scrollY + 140;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        activeId = section.getAttribute('id');
      }
    });

    if (activeId) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${activeId}`) {
          link.classList.add('active');
        }
      });
    }
  });

});
