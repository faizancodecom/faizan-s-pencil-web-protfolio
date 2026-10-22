# Pencil Style UI/UX Portfolio

A handcrafted, sketch-style portfolio and interactive design showcase developed for Faizan, UI/UX Developer and Web Designer. The project blends tactile hand-drawn aesthetics, graphite pencil shading, paper textures, and responsive web technologies with modern React and Vite architecture.

## Overview

This repository hosts the source code for an artisanal portfolio designed to stand out from generic digital interfaces. It features custom graphite stroke animations, interactive wireframe decks, smooth ink trail physics, responsive component layouts, and an integrated technical blog.

## Core Features

### Hand-Drawn Navigation Capsule
- Persistent header capsule tracking page progress.
- Dynamic SVG border scaling with active section scrollspy.
- Smooth navigation across Home, Skills, Projects, Process, Pricing, Blog, and Contact sections.

### Interactive Hero Experience
- Custom typography layout with signature graphite pencil underline.
- 3D interactive wireframe browser deck showcasing live production platforms (FaizanCode, AlgoPlay, and FaizanDev).
- Interactive card cycling with drag and click interactions.

### Custom Cursor and Canvas Ink Trail
- Interactive hand-drawn arrow and pointer cursor states.
- Continuous dynamic black ink trail rendered in real time using HTML5 Canvas.

### Skills and Capabilities
- Visual tech shelf featuring modern web standards and languages (JavaScript, TypeScript, React, Next.js, Node.js, Python, C++, Tailwind CSS, Figma, Git).
- Interactive specification modal cards detailing competencies, architectures, and design workflows.
- Visual graphite hatching progress meters.

### Featured Projects and Design Process
- Detailed project case studies with modal inspectors.
- Four-stage concept-to-deployment workflow diagram with custom hand-drawn SVG connectors.

### Service Packages and Pricing
- Clear project scope tiers for wireframing, frontend engineering, and end-to-end web applications.
- Integrated quote action that pre-populates project inquiries directly into the contact form.

### Technical Blog and Article Reader
- Built-in reading mode with dedicated URL query sync (`?article=id`) for direct article linking.
- Deep-dive technical articles covering UI architecture, ergonomics, and tactile interface design.

### Contact Interface
- Interactive contact form with sketch-style input fields, submission feedback animations, and modal confirmation.
- Direct correspondence channels via email and LinkedIn.

### Smooth Scrolling Experience
- Integrated Lenis smooth scrolling engine for natural inertia and fluid page motion.
- Hidden browser default scrollbars for an uncluttered reading surface.

## Technology Stack

- Frontend Framework: React 19
- Build Tool: Vite
- Smooth Scroll Engine: Lenis
- Graphics and Interactions: HTML5 Canvas 2D API, SVG
- Styling: Vanilla CSS3 (Custom design system, CSS variables, keyframe animations)
- Server: Node.js HTTP server (for static delivery and local preview)

## Project Structure

```
├── assets/                  # Static media, icons, and platform previews
├── public/                  # Public assets, static HTML fallback, and icons
├── src/
│   ├── components/
│   │   ├── About.jsx        # Background and design philosophy
│   │   ├── Blog.jsx         # Article cards and overview list
│   │   ├── BlogPost.jsx     # Full-page article reader view
│   │   ├── Contact.jsx      # Contact form and channels
│   │   ├── CustomCursor.jsx # Canvas ink trail and cursor controller
│   │   ├── Footer.jsx       # Colophon and secondary navigation
│   │   ├── Hero.jsx         # Landing hero and wireframe card stack
│   │   ├── Navbar.jsx       # Sticky hand-drawn capsule navigation
│   │   ├── Pricing.jsx      # Scope tiers and service packages
│   │   ├── Process.jsx      # Four-step design and development process
│   │   ├── Projects.jsx     # Case studies and project grid
│   │   ├── SketchModal.jsx  # Accessible modal dialogue for details
│   │   └── Skills.jsx       # Tech stack shelf and skill meters
│   ├── data/
│   │   └── portfolioData.js # Structured data for projects, skills, and articles
│   ├── App.jsx              # Main application router and state manager
│   └── main.jsx             # React application entry point
├── index.html               # Main HTML entry point
├── styles.css               # Design system tokens, paper textures, and styles
├── server.js                # Standalone Node.js server for static delivery
├── vite.config.js           # Vite build configuration
└── package.json             # Project metadata, dependencies, and scripts
```

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- Node.js (version 18.0.0 or higher recommended)
- npm (version 9.0.0 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/faizancodecom/faizan-s-pencil-web-protfolio.git
   ```

2. Navigate into the project directory:
   ```bash
   cd faizan-s-pencil-web-protfolio
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

To start the Vite development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Open your browser and navigate to the local URL displayed in your terminal (typically `http://localhost:5173`).

### Production Build

To create an optimized production build:

```bash
npm run build
```

To preview the built production files locally:

```bash
npm run preview
```

### Standalone Server

To run the lightweight built-in Node.js server:

```bash
npm start
```

The server will be accessible at `http://localhost:3000`.

## Deployment

This application can be deployed to any static or Node-based hosting platform:
- Vercel: Connect your GitHub repository to Vercel for automated deployments. The build command is `npm run build` with the output directory set to `dist`.
- Netlify: Configure the build command as `npm run build` and publish directory as `dist`.
- GitHub Pages: Deploy the compiled `dist` directory using GitHub Actions.

## Author

Faizan
- Portfolio: https://faizancode.com
- GitHub: https://github.com/faizancodecom
- LinkedIn: https://linkedin.com/in/faizancode

## License

This project is open-source and available under the MIT License.
