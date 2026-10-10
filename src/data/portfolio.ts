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
    src: '/IMG_4674.JPG',
    srcSet: '/IMG_4674.JPG',
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
    period: 'August 2025 – Present',
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
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'fluid-valve',
    title: 'Fluid Valve',
    year: '2026',
    genre: 'B2B • Industrial • Next.js',
    logline: 'A B2B industrial valve catalog and inquiry website built for an industrial client.',
    stack: ['Next.js 14', 'Express', 'JavaScript'],
    build: [
      'Built a B2B industrial valve catalog and inquiry site with Next.js 14 and an Express backend, in pure JavaScript.',
      'Structured the build as a step-by-step series of prompts with guardrails, orchestrated through AI coding agents.',
    ],
    features: [
      'Product catalog for industrial valves',
      'Customer inquiry flow',
      'Next.js 14 frontend with Express backend',
    ],
    metrics: [
      { value: 'B2B', label: 'industrial client' },
      { value: '14', label: 'Next.js version' },
    ],
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'amar-jeans',
    title: 'Amar Jeans',
    year: '2026',
    genre: 'E-commerce • D2C • MERN',
    logline: 'A direct-to-consumer denim storefront built on Next.js, Express and MongoDB.',
    stack: ['Next.js', 'Express', 'MongoDB'],
    build: [
      'Built a D2C denim e-commerce storefront with Next.js, Express and MongoDB.',
      'Benchmarked competitor storefronts to plan the upgrades that followed.',
    ],
    features: [
      'D2C denim storefront',
      'Next.js frontend, Express API, MongoDB database',
      'Upgrades planned from competitor analysis',
    ],
    metrics: [
      { value: 'D2C', label: 'e-commerce' },
      { value: '3', label: 'core technologies' },
    ],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tenants',
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
    period: '2025 – Present',
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
    lines: ['Intern · Nexcore Alliance', 'August 2025 – Present', 'Web · Mobile · Real clients'],
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
