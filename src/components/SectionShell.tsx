import type { ReactNode } from 'react'

type SectionShellProps = {
  children: ReactNode
  className?: string
  dataSection?: string
}

export default function SectionShell({ children, className = '', dataSection }: SectionShellProps) {
  return (
    <div
      data-section={dataSection}
      className={`border border-zinc-700/60 bg-white/[0.07] px-5 py-6 md:px-7 md:py-8 ${className}`}
    >
      {children}
    </div>
  )
}