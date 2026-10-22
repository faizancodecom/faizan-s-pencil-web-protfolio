# ✏️ Faizan — Handcrafted Pencil-Style UI/UX Portfolio

A unique, authentic, artisanal portfolio website designed for **Faizan**, a UI/UX Developer and Web Designer. Built with pure handwritten sketch paper aesthetics, graphite pencil physics, wobbly stop-motion contours, and zero automated AI slop.

> 🤖 **Working on this codebase with an AI?**  
> Check [`AI_CONTEXT.md`](AI_CONTEXT.md) for the full architecture, design tokens, section IDs, and strict user constraints.

---

## 🎨 Key Features & Sections

1. **Sticky Hand-Drawn Navigation Capsule (`.site-header`)**:
   - Moves with the user, enclosing `Home`, `Skill`, `Project`, `Pricing`, `Blog`, and `Contact`.
   - Dynamic SVG capsule border scaling with active section scrollspy.

2. **Hero Section (`#home`)**:
   - Single-line title: **`Faizan UI/UX`** + **`Developer`** with signature graphite scribble underline.
   - Handcrafted `contact ✈` action capsule button.
   - Lowered 3D Swipeable Wireframe Browser Stack featuring 3 live production platforms (`faizancode.com`, `algoplay.faizancode.com`, `faizandev-prot.vercel.app`). Drag or click cycles cards to back of deck.
   - Paper Airplane Wave doodle below cards acts as an interactive shuffle trigger.

3. **Custom Cursor & Smooth Ink Trail**:
   - Hand-drawn arrow cursor switching to an animated pointing hand over buttons, links, and cards.
   - Continuous thick, fluid black ink trail drawn dynamically via HTML5 Canvas.

4. **Skills & Capabilities (`#skills`)**:
   - 12 authentic colorful tech stack logos downloaded locally from Icons8 in `assets/icons/` with interactive spec popups.
   - `UI/UX Design` & `Front-End Development` cards with pure Black & White graphite sketch header icons.
   - Animated pencil hatching progress meters and tool chips.

5. **Featured Projects (`#projects`) & Design Process (`#process`)**:
   - Case studies for `ScribblePay`, `ArtisanUI`, and `FlowState` with interactive inspection modal popups.
   - 4-step concept-to-browser workflow connected with hand-drawn SVG graphite arrows.

6. **Transparent Project Pricing (`#pricing`)**:
   - 3 handcrafted scope tiers: *Wireframe & UI Prototype ($350)*, *Design & Front-End Build ($850)*, and *Full Product Ecosystem ($1,600+)*.
   - Custom scope note card with SVG paper clip.
   - CTA buttons smooth scroll to Contact and pre-fill the project details message.

7. **Design Notes & Articles (`#blog`)**:
   - 3 thoughtful UI/UX and ergonomics articles with readable popup notes.

8. **Contact Section (`#contact`) & Architectural Footer (`.site-footer`)**:
   - Pencil fields with paper airplane dispatch animation and confirmation modal popup.
   - Direct correspondence via Gmail and LinkedIn with official Icons8 badges.
   - Footer colophon strictly simplified to a centered **`Made by Faizan`** with dashed pencil underline.

9. **Invisible Smooth Scrollbar**:
   - Visual scrollbar is 100% hidden across all browsers (`scrollbar-width: none; ::-webkit-scrollbar { display: none !important; }`), while mouse wheel and touch scrolling stay fluid.

---

## 🚀 Running the Project

To view the portfolio locally:

```bash
# Start the built-in HTTP server
node server.js
```

Then open your browser at **[http://localhost:3000](http://localhost:3000)**.  
Alternatively, open `index.html` directly in any modern web browser.

---

*Handcrafted with 2B graphite, semantic HTML5, pure CSS3 & vanilla JS • 100% Human Craft • Made by Faizan.*
