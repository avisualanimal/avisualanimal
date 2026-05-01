import TransitionLink from './TransitionLink'
import type { SanityProjectMeta } from '@/lib/sanity-queries'

interface Props {
  projects: SanityProjectMeta[]
}

export default function LegacyWork({ projects }: Props) {
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
          <div key={p._id} className="ava-row">
            <TransitionLink
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
              {p.title}
            </TransitionLink>
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
                {p.category ?? p.client}
              </span>
              <TransitionLink
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
              </TransitionLink>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
