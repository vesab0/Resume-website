export default function AppBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <img
        src="/bg-silhouette.png"
        alt=""
        className="absolute right-[12%] top-[43%] h-[90vh] sm:h-[110vh] lg:h-[130vh] w-auto -translate-y-1/2 opacity-10"
      />
      <img
        src="/bg-silhouette.png"
        alt=""
        className="hidden lg:block absolute left-[16%] top-[72%] h-[130vh] w-auto -translate-y-1/2 opacity-10"
      />
    </div>
  )
}