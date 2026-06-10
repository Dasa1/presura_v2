import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'problem',
  title: 'Problem',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required().min(3)
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
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
      name: 'problemStatement',
      title: 'Problem Statement',
      type: 'text',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'symptoms',
      title: 'Symptoms',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'recommendedService',
      title: 'Recommended Service',
      type: 'reference',
      to: [{ type: 'service' }],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      validation: Rule => Rule.max(60)
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      validation: Rule => Rule.max(160)
    })
  ]
});
