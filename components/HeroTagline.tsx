'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

interface Props {
  text: string
}

export default function HeroTagline({ text }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const words = ref.current?.querySelectorAll<HTMLElement>('.gsap-word')
    if (!words?.length) return
    gsap.set(words, { opacity: 0, y: 16 })
    gsap.to(words, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      stagger: 0.055,
      delay: 0.4,
      ease: 'power2.out',
    })
  }, [])

  const words = text.split(' ')

  return (
    <div className="ava-hero-tagline" ref={ref}>
      <p
        style={{
          color: '#fff',
          fontFamily: 'Ppeditorialnew, "Times New Roman", serif',
          fontSize: 38,
          fontWeight: 200,
          lineHeight: '110%',
          margin: 0,
        }}
      >
        {words.map((word, i) => (
          <span
            key={i}
            className="gsap-word"
            style={{ display: 'inline-block' }}
          >
            {word}{i < words.length - 1 ? ' ' : ''}
          </span>
        ))}
      </p>
    </div>
  )
}
