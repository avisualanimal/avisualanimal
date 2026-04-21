import { defineType, defineField } from 'sanity'

export const marqueeSlider = defineType({
  name: 'marqueeSlider',
  title: 'Marquee Slider',
  type: 'object',
  fields: [
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt text',
            },
          ],
        },
      ],
      validation: (r) => r.required().min(2),
    }),
    defineField({
      name: 'speed',
      title: 'Scroll speed',
      type: 'string',
      options: {
        list: [
          { title: 'Slow', value: 'slow' },
          { title: 'Normal', value: 'normal' },
          { title: 'Fast', value: 'fast' },
        ],
        layout: 'radio',
      },
      initialValue: 'normal',
    }),
  ],
  preview: {
    select: { images: 'images' },
    prepare({ images }) {
      return { title: `Marquee Slider (${images?.length ?? 0} images)` }
    },
  },
})
