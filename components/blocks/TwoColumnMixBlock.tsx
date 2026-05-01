interface Props {
  imagePosition: 'left' | 'right'
  imageUrl: string
  imageWidth: number
  imageHeight: number
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
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imageUrl}
        alt={alt ?? ''}
        style={{ maxWidth: '100%', width: 'auto', height: 'auto', display: 'block' }}
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
