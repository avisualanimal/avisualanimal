import { defineType, defineField } from 'sanity'

export const homepage = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    // ── Hero ───────────────────────────────────────────────────────────────
    defineField({
      name: 'heroVideo',
      title: 'Hero background video',
      description: 'Upload an MP4. Keep it under 30 MB for fast loading.',
      type: 'file',
      options: { accept: 'video/mp4,video/webm' },
    }),
    defineField({
      name: 'heroTagline',
      title: 'Hero tagline',
      type: 'string',
      validation: (r) => r.required(),
    }),

    // ── Vision ─────────────────────────────────────────────────────────────
    defineField({
      name: 'visionCopy',
      title: 'Vision section copy',
      type: 'text',
      rows: 4,
      validation: (r) => r.required(),
    }),

    // ── Carousel ───────────────────────────────────────────────────────────
    defineField({
      name: 'featuredProjects',
      title: 'Featured projects (carousel)',
      description: 'Drag to reorder. All projects listed here appear in the carousel.',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'project' }] }],
      validation: (r) => r.min(1),
    }),

    // ── Ventures ───────────────────────────────────────────────────────────
    defineField({
      name: 'ventures',
      title: 'Ventures',
      description: 'Drag to reorder rows.',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'venture',
          fields: [
            defineField({ name: 'name',     title: 'Name',     type: 'string', validation: (r) => r.required() }),
            defineField({ name: 'category', title: 'Category', type: 'string', validation: (r) => r.required() }),
            defineField({ name: 'status',   title: 'Status',   type: 'string', validation: (r) => r.required() }),
          ],
          preview: {
            select: { title: 'name', subtitle: 'category' },
          },
        },
      ],
    }),

    // ── Legacy Work ────────────────────────────────────────────────────────
    defineField({
      name: 'legacyWork',
      title: 'Legacy work',
      description: 'Drag to reorder rows.',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'project' }] }],
    }),
  ],

  preview: {
    prepare() {
      return { title: 'Homepage' }
    },
  },
})
