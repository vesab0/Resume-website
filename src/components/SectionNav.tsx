import { sectionNavItems } from '../content/portfolio'

export default function SectionNav() {
  const handleSectionClick = (sectionTitle: string) => {
    const section = document.querySelector(`[data-section="${sectionTitle}"]`)
    if (section) {
      const targetPosition = section.getBoundingClientRect().top + window.scrollY - 120
      window.scrollTo({ top: targetPosition, behavior: 'smooth' })
    }
  }

  return (
    <div className="hidden lg:block lg:fixed lg:left-14 lg:top-1/2 lg:z-40 lg:h-56 lg:w-28 lg:-translate-y-1/2 lg:px-2">
      <nav className="flex h-full flex-col items-start justify-around gap-0.5">
        {sectionNavItems.map((section) => (
          <button
            key={section}
            onClick={() => handleSectionClick(section)}
            className="text-left text-[10px] font-semibold tracking-[0.06em] text-zinc-300 transition-colors hover:text-zinc-100 md:text-[11px]"
          >
            {section.split(' ')[0]}
          </button>
        ))}
      </nav>
    </div>
  )
}