import { GiClayBrick } from 'react-icons/gi'

export default {
  title: 'Project',
  name: 'project',
  icon: GiClayBrick,
  type: 'document',
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

