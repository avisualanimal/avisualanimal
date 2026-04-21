import { client } from '@/sanity/lib/client'

// ── Types ─────────────────────────────────────────────────────────────────

export interface SanityProjectMeta {
  _id: string
  slug: string
  title: string
  client: string
  services: string[]
  headline: string
  coverImage: string | null
  order: number
  featured: boolean
}

export interface SanityImageAsset {
  url: string
  alt?: string
}

// Block types matching schema names
export type SanityBlock =
  | { _key: string; _type: 'fullBleedImage';  imageUrl: string; alt?: string }
  | { _key: string; _type: 'twoColumnMix';    imagePosition: 'left' | 'right'; imageUrl: string; alt?: string; header?: string; body: string }
  | { _key: string; _type: 'autoPlayVideo';   videoUrl: string; caption?: string }
  | { _key: string; _type: 'pullQuote';       quote: string }
  | { _key: string; _type: 'marqueeSlider';   images: SanityImageAsset[]; speed?: 'slow' | 'normal' | 'fast' }
  | { _key: string; _type: 'twoColumnImage';  imageLeftUrl: string; imageLeftAlt?: string; imageRightUrl: string; imageRightAlt?: string }
  | { _key: string; _type: 'oneColumnImage';  imageUrl: string; alt?: string }

export interface SanityProject extends SanityProjectMeta {
  body?: string
  sections: SanityBlock[]
}

// ── Queries ───────────────────────────────────────────────────────────────

const PROJECT_META_FIELDS = `
  _id,
  title,
  "slug": slug.current,
  client,
  services,
  headline,
  "coverImage": coverImage.asset->url,
  order,
  featured
`

const SECTIONS_QUERY = `
  sections[] {
    _key,
    _type,
    _type == "fullBleedImage" => {
      "imageUrl": image.asset->url,
      alt
    },
    _type == "twoColumnMix" => {
      imagePosition,
      "imageUrl": image.asset->url,
      alt,
      header,
      body
    },
    _type == "autoPlayVideo" => {
      "videoUrl": video.asset->url,
      caption
    },
    _type == "pullQuote" => {
      quote
    },
    _type == "marqueeSlider" => {
      "images": images[]{
        "url": asset->url,
        alt
      },
      speed
    },
    _type == "twoColumnImage" => {
      "imageLeftUrl": imageLeft.asset->url,
      imageLeftAlt,
      "imageRightUrl": imageRight.asset->url,
      imageRightAlt
    },
    _type == "oneColumnImage" => {
      "imageUrl": image.asset->url,
      alt
    }
  }
`

export async function getAllProjectsMeta(): Promise<SanityProjectMeta[]> {
  return client.fetch(
    `*[_type == "project"] | order(order asc) { ${PROJECT_META_FIELDS} }`,
    {},
    { next: { revalidate: 60 } }
  )
}

export async function getFeaturedProjectsMeta(): Promise<SanityProjectMeta[]> {
  return client.fetch(
    `*[_type == "project" && featured == true] | order(order asc) { ${PROJECT_META_FIELDS} }`,
    {},
    { next: { revalidate: 60 } }
  )
}

export async function getProjectBySlug(slug: string): Promise<SanityProject | null> {
  return client.fetch(
    `*[_type == "project" && slug.current == $slug][0] {
      ${PROJECT_META_FIELDS},
      body,
      ${SECTIONS_QUERY}
    }`,
    { slug },
    { next: { revalidate: 60 } }
  )
}
