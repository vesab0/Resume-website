import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import BadgeGroupList from './BadgeGroupList'
import ProfileSectionContent from './ProfileSectionContent'
import { profileSections } from '../content/portfolio'
import SectionCard from './SectionCard'

const sectionTitleClass = 'mb-8 text-[28px] font-semibold leading-tight tracking-[0.03em] text-white md:text-[36px]'

export default function TechStack({ headerRight }: { headerRight?: ReactNode }) {
  return (
    <section className="mx-auto mt-24 w-full max-w-4xl text-left">
      <div className="relative" data-section="Tech Stack">
        <div className="absolute -top-3 right-0 -translate-y-full z-10 flex items-center gap-2">
          <a
            href="/VesaBasha.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-widest text-white/60 hover:text-white/90 border border-zinc-700/60 hover:border-zinc-500 px-4 py-2 transition-colors cursor-pointer bg-black"
          >
            View CV
          </a>
          {headerRight}
        </div>
        <SectionCard title="Tech Stack" titleClassName="mb-15 text-[34px] leading-tight tracking-[0.06em] text-white md:text-[56px]">
          <BadgeGroupList />
        </SectionCard>
      </div>

      <div className="mt-8 space-y-8">
        {profileSections.map((section) => (
          <SectionCard
            key={section.title}
            dataSection={section.title}
            title={section.title}
            titleClassName={sectionTitleClass}
            headerRight={section.kind === 'projects' ? (
              <Link
                to="/projects"
                className="border border-zinc-700/60 bg-black px-4 py-2 text-xs tracking-widest text-white/60 transition-colors hover:border-zinc-500 hover:text-white/90"
              >
                See more →
              </Link>
            ) : undefined}
          >
            <ProfileSectionContent section={section} />
          </SectionCard>
        ))}
      </div>
    </section>
  )
}