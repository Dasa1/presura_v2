import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: Rule => Rule.required().min(5)
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'text',
      validation: Rule => Rule.required().min(10)
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Draft', value: 'draft' },
          { title: 'In Review', value: 'review' },
          { title: 'Published', value: 'published' }
        ]
      },
      initialValue: 'draft',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'schemaEligible',
      title: 'Schema Eligible',
      type: 'boolean',
      initialValue: true,
      validation: Rule => Rule.required()
    })
  ]
});
