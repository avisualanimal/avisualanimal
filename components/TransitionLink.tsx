'use client'

import { triggerNavigate } from './PageTransition'
import type { CSSProperties, ReactNode, MouseEvent } from 'react'

interface Props {
  href: string
  children: ReactNode
  className?: string
  style?: CSSProperties
  'aria-label'?: string
}

export default function TransitionLink({
  href,
  children,
  className,
  style,
  'aria-label': ariaLabel,
}: Props) {
  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    // Let modifier-key clicks pass through (cmd+click = new tab, etc.)
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
    e.preventDefault()
    triggerNavigate(href)
  }

  return (
    <a href={href} onClick={handleClick} className={className} style={style} aria-label={ariaLabel}>
      {children}
    </a>
  )
}
