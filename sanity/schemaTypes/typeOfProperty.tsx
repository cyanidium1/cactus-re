import {defineType, defineField} from 'sanity'

const typeOfProperty = defineType({
  name: 'typeOfProperty',
  title: 'Type Of Property',
  type: 'document',
  fields: [
    defineField({
      name: 'value',
      title: 'Type Of Property Name',
      type: 'string',
    }),
  ],
})

export default typeOfProperty
