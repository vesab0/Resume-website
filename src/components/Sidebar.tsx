import { Link } from 'react-router-dom'

type SidebarProps = {
  mobileOpen?: boolean
  onClose?: () => void
}

export default function Sidebar({ mobileOpen = false, onClose }: SidebarProps) {
  return (
    <>
      <aside className="hidden lg:block lg:group lg:sticky lg:left-0 lg:top-0 lg:h-screen lg:w-10 lg:overflow-hidden lg:bg-zinc-950 lg:transition-[width] lg:duration-300 lg:ease-in-out lg:hover:w-56">
        <div className="h-full px-3 py-6 flex flex-col gap-6">
          <div className="text-zinc-300 text-xs uppercase tracking-[0.2em] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Menu
          </div>
          <nav className="flex flex-col gap-2 text-zinc-100">
            <Link
              to="/"
              className="whitespace-nowrap rounded-md px-2 py-2 hover:text-zinc-500/80 transition-colors"
            >
              #     Home
            </Link>
                        <Link
              to="/projects"
              className="whitespace-nowrap rounded-md px-2 py-2 hover:text-zinc-500/80 transition-colors"
            >
              #     Projects
            </Link>
            <Link
              to="/exploring"
              className="whitespace-nowrap rounded-md px-2 py-2 hover:text-zinc-500/80 transition-colors"
            >
              #     Exploring
            </Link>
            <Link
              to="/hobbies"
              className="whitespace-nowrap rounded-md px-2 py-2 hover:text-zinc-500/80 transition-colors"
            >
              #     Hobbies
            </Link>

          </nav>
        </div>
      </aside>

      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-zinc-950 px-4 py-6 transition-transform duration-300 lg:hidden ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="text-zinc-300 text-xs uppercase tracking-[0.2em]">Menu</div>
          <button
            onClick={() => onClose?.()}
            aria-label="Close menu"
            className="p-1 rounded text-zinc-300 hover:text-zinc-100"
          >
            ✕
          </button>
        </div>

        <nav className="flex flex-col gap-2 text-zinc-100">
          <Link to="/" className="rounded-md px-2 py-2 hover:text-zinc-500/80 transition-colors">
            Home
          </Link>
          <Link to="/exploring" className="rounded-md px-2 py-2 hover:text-zinc-500/80 transition-colors">
            Exploring
          </Link>
          <Link to="/hobbies" className="rounded-md px-2 py-2 hover:text-zinc-500/80 transition-colors">
            Hobbies
          </Link>
          <Link to="/projects" className="rounded-md px-2 py-2 hover:text-zinc-500/80 transition-colors">
            Projects
          </Link>
        </nav>
      </aside>
    </>
  )
}
