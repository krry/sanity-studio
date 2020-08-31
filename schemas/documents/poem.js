import { GiQuill } from 'react-icons/gi'

export default {
  title: 'Poem',
  name: 'poem',
  icon: GiQuill,
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      required: true
    },
    {
      title: 'Verse',
      name: 'verse',
      type: 'string',
      required: true
    },
    {
      title: 'Author',
      name: 'author',
      type: 'reference',
      to: [{type: 'person'}]
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      description: 'an illustration?'
    }
  ]
}
