import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'location',
  title: 'Location',
  type: 'document',
  fields: [
    defineField({
      name: 'cityName',
      title: 'City Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'cityName',
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
      name: 'localIntro',
      title: 'Local Introduction',
      type: 'text',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'localProofBlocks',
      title: 'Local Proof Blocks',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'proofBlock',
          fields: [
            { name: 'title', type: 'string', title: 'Proof Title', validation: R => R.required() },
            { name: 'description', type: 'text', title: 'Proof Description', validation: R => R.required() }
          ]
        }
      ],
      validation: Rule => Rule.custom((localProofBlocks, context) => {
        const doc = context.document;
        if (doc?.status === 'published' && (!localProofBlocks || (localProofBlocks as any[]).length === 0)) {
          return 'Location pages cannot be published without at least one unique proof block to avoid thin content penalties.';
        }
        return true;
      })
    }),
    defineField({
      name: 'relatedServices',
      title: 'Related Services',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'service' }] }],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'relatedWorks',
      title: 'Related Works',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'work' }] }]
    }),
    defineField({
      name: 'localTestimonials',
      title: 'Local Testimonials',
      type: 'array',
      of: [{ type: 'string' }]
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
