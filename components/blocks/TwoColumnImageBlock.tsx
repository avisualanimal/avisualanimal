import Image from 'next/image'

interface Props {
  imageLeftUrl: string
  imageLeftAlt?: string
  imageRightUrl: string
  imageRightAlt?: string
}

export default function TwoColumnImageBlock({
  imageLeftUrl,
  imageLeftAlt,
  imageRightUrl,
  imageRightAlt,
}: Props) {
  return (
    <div style={{ display: 'flex', width: '100%' }} className="ava-two-col-img">
      <div style={{ flex: 1, position: 'relative', minHeight: 500 }}>
        <Image
          src={imageLeftUrl}
          alt={imageLeftAlt ?? ''}
          fill
          className="object-cover"
          sizes="(max-width: 767px) 100vw, 50vw"
        />
      </div>
      <div style={{ flex: 1, position: 'relative', minHeight: 500 }}>
        <Image
          src={imageRightUrl}
          alt={imageRightAlt ?? ''}
          fill
          className="object-cover"
          sizes="(max-width: 767px) 100vw, 50vw"
        />
      </div>
    </div>
  )
}
