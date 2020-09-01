import { GiLightBulb } from 'react-icons/gi'

export default {
  name: 'idea',
  title: 'Idea',
  icon: GiLightBulb,
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'text',
      title: 'Text',
      type: 'text',
      description: 'Succinctly, please'
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'person' }]
    },
    {
      name: 'location',
      title: 'Location',
      type: 'geopoint'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 200
      }
    }
  ]
}
