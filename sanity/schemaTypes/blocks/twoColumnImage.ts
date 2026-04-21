import { defineType, defineField } from 'sanity'

export const twoColumnImage = defineType({
  name: 'twoColumnImage',
  title: '2-Column Image',
  type: 'object',
  fields: [
    defineField({
      name: 'imageLeft',
      title: 'Left image',
      type: 'image',
      options: { hotspot: true },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'imageLeftAlt',
      title: 'Left image alt text',
      type: 'string',
    }),
    defineField({
      name: 'imageRight',
      title: 'Right image',
      type: 'image',
      options: { hotspot: true },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'imageRightAlt',
      title: 'Right image alt text',
      type: 'string',
    }),
  ],
  preview: {
    select: { media: 'imageLeft' },
    prepare({ media }) {
      return { title: '2-Column Image', media }
    },
  },
})
