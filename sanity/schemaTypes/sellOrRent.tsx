import {defineType, defineField} from 'sanity'

const sellOrRent = defineType({
  name: 'sellOrRent',
  title: 'Sell Or Rent',
  type: 'document',
  fields: [
    defineField({
      name: 'value',
      title: 'Sell Or Rent',
      type: 'string',
    }),
  ],
})

export default sellOrRent
