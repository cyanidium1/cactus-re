import {defineType, defineField} from 'sanity'
import {MultipleImageInput} from '../components/MultipleImageInput'

const property = defineType({
  name: 'property',
  title: 'Property',
  type: 'document',
  fields: [
    defineField({
      name: 'titleEnglish',
      title: 'Title English',
      type: 'string',
    }),

    defineField({
      name: 'titleRussian',
      title: 'Title Russian',
      type: 'string',
    }),
    defineField({
      name: 'cityName',
      title: 'City Name',
      type: 'reference',
      to: [{type: 'city'}],
    }),
    defineField({
      name: 'typeOfProperty',
      title: 'House or Apartment',
      type: 'reference',
      to: [{type: 'typeOfProperty'}],
    }),
    defineField({
      name: 'sellOrRent',
      title: 'Sell or Rent',
      type: 'reference',
      to: [{type: 'sellOrRent'}],
    }),
    defineField({
      name: 'descriptionEnglish',
      title: 'Description English',
      type: 'text',
    }),
    defineField({
      name: 'descriptionRussian',
      title: 'Description Russian',
      type: 'text',
    }),
    defineField({
      name: 'locationGmapsLink',
      title: 'Location (GMaps Link)',
      type: 'url',
    }),
    defineField({
      name: 'areaActual',
      title: 'Area Actual',
      type: 'number',
    }),
    defineField({
      name: 'areaCertificate',
      title: 'Area Certificate',
      type: 'number',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
    }),
    defineField({
      name: 'stateEnglish',
      title: 'State English',
      type: 'string',
    }),
    defineField({
      name: 'stateRussian',
      title: 'State Russian',
      type: 'string',
    }),
    defineField({
      name: 'roomsEnglish',
      title: 'Rooms English',
      type: 'string',
    }),
    defineField({
      name: 'roomsRussian',
      title: 'Rooms Russian',
      type: 'string',
    }),
    defineField({
      name: 'mainPhoto',
      title: 'Main Photo',
      type: 'image',
    }),
    defineField({
      name: 'allPhotos',
      title: 'All Photos',
      type: 'array',
      of: [{type: 'image'}],
      components: {
        input: MultipleImageInput,
      },
    }),
    defineField({
      name: 'youtubeLink',
      title: 'Youtube Link',
      type: 'url',
    }),
    defineField({
      name: 'bathroomNumber',
      title: 'Bathroom number',
      type: 'string',
    }),
    defineField({
      name: 'favorite',
      title: 'Favorite',
      type: 'boolean',
      description: 'Избраное?',
    }),
  ],
  preview: {
    select: {
      title: 'titleEnglish',
      subtitle: 'descriptionEnglish',
      media: 'mainPhoto',
    },
  },
})

export default property
