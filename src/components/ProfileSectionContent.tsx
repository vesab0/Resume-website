import type { ProfileSection } from '../content/portfolio'
import ProjectGrid from './ProjectGrid'
import TimelineSection from './TimelineSection'

type ProfileSectionContentProps = {
  section: ProfileSection
}

export default function ProfileSectionContent({ section }: ProfileSectionContentProps) {
  if (section.kind === 'projects') {
    return <ProjectGrid cards={section.projectCards ?? []} />
  }

  if (section.kind === 'text') {
    return (
      <p className="text-[13px] leading-relaxed tracking-[0.04em] text-zinc-300 md:text-[14px]">
        {section.body}
      </p>
    )
  }

  return <TimelineSection items={section.items} />
}