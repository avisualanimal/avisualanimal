import { defineType, defineField } from 'sanity'

export const twoColumnMix = defineType({
  name: 'twoColumnMix',
  title: '2-Column Mix (Image + Copy)',
  type: 'object',
  fields: [
    defineField({
      name: 'imagePosition',
      title: 'Image position',
      type: 'string',
      options: {
        list: [
          { title: 'Image left, copy right', value: 'left' },
          { title: 'Image right, copy left', value: 'right' },
        ],
        layout: 'radio',
      },
      initialValue: 'left',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'alt',
      title: 'Image alt text',
      type: 'string',
    }),
    defineField({
      name: 'header',
      title: 'Header (optional)',
      type: 'string',
    }),
    defineField({
      name: 'body',
      title: 'Body text',
      type: 'text',
      rows: 4,
      validation: (r) => r.required(),
    }),
  ],
  preview: {
    select: { title: 'header', subtitle: 'imagePosition', media: 'image' },
    prepare({ title, subtitle, media }) {
      return {
        title: title || '2-Column Mix',
        subtitle: subtitle === 'left' ? 'Image left' : 'Image right',
        media,
      }
    },
  },
})
