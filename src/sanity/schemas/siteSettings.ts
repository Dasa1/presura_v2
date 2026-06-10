import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required().min(2)
    }),
    defineField({
      name: 'phoneDisplay',
      title: 'Phone Display',
      type: 'string'
    }),
    defineField({
      name: 'phoneTelHref',
      title: 'Phone URI (tel:)',
      type: 'string'
    }),
    defineField({
      name: 'emailDisplay',
      title: 'Email Display',
      type: 'string'
    }),
    defineField({
      name: 'addressDisplay',
      title: 'Address Display',
      type: 'text'
    }),
    defineField({
      name: 'schemaEnabled',
      title: 'Schema Enabled',
      type: 'boolean',
      initialValue: false
    })
  ]
});
