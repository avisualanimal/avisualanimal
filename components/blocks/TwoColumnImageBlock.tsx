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
      <div style={{ flex: 1, overflow: 'hidden' }}>
        <Image
          src={imageLeftUrl}
          alt={imageLeftAlt ?? ''}
          width={900}
          height={900}
          style={{ width: '100%', height: 'auto', display: 'block' }}
          sizes="(max-width: 767px) 100vw, 50vw"
        />
      </div>
      <div style={{ flex: 1, overflow: 'hidden' }}>
        <Image
          src={imageRightUrl}
          alt={imageRightAlt ?? ''}
          width={900}
          height={900}
          style={{ width: '100%', height: 'auto', display: 'block' }}
          sizes="(max-width: 767px) 100vw, 50vw"
        />
      </div>
    </div>
  )
}
