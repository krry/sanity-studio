import { HiOutlineExternalLink } from 'react-icons/hi'

export default {
  name: 'link',
  type: 'object',
  title: 'External link',
  blockEditor: {
    icon: HiOutlineExternalLink
  },
  fields: [
    {
      name: 'href',
      type: 'url',
      title: 'URL'
    },
    {
      name: 'text',
      type: 'string',
      title: 'link to'
    },
    {
      title: 'Open in new tab',
      name: 'blank',
      description: 'Read https://css-tricks.com/use-target_blank/',
      type: 'boolean'
    }
  ]
};
