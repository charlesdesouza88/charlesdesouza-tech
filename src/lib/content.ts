// Single source of truth for site content. Edit here to update the site.

export const profile = {
  name: "Charles DeSouza",
  role: "Creative Technologist",
  location: "Cape Cod, MA",
  locationLong: "South Yarmouth, Cape Cod ↔ Brazil",
  email: "charlesdesouza88@gmail.com",
  tagline: "I compose systems, sound, and plates.",
  // rotating nouns under the hero verb "compose"
  mediums: ["systems", "sound", "plates", "lessons", "products"],
};

export const socials = [
  { label: "GitHub", handle: "charlesdesouza88", href: "https://github.com/charlesdesouza88" },
  { label: "LinkedIn", handle: "charlesdesouza88", href: "https://www.linkedin.com/in/charlesdesouza88" },
  { label: "Instagram", handle: "gurugizmo", href: "https://www.instagram.com/gurugizmo" },
];

// Featured work — the bridge projects lead, live demos first.
export type Project = {
  name: string;
  kind: string;
  bridge?: "sound" | "kitchen" | "code" | "teaching";
  blurb: string;
  stack: string[];
  live?: string;
  repo?: string;
  year?: string;
};

export const projects: Project[] = [
  {
    name: "Mister Wiz Ecosystem",
    kind: "EdTech platform for an English school",
    bridge: "teaching",
    blurb:
      "As mentor and developer at Mister Wiz, I built the school's digital ecosystem: a report compiler that turns teacher CSVs into print-ready student report cards with skill radar charts, a teacher dashboard on Railway, and a gamified English quiz app — live and in use.",
    stack: ["Python", "Flask", "PostgreSQL", "Jinja2", "Railway", "JavaScript"],
    live: "https://mister-wiz-quiz.vercel.app",
    repo: "https://github.com/charlesdesouza88/MW-report-copiler",
  },
  {
    name: "soundChain",
    kind: "Decentralized music marketplace",
    bridge: "sound",
    blurb:
      "A marketplace for musicians to sell work and issue membership NFTs, with royalties enforced on-chain. Built where my two lives meet — music production and blockchain engineering.",
    stack: ["Algorand", "PyTeal", "TypeScript", "React", "IPFS"],
    repo: "https://github.com/charlesdesouza88/soundChain",
  },
  {
    name: "ChefTrack + ChefCalc",
    kind: "Kitchen operations suite",
    bridge: "kitchen",
    blurb:
      "Software I built as an Executive Chef to fix problems I lived every day: inventory that drifts, menu costs that guess. ChefTrack tracks stock; ChefCalc prices every plate to the gram. Cut waste and errors across a working kitchen.",
    stack: ["JavaScript", "React", "Tailwind", "Flask"],
    repo: "https://github.com/charlesdesouza88/Cheftrack",
  },
  {
    name: "theVault",
    kind: "Document ownership DApp",
    bridge: "code",
    blurb:
      "Upload a document, store it on decentralized storage, and prove ownership on-chain — no trusted middleman. NFT-based validation across Algorand and Stacks.",
    stack: ["Algorand", "Stacks", "IPFS", "React"],
    repo: "https://github.com/charlesdesouza88/theVault",
  },
  {
    name: "Tem Vaga",
    kind: "Scheduling app",
    bridge: "code",
    blurb:
      "A booking and availability app with a clean, fast interface — shipped and live on Vercel.",
    stack: ["TypeScript", "React", "Vercel"],
    live: "https://tem-vaga.vercel.app",
    repo: "https://github.com/charlesdesouza88/Tem_vaga",
  },
  {
    name: "CNPJ Lookup",
    kind: "Full-stack business lookup",
    bridge: "code",
    blurb:
      "Real-time Brazilian company lookup with a Dockerized architecture and automated tests for performance and accessibility — the whole stack, end to end.",
    stack: ["Vue 3", "Laravel", "Tailwind", "Docker", "Playwright"],
    repo: "https://github.com/charlesdesouza88/cnpj-lookup-app",
  },
  {
    name: "Royalty Manager",
    kind: "Smart contract",
    bridge: "sound",
    blurb:
      "A smart contract that splits royalties across contributors automatically — the payout logic a fair collaboration needs.",
    stack: ["Algorand", "Smart Contracts"],
    repo: "https://github.com/charlesdesouza88",
  },
];

export const hackathons = ["Harvard 2024", "Polkadot 2025", "Stacks", "Solana"];

export type Role = {
  title: string;
  org: string;
  place: string;
  period: string;
  points: string[];
};

export const experience: Role[] = [
  {
    title: "English Mentor & EdTech Developer",
    org: "Mister Wiz English School",
    place: "Brazil",
    period: "2026 — Present",
    points: [
      "Mentor English learners while building the pedagogic tools the school runs on.",
      "Created a digital ecosystem: teacher dashboard, student report compiler, gamified quiz app, and landing page.",
      "Automated reporting — teacher-filled CSVs become print-ready student report cards with per-skill radar charts.",
    ],
  },
  {
    title: "Software Product Manager",
    org: "metaCAMPUS",
    place: "Remote",
    period: "Dec 2025 — Present",
    points: [
      "Operate across product, UX, and engineering to define scope, requirements, and delivery priorities.",
      "Translate stakeholder needs into user flows, technical tasks, and release plans.",
      "Contribute to architecture, security, and documentation decisions for scalable systems — including a blockchain transcript-verification platform on Algorand.",
    ],
  },
  {
    title: "AI Trainer / UX Evaluator",
    org: "Alignerr",
    place: "Freelance",
    period: "Sep — Dec 2025",
    points: [
      "Trained and evaluated large language models for accuracy, safety, and alignment.",
      "Designed datasets focused on reasoning quality, cybersecurity, and UX clarity.",
      "Ran UX analysis of conversational interfaces to reduce ambiguity and improve reliability.",
    ],
  },
  {
    title: "Executive Chef / Internal Product Builder",
    org: "Dennis Yacht Club",
    place: "Massachusetts",
    period: "2023 — 2025",
    points: [
      "Built internal software (ChefCalc, ChefTrack) to digitize inventory, pricing, and workflows.",
      "Improved scheduling, forecasting, and team coordination by ~30% through automation.",
      "Led a team of 6 and executed events for 200+ guests under pressure.",
    ],
  },
  {
    title: "Full-Stack Developer / UX Designer",
    org: "Freelance",
    place: "Remote",
    period: "2018 — 2024",
    points: [
      "Designed, built, and maintained custom web apps for small businesses and founders.",
      "Modernized legacy systems — improving usability, performance, accessibility, and SEO.",
      "Implemented authentication, dashboards, API integrations, and automated workflows.",
    ],
  },
];

// The playful layer: three facets, one practice.
export type Facet = {
  key: string;
  glyph: string;
  title: string;
  tag: string;
  line: string;
  stats: { label: string; value: number }[];
  abilities: string[];
};

export const facets: Facet[] = [
  {
    key: "engineer",
    glyph: "■", // ■
    title: "The Engineer",
    tag: "full-stack · blockchain · product",
    line: "Takes systems apart, understands them, and builds them back cleaner.",
    stats: [
      { label: "Systems thinking", value: 9 },
      { label: "Problem-solving", value: 9 },
      { label: "Ship & iterate", value: 8 },
      { label: "Learns anything", value: 10 },
    ],
    abilities: [
      "Refactor — turns tangled code into something maintainable.",
      "Full-stack range — design, frontend, backend, on-chain.",
    ],
  },
  {
    key: "producer",
    glyph: "○", // ○
    title: "The Producer",
    tag: "music production · sound healing",
    line: "Hears the whole arrangement before the first note is placed.",
    stats: [
      { label: "Creativity", value: 9 },
      { label: "Composition", value: 8 },
      { label: "Ear / timing", value: 9 },
      { label: "Presence", value: 8 },
    ],
    abilities: [
      "Resonance — tunes an experience until it simply feels right.",
      "Improvisation — adapts fast to any key, genre, or constraint.",
    ],
  },
  {
    key: "chef",
    glyph: "▲", // ▲
    title: "The Chef",
    tag: "25 years · executive chef",
    line: "Runs a kitchen like a system: mise en place, then execute under fire.",
    stats: [
      { label: "Leadership", value: 9 },
      { label: "Under pressure", value: 10 },
      { label: "Consistency", value: 9 },
      { label: "Craft", value: 9 },
    ],
    abilities: [
      "Mise en place — everything prepped and in its place before the rush.",
      "Kitchen command — leads a team through service without dropping a plate.",
    ],
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind", "Vite", "HTML / CSS"] },
  { group: "Backend", items: ["Python", "Node.js", "Flask", "Django", "SQL", "PHP"] },
  { group: "Blockchain", items: ["Algorand", "PyTeal", "AlgoKit", "Stacks", "Solana", "IPFS"] },
  { group: "Design / UX", items: ["Figma", "Design systems", "User research", "WCAG a11y", "Prototyping"] },
  { group: "DevOps", items: ["GitHub", "CI/CD", "Docker", "Vercel", "Firebase"] },
  { group: "AI & Security", items: ["Model evaluation", "Prompt engineering", "Human–AI interaction", "Cybersecurity fundamentals", "Identity & access"] },
];

export const education = [
  "Google Cybersecurity Professional Certificate",
  "IBM Technical Support Professional Certificate",
  "Google UX Design Professional Certificate",
  "CS50x + CS50 Python, Web & AI — Harvard",
  "Full-Stack Web Development Bootcamps",
  "Associate of Arts — Cape Cod Community College",
];
