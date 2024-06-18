export default {
  name: 'property',
  title: 'Property',
  type: 'document',
  fields: [
    {
      name: 'title_english',
      title: 'Title English',
      type: 'string',
    },
    {
      name: 'title_russian',
      title: 'Title Russian',
      type: 'string',
    },
    {
      name: 'cityname',
      title: 'City Name',
      type: 'reference',
      to: [{type: 'city'}],
    },
    {
      name: 'houseorapt',
      title: 'House or Apartment',
      type: 'reference',
      to: [{type: 'type_of_property'}],
    },
    {
      name: 'sellorent',
      title: 'Sell or Rent',
      type: 'reference',
      to: [{type: 'sell_or_rent'}],
    },
    {
      name: 'description_english',
      title: 'Description English',
      type: 'text',
    },
    {
      name: 'description_russian',
      title: 'Description Russian',
      type: 'text',
    },
    {
      name: 'location_gmaps_link',
      title: 'Location (GMaps Link)',
      type: 'url',
    },
    {
      name: 'area_actuall',
      title: 'Area Actual',
      type: 'number',
    },
    {
      name: 'area_certificate',
      title: 'Area Certificate',
      type: 'number',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'state_english',
      title: 'State English',
      type: 'string',
    },
    {
      name: 'state_russian',
      title: 'State Russian',
      type: 'string',
    },
    {
      name: 'rooms_english',
      title: 'Rooms English',
      type: 'string',
    },
    {
      name: 'rooms_russian',
      title: 'Rooms Russian',
      type: 'string',
    },
    {
      name: 'main_photo',
      title: 'Main Photo',
      type: 'image',
    },
    {
      name: 'all_photos',
      title: 'All Photos',
      type: 'array',
      of: [{type: 'image'}],
    },
    {
      name: 'youtube_link',
      title: 'Youtube Link',
      type: 'url',
    },
    {
      name: 'bathroom_number',
      title: 'Bathroom number',
      type: 'string',
    },
  ],
}
