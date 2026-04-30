import Image from 'next/image'

interface Props {
  imagePosition: 'left' | 'right'
  imageUrl: string
  alt?: string
  header?: string
  body: string
}

const HEADER: React.CSSProperties = {
  fontFamily: '"Twklausanne 200", Arial, sans-serif',
  fontSize: 34,
  fontWeight: 200,
  lineHeight: '34px',
  color: '#ffffff',
  margin: 0,
}

const BODY: React.CSSProperties = {
  fontFamily: '"Twklausanne 200", Arial, sans-serif',
  fontSize: 18,
  fontWeight: 200,
  lineHeight: '22px',
  letterSpacing: '0.04em',
  color: '#ffffff',
  margin: 0,
}

export default function TwoColumnMixBlock({ imagePosition, imageUrl, alt, header, body }: Props) {
  // Image fills the padded column at natural aspect ratio — no cropping
  const imageCol = (
    <div className="ava-two-col-mix-img">
      <Image
        src={imageUrl}
        alt={alt ?? ''}
        width={633}
        height={431}
        style={{ maxWidth: '100%', width: 'auto', height: 'auto', display: 'block' }}
        sizes="(max-width: 767px) calc(100vw - 40px), calc(50vw - 80px)"
      />
    </div>
  )

  const copyCol = (
    <div className="ava-two-col-mix-copy">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: '100%' }}>
        {header && <p style={HEADER}>{header}</p>}
        <p style={BODY}>{body}</p>
      </div>
    </div>
  )

  return (
    <div className="ava-two-col-mix">
      {imagePosition === 'left' ? (
        <>{imageCol}{copyCol}</>
      ) : (
        <>{copyCol}{imageCol}</>
      )}
    </div>
  )
}
