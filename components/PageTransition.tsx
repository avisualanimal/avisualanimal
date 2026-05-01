'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    // Snap to invisible, force reflow, then fade in
    el.style.transition = 'none'
    el.style.opacity = '0'
    void el.offsetHeight // flush so browser registers the snap
    el.style.transition = 'opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1)'
    el.style.opacity = '1'
  }, [pathname])

  return <div ref={ref}>{children}</div>
}
