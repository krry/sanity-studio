import { RiArtboardFill } from 'react-icons/ri'

export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  icon: RiArtboardFill,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'cover',
      title: 'Cover',
      type: 'image'
    },
    {
      name: 'concept',
      title: 'Concept',
      type: 'array',
      description: 'Which legos are in this set?',
      of: [{
        type: 'reference',
        to: [{ type: 'idea' }]
      }]
    }
  ]
}

