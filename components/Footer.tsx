import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <section style={{ backgroundColor: '#051200', padding: '24px 32px' }}>
      <div className="ava-footer-grid">
        {/* Logo + copyright */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 80, maxWidth: 300 }}>
          <Link href="/" aria-label="A Visual Animal — home">
            <div className="relative" style={{ width: 210, height: 26 }}>
              <Image
                src="/AvisualAnimalLogoLight.svg"
                alt="A Visual Animal"
                fill
                className="object-contain object-left"
              />
            </div>
          </Link>
          <p
            style={{
              color: 'rgba(255,255,255,0.7)',
              fontFamily: '"Twklausanne 100", Arial, sans-serif',
              fontSize: 12,
              fontWeight: 100,
              letterSpacing: '0.04em',
              lineHeight: '14px',
              margin: 0,
            }}
          >
            A Visual Animal ©
          </p>
        </div>

        {/* Empty column — hidden on mobile via .ava-footer-empty */}
        <div className="ava-footer-empty" />

        {/* About column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 300 }}>
          <p
            style={{
              color: 'rgba(255,255,255,0.8)',
              fontFamily: '"Twklausanne 100", Arial, sans-serif',
              fontSize: 14,
              fontWeight: 100,
              letterSpacing: '0.02em',
              lineHeight: '120%',
              margin: 0,
            }}
          >
            A Visual Animal
          </p>
          <a
            href="mailto:info@avisualanimal.com"
            style={{
              color: 'rgba(255,255,255,0.98)',
              fontFamily: 'Ppeditorialnew, "Times New Roman", serif',
              fontSize: 28,
              fontWeight: 200,
              lineHeight: '110%',
              letterSpacing: '-0.01em',
              textDecoration: 'none',
            }}
          >
            Contact
          </a>
        </div>

        {/* Social column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 300 }}>
          <p
            style={{
              color: 'rgba(255,255,255,0.8)',
              fontFamily: '"Twklausanne 100", Arial, sans-serif',
              fontSize: 14,
              fontWeight: 100,
              letterSpacing: '0.02em',
              lineHeight: '120%',
              margin: 0,
            }}
          >
            Social
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <a
              href="https://www.tiktok.com/@avisualanimal"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'rgba(255,255,255,0.98)',
                fontFamily: 'Ppeditorialnew, "Times New Roman", serif',
                fontSize: 28,
                fontWeight: 200,
                lineHeight: '110%',
                letterSpacing: '-0.01em',
                textDecoration: 'none',
              }}
            >
              TikTok
            </a>
            <a
              href="https://www.instagram.com/avisualanimal"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'rgba(255,255,255,0.98)',
                fontFamily: 'Ppeditorialnew, "Times New Roman", serif',
                fontSize: 28,
                fontWeight: 200,
                lineHeight: '110%',
                letterSpacing: '-0.01em',
                textDecoration: 'none',
              }}
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
