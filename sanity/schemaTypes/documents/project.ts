import { defineType, defineField } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    // ── Identity ───────────────────────────────────────────────────────────
    defineField({
      name: 'title',
      title: 'Project title',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'order',
      title: 'Order (homepage carousel position)',
      type: 'number',
      validation: (r) => r.required().integer().positive(),
    }),
    defineField({
      name: 'featured',
      title: 'Show in homepage carousel?',
      type: 'boolean',
      initialValue: true,
    }),

    // ── Hero / intro ────────────────────────────────────────────────────────
    defineField({
      name: 'client',
      title: 'Client name',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      description: 'Short descriptor shown in the Legacy Work row (e.g. "Health & Wellness")',
      type: 'string',
    }),
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'headline',
      title: 'Headline (tagline shown on carousel card)',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'body',
      title: 'Intro paragraph',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover image (carousel card)',
      type: 'image',
      options: { hotspot: true },
    }),

    // ── Page sections (drag to reorder) ────────────────────────────────────
    defineField({
      name: 'sections',
      title: 'Page sections',
      description: 'Add, remove, and drag to reorder sections',
      type: 'array',
      of: [
        { type: 'fullBleedImage' },
        { type: 'twoColumnMix' },
        { type: 'autoPlayVideo' },
        { type: 'pullQuote' },
        { type: 'marqueeSlider' },
        { type: 'twoColumnImage' },
        { type: 'oneColumnImage' },
      ],
    }),
  ],

  preview: {
    select: { title: 'title', subtitle: 'client', media: 'coverImage' },
    prepare({ title, subtitle, media }) {
      return { title, subtitle, media }
    },
  },
})
