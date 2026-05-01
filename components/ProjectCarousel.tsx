'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { SanityProjectMeta } from '@/lib/sanity-queries'

gsap.registerPlugin(ScrollTrigger)

interface Props {
  projects: SanityProjectMeta[]
}

const CARD_TITLE: React.CSSProperties = {
  color: 'rgba(255,255,255,0.9)',
  fontFamily: 'Ppeditorialnew, "Times New Roman", serif',
  fontSize: 34,
  fontWeight: 200,
  lineHeight: '34px',
  letterSpacing: '-0.01em',
  margin: 0,
}

const CARD_HEADLINE: React.CSSProperties = {
  color: 'rgba(255,255,255,0.9)',
  fontFamily: '"Twklausanne 200", Arial, sans-serif',
  fontSize: 34,
  fontWeight: 200,
  lineHeight: '110%',
  textTransform: 'capitalize',
  margin: 0,
}

function CardOverlay({ project }: { project: SanityProjectMeta }) {
  return (
    <Link
      href={`/${project.slug}`}
      style={{ display: 'block', width: '100%', height: '100%', position: 'relative', textDecoration: 'none' }}
    >
      {project.coverImage && (
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 767px) 100vw, 720px"
        />
      )}
      {/* Dark overlay */}
      <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.1)' }} />
      {/* Title overlay — bottom-left */}
      <div
        className="ava-carousel-card-copy"
        style={{
          position: 'absolute',
          bottom: 40,
          left: 0,
          right: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
        }}
      >
        <div style={CARD_TITLE}>{project.title}</div>
        <div style={CARD_HEADLINE}>{project.headline}</div>
      </div>
    </Link>
  )
}

export default function ProjectCarousel({ projects }: Props) {
  const wrapperRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const wrapper = wrapperRef.current
    const track = trackRef.current
    if (!wrapper || !track) return

    const mm = gsap.matchMedia()

    mm.add('(min-width: 768px)', () => {
      const ctx = gsap.context(() => {
        gsap.to(track, {
          x: () => -(track.scrollWidth - window.innerWidth),
          ease: 'none',
          scrollTrigger: {
            trigger: wrapper,
            start: 'top top',
            end: () => `+=${track.scrollWidth - window.innerWidth}`,
            pin: true,
            anticipatePin: 1,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        })
      }, wrapper)

      return () => ctx.revert()
    })

    return () => mm.revert()
  }, [])

  return (
    <>
      {/* Desktop: GSAP-pinned horizontal scroll */}
      <section
        ref={wrapperRef}
        className="ava-carousel-desktop"
        style={{ backgroundColor: '#0b2500' }}
      >
        <div
          ref={trackRef}
          style={{
            display: 'flex',
            height: '100vh',
            backgroundColor: '#0b2500',
            willChange: 'transform',
          }}
        >
          {projects.map((project) => (
            <div
              key={project.slug}
              style={{ flexShrink: 0, width: 720, height: '100%', position: 'relative' }}
            >
              <CardOverlay project={project} />
            </div>
          ))}
        </div>
      </section>

      {/* Mobile: vertical stacked cards */}
      <section className="ava-carousel-mobile">
        {projects.map((project) => (
          <div
            key={project.slug}
            style={{ width: '100%', height: 800, position: 'relative', backgroundColor: '#0b2500' }}
          >
            <CardOverlay project={project} />
          </div>
        ))}
      </section>
    </>
  )
}
