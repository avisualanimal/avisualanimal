import Image from 'next/image'

interface Props {
  imageUrl: string
  alt?: string
}

export default function OneColumnImageBlock({ imageUrl, alt }: Props) {
  return (
    <div className="ava-one-col-wrap">
      <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9' }}>
        <Image
          src={imageUrl}
          alt={alt ?? ''}
          fill
          className="object-cover"
          sizes="(max-width: 767px) calc(100vw - 40px), calc(100vw - 64px)"
        />
      </div>
    </div>
  )
}
