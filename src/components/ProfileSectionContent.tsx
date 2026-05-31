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

  return <TimelineSection items={section.items} />
}