import { useState } from 'react'
import ProfileHero from '../components/ProfileHero'
import SectionNav from '../components/SectionNav'
import Sidebar from '../components/Sidebar'

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className=" min-h-screen text-white flex">
      <SectionNav />
      

      {/* Mobile hamburger: visible on small screens only */}
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

      {/* overlay when mobile menu open */}
      {mobileOpen && <div onClick={() => setMobileOpen(false)} className="fixed inset-0 z-40 bg-black/40 lg:hidden" />}

      <main className="mt-25 flex-1">
        <ProfileHero />
      </main>
    </div>
  )
}
