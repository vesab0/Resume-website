import type { ReactNode } from 'react'
import SectionShell from './SectionShell'

type SectionCardProps = {
  title: string
  titleClassName: string
  children: ReactNode
  dataSection?: string
  headerRight?: ReactNode
}

export default function SectionCard({ title, titleClassName, children, dataSection, headerRight }: SectionCardProps) {
  return (
    <SectionShell dataSection={dataSection}>
      <div className="flex items-start justify-between">
        <h2 className={titleClassName}>{title}</h2>
        {headerRight && <div className="-mt-1">{headerRight}</div>}
      </div>
      {children}
    </SectionShell>
  )
}