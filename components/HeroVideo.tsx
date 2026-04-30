'use client'

import { useState } from 'react'

interface Props {
  videoUrl?: string | null
}

export default function HeroVideo({ videoUrl }: Props) {
  const [ready, setReady] = useState(false)

  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      onCanPlay={() => setReady(true)}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        opacity: ready ? 1 : 0,
        transition: 'opacity 0.8s ease',
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
