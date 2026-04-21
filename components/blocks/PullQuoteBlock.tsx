interface Props {
  quote: string
}

export default function PullQuoteBlock({ quote }: Props) {
  return (
    <div className="ava-pull-quote-wrap">
      <p
        style={{
          fontFamily: '"Twklausanne 200", Arial, sans-serif',
          fontSize: 34,
          fontWeight: 200,
          lineHeight: '1.1',
          letterSpacing: '-0.01em',
          color: '#191919',
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
