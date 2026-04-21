import { defineType, defineField } from 'sanity'

export const oneColumnImage = defineType({
  name: 'oneColumnImage',
  title: '1-Column Image',
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
    select: { media: 'image', title: 'alt' },
    prepare({ media, title }) {
      return { title: title || '1-Column Image', media }
    },
  },
})
