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
    defineField({
      name: 'imageDisplay',
      title: 'Image display',
      type: 'string',
      options: {
        list: [
          { title: 'Cover (crop to fill — for photos)', value: 'cover' },
          { title: 'Contain (show full image — for diagrams)', value: 'contain' },
        ],
        layout: 'radio',
      },
      initialValue: 'cover',
    }),
  ],
  preview: {
    select: { title: 'alt', media: 'image' },
    prepare({ title, media }) {
      return { title: title || 'Full-Bleed Image', media }
    },
  },
})
