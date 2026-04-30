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
        width={1032}
        height={654}
        style={{ width: '100%', height: 'auto', display: 'block', maxWidth: 1032 }}
        sizes="(max-width: 767px) calc(100vw - 40px), 1032px"
      />
    </div>
  )
}
