import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'service',
  title: 'Service',
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
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      validation: Rule => Rule.required().max(220)
    }),
    defineField({
      name: 'contentBlocks',
      title: 'Content Blocks',
      type: 'array',
      of: [{ type: 'block' }],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'relatedProblems',
      title: 'Related Problems',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'problem' }] }]
    }),
    defineField({
      name: 'relatedLocations',
      title: 'Related Locations',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'location' }] }]
    }),
    defineField({
      name: 'priceItems',
      title: 'Price Items',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'priceItem' }] }]
    }),
    defineField({
      name: 'relatedFAQs',
      title: 'Related FAQs',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'faq' }] }]
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
