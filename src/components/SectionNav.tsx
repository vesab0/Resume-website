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
    <div className="hidden lg:block lg:fixed lg:left-60 lg:top-1/2 lg:z-50 lg:h-56 lg:w-32 lg:-translate-y-1/2 lg:p-3">
      <nav className="flex h-full flex-col items-center justify-around gap-0.5">
        {sectionNavItems.map((section) => (
          <button
            key={section}
            onClick={() => handleSectionClick(section)}
            className="text-[10px] font-semibold tracking-[0.06em] text-zinc-300 transition-colors hover:text-zinc-100 md:text-[11px]"
          >
            {section.split(' ')[0]}
          </button>
        ))}
      </nav>
    </div>
  )
}