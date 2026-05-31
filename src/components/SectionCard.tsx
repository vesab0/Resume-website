import type { ReactNode } from 'react'
import SectionShell from './SectionShell'

type SectionCardProps = {
  title: string
  titleClassName: string
  children: ReactNode
  dataSection?: string
}

export default function SectionCard({ title, titleClassName, children, dataSection }: SectionCardProps) {
  return (
    <SectionShell dataSection={dataSection}>
      <h2 className={titleClassName}>{title}</h2>
      {children}
    </SectionShell>
  )
}