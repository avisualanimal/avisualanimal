import Link from 'next/link'

const projects = [
  { name: 'Invoy',                slug: 'invoy-health',         category: 'Health & Wellness' },
  { name: 'The Kardashian Apps',  slug: 'the-kardashian-apps',  category: 'Branded Lifestyle Apps' },
  { name: 'Kimoji',               slug: 'kimoji',               category: 'Viral Consumer App' },
  { name: 'Microsoft Surface',    slug: 'microsoft-surface',    category: 'Advertising Campaign' },
]

export default function LegacyWork() {
  return (
    <section>
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%', maxWidth: 1440 }}>
        {/* Header */}
        <div className="ava-section-header ava-section-header-lg">
          <span
            style={{
              fontFamily: '"Twklausanne 200", Arial, sans-serif',
              fontSize: 12,
              fontWeight: 200,
              lineHeight: '22px',
              color: '#000',
            }}
          >
            LEGACY WORK
          </span>
        </div>

        {/* Rows */}
        {projects.map((p) => (
          <div key={p.slug} className="ava-row">
            <Link
              href={`/${p.slug}`}
              style={{
                fontFamily: 'Ppeditorialnew, "Times New Roman", serif',
                fontSize: 28,
                fontWeight: 200,
                lineHeight: '28px',
                letterSpacing: '-0.01em',
                color: '#191919',
                textDecoration: 'none',
              }}
            >
              {p.name}
            </Link>
            <div className="ava-row-meta">
              <span
                style={{
                  fontFamily: '"Twklausanne 100", Arial, sans-serif',
                  fontSize: 22,
                  fontWeight: 100,
                  lineHeight: '22px',
                  color: '#000',
                }}
              >
                {p.category}
              </span>
              <Link
                href={`/${p.slug}`}
                style={{
                  fontFamily: '"Twklausanne 100", Arial, sans-serif',
                  fontSize: 22,
                  fontWeight: 100,
                  lineHeight: '22px',
                  color: '#000',
                  textDecoration: 'none',
                  minWidth: 100,
                  textAlign: 'right',
                }}
              >
                View
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
