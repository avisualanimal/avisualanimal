'use client'

import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Props {
  videoUrl?: string | null
}

export default function HeroVideo({ videoUrl }: Props) {
  const [ready, setReady] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const el = videoRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.to(el, {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: el.closest('section'),
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      onCanPlay={() => setReady(true)}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '115%',       /* extra height gives parallax room to move */
        objectFit: 'cover',
        opacity: ready ? 1 : 0,
        transition: 'opacity 0.8s ease',
        top: '-7.5%',         /* centre the overshoot vertically */
      }}
    >
      {videoUrl ? (
        <source src={videoUrl} />
      ) : (
        <>
          <source src="/videos/reel.mp4" type="video/mp4" />
          <source src="/videos/reel.webm" type="video/webm" />
        </>
      )}
    </video>
  )
}
