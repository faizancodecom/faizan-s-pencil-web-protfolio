export const heroPlatforms = [
  {
    id: 1,
    tag: "Core Hub",
    badge: "Live Production",
    title: "FaizanCode — Full Stack Developer Hub",
    desc: "Central digital home showcasing fullstack web systems, design engineering work, and 22+ live web applications.",
    url: "https://faizancode.com",
    previewImg: "/assets/previews/faizancode.png",
    techTags: ["Next.js", "TypeScript", "React", "Tailwind"]
  },
  {
    id: 2,
    tag: "Interactive Platform",
    badge: "Interactive Canvas Engine",
    title: "AlgoPlay — Interactive Algorithm Visualizer",
    desc: "Tactile computer science learning tool featuring step-by-step sorting, pathfinding, and graph algorithm visualizers with interactive step execution.",
    url: "https://algoplay.faizancode.com",
    previewImg: "/assets/previews/algoplay.png",
    techTags: ["Canvas 2D", "Algorithms", "DSA", "Web Workers"]
  },
  {
    id: 3,
    tag: "Production Prototype",
    badge: "Vercel Cloud Live",
    title: "FaizanDev Prot — Modern UI/UX Portfolio",
    desc: "Creative portfolio featuring 3D avatar design, fluid responsive UI tokens, and smooth micro-interactions.",
    url: "https://faizandev-prot.vercel.app",
    previewImg: "/assets/previews/faizandev.png",
    techTags: ["React", "Tailwind", "Git"]
  }
];

export const techShelf = [
  {
    name: "JavaScript",
    role: "ES2024+ / Logic",
    icon: "assets/icons/javascript.png",
    stamp: "Core Language",
    specRole: "ES2024+ / Logic & Web APIs",
    desc: "Modern ECMAScript features including async/await, Proxy objects, Canvas 2D API, Web Workers, and modular architecture without unnecessary polyfill bloat."
  },
  {
    name: "TypeScript",
    role: "Static Typing",
    icon: "assets/icons/typescript.png",
    stamp: "Static Typing",
    specRole: "Strict Type Safety & Interfaces",
    desc: "Used across production codebases for strict type guarantees, generic component props, and robust contract definitions between client and server APIs."
  },
  {
    name: "React",
    role: "Components / SPA",
    icon: "assets/icons/react.png",
    stamp: "UI Library",
    specRole: "Component Architecture & Hooks",
    desc: "Building composable, accessible interfaces using custom hooks, memoization, optimized re-render cycles, and clean declarative state flow."
  },
  {
    name: "Next.js",
    role: "App Router / SSR",
    icon: "assets/icons/nextjs.png",
    stamp: "Full-Stack Framework",
    specRole: "Server-Side Rendering & Edge APIs",
    desc: "Production deployments utilizing Next.js App Router, Server Components, static generation, streaming hydration, and edge middleware."
  },
  {
    name: "Python",
    role: "Algorithms / AI",
    icon: "assets/icons/python.png",
    stamp: "Scripting & Backend",
    specRole: "Data Processing & Automation",
    desc: "Leveraged for algorithm modeling, rapid automation scripting, API data parsing, and backend prototype development."
  },
  {
    name: "HTML5",
    role: "Semantic / A11y",
    icon: "assets/icons/html5.png",
    stamp: "Web Standards",
    specRole: "Accessible Landmark Architecture",
    desc: "Strict commitment to valid semantic markup, ARIA roles, live regions, and keyboard-first accessibility guidelines (WCAG 2.1 AA)."
  },
  {
    name: "CSS3",
    role: "Grid / Variables",
    icon: "assets/icons/css3.png",
    stamp: "Styling Architecture",
    specRole: "Modern Layouts & Custom Properties",
    desc: "Crafting responsive designs via CSS Grid, Flexbox, custom properties, container queries, and GPU-accelerated transforms without CSS framework bloat."
  },
  {
    name: "Tailwind",
    role: "Utility Engine",
    icon: "assets/icons/tailwind.png",
    stamp: "CSS Framework",
    specRole: "Rapid Prototype Utility Styling",
    desc: "Configuring bespoke design tokens, custom plugins, responsive variants, and purging unused classes for ultra-lightweight production builds."
  },
  {
    name: "Node.js",
    role: "Runtime & APIs",
    icon: "assets/icons/nodejs.png",
    stamp: "Backend Runtime",
    specRole: "Server Architecture & Tooling",
    desc: "Building lightweight HTTP microservices, REST APIs, local development servers, and CLI tooling using native Node modules."
  },
  {
    name: "Git",
    role: "Version Control",
    icon: "assets/icons/git.png",
    stamp: "DevOps & Source",
    specRole: "Branching & Collaboration",
    desc: "Disciplined Git workflow: atomic commits, semantic commit messages, feature branching, interactive rebasing, and GitHub CI/CD actions."
  },
  {
    name: "Figma",
    role: "Design Systems",
    icon: "assets/icons/figma.png",
    stamp: "Design Tooling",
    specRole: "Tokens, Auto-Layout & Prototypes",
    desc: "Architecting multi-brand design systems, token hierarchies, interactive micro-prototypes, and developer handover documentation in Figma."
  },
  {
    name: "C++",
    role: "DSA & Systems",
    icon: "assets/icons/cpp.png",
    stamp: "Low-Level Computing",
    specRole: "Data Structures & Core Algorithms",
    desc: "Foundation in computational efficiency, memory management, pointer arithmetic, and algorithmic complexity analysis."
  }
];

export const projectCaseStudies = [
  {
    id: 0,
    tag: "Core Hub • Full Stack Architecture",
    title: "FaizanCode — Full Stack Developer Hub",
    desc: "Central digital home showcasing fullstack web systems, design engineering work, and 22+ live web applications with instant edge rendering.",
    url: "https://faizancode.com",
    previewImg: "/assets/previews/faizancode.png",
    meta: ["22+ Production Apps", "Live Platform"],
    tags: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
    modal: {
      stamp: "Platform 01",
      statusText: "Live Production Hub",
      title: "FaizanCode — Full Stack Developer Architecture",
      specs: [
        { label: "Role", val: "Full Stack Architect" },
        { label: "Live Apps", val: "22+ Web Systems" },
        { label: "Performance", val: "100 Lighthouse" },
        { label: "Tech Stack", val: "Next.js • TypeScript • React" }
      ],
      paragraphs: [
        "FaizanCode serves as the central production portal for software engineering experiments, fullstack applications, and architectural blueprints.",
        "Engineered with modern Next.js server components, strict TypeScript safety contracts, and responsive Tailwind layouts optimized for instant edge delivery."
      ]
    }
  },
  {
    id: 1,
    tag: "Interactive Platform • Educational Tool",
    title: "AlgoPlay — Interactive Algorithm Visualizer",
    desc: "Tactile computer science learning tool featuring step-by-step sorting, pathfinding, and graph algorithm visualizers with interactive step execution.",
    url: "https://algoplay.faizancode.com",
    previewImg: "/assets/previews/algoplay.png",
    meta: ["60 FPS Canvas", "Interactive Step Engine"],
    tags: ["Canvas 2D", "Algorithms", "DSA", "Web Workers"],
    modal: {
      stamp: "Platform 02",
      statusText: "Interactive Canvas Visualizer",
      title: "AlgoPlay — Algorithm Engine Architecture",
      specs: [
        { label: "Role", val: "Algorithm Engineer & UI" },
        { label: "Engine", val: "60 FPS Canvas 2D" },
        { label: "Algorithms", val: "Sorting, Graph & Pathfinding" },
        { label: "Concurrency", val: "Web Workers Processing" }
      ],
      paragraphs: [
        "AlgoPlay transforms complex algorithmic concepts into tactile, visual step-by-step demonstrations for developers and students.",
        "Built with isolated Web Worker threads to run intensive graph traversals without locking the 60fps main UI canvas thread."
      ]
    }
  },
  {
    id: 2,
    tag: "Production Prototype • Design Engineering",
    title: "FaizanDev Prot — Modern UI/UX Portfolio",
    desc: "Creative portfolio featuring 3D avatar design, fluid responsive UI tokens, and smooth micro-interactions built with production React standards.",
    url: "https://faizandev-prot.vercel.app",
    previewImg: "/assets/previews/faizandev.png",
    meta: ["Vercel Cloud", "Fluid UI Tokens"],
    tags: ["React", "Tailwind CSS", "Git", "Figma Design"],
    modal: {
      stamp: "Platform 03",
      statusText: "Design System & Portfolio",
      title: "FaizanDev Prot — UI/UX Design System",
      specs: [
        { label: "Role", val: "Design Engineer" },
        { label: "Deployment", val: "Vercel Edge Cloud" },
        { label: "UI System", val: "Atomic Tokens & Components" },
        { label: "Interactions", val: "Smooth CSS Micro-animations" }
      ],
      paragraphs: [
        "FaizanDev Prot tests modern web design paradigms, merging tactile 3D visual avatars with clean responsive grid systems.",
        "Features custom theme token mapping, zero layout shift, and accessible navigation patterns built on production React."
      ]
    }
  }
];

export const pricingTiers = [
  {
    id: "starter",
    badge: "Sprint • Discovery",
    name: "Wireframe & UI Prototype",
    desc: "Validate your core user flow, architecture, and interaction model on paper and Figma before coding.",
    price: "350",
    period: "/ sprint",
    timeline: "Delivery: 3–5 business days",
    featured: false,
    features: [
      "User journey mapping & information architecture",
      "5–8 Low-fidelity wireframe screens",
      "Interactive clickable Figma prototype",
      "Typography hierarchy & accessibility check",
      "Source files handover & design notes"
    ],
    ctaText: "Select Sprint"
  },
  {
    id: "popular",
    badge: "Full Build • End-to-End",
    name: "Design & Front-End Build",
    desc: "The complete craft from blank paper sketches to high-performance, responsive live web code.",
    price: "850",
    period: "/ project",
    timeline: "Delivery: 1–2 weeks",
    featured: true,
    ribbon: "Most Popular Craft",
    features: [
      "Custom UI/UX design (Up to 6 unique views)",
      "Handcrafted HTML5, CSS3 & vanilla/modern JS",
      "100% Mobile, tablet & desktop responsiveness",
      "Tactile micro-animations & smooth interactions",
      "WCAG AA accessibility & 95+ PageSpeed score",
      "Clean Git repo delivery + Vercel / Netlify setup"
    ],
    ctaText: "Start Full Build"
  },
  {
    id: "enterprise",
    badge: "Ecosystem • Custom",
    name: "Full Product Ecosystem",
    desc: "For startups & teams scaling a complete interactive application with design systems & support.",
    price: "1,600",
    period: "+ / milestone",
    timeline: "Delivery: 3–4 weeks",
    featured: false,
    features: [
      "Design System & modular token library",
      "Complex Web App UI (React, Next.js or TS)",
      "State management & REST / GraphQL API integration",
      "Cross-browser stress testing & performance tuning",
      "30 Days post-launch maintenance & bug support",
      "Direct 1-on-1 strategy sessions via Google Meet"
    ],
    ctaText: "Discuss Scope"
  }
];

export const blogArticles = [
  {
    id: 0,
    badge: "UX Architecture & Low-Fi",
    date: "October 2026 — 5 min read",
    title: "Why Low-Fidelity Wireframes Save Weeks of Development",
    snippet: "Starting projects with paper wireframes aligns stakeholders around structure and user flows before spending time debating surface decoration.",
    lead: "When product teams leap directly into high-fidelity Figma mockups or premature frontend component coding, conversations almost inevitably get derailed by surface cosmetics—button border radiuses, color gradients, and shadow blurs—instead of validating core user flows and information architecture.",
    sections: [
      {
        heading: "1. The Cost of Premature Fidelity",
        body: "When a stakeholder or engineer sees a pixel-perfect, colored mockup, their brain instinctively evaluates aesthetics rather than structural usability. Questions like 'Why are we placing this checkout step here?' get overshadowed by 'Can we make this purple button slightly darker?'. Starting with 2B graphite on paper completely neutralizes this bias."
      },
      {
        callout: {
          title: "The 2B Graphite Principle",
          text: "A sketch on paper takes 2 minutes to iterate. A coded component takes hours. People are significantly more willing to discard a flawed premise when it is drawn with a pencil than when someone has spent three days tweaking CSS grid tracks."
        }
      },
      {
        heading: "2. Emotional Attachment and Rapid Throwaways",
        body: "One of the greatest psychological barriers in software development is the sunk cost fallacy. When a designer spends forty hours building an intricate component library in high fidelity, they become emotionally defensive. In contrast, rough wireframing fosters radical detachment: you can sketch ten alternative navigation layouts in twenty minutes."
      },
      {
        heading: "3. Inherent Accessibility & Typographic Clarity",
        body: "When you strip color and images out of a screen, you immediately discover whether your typographic hierarchy stands on its own. If a user cannot immediately distinguish the primary heading, supporting body copy, and primary action in pure black and white, adding a neon accent color will only mask a fundamentally broken reading hierarchy."
      }
    ],
    steps: [
      "The 10-Minute Paper Sketch: Draw 3 variations of the primary page layout on paper.",
      "The Thumb-Zone Audit: Check if critical interaction targets fall naturally inside comfortable thumb arcs on mobile screens.",
      "Clickable Wireframe Prototype: Link the wireframes together into a gray-box prototype to test the user flow with 3 real users before writing code."
    ]
  },
  {
    id: 1,
    badge: "Design Craft & Tactility",
    date: "September 2026 — 7 min read",
    title: "Designing Web Experiences with Human Warmth",
    snippet: "How thoughtful typography, tactile micro-interactions, and considerate whitespace create digital products people genuinely enjoy using.",
    lead: "Much of the modern web suffers from sterile corporate homogeny—flat geometric layouts, identical sans-serif typefaces, and algorithmic predictability that feel designed by robots for robots. True digital craftsmanship comes from tactile character, deliberate pacing, and respect for the human mind.",
    sections: [
      {
        heading: "1. The Rise of Algorithmic Sterility",
        body: "Over the past decade, design systems brought immense consistency to the web. However, an unintended side effect was the erasure of personality. Every SaaS website started looking identical: an oversized blue hero headline, three generic card columns, and an AI-generated gradient sphere."
      },
      {
        callout: {
          title: "The Value of Tactile Micro-Interactions",
          text: "Physical objects in the real world have friction, inertia, and tactile feedback. When digital elements respond with subtle analog spring physics, paper airplane transformations, or fluid ink gestures, the interface feels alive and pleasant to touch."
        }
      },
      {
        heading: "2. Calm Design: Respecting Mental Bandwidth",
        body: "Warm design is inherently calm design. It does not scream with popups every ten seconds, flashing countdown timers, or intrusive cookie walls. Instead, it respects the reader’s gaze with generous margins, high-contrast readable typefaces, and quiet breathing room."
      }
    ],
    steps: [
      "Embrace Organic Contours: Break away from rigid rectangles with subtle, hand-drawn wobbly border radiuses.",
      "Tactile Physical Feedback: Make buttons feel pressed, cards feel stacked, and notes feel stamped.",
      "Zero Artificial Slop: Never use generic AI placeholders where intentional, well-crafted human prose belongs."
    ]
  },
  {
    id: 2,
    badge: "Ergonomics & Layout",
    date: "August 2026 — 4 min read",
    title: "The Physical Ergonomics of Responsive Layouts",
    snippet: "Designing interfaces that respect natural thumb movement zones on handheld devices and maintain reading comfort on large monitors.",
    lead: "Screens are physical glass slabs held by biological human hands. Responsive web design isn't merely about shrinking columns from 1200px to 390px via CSS media queries—it is about respecting the biomechanics and thumb fatigue of human fingers.",
    sections: [
      {
        heading: "1. The Biomechanics of the Thumb Arc",
        body: "Over 75% of mobile web browsing is performed single-handedly with the thumb. The lower-center and bottom-right quadrant represents the Natural Zone—reachable without any wrist gymnastics. The top edge and upper-left corners represent the Stretch and Pain Zones, requiring the user to uncomfortably regrip their phone."
      },
      {
        callout: {
          title: "The Bottom-First Layout Law",
          text: "Critical interactive elements—primary submission buttons, drawer toggles, and search bars—belong anchored at the bottom where thumb reach is effortless, while static reading content resides comfortably at the top."
        }
      },
      {
        heading: "2. Desktop Ergonomics: The 75-Character Gaze Rule",
        body: "Ergonomics doesn't stop at mobile devices. On 27-inch widescreen desktop monitors, careless CSS layouts that let text lines span 1200px cause severe eye tracking strain. Constraining reading containers to a maximum width of 680px to 740px (around 65 characters per line) keeps reading effortless."
      }
    ],
    steps: [
      "Natural Thumb Reach: Place primary actions in the lower half of viewport on mobile devices.",
      "75-Character Gaze Rule: Restrain text reading lines on widescreen displays to prevent eye fatigue.",
      "Touch Target Minimum: Ensure interactive buttons are at least 48×48px with 8px margin separation."
    ]
  }
];
