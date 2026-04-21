const ventures = [
  { name: 'Bullet',       category: 'Agentic AI',        status: 'Coming' },
  { name: 'The X Estate', category: 'Lifestyle Network', status: 'Coming' },
]

export default function VenturesSection() {
  return (
    <section>
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%', maxWidth: 1440 }}>
        {/* Header */}
        <div className="ava-section-header">
          <span
            style={{
              fontFamily: '"Twklausanne 200", Arial, sans-serif',
              fontSize: 12,
              fontWeight: 200,
              lineHeight: '22px',
              color: '#000',
            }}
          >
            VENTURES
          </span>
        </div>

        {/* Rows */}
        {ventures.map((v) => (
          <div key={v.name} className="ava-row">
            <span
              style={{
                fontFamily: 'Ppeditorialnew, "Times New Roman", serif',
                fontSize: 28,
                fontWeight: 200,
                lineHeight: '28px',
                letterSpacing: '-0.01em',
                color: '#191919',
              }}
            >
              {v.name}
            </span>
            <div className="ava-row-meta">
              <span
                style={{
                  fontFamily: '"Twklausanne 100", Arial, sans-serif',
                  fontSize: 22,
                  fontWeight: 100,
                  lineHeight: '22px',
                  color: '#191919',
                }}
              >
                {v.category}
              </span>
              <span
                style={{
                  fontFamily: '"Twklausanne 100", Arial, sans-serif',
                  fontSize: 22,
                  fontWeight: 100,
                  lineHeight: '22px',
                  color: '#191919',
                  minWidth: 100,
                  textAlign: 'right',
                }}
              >
                {v.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
