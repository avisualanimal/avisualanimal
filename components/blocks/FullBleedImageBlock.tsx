import Image from 'next/image'

interface Props {
  imageUrl: string
  alt?: string
}

export default function FullBleedImageBlock({ imageUrl, alt }: Props) {
  return (
    <div style={{ width: '100%', position: 'relative', aspectRatio: '16/9' }}>
      <Image
        src={imageUrl}
        alt={alt ?? ''}
        fill
        className="object-cover"
        sizes="100vw"
      />
    </div>
  )
}
