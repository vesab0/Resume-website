import type { SectionItem } from '../content/portfolio'

type TimelineSectionProps = {
  items: SectionItem[]
}

export default function TimelineSection({ items }: TimelineSectionProps) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <article key={item.title} className="space-y-1">
          <div className="grid grid-cols-1 gap-x-3 gap-y-1 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
            <div className="flex min-w-0 items-center gap-2">
              {item.logo && (
                <img
                  src={item.logo}
                  alt={`${item.title} logo`}
                  className={item.logoClassName ?? 'h-9 w-9 object-contain grayscale'}
                />
              )}
              <p className="text-[11px] font-semibold tracking-[0.06em] text-zinc-200 md:text-[12px]">
                {item.title}
              </p>
            </div>
            {item.date && (
              <p className="whitespace-normal md:whitespace-nowrap text-[11px] font-semibold tracking-[0.06em] text-zinc-300 md:text-[12px]">
                {item.date}
              </p>
            )}
          </div>

          {(item.subtitle || item.location) && (
            <div className="flex flex-col gap-y-1 italic md:flex-row md:items-baseline md:justify-between md:gap-x-4">
              {item.subtitle ? (
                <p className="text-[11px] tracking-[0.06em] text-zinc-300 md:text-[12px]">
                  {item.subtitle}
                </p>
              ) : (
                <span />
              )}
              {item.location && (
                <p className="text-[11px] tracking-[0.06em] text-zinc-300 md:text-[12px]">
                  {item.location}
                </p>
              )}
            </div>
          )}

          {item.details && (
            <ul className="list-disc space-y-1.5 pl-6 pt-1 marker:text-zinc-300">
              {item.details.map((detail) => (
                <li
                  key={`${item.title}-${detail.slice(0, 24)}`}
                  className="text-[11px] leading-relaxed tracking-[0.04em] text-zinc-300 md:text-[12px]"
                >
                  {detail}
                </li>
              ))}
            </ul>
          )}
        </article>
      ))}
    </div>
  )
}