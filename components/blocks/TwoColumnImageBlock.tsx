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
    <div className="ava-two-col-img">
      <div className="ava-two-col-img-cell">
        <Image
          src={imageLeftUrl}
          alt={imageLeftAlt ?? ''}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 767px) 100vw, 50vw"
        />
      </div>
      <div className="ava-two-col-img-cell">
        <Image
          src={imageRightUrl}
          alt={imageRightAlt ?? ''}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 767px) 100vw, 50vw"
        />
      </div>
    </div>
  )
}
