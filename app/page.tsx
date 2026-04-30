import { getHomepage } from '@/lib/sanity-queries'
import ProjectCarousel from '@/components/ProjectCarousel'
import VenturesSection from '@/components/VenturesSection'
import LegacyWork from '@/components/LegacyWork'
import CTASection from '@/components/CTASection'
import HeroVideo from '@/components/HeroVideo'

export default async function HomePage() {
  const homepage = await getHomepage()

  const heroTagline =
    homepage?.heroTagline ?? 'We create cultural footprints that people fall in love with'
  const heroVideoUrl = homepage?.heroVideoUrl ?? null
  const visionCopy =
    homepage?.visionCopy ??
    'We back founders with daring ideas others overlook and help them build brands and products from the ground up, seamlessly fusing cultural impact with market disruption.'

  const featuredProjects = homepage?.featuredProjects ?? []

  const ventures = homepage?.ventures ?? []
  const legacyWork = homepage?.legacyWork ?? []

  return (
    <div style={{ backgroundColor: '#ebe7f9' }}>

      {/* ── Hero video reel ──────────────────────────────────────────────── */}
      <section style={{ position: 'relative', height: '100vh', overflow: 'hidden', backgroundColor: '#000' }}>

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
            {heroTagline}
          </p>
        </div>

        {/* Video fades in once ready — no flash or pop */}
        <HeroVideo videoUrl={heroVideoUrl} />

        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.18)',
          }}
        />
      </section>

      {/* ── Horizontal project carousel (desktop) / vertical stack (mobile) ─ */}
      <ProjectCarousel projects={featuredProjects} />

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
            {visionCopy}
          </p>
        </div>
      </section>

      {/* ── Ventures ─────────────────────────────────────────────────────── */}
      {ventures.length > 0 && <VenturesSection ventures={ventures} />}

      {/* ── Legacy Work ──────────────────────────────────────────────────── */}
      {legacyWork.length > 0 && <LegacyWork projects={legacyWork} />}

      {/* ── CTAs ─────────────────────────────────────────────────────────── */}
      <CTASection />
    </div>
  )
}
