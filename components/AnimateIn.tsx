'use client'

import { useEffect, useState, type ReactNode, type CSSProperties } from 'react'
import { useInView } from '@/hooks/useInView'

const EASE = 'cubic-bezier(0.16, 1, 0.3, 1)'

interface Props {
  children: ReactNode
  delay?: number
  duration?: number
  y?: number
  x?: number
  immediate?: boolean
  className?: string
  style?: CSSProperties
}

export default function AnimateIn({
  children,
  delay = 0,
  duration = 700,
  y = 24,
  x = 0,
  immediate = false,
  className,
  style,
}: Props) {
  const [scrollRef, inView] = useInView()
  const [mountReady, setMountReady] = useState(false)

  useEffect(() => {
    if (!immediate) return
    const id = requestAnimationFrame(() => setMountReady(true))
    return () => cancelAnimationFrame(id)
  }, [immediate])

  const active = immediate ? mountReady : inView

  return (
    <div
      ref={immediate ? undefined : (scrollRef as React.RefObject<HTMLDivElement>)}
      className={className}
      style={{
        opacity: active ? 1 : 0,
        transform: active ? 'translate(0,0)' : `translate(${x}px,${y}px)`,
        transition: `opacity ${duration}ms ${EASE} ${delay}ms, transform ${duration}ms ${EASE} ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  )
}
