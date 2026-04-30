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
  const items = [...images, ...images]
  const duration = DURATION[speed]

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
        {items.map((img, i) => (
          <div key={i} style={{ flexShrink: 0, borderRadius: 16, overflow: 'hidden' }}>
            <Image
              src={img.url}
              alt={img.alt ?? ''}
              width={270}
              height={270}
              style={{ width: '270px', height: 'auto', display: 'block' }}
              sizes="270px"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
