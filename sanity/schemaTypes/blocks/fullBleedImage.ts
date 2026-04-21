import { defineType, defineField } from 'sanity'

export const fullBleedImage = defineType({
  name: 'fullBleedImage',
  title: 'Full-Bleed Image',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'alt',
      title: 'Alt text',
      type: 'string',
    }),
  ],
  preview: {
    select: { title: 'alt', media: 'image' },
    prepare({ title, media }) {
      return { title: title || 'Full-Bleed Image', media }
    },
  },
})
