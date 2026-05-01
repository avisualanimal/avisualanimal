'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Props {
  imagePosition: 'left' | 'right'
  imageUrl: string
  imageWidth: number
  imageHeight: number
  alt?: string
  header?: string
  body: string
}

const HEADER: React.CSSProperties = {
  fontFamily: '"Twklausanne 200", Arial, sans-serif',
  fontSize: 34,
  fontWeight: 200,
  lineHeight: '34px',
  color: '#ffffff',
  margin: 0,
}

const BODY: React.CSSProperties = {
  fontFamily: '"Twklausanne 200", Arial, sans-serif',
  fontSize: 18,
  fontWeight: 200,
  lineHeight: '22px',
  letterSpacing: '0.04em',
  color: '#ffffff',
  margin: 0,
}

export default function TwoColumnMixBlock({ imagePosition, imageUrl, alt, header, body }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const copyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const wrapper = wrapperRef.current
    const imageEl = imageRef.current
    const copyEl = copyRef.current
    if (!wrapper || !imageEl || !copyEl) return

    const imageXFrom = imagePosition === 'left' ? -32 : 32
    const copyXFrom = imagePosition === 'left' ? 32 : -32

    const ctx = gsap.context(() => {
      gsap.set([imageEl, copyEl], { opacity: 0 })
      const tl = gsap.timeline({
        scrollTrigger: { trigger: wrapper, start: 'top 85%' },
      })
      tl.fromTo(imageEl, { opacity: 0, x: imageXFrom }, { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out' }, 0)
      tl.fromTo(copyEl,  { opacity: 0, x: copyXFrom  }, { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out' }, 0.1)
    }, wrapper)

    return () => ctx.revert()
  }, [imagePosition])

  const imageCol = (
    <div className="ava-two-col-mix-img" ref={imageRef}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imageUrl}
        alt={alt ?? ''}
        style={{ maxWidth: '100%', width: 'auto', height: 'auto', display: 'block' }}
      />
    </div>
  )

  const copyCol = (
    <div className="ava-two-col-mix-copy" ref={copyRef}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: '100%' }}>
        {header && <p style={HEADER}>{header}</p>}
        <p style={BODY}>{body}</p>
      </div>
    </div>
  )

  return (
    <div className="ava-two-col-mix" ref={wrapperRef}>
      {imagePosition === 'left' ? (
        <>{imageCol}{copyCol}</>
      ) : (
        <>{copyCol}{imageCol}</>
      )}
    </div>
  )
}
