import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import SectionCard from '../components/SectionCard'
import TimelineSection from '../components/TimelineSection'

export default function Exploring() {
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
        <section className="px-6 pb-16 pt-20 text-white sm:px-8 lg:px-8 lg:pb-20 lg:pt-24" data-section="Exploring">
          <div className="flex min-h-[calc(100svh-5rem)] items-center justify-center lg:block lg:min-h-0">
            <div className="w-full max-w-5xl -translate-y-4 lg:mx-auto lg:translate-y-0">
              <div className="mb-12 flex flex-col items-center gap-8 lg:mb-16 lg:flex-row lg:items-start lg:justify-end lg:gap-20">
                <div className="order-2 flex-1 text-center lg:order-1 lg:text-right">
                  <p className="mb-4 text-5xl font-bold leading-tight tracking-[0.05em] text-white sm:text-6xl lg:mb-6 lg:text-[80px]">
                    <span className="block">CURRENTLY</span>
                    <span className="block">EXPLORING</span>
                  </p>
                  <p className="mb-3 text-xl font-light tracking-wide text-zinc-300 sm:text-2xl lg:mb-6 lg:text-[52px]">
                    Vesa Basha
                  </p>
                  <p className="text-lg font-light tracking-wide text-zinc-300 lg:text-[36px]">
                    Research | Machine Learning
                  </p>
                </div>
                <div className="order-1 w-48 flex-shrink-0 sm:w-64 lg:order-2 lg:w-96">
                  <img
                    src="/current.png"
                    alt="Currently Exploring - ASCII Art"
                    className="h-auto w-full"
                  />
                </div>
              </div>

              <div className="text-left">
                <div className="flex flex-col gap-4 text-sm font-light leading-relaxed text-zinc-300 sm:text-base">
                  <p>
                    I think the fact that we can use computers to learn new things about the world is one of the most profound things ever.
                  </p>
                  <p>
                    I am actively trying to be part of research, and learning to simulate things as well as teaching myself machine learning.
                  </p>
                  <p className="text-base font-bold text-zinc-100 sm:text-lg lg:text-xl">
                    Please reach out to me to collaborate on any research idea in any field, I am always happy to think about how coding can be applied to help us prove, predict and discover :)
                  </p>
                </div>
              </div>

              <section className="mx-auto mt-10 w-full max-w-4xl text-left sm:mt-12" data-section="Read my Work">
                <SectionCard
                  title="Read my Work"
                  titleClassName="mb-6 text-2xl font-semibold leading-tight tracking-[0.03em] text-white sm:mb-8 lg:text-[36px]"
                >
                  <TimelineSection
                    items={[
                      {
                        title: 'Efficient implementation of classical techniques for short ciphertext scenarios',
                        date: 'In progress',
                        details: ['Will be published soon.'],
                      },
                    ]}
                  />
                </SectionCard>
              </section>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
