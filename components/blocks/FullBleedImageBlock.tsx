'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Props {
  imageUrl: string
  alt?: string
  imageDisplay?: 'cover' | 'contain'
}

export default function FullBleedImageBlock({ imageUrl, alt, imageDisplay = 'cover' }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Parallax only for cover mode on desktop
    if (imageDisplay !== 'cover') return

    const wrapper = wrapperRef.current
    const inner = innerRef.current
    if (!wrapper || !inner) return

    const mm = gsap.matchMedia()
    mm.add('(min-width: 768px)', () => {
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
    })

    return () => mm.revert()
  }, [imageDisplay])

  // ── Contain mode: show full image at natural size, no fixed height ────────
  if (imageDisplay === 'contain') {
    return (
      <div
        style={{
          width: '100%',
          backgroundColor: '#051200',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '60px 40px',
          boxSizing: 'border-box',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageUrl}
          alt={alt ?? ''}
          style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
        />
      </div>
    )
  }

  // ── Cover mode: desktop = fixed 800px + parallax, mobile = natural img ────
  return (
    <>
      {/* Desktop: parallax */}
      <div className="ava-full-bleed ava-desktop-only" ref={wrapperRef}>
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

      {/* Mobile: natural dimensions, no cropping */}
      <div className="ava-mobile-only">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageUrl}
          alt={alt ?? ''}
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </div>
    </>
  )
}
