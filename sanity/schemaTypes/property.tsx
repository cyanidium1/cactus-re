
export default {
  name: 'property',
  title: 'Property',
  type: 'document',
  fields: [
    {
      name: 'titleEnglish',
      title: 'Title English',
      type: 'string',
    },
    {
      name: 'titleRussian',
      title: 'Title Russian',
      type: 'string',
    },
    {
      name: 'cityName',
      title: 'City Name',
      type: 'reference',
      to: [{type: 'city'}],
    },
    {
      name: 'typeOfProperty',
      title: 'House or Apartment',
      type: 'reference',
      to: [{type: 'typeOfProperty'}],
    },
    {
      name: 'sellOrRent',
      title: 'Sell or Rent',
      type: 'reference',
      to: [{type: 'sellOrRent'}],
    },
    {
      name: 'descriptionEnglish',
      title: 'Description English',
      type: 'text',
    },
    {
      name: 'descriptionRussian',
      title: 'Description Russian',
      type: 'text',
    },
    {
      name: 'locationGmapsLink',
      title: 'Location (GMaps Link)',
      type: 'url',
    },
    {
      name: 'areaActual',
      title: 'Area Actual',
      type: 'number',
    },
    {
      name: 'areaCertificate',
      title: 'Area Certificate',
      type: 'number',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'stateEnglish',
      title: 'State English',
      type: 'string',
    },
    {
      name: 'stateRussian',
      title: 'State Russian',
      type: 'string',
    },
    {
      name: 'roomsEnglish',
      title: 'Rooms English',
      type: 'string',
    },
    {
      name: 'roomsRussian',
      title: 'Rooms Russian',
      type: 'string',
    },
    {
      name: 'mainPhoto',
      title: 'Main Photo',
      type: 'image',
    },
    {
      name: 'allPhotos',
      title: 'All Photos',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        layout: 'grid',
      },
    },
    {
      name: 'youtubeLink',
      title: 'Youtube Link',
      type: 'url',
    },
    {
      name: 'bathroomNumber',
      title: 'Bathroom number',
      type: 'string',
    },
    {
      name: 'favorite',
      title: 'Favorite',
      type: 'boolean',
      description: 'Избраное?',
    },
  ],
  preview: {
    select: {
      title: 'titleEnglish',
      subtitle: 'descriptionEnglish',
      media: 'mainPhoto',
    },
  },
}
