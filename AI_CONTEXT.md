# ✏️ FAIZAN PORTFOLIO — AI CONTEXT & SYSTEM ARCHITECTURE
> **Important Note for Future AI Assistants:**
> Read this file first! It contains the complete technical architecture, design tokens, component specifications, user preferences, and styling constraints for this project. Reading this file prevents wasting context tokens on full file scans.

---

## 1. Project Overview & Philosophy

- **Owner:** Faizan
- **Role:** UI/UX Developer & Web Designer
- **Email:** `thetriquetradeveloper@gmail.com`
- **GitHub:** `https://github.com/Faizan-code-arch`
- **LinkedIn:** Integrated with official Icons8 badge
- **Design Aesthetic:** Authentic 2B Graphite Pencil Sketchbook. Hand-drawn contours, organic wobbly borders, real-time black ink trail, tactile paper airplane animations, and zero generic "AI Slop".
- **Tech Stack:** React 19, Vite, Semantic HTML5, Pure Modern CSS3 (CSS Variables, Grid, Flexbox), ES Modules.
- **Local Server:** Built-in zero-dependency Node.js HTTP static server in [`server.js`](file:///e:/AI%20based/pencil%20style%20designher%20prolfio/server.js) running at `http://localhost:3000`, serving the production React build from `dist/` with fallback to root.
- **Vite Dev Server:** Run `npm run dev` for instant HMR.
- **Vite Production Build:** Run `npm run build` (outputs to `dist/` in ~150ms).

---

## 2. Design Tokens & Global CSS Variables

```css
:root {
  --bg-page: #fbfbf9;         /* Warm ivory sketchbook parchment */
  --bg-card: #ffffff;         /* Clean white sketch paper */
  --pencil-black: #141414;    /* Deep 2B graphite black */
  --pencil-dark: #242424;     /* Dark shading */
  --pencil-medium: #4a4a4a;   /* Midtone graphite */
  --pencil-light: #7a7a7a;    /* Faint pencil line */
  --pencil-faint: #d4d4d4;    /* Subtle sketch guidelines */
  --pencil-border: #1a1a1a;   /* Primary ink/graphite contour */
  --pencil-shadow: 3px 5px 0px rgba(20, 20, 20, 0.1);

  /* Handwritten Sketch Typography */
  --font-heading: 'Caveat', cursive, sans-serif;          /* Signature & expressive headings */
  --font-sketch: 'Architects Daughter', cursive, sans-serif; /* Architectural notes & technical labels */
  --font-body: 'Patrick Hand', cursive, sans-serif;       /* Clean, legible handwriting */
}
```

### Signature Hand-Drawn Contour Rule
All cards, capsules, buttons, and popups use irregular organic border-radius:
```css
border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
```

### Scrollbar Specification (User Hard Constraint)
- Scrollbar MUST BE 100% VISUALLY HIDDEN across all browsers, but page scrolling MUST remain fully active:
```css
html, body {
  scrollbar-width: none;        /* Firefox */
  -ms-overflow-style: none;     /* IE and Edge */
}
::-webkit-scrollbar {
  display: none !important;     /* Chrome, Safari, Opera */
  width: 0 !important;
  height: 0 !important;
}
```

### Lenis Smooth Scrolling Integration
- Powered by `lenis` package with custom physics interpolation (`duration: 1.15`, cubic easing `Math.min(1, 1.001 - Math.pow(2, -10 * t))`).
- `autoRaf: true` and `anchors: true` for automatic frame rendering and anchor link handling.
- Exposes `window.lenis` globally for programmatic smooth scrolling (`lenis.scrollTo(el, { offset: -70 })`).
- CSS rules in `styles.css`:
  - `html.lenis, html.lenis body { height: auto; }`
  - `.lenis.lenis-smooth { scroll-behavior: auto !important; }` (native `scroll-behavior: smooth` removed to prevent jitter).
  - `.lenis.lenis-stopped { overflow: clip; }`
  - `.sketch-modal-dialog` equipped with `data-lenis-prevent` and background Lenis scroll locked via `lenis.stop()` when modal is open.

---

## 3. React Architecture & File Map

```
e:/AI based/pencil style designher prolfio/
├── package.json          # React 19 + Vite scripts ("dev", "build", "preview", "start")
├── vite.config.js        # Vite config with @vitejs/plugin-react
├── index.html            # Vite React entry mount (<div id="root">)
├── blog.html             # Standalone Blog Reader Page (loads in same tab)
├── styles.css            # Complete design system, themes, animations, media queries
├── server.js             # ESM HTTP static server (serves dist/ or root at port 3000)
├── AI_CONTEXT.md         # THIS FILE: Comprehensive architecture & instructions for AI
├── README.md             # Public project summary and quickstart
├── public/               # Static assets copied into dist/ on build
│   └── assets/icons/     # 14 Local Icons8 PNG Assets
└── src/
    ├── main.jsx          # React createRoot mount
    ├── App.jsx           # Root coordinator: Portfolio view <-> BlogPost view switcher
    ├── data/
    │   └── portfolioData.js # Centralized dataset (platforms, tech, projects, pricing, blog)
    └── components/
        ├── CustomCursor.jsx # Animated pointing hand cursor + fluid black ink canvas
        ├── SketchModal.jsx  # Global hand-drawn pencil sketch popup dialog
        ├── Navbar.jsx       # Sticky hand-drawn capsule navigation
        ├── Hero.jsx         # Single-line title, 3D card deck (height: 235px thumb), plane wave
        ├── About.jsx        # Polaroid avatar, bio, and 3 core principles (no numbers)
        ├── Skills.jsx       # 12 Icons8 tools shelf + 2 Black/White discipline cards
        ├── Projects.jsx     # 3 wireframe case studies with inspect popups
        ├── Process.jsx      # 4-step concept-to-browser workflow
        ├── Pricing.jsx      # 3 tiers ($350, $850, $1600+) + paper clip scope note + CTA prefill
        ├── Blog.jsx         # 3 article cards with "Read Note ↗" opening same tab
        ├── BlogPost.jsx     # Dedicated full-page article reader with "← Back to Portfolio"
        ├── Contact.jsx      # Pencil form with paper airplane animation, Gmail & LinkedIn
        └── Footer.jsx       # 3 columns + centered "Made by Faizan"
```

---

## 4. Key Components & Implementation Details

### Hero Section & Taller Thumbnail Height
- **Headline Structure:**
  ```html
  <h1 class="hero-title">
    <div class="hero-title-row">
      <span class="name-line">Faizan</span>
      <span class="role-line">UI/UX</span>
    </div>
    <span class="sub-role-line">Developer</span>
  </h1>
  <div class="scribble-underline" aria-hidden="true">
    <svg viewBox="0 0 340 24">...</svg>
  </div>
  ```
- **Scribble Underline:** Must remain outside `<h1>` and capped at `max-width: 320px; height: 20px;` so it hugs "Developer" and doesn't stretch across the column.
- **Card Window Structure:**
  - Header: `.frame-topbar` containing `.dots-group` (3 `.window-dot`), `.frame-url-bar` (`.url-text`), and `.frame-view-tag` (`tap to swap`).
  - Body: `.frame-viewport` containing `.card-platform-header` (`.platform-badge-row` with `.platform-tag` only; `Live Production` status badge removed), `.platform-title`, `.platform-snippet`.
  - Preview Image: Local cached screenshots in `/assets/previews/` (`faizancode.png`, `algoplay.png`, `faizandev.png`) on clean `.platform-thumbnail-container` (`background: #fdfdfa`).
  - Tags: `.wf-pill-tags-row` with `.wf-mini-tag`.
  - Actions: `.platform-card-actions` with `.card-launch-btn` (`Website 1 of 3` counter pill removed per user request).
- **Hero Spacing:** `.hero-section` has `padding: 120px 24px 80px;` with `.hero-right` having `margin-top: 14px;` to position both columns lower with generous breathing room under the sticky capsule.
- **Paper Plane Wave Doodle (Pointing Towards Contact Button, Tilted & Spaced):** Positioned inside `.hero-actions` beside the `contact` capsule button. Authoring matches the user's hand-drawn blueprint with a looping 2B pencil trail, arrowhead, and perched paper airplane. Spaced with `margin-left: 22px` (ample breathing room away from the button) and tilted at `transform: rotate(-100deg)` (`transform-origin: center center`) so it swoops dynamically down-left towards the `[ contact ✈ ]` capsule button. Pure static pencil sketch doodle with NO hover scaling, NO click functions, and `pointer-events: none`.

### About Section (Unboxed Layout)
- **Outer Box Removed (Hard Requirement):** The giant enclosing sketchbook card border (`.sketchbook-card`) has been completely removed (`border: none; background: transparent; box-shadow: none; padding: 0;`).
- The Polaroid photo (`.polaroid-frame`), bio text, and the 3 Core Principles cards (`.pencil-card`) sit directly and cleanly on the natural paper background.

### Custom Cursor & Black Ink Trail Canvas
- Hand-drawn pencil pointer arrow & pointing hand SVG cursor with a smooth 120fps ink trail canvas.
- **Implementation Strategy:**
  - Must mount DOM nodes immediately on initial render (`return (<>...<canvas/>...<div/>)`) so refs are always available when `useEffect` attaches mouse listeners.
  - Updates cursor position and interactive classes directly on DOM elements without invoking React state setters on mousemove (which would cause 60-120 re-renders per second and freeze DOM updates).
  - Uses `body.drawn-cursor-active, body.drawn-cursor-active * { cursor: none !important; }` to hide the native OS cursor cleanly.
  - Initial `opacity: 0` until the first mousemove event prevents any initial jump/flash at `(0, 0)`.
  - **Maximum Z-Index Rule (Hard Requirement):** `.drawn-cursor` MUST have `z-index: 2147483647` and `.ink-trail-canvas` MUST have `z-index: 2147483640` so the custom cursor is ALWAYS visible on top of modal overlays (`.sketch-modal-overlay` has `z-index: 200000`).

### Multi-Page Blog Post Reader (Opens in Same Tab)
- User hard constraint: Clicking "Read Note ↗" opens the full article in the **SAME tab** (NOT a new blank tab, NOT just a modal).
- Handled both in React (`<BlogPost />` component triggered via state/query param `?article=:id`) and via `blog.html?id=:id`.
- Features:
  - Sticky top bar with symmetrical hand-drawn pencil capsule buttons:
    - **`← Back to Portfolio`** (`.blog-back-btn`) returning smoothly to the portfolio.
    - **`Get in Touch ↗`** (`.blog-contact-btn`) styled cleanly with white background, organic pencil contour border, and smooth hover inversion matching `.blog-back-btn` (no unstyled grey browser bevels).
  - Real-time reading progress bar pinned at the top.
  - Previous and Next article switcher buttons (`.blog-nav-card`).
  - Bottom CTA box leading to Contact.
  - Centered `Made by Faizan` footer.

### Skills Section & Pure Monochrome Discipline Cards
- **Tech Shelf:** 12 colorful Icons8 logos in `assets/icons/` with popup detail modals (WHITELISTED: Keep colorful).
- **Shelf Header:** `12 Production Tools` badge and the dashed border line (`.shelf-header { border-bottom: none; }`) have been completely removed per user request for a minimal, open header.
- **Category Discipline Cards (UI/UX Design & Front-End Development):**
  - All skill meters have pure monochrome graphite styling.
  - Discipline chips (`.pencil-chip`) have crisp 14px icons: Figma, Design Tokens (SVG grid), WCAG Accessibility (SVG icon), User Research (SVG magnifier) on UI/UX Design; Tailwind CSS, React Components, TypeScript, and Git / GitHub (Icons8 PNGs) on Front-End Development. Chips feature clean hover states with subtle sketch shadow elevation.

### Selected Interface Work (Projects Section)
- **Real 3 Platforms (Hard Requirement):** Projects section strictly features the same 3 live platforms showcased in the hero section:
  1. `FaizanCode — Full Stack Developer Hub` (`https://faizancode.com`, preview: `/assets/previews/faizancode.png`)
  2. `AlgoPlay — Interactive Algorithm Visualizer` (`https://algoplay.faizancode.com`, preview: `/assets/previews/algoplay.png`)
  3. `FaizanDev Prot — Modern UI/UX Portfolio` (`https://faizandev-prot.vercel.app`, preview: `/assets/previews/faizandev.png`)
- Each card displays the high-res thumbnail preview image with live link, brand logos on all tech tags (Next.js, TypeScript, React, Tailwind, Git, Figma, Canvas, etc.), and dual actions: `Visit Live Platform ↗` and `Inspect Case Study & Specs ↗`.

### Pricing Section
- **Custom Scope Note Removed:** The paper clip note card ("Looking for something custom? Hourly consulting...") was completely removed per user request.
- **Unboxed Delivery Timeline (Hard Constraint):** Delivery line (`.pricing-timeline`) MUST be clean, unboxed handwritten sketch text with a delicate 2B pencil clock SVG (`Delivery: 3–5 business days`). Absolutely NO grey blockquote/embed boxes (`background: transparent`), NO left vertical bars (`border-left: none`), and NO robotic tildes (`~`).
- **Typography & Spacing:** Features list has `gap: 14px; line-height: 1.5;` and description has `line-height: 1.55;` ensuring spacious, legible reading.
- **Monochrome:** Removed `⏱` and `★` emojis.

### Footer
- Colophon bottom bar MUST strictly say **`Made by Faizan`** with dashed pencil underline.

---

## 5. Critical User Preferences & Regression Guardrails

| Feature / Element | Hard Requirement | Do NOT Do |
| :--- | :--- | :--- |
| **Framework** | Built with React 19 + Vite (`npm run build`, `npm run dev`) | Do NOT delete React components or revert to messy legacy scripts. |
| **Custom Cursor** | Direct DOM manipulation, immediate mount, smooth 120fps tracking, `z-index: 2147483647` over modals | Do NOT use React state setters on mousemove (causes freeze), and do NOT lower z-index below modals (200000). |
| **Blog Header Buttons** | Symmetrical sketch capsule styling for both "Back" and "Get in Touch ↗" | Do NOT leave buttons unstyled with grey OS button bevels. |
| **Blog Navigation** | Opens in the SAME tab with a prominent "← Back to Portfolio" button | Do NOT open in `target="_blank"` or hide the return button. |
| **Home Thumbnail** | Thumbnail image height is 235px (`.platform-thumbnail-container`) | Do NOT shrink thumbnail back to 175px. |
| **Hero Card Height** | `.swipe-cards-stack` min-height is 605px (desktop), 560px (mobile) | Do NOT reduce stack height (causes launch button cut-off). |
| **Hero Title** | `Faizan` and `UI/UX` on the same row (`.hero-title-row`) | Do NOT break `Faizan` and `UI/UX` onto separate rows. |
| **Hero Section Position** | Lowered with `padding: 120px 24px 80px;` | Do NOT stick the hero right up against the top nav. |
| **Plane Wave Doodle** | Static sketch doodle positioned inside `.hero-actions` beside the `contact` button, tilted towards button (`transform: rotate(-100deg)`), spaced with `margin-left: 22px`; no hover effects, no click functions, `pointer-events: none` | Do NOT add click functions, hover scaling, or interactive cursor hand. |
| **Skills Discipline Chips** | Each capsule chip features a 14px icon matching its tech/discipline | Do NOT remove chip icons or leave chips text-only. |
| **Card Swap Animation** | Smooth physical fling out to left, new card steps forward, old card swings to back | Do NOT make card transitions instant or abrupt. |
| **Scrollbar** | 100% hidden visually; scrolling stays functional | Do NOT show visual scrollbars or disable scroll. |
| **Footer Bottom** | Strictly centered `<p class="footer-made-by">Made by Faizan</p>` with NO dashed lines above or below | Do NOT add dashed lines, dividers, badges, spec boxes, or copyright text. |
| **Social Links** | GitHub, Gmail, and LinkedIn only | Do NOT re-add Dribbble or Twitter. |
| **Emoji Whitelist** | ONLY Tech Shelf (12 Icons8 PNGs) & Contact channels (Gmail/LinkedIn) retain brand icons | Do NOT add emojis or colorful SVGs to skills, pricing, or blog. |
| **Pricing Custom Note** | Completely removed | Do NOT re-add the custom retainer note card. |
| **Delivery Timeline Box** | Unboxed, clean handwritten text with 2B pencil clock SVG | Do NOT use grey embed boxes, left vertical bars, or tildes (`~`). |
| **Hero Card Badges** | Only category tag (.platform-tag) and Visit button; Live Production and Website 1 of 3 removed | Do NOT re-add Live Production badge or Website X of Y counter pill. |
| **Numeric Badges** | No `01`, `02`, `03` on About principles or Skill cards | Do NOT add numeric indexing badges back. |
| **About Outer Box** | Completely removed (`.sketchbook-card` wrapper is borderless & transparent); Polaroid and 3 principles sit naturally on paper | Do NOT re-add a giant outer border/box enclosing the About section. |
| **Skills Shelf Header** | No "12 Production Tools" badge and no dashed bottom border line (`border-bottom: none`) | Do NOT re-add the production tools badge or dashed divider. |
| **Projects List** | Features the 3 real platforms (FaizanCode, AlgoPlay, FaizanDev Prot) with live preview images and visit links | Do NOT revert to fictional dummy projects or wireframe stubs. |
| **Project Tech Tags** | Single unified pill badge (`.project-tag-badge`) containing the 14px logo icon and tag name merged seamlessly together with a clean solid pencil border (`1.4px solid var(--pencil-black)`); NO dashed border and NO nested text boxes | Do NOT use dashed borders or create separate inner boxes for tag text. |
| **Smooth Scrolling** | Powered by `lenis` with physics-based smooth interpolation (`duration: 1.15`), `autoRaf: true`, and global `window.lenis` | Do NOT use native `scroll-behavior: smooth` on `html` (conflicts with Lenis physics). |
| **Mobile Nav Capsule** | Fits all 6 links inside capsule without overflowing or cutting off `Contact` on 320px–480px devices | Do NOT set oversized font or gap that forces links outside the hand-drawn border. |
| **Mobile Contact & Doodle** | Contact button (`width: auto`) and tilted plane doodle stay locked side-by-side (`flex-wrap: nowrap`) on all mobile screens | Do NOT make the contact button `width: 100%` which breaks the doodle underneath it. |

---

## 6. How to Run & Verify

1. **Development Server (HMR):**
   ```bash
   npm run dev
   ```
2. **Production Build:**
   ```bash
   npm run build
   ```
3. **Local HTTP Server (Serves dist/ at port 3000):**
   ```bash
   node server.js
   ```
4. **URL:**
   `http://localhost:3000` (Portfolio)  
   `http://localhost:3000/blog.html?id=0` (Direct Blog Post)
