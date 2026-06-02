import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { badgeUrl } from '../content/portfolio'
import type { Badge } from '../content/portfolio'

type FeaturedProject = {
  title: string
  href: string
  image: string
  description: string
  longDescription: string
  badges: Badge[]
}

type SmallProject = {
  title: string
  href: string
  description: string
  badges: Badge[]
}

const featuredProjects: FeaturedProject[] = [
  {
    title: 'Insignia',
    href: 'https://insignia-ruby.vercel.app/',
    image: '/project-insignia.png',
    description: 'Code review intelligence platform',
    longDescription:
      'Scores every merged PR using AI, weighted by role and seniority. Supports custom rules per organization and tracks developer performance across objective, subjective, and consistency dimensions. Built to give engineering teams a data-driven view of code quality over time.',
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
    description: 'Full-stack cinema management platform',
    longDescription:
      'Full-stack cinema management platform with a hybrid movie recommendation engine built from scratch using KNN, collaborative and content-based filtering, RRF for multi-movie queries, and KMeans for search optimization. Automatically emails users when a new movie matches their taste profile via a standalone recommendation API.',
    badges: [
      { name: 'FastAPI', logo: 'fastapi' },
      { name: '.NET', logo: 'dotnet' },
      { name: 'React', logo: 'react' },
      { name: 'Docker', logo: 'docker' },
      { name: 'MySQL', logo: 'mysql' },
    ],
  },
]

const smallProjects: SmallProject[] = [
  {
    title: 'Resume Website',
    href: 'https://github.com/vesab0/Resume-website',
    description: 'This',
    badges: [
      { name: 'React', logo: 'react' },
      { name: 'TypeScript', logo: 'typescript' },
      { name: 'Tailwind CSS', logo: 'tailwindcss' },
    ],
  },
  {
    title: 'Vigenère Cracker',
    href: 'https://github.com/vesab0/Vigenere-Breaker-using-Conditional-Probability',
    description:
      'Breaks Vigenère ciphers using conditional probability and frequency analysis',
    badges: [{ name: 'Python', logo: 'python' }],
  },
  {
    title: 'Enigma & Bombe',
    href: 'https://github.com/vesab0/turing-machine',
    description:
      "Simulation of the Enigma machine and Turing's Bombe",
    badges: [{ name: 'Python', logo: 'python' }],
  },
  {
    title: 'ASCII Art Generator',
    href: 'https://github.com/vesab0/ascii-art',
    description: 'Images to ASCII, I think you see the use case.',
    badges: [{ name: 'Python', logo: 'python' }],
  },
  {
    title: 'Quest',
    href: 'https://github.com/vesab0/Web-projekti-final',
    description: 'A web app project built as a full-stack exercise',
    badges: [
      { name: 'JavaScript', logo: 'javascript' },
      { name: 'PHP', logo: 'php' },
      { name: 'MySQL', logo: 'mysql' },
      { name: 'HTML', logo: 'html5' },
      { name: 'CSS', logo: 'css3' },
    ],
  },
  {
    title: 'Sudoku Solver',
    href: 'https://github.com/vesab0/sudoku-solver',
    description: 'Solves any valid Sudoku puzzle using backtracking with constraint propagation.',
    badges: [{ name: 'Python', logo: 'python' }],
  },
  {
    title: 'Snake Oil Discord Bot',
    href: 'https://github.com/vesab0/Snake-Oil-Discord-Bot',
    description:
      'A Discord bot for running the Snake Oil card game across a server.',
    badges: [
      { name: 'Python', logo: 'python' },
      { name: 'Discord', logo: 'discord' },
    ],
  },
]

export default function Projects() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="min-h-screen text-white flex">
      <button
        onClick={() => setMobileOpen((s) => !s)}
        aria-label="Open sidebar"
        className="fixed top-4 left-4 z-50 rounded bg-zinc-900/80 p-2 text-zinc-100 lg:hidden"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3 6h18M3 12h18M3 18h18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <Sidebar mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />

      {mobileOpen && (
        <div onClick={() => setMobileOpen(false)} className="fixed inset-0 z-40 bg-black/40 lg:hidden" />
      )}

      <main className="flex-1">



        <section className="px-8 pb-16 pt-16 text-white sm:px-10 lg:px-14 lg:pb-20 lg:pt-24">

          <div className="flex items-center justify-center lg:block">
            <div className="w-full max-w-4xl -translate-y-4 lg:mx-auto lg:translate-y-0">
              <div className="mb-12 text-center lg:mb-16">
                <p className="mb-4 text-5xl font-bold leading-tight tracking-[0.05em] text-white sm:text-6xl lg:mb-6 lg:text-[80px]">
                  <span className="block">PROJECTS</span>
                </p>
                <p className="mb-3 text-xl font-light tracking-wide text-zinc-300 sm:text-2xl lg:mb-2 lg:text-[52px]">
                  Vesa Basha
                </p>
              </div>

              

              <div className="mt-10 text-center lg:mt-12">
                <div className="flex flex-col gap-4 text-sm font-light leading-relaxed text-zinc-300 sm:text-base">
                  <p>
                    A collection of projects I've built for fun and learning
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="px-8 pb-16 sm:px-10 lg:px-14">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-2xl font-semibold tracking-[0.03em] text-white lg:text-[36px]">
              Featured
            </h2>
            <div className="flex flex-col gap-5">
              {featuredProjects.map((project) => (
                <a
                  key={project.title}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col overflow-hidden border border-zinc-700/60 bg-white/[0.07] transition-colors hover:border-zinc-500/60 hover:bg-white/[0.10] sm:flex-row"
                >
                  <div className="h-48 w-full flex-shrink-0 bg-zinc-900 sm:h-auto sm:w-56 lg:w-72">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-5 text-left lg:p-6">
                    <div>
                      <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-500">
                        {project.description}
                      </p>
                      <h3 className="mb-2 text-lg font-semibold tracking-tight text-white lg:text-xl">
                        {project.title}
                      </h3>
                      <p className="text-[12px] leading-relaxed text-zinc-300 lg:text-[13px]">
                        {project.longDescription}
                      </p>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.badges.map((badge) => (
                        <img
                          key={badge.name}
                          src={badgeUrl(badge.name, badge.logo)}
                          alt={badge.name}
                          className="h-5"
                        />
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* All Projects */}
        <section className="px-8 pb-24 sm:px-10 lg:px-14">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-2xl font-semibold tracking-[0.03em] text-white lg:text-[36px]">
              Everything Else
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {smallProjects.map((project) => (
                <a
                  key={project.title}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col border border-zinc-700/60 bg-white/[0.07] p-4 transition-colors hover:border-zinc-500/60 hover:bg-white/[0.10] lg:p-5"
                >
                  <div className="mb-3 flex items-start justify-between gap-2">
                    <h3 className="text-[14px] font-semibold tracking-tight text-white">
                      {project.title}
                    </h3>
                    <svg
                      className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-zinc-500 transition-colors group-hover:text-zinc-300"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </div>
                  <p className="mb-4 flex-1 text-[12px] leading-relaxed text-zinc-400">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.badges.map((badge) => (
                      <img
                        key={badge.name}
                        src={badgeUrl(badge.name, badge.logo)}
                        alt={badge.name}
                        className="h-4"
                      />
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
