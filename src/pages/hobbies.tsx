import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import SpotifyNowPlaying from '../components/SpotifyNowPlaying'

export default function Hobbies() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="min-h-screen text-white flex">
      <button
        onClick={() => setMobileOpen((s) => !s)}
        aria-label="Open sidebar"
        className="fixed top-4 left-4 z-50 rounded bg-zinc-900/80 p-2 text-zinc-100 lg:hidden"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <Sidebar mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />

      {mobileOpen && <div onClick={() => setMobileOpen(false)} className="fixed inset-0 z-40 bg-black/40 lg:hidden" />}

      <main className="flex-1">
        <section className="px-6 pb-16 pt-20 text-white sm:px-8 lg:px-8 lg:pb-20 lg:pt-24" data-section="Hobbies">
          <div className="flex min-h-[calc(100svh-5rem)] items-center justify-center lg:block lg:min-h-0">
            <div className="w-full max-w-5xl -translate-y-4 lg:mx-auto lg:translate-y-0">
              <div className="mb-12 flex flex-col items-center gap-8 lg:mb-16 lg:flex-row lg:items-start lg:justify-start lg:gap-8">
                <div className="order-1 w-48 flex-shrink-0 sm:w-64 lg:w-96">
                  <img
                    src="/hobbies.png"
                    alt="Hobbies - ASCII Art"
                    className="w-full object-contain aspect-[784/997]"
                  />
                </div>
                <div className="order-2 flex-1 text-center lg:text-left">
                  <p className="mb-4 text-5xl font-bold leading-tight tracking-[0.05em] text-white sm:text-6xl lg:mb-6 lg:text-[80px] lg:whitespace-nowrap">
                    HOBBIES
                  </p>
                  <p className="mb-3 text-xl font-light tracking-wide text-zinc-300 sm:text-2xl lg:mb-6 lg:text-[52px]">
                    Vesa Basha
                  </p>
                  <p className="text-lg font-light tracking-wide text-zinc-300 lg:text-[36px] lg:whitespace-nowrap">
                    Game Developer | Computer fanatic
                  </p>
                  <SpotifyNowPlaying />
                </div>
              </div>

              <div className="text-left">
                <div className="flex flex-col gap-4 text-sm font-light leading-relaxed text-zinc-300 sm:text-base">
                  <p>
                    I remember the first time I realized the computer will do what I tell it to.
                    With machines, you are a god. That curiosity and fascination never changed,
                    so I spend my free time learning about computers and playing around with them.
                  </p>
                  <p>Other than that I'm usually outside with friends :) Theres only so much time
                    one can spend looking at a screen.</p>
                  <p>
                    I also love math, music, comics, manga and video games.
                  </p>
                </div>
              </div>

              <section className="mt-16 border border-zinc-700 bg-zinc-900/40 p-6 text-left sm:p-8 lg:p-10">
                <h2 className="mb-4 font-mono text-2xl tracking-widest text-white sm:text-3xl lg:text-4xl">
                  Gamer and Game Developer
                </h2>
                <p className="mb-8 font-mono text-sm leading-relaxed text-zinc-300 sm:text-base">
                  My journy as a programmer started because of my love for gaming. When I first saw mario jump around I understood, I had to learn how to code.
                </p>

                <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10">
                  <div className="flex-shrink-0 self-center lg:self-start">
                    <img
                      src="/mario.png"
                      alt="Mario"
                      className="w-40 object-contain grayscale sm:w-52 lg:w-64"
                    />
                  </div>

                  <div className="flex flex-1 flex-col gap-6">
                    <div>
                      <p className="mb-4 py-4 font-mono text-sm text-zinc-300 sm:text-base">
                        Some more favorites and inspirations:
                      </p>
                      <div className="flex flex-wrap gap-2 items-end">
                        {[
                          { src: '/sans.png', alt: 'Sans - Undertale' },
                          { src: '/link.png', alt: 'Link - Zelda' },
                          { src: '/disco.png', alt: 'Disco Elysium' },
                          { src: '/kratos.png', alt: 'Kratos - God of War' },
                          { src: '/joker.png', alt: 'Joker - Persona 5' },
                          { src: '/solaire.png', alt: 'Solaire - Dark Souls' },
                        ].map(({ src, alt }) => (
                          <div key={src} className="border border-zinc-600 p-1">
                            <img
                              src={src}
                              alt={alt}
                              className="h-14 w-14 sm:h-20 sm:w-20 lg:h-24 lg:w-24 object-contain grayscale"
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    <p className="font-mono text-sm leading-relaxed text-zinc-300 sm:text-base">
                      So, I taught myself programming. 10 years later I still haven't build my dream game, but I will get there eventually....
                    </p>
                  </div>
                </div>

                <h2 className="mb-4 pt-8 font-mono text-2xl tracking-widest text-white sm:text-3xl lg:text-4xl">
                  My work
                </h2>
                <p className="mb-4 font-mono text-sm leading-relaxed text-zinc-300 sm:text-base">
                  This is a joke i can code i swear 
                </p>

                <div className="mt-2 grid grid-cols-1 gap-5 md:grid-cols-2">
                  <a
                    href="https://vesab.itch.io/mitoza"
                    target="_blank"
                    rel="noreferrer"
                    className="group block border border-zinc-700/50 bg-black/45 p-3 transition-all duration-200 hover:border-zinc-500/70 hover:bg-black/65"
                  >
                    <div className="overflow-hidden border border-zinc-800/70">
                      <img
                        src="/game-mitoza.png"
                        alt="Mitoza preview"
                        className="h-56 w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                      />
                    </div>
                    <h3 className="mt-3 text-[12px] font-semibold tracking-[0.06em] text-zinc-100 md:text-[13px]">
                      MITOZA
                    </h3>
                    <p className="mt-2 text-[11px] leading-relaxed tracking-[0.04em] text-zinc-300 md:text-[12px]">
                      A 2d puzzler. Would not recommend this.
                    </p>
                  </a>

                  <a
                    href="https://vesab.itch.io/ice-queen-oni"
                    target="_blank"
                    rel="noreferrer"
                    className="group block border border-zinc-700/50 bg-black/45 p-3 transition-all duration-200 hover:border-zinc-500/70 hover:bg-black/65"
                  >
                    <div className="overflow-hidden border border-zinc-800/70">
                      <img
                        src="/game-budyfight.png"
                        alt="Budy Fight preview"
                        className="h-56 w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                      />
                    </div>
                    <h3 className="mt-3 text-[12px] font-semibold tracking-[0.06em] text-zinc-100 md:text-[13px]">
                      BUDY FIGHT
                    </h3>
                    <p className="mt-2 text-[11px] leading-relaxed tracking-[0.04em] text-zinc-300 md:text-[12px]">
                      A stupid little boss rush where each of the bosses is one of my friends.
                    </p>
                  </a>

                  <div className="border border-zinc-700/50 bg-black/45 p-3">
                    <div className="overflow-hidden border border-zinc-800/70">
                      <img
                        src="/game-artus.png"
                        alt="ARTUS preview"
                        className="h-56 w-full object-cover"
                      />
                    </div>
                    <h3 className="mt-3 text-[12px] font-semibold tracking-[0.06em] text-zinc-100 md:text-[13px]">
                      ARTUS
                    </h3>
                    <p className="mt-2 text-[11px] leading-relaxed tracking-[0.04em] text-zinc-300 md:text-[12px]">
                      A 2d action game that never saw the light of day..
                    </p>
                  </div>

                  <a
                    href="https://github.com/vesab0/Pong"
                    target="_blank"
                    rel="noreferrer"
                    className="group block border border-zinc-700/50 bg-black/45 p-3 transition-all duration-200 hover:border-zinc-500/70 hover:bg-black/65"
                  >
                    <div className="overflow-hidden border border-zinc-800/70">
                      <img
                        src="/game-pong.png"
                        alt="Pong preview"
                        className="h-56 w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                      />
                    </div>
                    <h3 className="mt-3 text-[12px] font-semibold tracking-[0.06em] text-zinc-100 md:text-[13px]">
                      PONG
                    </h3>
                    <p className="mt-2 text-[11px] leading-relaxed tracking-[0.04em] text-zinc-300 md:text-[12px]">
                      its just pong
                    </p>
                  </a>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
