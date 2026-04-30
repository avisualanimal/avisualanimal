interface Props {
  quote: string
}

export default function PullQuoteBlock({ quote }: Props) {
  return (
    <div className="ava-pull-quote-wrap">
      <p
        className="ava-pull-quote-text"
        style={{
          fontFamily: '"Twklausanne 200", Arial, sans-serif',
          fontWeight: 200,
          lineHeight: '1.1',
          letterSpacing: '-0.01em',
          color: '#ffffff',
          maxWidth: 818,
          margin: 0,
          textAlign: 'center',
        }}
      >
        {quote}
      </p>
    </div>
  )
}
