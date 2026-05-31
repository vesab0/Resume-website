import { badgeUrl, type ProjectCard } from '../content/portfolio'

type ProjectGridProps = {
  cards: ProjectCard[]
}

export default function ProjectGrid({ cards }: ProjectGridProps) {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      {cards.map((project) => (
        <a
          key={project.title}
          href={project.href}
          target="_blank"
          rel="noreferrer"
          className="group block border border-zinc-700/50 bg-black/45 p-3 transition-all duration-200 hover:border-zinc-500/70 hover:bg-black/65"
        >
          <div className="overflow-hidden border border-zinc-800/70">
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="h-40 w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
            />
          </div>

          <h3 className="mt-3 text-[12px] font-semibold tracking-[0.06em] text-zinc-100 md:text-[13px]">
            {project.title}
          </h3>

          <p className="mt-2 text-[11px] leading-relaxed tracking-[0.04em] text-zinc-300 md:text-[12px]">
            {project.description}
          </p>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.badges.map((badge) => (
              <img
                key={`${project.title}-${badge.name}`}
                src={badgeUrl(badge.name, badge.logo)}
                alt={badge.name}
                loading="lazy"
                className="h-5 w-auto transition-transform duration-200 ease-out hover:scale-105"
              />
            ))}
          </div>
        </a>
      ))}
    </div>
  )
}