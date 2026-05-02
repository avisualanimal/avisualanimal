'use client'

interface Props {
  videos: string[]
  speed?: 'slow' | 'normal' | 'fast'
  roundedCorners?: boolean
}

const DURATION = { slow: '40s', normal: '25s', fast: '12s' }

export default function MarqueeVideoBlock({ videos, speed = 'normal', roundedCorners = false }: Props) {
  const items = [...videos, ...videos]
  const duration = DURATION[speed]
  const radius = roundedCorners ? 16 : 0

  return (
    <div
      style={{
        width: '100%',
        overflow: 'hidden',
        padding: '120px 0',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: 32,
          animation: `ava-marquee ${duration} linear infinite`,
          width: 'max-content',
        }}
      >
        {items.map((url, i) => (
          <div key={i} style={{ flexShrink: 0, borderRadius: radius, overflow: 'hidden' }}>
            <video
              src={url}
              autoPlay
              muted
              loop
              playsInline
              style={{ width: '270px', height: 'auto', display: 'block' }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
