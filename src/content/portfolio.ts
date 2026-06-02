export type Badge = {
  name: string
  logo?: string
}

export type BadgeGroup = {
  title: string
  badges: Badge[]
}

export type SectionItem = {
  title: string
  subtitle?: string
  date?: string
  location?: string
  details?: string[]
  logo?: string
  logoClassName?: string
}

export type ProjectCard = {
  title: string
  href: string
  image: string
  description: string
  badges: Badge[]
}

export type ProfileSection = {
  title: string
  kind: 'timeline' | 'projects' | 'text'
  body?: string
  items: SectionItem[]
  projectCards?: ProjectCard[]
}

export const sectionNavItems = ['Home', 'Tech Stack', 'Experience', 'Education', 'Projects', 'Technical Focus', 'Extracurricular'] as const

export const badgeGroups: BadgeGroup[] = [
  {
    title: 'Languages',
    badges: [
      {
        name: 'Python',
        logo: 'python',
      },
      {
        name: 'JavaScript',
        logo: 'javascript',
      },
      {
        name: 'TypeScript',
        logo: 'typescript',
      },
      {
        name: 'SQL',
        logo: 'mysql',
      },
    ],
  },
  {
    title: 'Frameworks',
    badges: [
      {
        name: 'FastAPI',
        logo: 'fastapi',
      },
      {
        name: 'Django',
        logo: 'django',
      },
      {
        name: 'Next.js',
        logo: 'nextdotjs',
      },
      {
        name: 'Node.js',
        logo: 'nodedotjs',
      },
      {
        name: 'React',
        logo: 'react',
      },
      {
        name: 'Tailwind CSS',
        logo: 'tailwindcss',
      },
    ],
  },
  {
    title: 'Databases',
    badges: [
      {
        name: 'PostgreSQL',
        logo: 'postgresql',
      },
      {
        name: 'Redis',
        logo: 'redis',
      },
    ],
  },
  {
    title: 'Tools & Infra',
    badges: [
      {
        name: 'Docker',
        logo: 'docker',
      },
      {
        name: 'Git',
        logo: 'git',
      },
      {
        name: 'Linux',
        logo: 'linux',
      },
      {
        name: 'Vercel',
        logo: 'vercel',
      },
      {
        name: 'Cursor',
        logo: 'cursor',
      },
      {
        name: 'Claude Code',
        logo: 'Claude',
      },
    ],
  },
]

export const profileSections: ProfileSection[] = [
  {
    title: 'Experience',
    kind: 'timeline',
    items: [
      {
        title: 'Asaasin AI',
        subtitle: 'Backend Developer',
        date: 'April 2025 – Present',
        location: 'Prishtina, Kosova',
        logo: '/logo-asaasin.png',
        logoClassName:
          'h-9 w-9 object-contain grayscale [filter:brightness(0)_invert(1)] opacity-90',
        details: [
          'Built a production RAG system over 10+ years of patient records using OpenAI and pgvector, exposing structured medical data and X-ray model outputs through REST APIs for multi-role dashboards and external integrations.',
          'Designed a Redis-backed caching and background job system for a Meta Ads analytics platform, enabling pre-synced metrics and near-instant dashboard load times.',
          'Developed backend services for an AI hiring platform including resume scoring, candidate matching, and real-time video transcription using Whisper-based pipelines.',
          'Owned backend architecture across multiple systems, including FastAPI/Django/Node.js services, Dockerized deployments, CI/CD pipelines, and shared internal infrastructure used across the entire engineering team.',
        ],
      },
      {
        title: 'JCoders Academy',
        subtitle: 'Programming Instructor',
        date: 'February 2024 – September 2024',
        location: 'Prishtina, Kosova',
        logo: '/logo-jcoders.png',
        logoClassName:
          'h-9 w-9 object-contain grayscale contrast-200 [filter:grayscale(1)_invert(1)] mix-blend-lighten',
        details: ['Taught web development and Python to kids and high school students.'],
      },
    ],
  },
  {
    title: 'Education',
    kind: 'timeline',
    items: [
      {
        title: 'UBT - University for Business and Technology',
        subtitle: 'Bachelor of Science in Computer Science and Engineering - GPA: 8.5/10',
        date: '2024 – 2027 (Expected)',
        location: 'Prishtina, Kosova',
        logo: '/logo-ubt.png',
        logoClassName:
          'h-9 w-9 object-contain [filter:grayscale(1)_invert(1)_contrast(180%)] mix-blend-screen opacity-90',
      },
    ],
  },
  {
    title: 'Projects',
    kind: 'projects',
    items: [],
    projectCards: [
      {
        title: 'Insignia',
        href: 'https://insignia-ruby.vercel.app/',
        image: '/project-insignia.png',
        description:
          'AI-powered code review platform that scores every merged PR by role and seniority, with custom rules per org.',
        badges: [
          { name: 'GitHub Actions', logo: 'githubactions' },
          { name: 'PostgreSQL', logo: 'postgresql' },
          { name: 'Docker', logo: 'docker' },
          { name: 'FastAPI', logo: 'fastapi' },
          { name: 'React', logo: 'react' },
        ],
      },
      {
        title: 'Twin Peaks Cinema',
        href: 'https://github.com/vesab0/Movie-recommendation-system',
        image: '/project-twin-peaks.png',
        description:
          'Full-stack cinema platform with a hybrid recommendation engine — KNN, collaborative filtering, and auto-email when a new movie matches your taste.',
        badges: [
          { name: 'FastAPI', logo: 'fastapi' },
          { name: '.NET', logo: 'dotnet' },
          { name: 'React', logo: 'react' },
          { name: 'Docker', logo: 'docker' },
          { name: 'MySQL', logo: 'mysql' },
        ],
      },
    ],
  },
  {
    title: 'Technical Focus',
    kind: 'timeline',
    items: [
      {
        title: 'AI-native builder',
        details: ['RAG, vector search, prompt engineering, and production LLM integrations.'],
      },
      {
        title: 'AI-assisted development workflows',
        details: [
          'Proficient with LLMs, agentic tooling, prompt engineering, code generation, debugging, automation, context orchestration, and rapid prototyping across modern AI platforms.',
        ],
      },
      {
        title: 'Fast adapter',
        details: ['Rapidly adapt to new languages, frameworks, and tools through hands-on implementation and shipped projects.'],
      },
    ],
  },
  {
    title: 'Extracurricular',
    kind: 'timeline',
    items: [
      {
        title: 'FLOSSK – Free Libre Open Source Software Kosovo',
        subtitle: 'Member',
        date: 'February 2026 – Present',
        logo: '/logo-flossk.png',
        logoClassName:
          'h-9 w-9 object-contain [filter:grayscale(1)_invert(1)_contrast(180%)] mix-blend-screen opacity-90',
        details: ["Active member of Kosovo's open source software community."],
      },
      {
        title: 'Hackathons & Game Jams',
        subtitle: 'Participant',
        logo: '/gear-icon-template-flat-design-illustration-eps-10-free-vector.jpg',
        logoClassName:
          'h-9 w-9 object-contain [filter:grayscale(1)_invert(1)_contrast(180%)] mix-blend-screen opacity-90',
        details: ['Regular participant in local and international hackathons and game jams.'],
      },
      {
        title: 'High School Programming Team',
        subtitle: 'Lead',
        logo: '/samia.png',
        logoClassName:
          'h-9 w-9 object-contain [filter:grayscale(1)_invert(1)_contrast(180%)] mix-blend-screen opacity-90',
        details: ["Led the school programming team, taught peers"],
      },
    ],
  },
]

export function badgeUrl(name: string, logo?: string) {
  const encodedName = encodeURIComponent(name).replace(/%20/g, '_')
  const base = `https://img.shields.io/badge/${encodedName}-black?style=for-the-badge`

  if (!logo) {
    return `${base}&logoColor=white`
  }

  return `${base}&logo=${logo}&logoColor=white`
}