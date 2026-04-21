import { defineType, defineField } from 'sanity'

export const autoPlayVideo = defineType({
  name: 'autoPlayVideo',
  title: 'Auto-Play Video',
  type: 'object',
  fields: [
    defineField({
      name: 'video',
      title: 'Video file',
      type: 'file',
      options: { accept: 'video/*' },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'caption',
      title: 'Caption (optional)',
      type: 'string',
    }),
  ],
  preview: {
    select: { title: 'caption' },
    prepare({ title }) {
      return { title: title || 'Auto-Play Video' }
    },
  },
})
