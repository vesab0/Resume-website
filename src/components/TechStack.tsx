import type { ReactNode } from 'react'
import BadgeGroupList from './BadgeGroupList'
import ProfileSectionContent from './ProfileSectionContent'
import { profileSections } from '../content/portfolio'
import SectionCard from './SectionCard'

export default function TechStack({ headerRight }: { headerRight?: ReactNode }) {
  return (
    <section className="mx-auto mt-24 w-full max-w-4xl text-left" data-section="Tech Stack">
      <div className="relative">
        <div className="absolute -top-3 right-0 -translate-y-full z-10 flex items-center gap-2">
          <a
            href="/VesaBasha.pdf"
            download="VesaBasha.pdf"
            className="text-xs tracking-widest text-white/60 hover:text-white/90 border border-zinc-700/60 hover:border-zinc-500 px-4 py-2 transition-colors cursor-pointer bg-black"
          >
            Download CV
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
            titleClassName="mb-8 text-[28px] font-semibold leading-tight tracking-[0.03em] text-white md:text-[36px]"
          >
            <ProfileSectionContent section={section} />
          </SectionCard>
        ))}
      </div>
    </section>
  )
}