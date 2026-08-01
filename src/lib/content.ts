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

export type Bridge = "sound" | "kitchen" | "code" | "teaching";

// Featured work — the bridge projects lead, live demos first.
export type Project = {
  name: string;
  kind: string;
  bridge?: Bridge;
  blurb: string;
  stack: string[];
  live?: string;
  repo?: string;
  year?: string;
  /** Path under /public for card / case study hero */
  image?: string;
  /** Case study route slug when a deep page exists */
  slug?: string;
  /** Show in the primary featured grid */
  featured?: boolean;
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
    image: "/img/work/mister-wiz-cover.png",
    slug: "mister-wiz",
    featured: true,
  },
  {
    name: "soundChain",
    kind: "Decentralized music marketplace",
    bridge: "sound",
    blurb:
      "A marketplace for musicians to sell work and issue membership NFTs, with royalties enforced on-chain. Built where my two lives meet — music production and blockchain engineering.",
    stack: ["Algorand", "PyTeal", "TypeScript", "React", "IPFS"],
    repo: "https://github.com/charlesdesouza88/soundChain",
    image: "/img/work/soundchain-cover.png",
    slug: "soundchain",
    featured: true,
  },
  {
    name: "ChefTrack + ChefCalc",
    kind: "Kitchen operations suite",
    bridge: "kitchen",
    blurb:
      "Software I built as an Executive Chef to fix problems I lived every day: inventory that drifts, menu costs that guess. ChefTrack tracks stock; ChefCalc prices every plate to the gram. Cut waste and errors across a working kitchen.",
    stack: ["JavaScript", "React", "Tailwind", "Flask"],
    repo: "https://github.com/charlesdesouza88/Cheftrack",
    image: "/img/work/cheftrack-cover.png",
    slug: "cheftrack",
    featured: true,
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
    image: "/img/work/tem-vaga.png",
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
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const moreProjects = projects.filter((p) => !p.featured);

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
    glyph: "■",
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
    glyph: "○",
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
    glyph: "▲",
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

export type CaseStudy = {
  slug: string;
  name: string;
  kind: string;
  bridge: Bridge;
  heroImage: string;
  heroAlt: string;
  summary: string;
  role: string;
  period: string;
  problem: string;
  approach: string[];
  outcome: string[];
  stack: string[];
  live?: string;
  repo?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "mister-wiz",
    name: "Mister Wiz Ecosystem",
    kind: "EdTech platform",
    bridge: "teaching",
    heroImage: "/img/work/mister-wiz-cover.png",
    heroAlt: "Mister Wiz — EdTech platform cover, teaching × code",
    summary:
      "A digital ecosystem for an English school in Brazil — built by the mentor who uses it every week: report cards, teacher dashboard, and a live quiz app.",
    role: "English Mentor & EdTech Developer",
    period: "2026 — Present",
    problem:
      "Teachers were spending hours turning spreadsheet grades into student reports. The school needed tools that matched how they already taught — not another generic LMS that nobody would open.",
    approach: [
      "Mapped the real reporting workflow with teachers: CSV in, print-ready report cards out, with per-skill radar charts parents can read at a glance.",
      "Shipped a Flask + PostgreSQL report compiler and teacher dashboard on Railway so staff could run reports without developer help.",
      "Built a gamified quiz app students actually use in class — live on Vercel — so practice and assessment stay in the same ecosystem.",
    ],
    outcome: [
      "Reporting that used to take an afternoon now runs from a CSV upload to print-ready cards.",
      "Teachers and students use the tools weekly — the ecosystem is live, not a demo.",
      "One person owns pedagogy and product, so features ship against real classroom friction.",
    ],
    stack: ["Python", "Flask", "PostgreSQL", "Jinja2", "Railway", "JavaScript", "Vercel"],
    live: "https://mister-wiz-quiz.vercel.app",
    repo: "https://github.com/charlesdesouza88/MW-report-copiler",
  },
  {
    slug: "soundchain",
    name: "soundChain",
    kind: "Decentralized music marketplace",
    bridge: "sound",
    heroImage: "/img/work/soundchain-cover.png",
    heroAlt: "soundChain — music marketplace on-chain cover",
    summary:
      "Where music production meets blockchain: musicians sell work, issue membership NFTs, and get royalties enforced on-chain — no middleman rewriting the split.",
    role: "Full-stack & smart contract engineer",
    period: "Hackathon → ongoing",
    problem:
      "Independent musicians lose revenue to opaque platforms and manual royalty splits. Membership and ownership should travel with the work — not live in a spreadsheet someone forgets to update.",
    approach: [
      "Designed a marketplace flow for listing audio, selling access, and minting membership NFTs on Algorand.",
      "Encoded royalty splits in PyTeal so contributors get paid according to the contract, not a handshake.",
      "Stored media on IPFS and built a TypeScript/React front end so the chain layer stays invisible to the musician.",
    ],
    outcome: [
      "A working DApp that joins two of my lives — studio production and on-chain engineering.",
      "Proven royalty logic that can be reused for collaborations and membership communities.",
      "Shipped under hackathon pressure, then refined as a portfolio flagship for music × code.",
    ],
    stack: ["Algorand", "PyTeal", "TypeScript", "React", "IPFS"],
    repo: "https://github.com/charlesdesouza88/soundChain",
  },
  {
    slug: "cheftrack",
    name: "ChefTrack + ChefCalc",
    kind: "Kitchen operations suite",
    bridge: "kitchen",
    heroImage: "/img/work/cheftrack-cover.png",
    heroAlt: "ChefTrack — kitchen operations suite cover",
    summary:
      "Internal software written by the executive chef who needed it: inventory that stays honest, and plate costing accurate to the gram.",
    role: "Executive Chef / Internal Product Builder",
    period: "2023 — 2025",
    problem:
      "Dennis Yacht Club ran on tribal knowledge and drifting spreadsheets. Inventory walked; menu prices guessed; service for 200+ guests left no time for admin that didn't earn its keep.",
    approach: [
      "Built ChefTrack to track stock in the language of a working kitchen — counts, par levels, and what walks out the door.",
      "Built ChefCalc to cost every plate to the gram so menu engineering stopped being a gut call.",
      "Shipped React + Flask tools the line could use mid-service — mise en place for the data layer.",
    ],
    outcome: [
      "Improved scheduling, forecasting, and team coordination by ~30% through automation.",
      "Cut waste and costing errors across a kitchen running events for 200+ guests.",
      "Proof that domain expertise + code ships tools people actually open under pressure.",
    ],
    stack: ["JavaScript", "React", "Tailwind", "Flask"],
    repo: "https://github.com/charlesdesouza88/Cheftrack",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
