import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'priceItem',
  title: 'Price Item',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required().min(3)
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
      name: 'priceType',
      title: 'Price Type',
      type: 'string',
      options: {
        list: [
          { title: 'From Price', value: 'from' },
          { title: 'Price Range', value: 'range' },
          { title: 'Quote Required', value: 'quote-only' }
        ]
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'fromPrice',
      title: 'From Price',
      type: 'number',
      validation: Rule => Rule.min(0)
    }),
    defineField({
      name: 'rangeMin',
      title: 'Range Min',
      type: 'number',
      validation: Rule => Rule.min(0)
    }),
    defineField({
      name: 'rangeMax',
      title: 'Range Max',
      type: 'number',
      validation: Rule => Rule.custom((rangeMax, context) => {
        const doc = context.document as any;
        if (doc?.priceType === 'range' && (!rangeMax || rangeMax < (doc.rangeMin || 0))) {
          return 'Range Max must be greater than or equal to Range Min.';
        }
        return true;
      })
    }),
    defineField({
      name: 'currency',
      title: 'Currency',
      type: 'string',
      initialValue: 'EUR',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'includedItems',
      title: 'Included Items',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'caveatText',
      title: 'Caveat Text',
      type: 'text',
      validation: Rule => Rule.custom((caveatText, context) => {
        const doc = context.document;
        if (doc?.status === 'published' && (!caveatText || caveatText.trim() === '')) {
          return 'Caveat text explaining price variation is mandatory for published price items.';
        }
        return true;
      })
    })
  ]
});
