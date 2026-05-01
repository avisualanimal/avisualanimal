'use client'

import { useState } from 'react'

interface Props {
  videoUrl: string
  caption?: string
}

export default function AutoPlayVideoBlock({ videoUrl, caption }: Props) {
  const [ready, setReady] = useState(false)

  return (
    <div style={{ width: '100%' }}>
      <video
        autoPlay
        loop
        muted
        playsInline
        onCanPlay={() => setReady(true)}
        style={{
          width: '100%',
          display: 'block',
          opacity: ready ? 1 : 0,
          transition: 'opacity 0.8s ease',
        }}
      >
        <source src={videoUrl} />
      </video>
      {caption && (
        <p
          style={{
            fontFamily: '"Twklausanne 100", Arial, sans-serif',
            fontSize: 12,
            fontWeight: 100,
            color: 'rgba(255,255,255,0.5)',
            textAlign: 'center',
            padding: '8px 32px',
            margin: 0,
          }}
        >
          {caption}
        </p>
      )}
    </div>
  )
}
