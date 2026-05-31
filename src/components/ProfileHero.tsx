import { useState } from 'react'
import TechStack from './TechStack'

function CopyText({ text, label }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <span
      className="underline cursor-pointer transition-colors"
      onClick={handleCopy}
      title="Click to copy"
    >
      {copied ? 'Copied!' : (label ?? text)}
    </span>
  )
}

export default function ProfileHero() {
  const [showBubble, setShowBubble] = useState(false)
  const [currentProject, setCurrentProject] = useState('')

  const handleToggle = async () => {
    if (!currentProject) {
      try {
        const res = await fetch('/currentproject.txt')
        setCurrentProject(await res.text())
      } catch {
        setCurrentProject('Something awesome...')
      }
    }
    setShowBubble(v => !v)
  }

  return (
    <section className="min-h-[220vh] px-4 text-white" data-section="Home">
      <div className="flex min-h-screen items-center justify-center">
        <div className="w-full max-w-5xl text-center -translate-y-8 md:-translate-y-10">

          <div className="relative mx-auto mb-8 h-44 w-44">
            <div className="h-44 w-44 overflow-hidden rounded-full border border-zinc-700/70 shadow-[0_0_50px_rgba(255,255,255,0.06)]">
              <img
                src="/vesa-profile.png"
                alt="Vesa Basha"
                className="h-full w-full object-cover grayscale contrast-110 brightness-90"
              />
            </div>

            {showBubble && (
              <>
                <div className="md:hidden absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 rounded-2xl bg-zinc-900 border border-zinc-700/70 p-4 text-left text-sm text-white/90 shadow-xl leading-relaxed">
                  {currentProject}
                  <div className="absolute bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2 h-3 w-3 rotate-45 bg-zinc-900 border-r border-b border-zinc-700/70" />
                </div>

                <div className="hidden md:block absolute top-0 left-full ml-5 w-72 rounded-2xl bg-zinc-900 border border-zinc-700/70 p-4 text-left text-sm text-white/90 shadow-xl leading-relaxed">
                  {currentProject}
                  <div className="absolute left-0 top-6 -translate-x-1/2 h-3 w-3 rotate-45 bg-zinc-900 border-l border-b border-zinc-700/70" />
                </div>
              </>
            )}
          </div>

          <h1 className="mb-6 text-[48px] leading-none tracking-[0.08em] text-white md:text-[64px]">
            Vesa Basha
          </h1>

          <h2 className="mb-7 text-[34px] leading-tight tracking-[0.06em] text-white md:text-[56px]">
            Backend Developer | Prishtina, Kosova
          </h2>

          <h6 className="text-[9px] font-normal tracking-[0.06em] text-white/90 md:text-[12px] flex items-center justify-center gap-2">
            <CopyText text="vesa.basha1@gmail.com" />
            <span>|</span>
            <a
              href="https://github.com/vesab0"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              github/vesab0
            </a>
            <span>|</span>
            <CopyText text="+383-45-927-842" />
          </h6>

          <TechStack headerRight={
            <button
              onClick={handleToggle}
              className="text-xs tracking-widest text-white/60 hover:text-white/90 border border-zinc-700/60 hover:border-zinc-500 px-4 py-2 transition-colors cursor-pointer bg-black"
            >
              {showBubble ? 'Got it!' : 'What are you working on?'}
            </button>
          } />
        </div>
      </div>
    </section>
  )
}