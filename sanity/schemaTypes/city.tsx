import {defineType, defineField} from 'sanity'

const city = defineType({
  name: 'city',
  title: 'City',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'City Name',
      type: 'string',
    }),
  ],
})

export default city
