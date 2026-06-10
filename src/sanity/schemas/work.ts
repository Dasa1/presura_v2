import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'work',
  title: 'Work / Case Study',
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
      name: 'service',
      title: 'Service',
      type: 'reference',
      to: [{ type: 'service' }],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'reference',
      to: [{ type: 'location' }]
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'beforeAfterMedia',
      title: 'Before & After Media',
      type: 'array',
      of: [{ type: 'image' }]
    }),
    defineField({
      name: 'publishConsentStatus',
      title: 'Publish Consent Status',
      type: 'string',
      options: {
        list: [
          { title: 'Approved', value: 'approved' },
          { title: 'Placeholder Only', value: 'placeholder' },
          { title: 'Not Approved', value: 'not-approved' }
        ]
      },
      initialValue: 'placeholder',
      validation: Rule => Rule.custom((publishConsentStatus, context) => {
        const doc = context.document;
        if (doc?.status === 'published' && publishConsentStatus !== 'approved') {
          return 'Case studies cannot be published without explicitly approved consent status.';
        }
        return true;
      })
    })
  ]
});
