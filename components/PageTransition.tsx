'use client'

import { useEffect, useRef } from 'react'
import { usePathname, useRouter } from 'next/navigation'

// Module-level so TransitionLink can call it without needing React context
let _doNavigate: ((href: string) => void) | null = null

export function triggerNavigate(href: string) {
  if (_doNavigate) {
    _doNavigate(href)
  } else {
    window.location.href = href // fallback before component mounts
  }
}

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const ref = useRef<HTMLDivElement>(null)
  const router = useRouter()

  // Register the navigate function
  useEffect(() => {
    _doNavigate = (href: string) => {
      const el = ref.current
      if (!el) { router.push(href); return }
      el.style.transition = 'opacity 0.3s cubic-bezier(0.22, 1, 0.36, 1)'
      el.style.opacity = '0'
      setTimeout(() => router.push(href), 300)
    }
    return () => { _doNavigate = null }
  }, [router])

  // Fade in on every route arrival
  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.transition = 'none'
    el.style.opacity = '0'
    void el.offsetHeight
    el.style.transition = 'opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1)'
    el.style.opacity = '1'
  }, [pathname])

  return <div ref={ref}>{children}</div>
}
