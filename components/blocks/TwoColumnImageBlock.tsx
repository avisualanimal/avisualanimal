'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Props {
  imageLeftUrl: string
  imageLeftAlt?: string
  imageRightUrl: string
  imageRightAlt?: string
}

export default function TwoColumnImageBlock({
  imageLeftUrl,
  imageLeftAlt,
  imageRightUrl,
  imageRightAlt,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cells = ref.current?.querySelectorAll<HTMLElement>('.ava-two-col-img-cell')
    if (!cells?.length) return

    const mm = gsap.matchMedia()
    mm.add('(min-width: 768px)', () => {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          cells,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: { trigger: ref.current, start: 'top 85%' },
          }
        )
      }, ref)
      return () => ctx.revert()
    })

    return () => mm.revert()
  }, [])

  return (
    <>
      {/* Desktop: side-by-side with fixed height + GSAP reveal */}
      <div className="ava-two-col-img ava-desktop-only" ref={ref}>
        <div className="ava-two-col-img-cell" style={{ opacity: 0 }}>
          <Image
            src={imageLeftUrl}
            alt={imageLeftAlt ?? ''}
            fill
            style={{ objectFit: 'cover' }}
            sizes="50vw"
          />
        </div>
        <div className="ava-two-col-img-cell" style={{ opacity: 0 }}>
          <Image
            src={imageRightUrl}
            alt={imageRightAlt ?? ''}
            fill
            style={{ objectFit: 'cover' }}
            sizes="50vw"
          />
        </div>
      </div>

      {/* Mobile: stacked, natural dimensions, no cropping */}
      <div className="ava-mobile-only">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageLeftUrl}
          alt={imageLeftAlt ?? ''}
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageRightUrl}
          alt={imageRightAlt ?? ''}
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </div>
    </>
  )
}
