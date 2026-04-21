interface Props {
  videoUrl: string
  caption?: string
}

export default function AutoPlayVideoBlock({ videoUrl, caption }: Props) {
  return (
    <div style={{ width: '100%' }}>
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{ width: '100%', display: 'block', objectFit: 'cover' }}
      >
        <source src={videoUrl} />
      </video>
      {caption && (
        <p
          style={{
            fontFamily: '"Twklausanne 100", Arial, sans-serif',
            fontSize: 12,
            fontWeight: 100,
            color: 'rgba(25,25,25,0.5)',
            textAlign: 'center',
            padding: '8px 32px',
            margin: 0,
          }}
        >
          {caption}
        </p>
      )}
    </div>
  )
}
