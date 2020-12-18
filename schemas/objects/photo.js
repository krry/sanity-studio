export default {
  name: 'photo',
  type: 'object',
  title: 'Photo',
  fields: [
    {
      name: 'href',
      type: 'url',
      title: 'URL'
    },
    {
      title: 'Open in new tab',
      name: 'blank',
      description: 'Read https://css-tricks.com/use-target_blank/',
      type: 'boolean'
    }
  ]
};
