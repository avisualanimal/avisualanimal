'use client'

import Image from 'next/image'

interface SliderImage {
  url: string
  alt?: string
}

interface Props {
  images: SliderImage[]
  speed?: 'slow' | 'normal' | 'fast'
}

const DURATION = { slow: '40s', normal: '25s', fast: '12s' }

export default function MarqueeSliderBlock({ images, speed = 'normal' }: Props) {
  // Duplicate for seamless loop
  const items = [...images, ...images]
  const duration = DURATION[speed]

  return (
    <div
      style={{
        width: '100%',
        overflow: 'hidden',
        padding: '120px 30px',
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
        {items.map((img, i) => (
          <div
            key={i}
            style={{
              flexShrink: 0,
              width: 270,
              height: 584,
              borderRadius: 16,
              border: '1px solid #393939',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <Image
              src={img.url}
              alt={img.alt ?? ''}
              fill
              style={{ objectFit: 'cover' }}
              sizes="270px"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
