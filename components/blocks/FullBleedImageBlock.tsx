import Image from 'next/image'

interface Props {
  imageUrl: string
  alt?: string
}

export default function FullBleedImageBlock({ imageUrl, alt }: Props) {
  return (
    <div className="ava-full-bleed">
      <Image
        src={imageUrl}
        alt={alt ?? ''}
        fill
        style={{ objectFit: 'cover' }}
        sizes="100vw"
      />
    </div>
  )
}
