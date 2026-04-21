import { defineType, defineField } from 'sanity'

export const pullQuote = defineType({
  name: 'pullQuote',
  title: 'Pull Quote',
  type: 'object',
  fields: [
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      rows: 3,
      validation: (r) => r.required(),
    }),
  ],
  preview: {
    select: { title: 'quote' },
    prepare({ title }) {
      return { title: title || 'Pull Quote' }
    },
  },
})
