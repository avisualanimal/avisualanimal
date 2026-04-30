const PANEL: React.CSSProperties = {
  backgroundColor: '#0b2500',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  width: '100%',
  padding: '24px 32px 40px',
  gap: 32,
}

export default function CTASection() {
  const panels = [
    {
      mailto: 'mailto:info@avisualanimal.com?subject=Founding%20Partnership%20Inquiry',
      category: 'Build With Us',
      copy: 'A founding partner that turns your vision into market-disrupting company.',
    },
    {
      mailto: 'mailto:info@avisualanimal.com?subject=Consulting%20Inquiry',
      category: 'Consulting Partner',
      copy: 'Strategic partnership that transforms fresh ideas into global impact.',
    },
  ]

  return (
    <section style={{ backgroundColor: '#ebe7f9' }}>
      <div className="ava-cta-panels">
        {panels.map((p) => (
          <div key={p.category} style={PANEL}>
            <a href={p.mailto} style={{ textDecoration: 'none' }}>
              <div
                style={{
                  border: '1px solid rgba(255,255,255,0.9)',
                  borderRadius: 34,
                  padding: '10px 16px',
                  display: 'inline-flex',
                  alignItems: 'center',
                }}
              >
                <span
                  style={{
                    color: 'rgba(255,255,255,0.9)',
                    fontFamily: 'Ppeditorialnew, "Times New Roman", serif',
                    fontSize: 16,
                    fontWeight: 200,
                    lineHeight: '14px',
                  }}
                >
                  Inquiries →
                </span>
              </div>
            </a>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: '100%', opacity: 0.9 }}>
              <p
                style={{
                  color: '#fff',
                  fontFamily: 'Ppeditorialnew, "Times New Roman", serif',
                  fontSize: 22,
                  fontWeight: 200,
                  lineHeight: '34px',
                  letterSpacing: '-0.01em',
                  margin: 0,
                }}
              >
                {p.category}
              </p>
              <p
                style={{
                  color: '#fff',
                  fontFamily: '"Twklausanne 100", Arial, sans-serif',
                  fontSize: 34,
                  fontWeight: 400,
                  lineHeight: '110%',
                  margin: 0,
                  width: '100%',
                }}
              >
                {p.copy}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
