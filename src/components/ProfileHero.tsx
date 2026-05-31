import TechStack from './TechStack'

export default function ProfileHero() {
  return (
    <section className="min-h-[220vh] px-4 text-white" data-section="Home">
      <div className="flex min-h-screen items-center justify-center">
        <div className="w-full max-w-5xl text-center -translate-y-8 md:-translate-y-10">
          <div className="mx-auto mb-8 h-44 w-44 overflow-hidden rounded-full border border-zinc-700/70 shadow-[0_0_50px_rgba(255,255,255,0.06)]">
            <img
              src="/vesa-profile.png"
              alt="Vesa Basha"
              className="h-full w-full object-cover grayscale contrast-110 brightness-90"
            />
          </div>

          <h1 className="mb-6 text-[48px] leading-none tracking-[0.08em] text-white md:text-[64px]">
            Vesa Basha
          </h1>

          <h2 className="mb-7 text-[34px] leading-tight tracking-[0.06em] text-white md:text-[56px]">
            Backend Developer | Prishtina, Kosova
          </h2>

          <h6 className="text-[9px] font-normal tracking-[0.06em] text-white/90 md:text-[12px]">
            vesa.basha1@gmail.com | github/vesab0 | +383-45-927-842
          </h6>

          <TechStack />
        </div>
      </div>
    </section>
  )
}