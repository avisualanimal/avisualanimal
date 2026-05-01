import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getAllProjectsMeta, getProjectBySlug, type SanityBlock } from '@/lib/sanity-queries'
import CaseStudyHero from '@/components/CaseStudyHero'
import CTASection from '@/components/CTASection'
import ScrollReveal from '@/components/ScrollReveal'
import FullBleedImageBlock from '@/components/blocks/FullBleedImageBlock'
import TwoColumnMixBlock from '@/components/blocks/TwoColumnMixBlock'
import AutoPlayVideoBlock from '@/components/blocks/AutoPlayVideoBlock'
import PullQuoteBlock from '@/components/blocks/PullQuoteBlock'
import MarqueeSliderBlock from '@/components/blocks/MarqueeSliderBlock'
import TwoColumnImageBlock from '@/components/blocks/TwoColumnImageBlock'
import OneColumnImageBlock from '@/components/blocks/OneColumnImageBlock'

export async function generateStaticParams() {
  const projects = await getAllProjectsMeta()
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = await getProjectBySlug(slug)
  if (!project) return {}
  return { title: project.title, description: project.headline }
}

function renderBlock(block: SanityBlock) {
  switch (block._type) {
    case 'fullBleedImage':
      return <FullBleedImageBlock key={block._key} imageUrl={block.imageUrl} alt={block.alt} />
    case 'twoColumnMix':
      return (
        <TwoColumnMixBlock
          key={block._key}
          imagePosition={block.imagePosition}
          imageUrl={block.imageUrl}
          imageWidth={block.imageWidth}
          imageHeight={block.imageHeight}
          alt={block.alt}
          header={block.header}
          body={block.body}
        />
      )
    case 'autoPlayVideo':
      return (
        <ScrollReveal key={block._key}>
          <AutoPlayVideoBlock videoUrl={block.videoUrl} caption={block.caption} />
        </ScrollReveal>
      )
    case 'pullQuote':
      return (
        <ScrollReveal key={block._key}>
          <PullQuoteBlock quote={block.quote} />
        </ScrollReveal>
      )
    case 'marqueeSlider':
      return (
        <ScrollReveal key={block._key}>
          <MarqueeSliderBlock images={block.images} speed={block.speed} />
        </ScrollReveal>
      )
    case 'twoColumnImage':
      return (
        <TwoColumnImageBlock
          key={block._key}
          imageLeftUrl={block.imageLeftUrl}
          imageLeftAlt={block.imageLeftAlt}
          imageRightUrl={block.imageRightUrl}
          imageRightAlt={block.imageRightAlt}
        />
      )
    case 'oneColumnImage':
      return (
        <ScrollReveal key={block._key}>
          <OneColumnImageBlock imageUrl={block.imageUrl} alt={block.alt} />
        </ScrollReveal>
      )
    default:
      return null
  }
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = await getProjectBySlug(slug)
  if (!project) notFound()

  return (
    <div style={{ backgroundColor: '#051200' }}>
      {/* Hero — beige background only */}
      <div style={{ backgroundColor: '#d8d2c7' }}>
        <CaseStudyHero
          client={project.client}
          services={project.services}
          headline={project.headline}
          body={project.body}
        />
      </div>

      {/* Orderable sections — transparent, canvas shows through */}
      <div>
        {project.sections?.map((block) => renderBlock(block))}
      </div>

      <CTASection />
    </div>
  )
}
