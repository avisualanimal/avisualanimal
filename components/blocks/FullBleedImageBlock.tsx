'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Props {
  imageUrl: string
  alt?: string
}

export default function FullBleedImageBlock({ imageUrl, alt }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const wrapper = wrapperRef.current
    const inner = innerRef.current
    if (!wrapper || !inner) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        inner,
        { yPercent: -8 },
        {
          yPercent: 8,
          ease: 'none',
          scrollTrigger: {
            trigger: wrapper,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="ava-full-bleed" ref={wrapperRef}>
      {/* inner div overshoots top/bottom to give parallax room */}
      <div
        ref={innerRef}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: '-8%',
          height: '116%',
        }}
      >
        <Image
          src={imageUrl}
          alt={alt ?? ''}
          fill
          style={{ objectFit: 'cover' }}
          sizes="100vw"
        />
      </div>
    </div>
  )
}
