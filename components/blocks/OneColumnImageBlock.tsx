import Image from 'next/image'

interface Props {
  imageUrl: string
  alt?: string
}

export default function OneColumnImageBlock({ imageUrl, alt }: Props) {
  return (
    <div className="ava-one-col-wrap">
      <Image
        src={imageUrl}
        alt={alt ?? ''}
        width={1400}
        height={900}
        style={{ width: '100%', height: 'auto', display: 'block' }}
        sizes="(max-width: 767px) calc(100vw - 40px), calc(100vw - 64px)"
      />
    </div>
  )
}
