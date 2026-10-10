/**
 * Central portfolio data for Ahmed Khan.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Source: LinkedIn profile (Profile.pdf) plus project details supplied by Ahmed.
 * Nothing should be added here that can't be backed up.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Mohd Ahmed Khan',
  displayName: 'Ahmed Khan',
  firstName: 'AHMED',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A NEXCORE ORIGINAL',
  role: 'Full Stack MERN Developer',
  tagline: ['Full Stack MERN Developer', 'AI / DS', 'Web & Mobile'],
  intro:
    'A Second-year AI & Data Science student and full-stack developer who builds real products, not just projects. 10+ web and mobile applications delivered for e-commerce, real estate, finance and industrial businesses with the MERN stack.',
  location: 'Mumbai Metropolitan Region',
  email: 'aaddy.ly143@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/ahmed-khan-222218338/',
    github: 'https://github.com/aaddy307',
  },
  /** Shown under the "More on GitHub" card. Keep in sync with links.github. */
  githubLabel: 'github.com/aaddy307',
  resumePdf: '/assets/Ahmed_Khan_Resume.pdf',
  resumeFileName: 'Ahmed_Khan_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Ahmed Khan',
  },
  interests: ['AI & Data Science', 'React Native', 'Data-driven Products'],
};

export const education = [
  {
    school: 'Nexcore Institute of Technology',
    place: 'Mumbai',
    degree: "Bachelor's — Artificial Intelligence & Data Science",
    period: 'August 2025 – April 2028',
    score: 'Batch 2025–28',
  },
];

export const experience = [
  {
    company: 'Nexcore Alliance',
    role: 'Intern',
    place: 'Mumbai',
    period: 'August 2026 – Present',
    points: [
      'Delivering web and mobile applications with the MERN stack (React.js, Next.js, Node.js, Express.js, MongoDB).',
      'Building products for businesses in e-commerce, real estate, finance and industrial sectors.',
      'Currently seeking internships in Full Stack, Mobile or AI-driven development.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  /** Optional live site. Shown as a "Live site" button in the project overlay. */
  live?: string;
  liveUrl?: string;
  image?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'mediai',
    title: 'MediAI',
    year: '2026',
    genre: 'Healthcare • AI • Full-Stack',
    logline: 'A co-founded healthcare platform with four role-based panels: User, Doctor, Admin and Super Admin.',
    stack: ['React', 'Node.js', 'Socket.io', 'WebRTC', 'Groq AI'],
    build: [
      'Co-founded and built a healthcare platform with four role-based panels (User, Doctor, Admin, Super Admin), deployed live at mediaiofficial.in.',
      'Designed the architecture around real-time communication (Socket.io / WebRTC) with AI-assisted features powered by Groq, plus OCR and facial recognition.',
    ],
    features: [
      'Four role-based panels',
      'Real-time communication with Socket.io and WebRTC',
      'AI features powered by Groq',
      'OCR and facial recognition',
    ],
    metrics: [
      { value: '4', label: 'role-based panels' },
      { value: 'Live', label: 'mediaiofficial.in' },
    ],
    live: 'https://mediaiofficial.in/',
    liveUrl: 'https://mediaiofficial.in/',
    image: '/assets/projects/MediAi.webp',
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'fluid-valve',
    title: 'Fluid Valve',
    year: '2026',
    genre: 'B2B • Industrial • Product Catalog',
    logline: 'B2B product catalog with Google OAuth, customer-specific pricing, product browsing, cart functionality, and quote requests instead of direct online payments.',
    stack: ['Next.js 14', 'Express', 'JavaScript', 'Google OAuth', 'MongoDB'],
    build: [
      'Built a B2B industrial valve catalog and inquiry site with Next.js 14 and an Express backend, in pure JavaScript.',
      'Implemented Google OAuth authentication and customer-specific pricing tiers.',
      'Constructed quote request workflow and inquiry cart tailored for wholesale procurement instead of direct online payments.',
    ],
    features: [
      'Google OAuth authentication',
      'Customer-specific pricing & tiering',
      'Product browsing and inquiry cart functionality',
      'Quote requests instead of direct online payments',
      'Next.js 14 frontend with Express backend',
    ],
    metrics: [
      { value: 'B2B', label: 'product catalog' },
      { value: 'Live', label: 'fluidvalve.shop' },
    ],
    live: 'https://fluidvalve.shop/',
    liveUrl: 'https://fluidvalve.shop/',
    image: '/assets/projects/FluidValve.webp',
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'shree-ganesh',
    title: 'Shree Ganesh Enterprises',
    year: '2026',
    genre: 'E-commerce • Mobile Accessories • Retail',
    logline: 'E-commerce platform for mobile accessories with catalog browsing and online ordering.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    build: [
      'Developed an e-commerce platform dedicated to mobile accessories retail and wholesale distribution.',
      'Designed categorized product browsing, inventory displays, and streamlined customer order workflows.',
    ],
    features: [
      'Mobile accessories e-commerce catalog',
      'Product categorization and inventory management',
      'Responsive shopping cart and order processing',
    ],
    metrics: [
      { value: 'Retail', label: 'mobile accessories' },
      { value: 'MERN', label: 'full stack' },
    ],
    palette: { from: '#180720', via: '#531968', to: '#09050d', accent: '#c06eff' },
    motif: 'flow',
  },
  {
    id: 'rehan-nx',
    title: 'Rehan NX',
    year: '2026',
    genre: 'E-commerce • Mobile Shop • Retail',
    logline: 'Mobile shop web platform showcasing smartphones, accessories, and store inventory.',
    stack: ['React', 'Next.js', 'Node.js', 'MongoDB'],
    build: [
      'Engineered a dedicated web presence and digital storefront for Rehan NX mobile shop.',
      'Built interactive device catalog showcasing smartphones, technical specs, and customer inquiries.',
    ],
    features: [
      'Smartphone showcase & specifications',
      'Mobile store inventory browsing',
      'Direct customer inquiry and contact channel',
    ],
    metrics: [
      { value: 'Store', label: 'mobile shop' },
      { value: 'Live', label: 'rehannxmobiles.shop' },
    ],
    live: 'https://rehannxmobiles.shop/',
    liveUrl: 'https://rehannxmobiles.shop/',
    image: '/assets/projects/RehanNX.webp',
    palette: { from: '#05161c', via: '#0b4d5e', to: '#040d12', accent: '#3ee0f5' },
    motif: 'shield',
  },
  {
    id: 'get-credit',
    title: 'Get Credit',
    year: '2026',
    genre: 'FinTech • Lead Management • Dashboard',
    logline: 'Loan website featuring automated lead management and a comprehensive administrative dashboard.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    build: [
      'Built a financial services website with loan application forms and lead capture pipelines.',
      'Constructed an administrative dashboard for tracking incoming loan leads, customer eligibility, and application status.',
    ],
    features: [
      'Loan application & lead capture forms',
      'Administrative dashboard with lead tracking',
      'Financial product comparison and customer intake',
    ],
    metrics: [
      { value: 'FinTech', label: 'loan platform' },
      { value: 'Live', label: 'get-credit.in' },
    ],
    live: 'https://get-credit.in/',
    liveUrl: 'https://get-credit.in/',
    image: '/assets/projects/GetCredit.webp',
    palette: { from: '#031810', via: '#0e5c3c', to: '#040d09', accent: '#44f2a7' },
    motif: 'shield',
  },
  {
    id: 'umaya-crystals',
    title: 'Umaya Crystals',
    year: '2026',
    genre: 'E-commerce • Crystals & Healing • D2C',
    logline: 'Crystal business website and online storefront showcasing healing stones, jewelry, and spiritual products.',
    stack: ['Next.js', 'React', 'Node.js', 'MongoDB'],
    build: [
      'Designed and deployed an e-commerce storefront for Umaya Crystals spiritual and gemstone business.',
      'Structured curated collection showcases for crystals, healing jewelry, and spiritual items.',
    ],
    features: [
      'Crystal & gemstone product catalog',
      'D2C online store with cart and checkout workflows',
      'Brand storytelling and stone properties guides',
    ],
    metrics: [
      { value: 'D2C', label: 'crystal store' },
      { value: 'Live', label: 'umaya.shop' },
    ],
    live: 'https://umaya.shop/',
    liveUrl: 'https://umaya.shop/',
    image: '/assets/projects/Umaya.webp',
    palette: { from: '#1a0628', via: '#631885', to: '#0a0410', accent: '#d279ff' },
    motif: 'flow',
  },
  {
    id: 'bregid-factory',
    title: 'Bregid Factory',
    year: '2026',
    genre: 'Manufacturing • Web & Mobile • B2B',
    logline: 'Website and mobile application for leather products, buckles, and footbeds.',
    stack: ['React Native', 'React', 'Node.js', 'Express', 'MongoDB'],
    build: [
      'Engineered both a responsive web application and cross-platform mobile app for Bregid Factory.',
      'Created industrial product catalogs detailing leather products, custom buckles, and ergonomic footbeds.',
    ],
    features: [
      'Responsive web platform and mobile application',
      'Manufacturing catalog for leather goods, buckles & footbeds',
      'Wholesale specifications and bulk inquiry flow',
    ],
    metrics: [
      { value: 'Web+App', label: 'cross-platform' },
      { value: 'B2B', label: 'manufacturing' },
    ],
    palette: { from: '#1c1003', via: '#733e08', to: '#0c0702', accent: '#ffa733' },
    motif: 'tenants',
  },
  {
    id: 'amar-jeans',
    title: 'Amar Jeans',
    year: '2026',
    genre: 'E-commerce • D2C • MERN',
    logline: 'A direct-to-consumer denim business storefront built on Next.js, Express and MongoDB.',
    stack: ['Next.js', 'Express', 'MongoDB'],
    build: [
      'Built a D2C denim e-commerce storefront with Next.js, Express and MongoDB.',
      'Benchmarked competitor storefronts to plan the upgrades that followed.',
    ],
    features: [
      'D2C denim storefront & catalog',
      'Next.js frontend, Express API, MongoDB database',
      'Upgrades planned from competitor analysis',
    ],
    metrics: [
      { value: 'D2C', label: 'e-commerce' },
      { value: '3', label: 'core technologies' },
    ],
    image: '/assets/projects/AmarJeans.webp',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tenants',
  },
  {
    id: 'khan-builders',
    title: 'Khan Builders',
    year: '2026',
    genre: 'Real Estate • Construction • Corporate',
    logline: 'Construction business website showcasing architectural projects, services, and consultations.',
    stack: ['React', 'Next.js', 'Node.js', 'Tailwind CSS'],
    build: [
      'Built a professional digital presence for Khan Builders & Developers construction enterprise.',
      'Implemented portfolio galleries for ongoing and completed residential and commercial projects.',
    ],
    features: [
      'Real estate project showcases & galleries',
      'Construction service listings & company credentials',
      'Consultation and project inquiry channels',
    ],
    metrics: [
      { value: 'Building', label: 'construction' },
      { value: 'Live', label: 'khan-builders...online' },
    ],
    live: 'https://khan-builders-and-developers.online/',
    liveUrl: 'https://khan-builders-and-developers.online/',
    image: '/assets/projects/KhanBuilders.webp',
    palette: { from: '#1c1204', via: '#754b0c', to: '#0b0803', accent: '#f5b842' },
    motif: 'shield',
  },
  {
    id: 'ak-enterprises',
    title: 'AK Enterprises',
    year: '2026',
    genre: 'Corporate • Client Business • Web',
    logline: 'Corporate business website and client portal developed for commercial enterprise services.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    build: [
      'Developed a modern enterprise business website for AK Enterprises corporate services.',
      'Designed service portfolios, company profile, and responsive client communication workflows.',
    ],
    features: [
      'Corporate business presentation & service catalog',
      'Client inquiry and business lead management',
      'Responsive full-stack architecture',
    ],
    metrics: [
      { value: 'B2B', label: 'client business' },
      { value: 'Live', label: 'ak-enterprises.online' },
    ],
    live: 'https://ak-enterprises.online/',
    liveUrl: 'https://ak-enterprises.online/',
    palette: { from: '#051820', via: '#0e556e', to: '#040d12', accent: '#45c4f2' },
    motif: 'flow',
  },
  {
    id: 'fx-surya',
    title: 'FX Surya',
    year: '2026',
    genre: 'Services • Client Portal • Web',
    logline: 'Official client website presenting services, consultations, and professional client portal.',
    stack: ['React', 'Next.js', 'Node.js', 'Tailwind CSS'],
    build: [
      'Developed and deployed the official client website for FX Surya Pandit.',
      'Integrated service offerings, client appointment/booking channels, and testimonial showcases.',
    ],
    features: [
      'Service descriptions & consultation bookings',
      'Testimonial and client trust presentation',
      'Mobile-optimized responsive design',
    ],
    metrics: [
      { value: 'Portal', label: 'client site' },
      { value: 'Live', label: 'fxsuryapandit.com' },
    ],
    live: 'https://fxsuryapandit.com/',
    liveUrl: 'https://fxsuryapandit.com/',
    image: '/assets/projects/FXsurya.webp',
    palette: { from: '#1a0410', via: '#630f3f', to: '#0c0308', accent: '#f5429e' },
    motif: 'shield',
  },
  {
    id: 'ahmed-portfolio',
    title: "Ahmed's Portfolio",
    year: '2026',
    genre: 'Portfolio • Cinematic • React',
    logline: 'Personal developer portfolio featuring a Netflix-inspired cinematic series experience.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    build: [
      'Designed and engineered a cinematic developer portfolio with custom typography, sound, and interactive features.',
      'Created bespoke streaming UI with viewer profiles, episode rail navigation, and 60fps animations.',
    ],
    features: [
      'Cinematic streaming-service UI & episode navigation',
      'Interactive viewer profile selector & highlight reel',
      'Hardware-accelerated mobile performance',
    ],
    metrics: [
      { value: 'Live', label: 'aaddy.xyz' },
      { value: 'React', label: 'TypeScript' },
    ],
    github: 'https://github.com/aaddy307',
    live: 'https://aaddy.xyz/',
    liveUrl: 'https://aaddy.xyz/',
    image: '/assets/projects/Portfolio.webp',
    palette: { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' },
    motif: 'shield',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'nexcore-appreciation',
    title: 'Letter of Appreciation',
    org: 'Nexcore Alliance LLP',
    detail: 'Recognized by HR & Operations for detecting over 10 critical and minor bugs during User Panel & Admin Mobile testing.',
    laurel: 'QA & Debugging',
    link: '/slvd3kuggemzxbzexmyb.jpg',
  },
  {
    id: 'client-projects',
    title: '10+ Client Apps',
    org: 'Web & Mobile',
    detail: 'Delivered 10+ web and mobile applications for businesses in e-commerce, real estate, finance and industrial sectors.',
    laurel: 'Shipped to Clients',
  },
  {
    id: 'mediai-cofounder',
    title: 'Co-Founder',
    org: 'MediAI',
    detail: 'Co-founded a healthcare platform with four role-based panels.',
    laurel: 'Co-Founder',
    link: 'https://mediaiofficial.in/',
  },
  {
    id: 'ai-ds',
    title: 'AI & DS Student',
    org: 'Nexcore Institute of Technology',
    detail: "Bachelor's in Artificial Intelligence & Data Science, August 2025 – April 2028.",
    laurel: 'Second Year',
  },
];

export type Certification = {
  issuer: string;
  name: string;
  image: string;
  link?: string;
  date?: string;
  credentialId?: string;
};

export const certifications: Certification[] = [
  {
    issuer: 'Anthropic',
    name: 'Claude 101',
    image: '/dxrq07jhvlsluhdqjxzl.png',
  },
  {
    issuer: 'Anthropic',
    name: 'AI Fluency for Students',
    image: '/hthuprnpevyx9rusmfch.png',
  },
  {
    issuer: 'Anthropic',
    name: 'AI Fluency: Framework & Foundations',
    image: '/rkdfta68ocmobrar7mxb.png',
  },
  {
    issuer: 'Anthropic',
    name: 'AI Fluency for Nonprofits',
    image: '/tire2arpzcncyxwphvqb.png',
  },
  {
    issuer: 'Anthropic',
    name: 'AI Fluency for Educators',
    image: '/tyofsorjwvxbetlbw6d4.png',
  },
  {
    issuer: 'DataCamp',
    name: 'Understanding Prompt Engineering',
    image: '/kw4bbqr4cwmrow6d570w.jpg',
    credentialId: '#37,129,057',
    date: 'Nov 07, 2024',
  },
  {
    issuer: 'Intel & Digital India',
    name: 'AI For All — AI Aware Stage',
    image: '/f8uwsmzgqw9rxxcvl1n4.jpg',
    date: 'Jan 06, 2026',
  },
  {
    issuer: 'Intel & Digital India',
    name: 'AI For All — AI Appreciate Stage',
    image: '/mcxt9u1wh10bcvce2ymr.jpg',
    date: 'Jan 06, 2026',
  },
  {
    issuer: 'AISECT & INDIAai',
    name: 'Yuva AI For ALL',
    image: '/nfujosbhotbfmdn8hoo8.jpg',
    credentialId: 'm7vsby3Oj0',
    date: 'Jan 21, 2026',
  },
  {
    issuer: 'edX · Univ. of Edinburgh',
    name: 'Climate Change: Carbon Capture & Storage',
    image: '/of98eghs27zeiifo7kcn.jpg',
    credentialId: 'bb15c2faeaa8490b9328897466b0ea07',
    date: 'Feb 27, 2025',
  },
  {
    issuer: 'HCLTech',
    name: 'Career Shaper — Professional Ethics',
    image: '/xg2uy7saonlneuqukxjt.jpg',
    date: 'Sep–Nov 2024',
  },
  {
    issuer: 'Nexcore Alliance',
    name: 'Letter of Appreciation — Testing & Debugging',
    image: '/slvd3kuggemzxbzexmyb.jpg',
    date: 'Oct 05, 2025',
  },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Interfaces & the web platform',
    skills: [
      { name: 'React.js', mono: 'Re', note: 'Primary' },
      { name: 'Next.js', mono: 'Nx' },
      { name: 'Figma', mono: 'Fg' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    subtitle: 'Server-side logic',
    skills: [
      { name: 'Node.js', mono: 'No' },
      { name: 'Express.js', mono: 'Ex' },
    ],
  },
  {
    id: 'mobile',
    title: 'Mobile',
    subtitle: 'Apps in your pocket',
    skills: [{ name: 'React Native', mono: 'Rn' }],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Where the data lives',
    skills: [
      { name: 'MongoDB', mono: 'Mg' },
      { name: 'MySQL', mono: 'My' },
    ],
  },
  {
    id: 'interests',
    title: 'Growing',
    subtitle: 'Coming soon to the series',
    skills: [
      { name: 'AI / Data Science', mono: 'Ai' },
      { name: 'Data-driven Products', mono: 'Dp' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects or certifications.
 */
export const skillEvidence: Record<string, string[]> = {
  'React.js': ['MediAI'],
  'Next.js': ['Fluid Valve', 'Amar Jeans'],
  'Node.js': ['MediAI'],
  'Express.js': ['Fluid Valve', 'Amar Jeans'],
  MongoDB: ['Amar Jeans'],
  'AI / Data Science': ['MediAI', 'Google AI Essentials', 'AI Fluency for Students'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'Enter: AI & DS',
    period: '2026 – Present',
    synopsis: "Bachelor's in Artificial Intelligence & Data Science at Nexcore Institute of Technology.",
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Student',
        description: "Started the Bachelor's in AI & Data Science at Nexcore Institute of Technology (2025 – 2028).",
        tags: ['AI & DS', 'Nexcore'],
        runtime: 'Aug 2025 – Apr 2028',
        palette: violet,
      },
      {
        code: 'S01 E02',
        title: 'The Intern',
        description: 'Joined Nexcore as an Intern, building and shipping web and mobile applications.',
        tags: ['Intern', 'MERN'],
        runtime: 'Aug 2025 – Present',
        palette: ocean,
      },
    ],
  },
  {
    number: 2,
    title: 'Building Real Products',
    period: '2025 – 2026',
    synopsis: 'Ten-plus applications delivered for real businesses across four industries.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Freelancer',
        description: 'Delivered 10+ web and mobile applications for e-commerce, real estate, finance and industrial clients.',
        tags: ['React.js', 'Next.js', 'Node.js', 'MongoDB'],
        runtime: '10+ apps',
        palette: amber,
      },
      {
        code: 'S02 E02',
        title: 'The Co-Founder',
        description: 'Co-founded MediAI, a healthcare platform with four role-based panels.',
        tags: ['MediAI', 'Healthcare', 'AI'],
        runtime: '2026',
        palette: crimson,
      },
      {
        code: 'S02 E03',
        title: 'The Storefront Builder',
        description: 'Built Amar Jeans (D2C e-commerce) and Fluid Valve (B2B industrial catalog).',
        tags: ['Next.js', 'Express', 'MongoDB'],
        runtime: '2026',
        palette: jade,
      },
    ],
  },
  {
    number: 3,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'Looking for internships in Full Stack, Mobile or AI-driven development.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Next Chapter',
        description: 'Moving from functional products toward smarter, data-driven ones using the AI & DS foundation.',
        tags: ['AI / DS', 'React Native', 'Internships'],
        runtime: 'In production',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Primary stack', title: 'MERN', detail: 'React • Next.js • Node • Express • MongoDB', palette: amber },
  { label: 'The healthcare Original', title: 'MediAI', detail: 'Four role-based panels • Live', palette: crimson },
  { label: 'Delivered', title: '10+ Apps', detail: 'Web & mobile for real businesses', palette: ocean },
  { label: 'Industries', title: '4 Sectors', detail: 'E-commerce • Real estate • Finance • Industrial', palette: violet },
  { label: 'The B2B Original', title: 'Fluid Valve', detail: 'Next.js 14 • Express', palette: jade },
  { label: 'The D2C Original', title: 'Amar Jeans', detail: 'Next.js • Express • MongoDB', palette: amber },
  { label: 'Mobile', title: 'React Native', detail: 'Cross-platform apps', palette: crimson },
  { label: 'Databases', title: 'MongoDB + MySQL', detail: 'Document and relational', palette: ocean },
  { label: 'Design', title: 'Figma', detail: 'From idea to interface', palette: jade },
  { label: 'Current focus', title: 'AI & Data Science', detail: 'Building smarter, data-driven products', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'AI & Data Science',
    lines: ['Nexcore Institute of Technology', 'August 2025 – April 2028'],
    chips: ['Second year'],
  },
  {
    kicker: 'Skills',
    title: 'MERN first.',
    lines: ['React.js, Next.js, React Native · Node.js, Express.js', 'MongoDB, MySQL · Figma'],
    chips: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'MySQL'],
  },
  {
    kicker: 'Experience',
    title: 'The Intern Arc',
    lines: ['Intern · Nexcore Alliance', 'August 2026 – Present', 'Web · Mobile · Real clients'],
  },
  {
    kicker: 'Projects',
    title: 'Three Originals',
    lines: ['MediAI — four role-based panels, live', 'Fluid Valve — B2B industrial catalog', 'Amar Jeans — D2C denim storefront'],
  },
  {
    kicker: 'Delivered',
    title: '10+ Applications',
    lines: ['E-commerce · Real estate · Finance · Industrial'],
  },
  {
    kicker: 'Current mission',
    title: 'Now looking for',
    lines: ['Internships in Full Stack, Mobile or AI-driven development'],
  },
];

export type ProfileId = 'ahmed' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'ahmed',
    name: 'Ahmed',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & experience', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the profile', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
