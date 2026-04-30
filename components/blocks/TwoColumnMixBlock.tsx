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
  const imageCol = (
    <div className="ava-two-col-mix-img">
      <Image
        src={imageUrl}
        alt={alt ?? ''}
        width={900}
        height={900}
        style={{ width: '100%', height: 'auto', display: 'block' }}
        sizes="(max-width: 767px) 100vw, 50vw"
      />
    </div>
  )

  const copyCol = (
    <div className="ava-two-col-mix-copy">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 532, width: '100%' }}>
        {header && <p style={HEADER}>{header}</p>}
        <p style={BODY}>{body}</p>
      </div>
    </div>
  )

  return (
    // On mobile, image always renders first (top) via CSS column reorder
    <div className="ava-two-col-mix">
      {imagePosition === 'left' ? (
        <>{imageCol}{copyCol}</>
      ) : (
        <>{copyCol}{imageCol}</>
      )}
    </div>
  )
}
