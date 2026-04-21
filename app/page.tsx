import { getFeaturedProjectsMeta } from '@/lib/sanity-queries'
import ProjectCarousel from '@/components/ProjectCarousel'
import VenturesSection from '@/components/VenturesSection'
import LegacyWork from '@/components/LegacyWork'
import CTASection from '@/components/CTASection'

export default async function HomePage() {
  const projects = await getFeaturedProjectsMeta()

  return (
    <div style={{ backgroundColor: '#ebe7f9' }}>

      {/* ── Hero video reel ──────────────────────────────────────────────── */}
      <section style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>

        {/* Tagline — inside hero so calc(50%) resolves against 100vh */}
        <div className="ava-hero-tagline">
          <p
            style={{
              color: '#fff',
              fontFamily: 'Ppeditorialnew, "Times New Roman", serif',
              fontSize: 38,
              fontWeight: 200,
              lineHeight: '110%',
              margin: 0,
            }}
          >
            We create cultural footprints that people fall in love with
          </p>
        </div>

        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        >
          <source src="/videos/reel.mp4" type="video/mp4" />
          <source src="/videos/reel.webm" type="video/webm" />
        </video>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.18)',
          }}
        />
      </section>

      {/* ── Horizontal project carousel (desktop) / vertical stack (mobile) ─ */}
      <ProjectCarousel projects={projects} />

      {/* ── Vision section ───────────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: '#ebe7f9',
          overflow: 'hidden',
        }}
      >
        <div
          className="ava-vision-padding"
          style={{
            maxWidth: 980,
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
          }}
        >
          <p
            style={{
              fontFamily: '"Twklausanne 200", Arial, sans-serif',
              fontSize: 12,
              fontWeight: 200,
              color: '#191919',
              margin: 0,
            }}
          >
            VISION
          </p>
          <p
            className="ava-vision-text"
            style={{
              fontFamily: '"Twklausanne 100", Arial, sans-serif',
              fontWeight: 200,
              lineHeight: '110%',
              color: '#191919',
              margin: 0,
            }}
          >
            We back founders with daring ideas others overlook and help them build brands and products from the ground up, seamlessly fusing cultural impact with market disruption.
          </p>
        </div>
      </section>

      {/* ── Ventures ─────────────────────────────────────────────────────── */}
      <VenturesSection />

      {/* ── Legacy Work ──────────────────────────────────────────────────── */}
      <LegacyWork />

      {/* ── CTAs ─────────────────────────────────────────────────────────── */}
      <CTASection />
    </div>
  )
}
