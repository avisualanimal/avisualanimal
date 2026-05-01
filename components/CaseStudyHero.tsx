'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

interface Props {
  client: string
  services: string[]
  headline: string
  body?: string
}

const LABEL: React.CSSProperties = {
  color: '#191919',
  fontFamily: '"Twklausanne 200", Arial, sans-serif',
  fontSize: 14,
  fontWeight: 200,
  lineHeight: '1.2',
  letterSpacing: '0.02em',
  margin: 0,
}

const VALUE: React.CSSProperties = {
  color: '#191919',
  fontFamily: 'Ppeditorialnew, "Times New Roman", serif',
  fontSize: 28,
  fontWeight: 200,
  lineHeight: '1.1',
  letterSpacing: '-0.01em',
  margin: 0,
}

export default function CaseStudyHero({ client, services, headline, body }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cols = ref.current?.querySelectorAll<HTMLElement>('.gsap-hero-col')
    if (!cols?.length) return
    gsap.fromTo(
      cols,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, delay: 0.2, ease: 'power2.out' }
    )
  }, [])

  return (
    <div className="ava-case-hero" ref={ref}>
      {/* 3-column row: client | services | headline+body */}
      <div className="ava-case-hero-meta">

        {/* Client */}
        <div className="gsap-hero-col" style={{ display: 'flex', flexDirection: 'column', gap: 10, width: 300, opacity: 0 }}>
          <p style={LABEL}>Client</p>
          <p style={VALUE}>{client}</p>
        </div>

        {/* Services */}
        <div className="gsap-hero-col" style={{ display: 'flex', flexDirection: 'column', gap: 10, width: 300, opacity: 0 }}>
          <p style={LABEL}>Services</p>
          <div>
            {services.map((s) => (
              <p key={s} style={VALUE}>{s}</p>
            ))}
          </div>
        </div>

        {/* Headline + Body — same column so they always share left edge */}
        <div className="gsap-hero-col ava-case-hero-right" style={{ opacity: 0 }}>
          <p
            className="ava-case-hero-headline"
            style={{
              color: '#191919',
              fontFamily: '"Twklausanne 200", Arial, sans-serif',
              fontWeight: 200,
              lineHeight: '1.1',
              letterSpacing: '-0.01em',
              textTransform: 'capitalize',
              margin: 0,
            }}
          >
            {headline}
          </p>

          {body && (
            <p
              className="ava-case-hero-body"
              style={{
                color: '#191919',
                fontFamily: '"Twklausanne 200", Arial, sans-serif',
                fontSize: 18,
                fontWeight: 200,
                lineHeight: '22px',
                letterSpacing: '0.04em',
                margin: 0,
              }}
            >
              {body}
            </p>
          )}
        </div>

      </div>
    </div>
  )
}
