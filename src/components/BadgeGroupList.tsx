import { badgeGroups, badgeUrl } from '../content/portfolio'

export default function BadgeGroupList() {
  return (
    <div className="mt-6 space-y-6">
      {badgeGroups.map((group) => (
        <div key={group.title}>
          <p className="mb-2 text-[11px] font-semibold tracking-[0.06em] text-zinc-300 md:text-[12px]">
            {group.title}
          </p>
          <div className="flex flex-wrap gap-2">
            {group.badges.map((badge) => (
              <img
                key={badge.name}
                src={badgeUrl(badge.name, badge.logo)}
                alt={badge.name}
                loading="lazy"
                className="h-7 w-auto transition-transform duration-200 ease-out hover:scale-105"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}