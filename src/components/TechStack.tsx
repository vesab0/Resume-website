import BadgeGroupList from './BadgeGroupList'
import ProfileSectionContent from './ProfileSectionContent'
import { profileSections } from '../content/portfolio'
import SectionCard from './SectionCard'

export default function TechStack() {
  return (
    <section className="mx-auto mt-24 w-full max-w-4xl text-left" data-section="Tech Stack">
      <SectionCard title="Tech Stack" titleClassName="mb-15 text-[34px] leading-tight tracking-[0.06em] text-white md:text-[56px]">
        <BadgeGroupList />
      </SectionCard>

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