import { defineType, defineField } from 'sanity'

export const marqueeVideo = defineType({
  name: 'marqueeVideo',
  title: 'Marquee Video Slider',
  type: 'object',
  fields: [
    defineField({
      name: 'videos',
      title: 'Videos',
      type: 'array',
      of: [{ type: 'file', options: { accept: 'video/*' } }],
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
    defineField({
      name: 'roundedCorners',
      title: 'Rounded corners (16px)',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: { videos: 'videos' },
    prepare({ videos }) {
      return { title: `Marquee Video Slider (${videos?.length ?? 0} videos)` }
    },
  },
})
