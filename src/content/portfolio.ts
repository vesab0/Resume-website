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
  kind: 'timeline' | 'projects'
  items: SectionItem[]
  projectCards?: ProjectCard[]
}

export const sectionNavItems = ['Home', 'Tech Stack', 'Experience', 'Education', 'Projects', 'Extracurricular'] as const

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
        name: 'Kubernetes',
        logo: 'kubernetes',
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
        date: 'April 2025 - Present',
        location: 'Prishtina, Kosova',
        logo: '/logo-asaasin.png',
        logoClassName:
          'h-9 w-9 object-contain grayscale [filter:brightness(0)_invert(1)] opacity-90',
        details: [
          'Built a healthcare RAG platform over 10+ years of patient records using OpenAI, pgvector, and ML-powered X-ray analysis.',
          'Built a Meta Ads dashboard with Redis caching and background pre-sync jobs for near-instant metrics.',
          'Developed platform with AI candidate matching, automated resume scoring, and Whisper live transcription.',
          'Owned backend API delivery and deployments across projects using FastAPI/Django/Node.js, Docker, and GitHub Actions.',
          'Built internal infra tooling including Slack error logging, a self-hosted Linux server, and a PR-triggered AI code audit bot.',
        ],
      },
      {
        title: 'JCoders Academy',
        subtitle: 'Assistant Programming Instructor',
        date: 'February 2024 - September 2024',
        location: 'Prishtina, Kosova',
        logo: '/logo-jcoders.png',
        logoClassName:
          'h-9 w-9 object-contain grayscale contrast-200 [filter:grayscale(1)_invert(1)] mix-blend-lighten',
        details: ['Assisted in teaching web development and Python to kids and high school students.'],
      },
    ],
  },
  {
    title: 'Education',
    kind: 'timeline',
    items: [
      {
        title: 'University for Business and Technology',
        subtitle: 'Bachelor of Science in Computer Science and Engineering',
        date: 'Present',
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
        description: 'AI platform that scores merged pull requests using role-aware review intelligence.',
        badges: [
          { name: 'FastAPI', logo: 'fastapi' },
          { name: 'React', logo: 'react' },
          { name: 'Docker', logo: 'docker' },
        ],
      },
      {
        title: 'Twin Peaks',
        href: 'https://github.com/vesab0/Movie-recommendation-system',
        image: '/project-twin-peaks.png',
        description:
          'Cinema platform with a hybrid recommendation engine for personalized movie suggestions.',
        badges: [
          { name: 'React', logo: 'react' },
          { name: '.NET', logo: 'dotnet' },
          { name: 'FastAPI', logo: 'fastapi' },
          { name: 'Docker', logo: 'docker' },
        ],
      },
    ],
  },
  {
    title: 'Extracurricular',
    kind: 'timeline',
    items: [
      {
        title: 'FLOSSK - Free Libre Open Source Software Kosovo',
        subtitle: 'Member',
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
        details: ["Led the school programming team, taught peers, and built the school's official website."],
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