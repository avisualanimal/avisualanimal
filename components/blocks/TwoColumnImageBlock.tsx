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
  }, [])

  return (
    <div className="ava-two-col-img" ref={ref}>
      <div className="ava-two-col-img-cell" style={{ opacity: 0 }}>
        <Image
          src={imageLeftUrl}
          alt={imageLeftAlt ?? ''}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 767px) 100vw, 50vw"
        />
      </div>
      <div className="ava-two-col-img-cell" style={{ opacity: 0 }}>
        <Image
          src={imageRightUrl}
          alt={imageRightAlt ?? ''}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 767px) 100vw, 50vw"
        />
      </div>
    </div>
  )
}
