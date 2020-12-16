import { GiCondorEmblem } from 'react-icons/gi'

export default {
  name: 'comment',
  type: 'document',
  icon: GiCondorEmblem,
  title: 'Comment',
  fields: [
    {
      name: 'name',
      type: 'string',
    },
    {
      title: 'Approved',
      name: 'approved',
      type: 'boolean',
      description: "Comments won't show on the site without approval"
    },
    {
      name: 'email',
      type: 'string',
    },
    {
      name: 'comment',
      type: 'text',
    },
    {
      name: 'doc',
      type: 'reference',
      to: [
        {type: 'doc'}
      ]
    }
  ],
  preview: {
    select: {
      name: 'name',
      comment: 'comment',
      doc: 'doc.title'
    },
    prepare({name, comment, doc}) {
      return {
        title: `${name} on ${doc}`,
        subtitle: comment
      }
    }
  }
}
