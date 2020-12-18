import { GiFountainPen } from 'react-icons/gi'

export default {
  name: "post",
  title: "Post",
  type: "document",
  icon: GiFountainPen,
  fields: [
    {
      type: "string",
      name: "title",
      title: "Title",
    },
    {
      name: "author",
      type: "reference",
      to: [{ type: "person" }],
      title: "Author",
      description: "Who wrote this?",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      description: "https://www.example.com/slug-for-doc",
    },
    {
      name: "link",
      type: "string",
      title: "Link",
      description: "Label of links to this post",
    },
    {
      name: "content",
      type: "editor",
    },
    {
      name: "excerpt",
      type: "string",
      title: "Excerpt",
    },
    {
      name: "coverImage",
      type: "image",
      title: "Cover Image",
      options: {
        metadata: ["palette"],
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          options: {
            isHighlighted: true
          }
        },
        {
          name: 'photog',
          type: 'string',
          title: 'Photog',
          description: 'Name or handle',
        },
        {
          name: 'source',
          type: 'string',
          title: 'Source',
          description: 'A link to the original',
        }
      ]
    },
    {
      name: "ogImage",
      title: "OG Image",
      type: "image",
      options: {
        metadata: ["palette"],
      },
    },
    {
      name: "doc",
      type: "reference",
      to: [{ type: 'doc' }],
      title: "Doc",
    },
    {
      name: "date",
      type: "datetime",
      title: "Date",
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo-tools', // use seo-tools type
      options: {
          baseUrl: 'https://easeness.business', // (REQUIRED) This is the baseUrl for your site
          // baseUrl(post) {
          //     return 'https://easeness.business/'; // for dynamic baseUrls
          // },
          slug(post) { // (REQUIRED) a function to return the slug of the current page, which will be appended to the baseUrl
              return post.slug.current;
          },
          fetchRemote: true, // Can be set to false to disable fetching the remote source (you will need to pass the content helpers for analysis)
          // content(post) {
              // return 'simple html representation of your post'; // (OPTIONAL) If your site is generated after Sanity content updates you can use this for better real time feedback
          // },
          // title(post) {
              // return 'page title'; // (OPTIONAL) return page title otherwise inferred from scrape
          // },
          // description(post) {
              // return 'page description'; // (OPTIONAL) return page description otherwise inferred from scrape
          // },
          // locale(post) {
              // return 'page locale'; // (OPTIONAL) return page locale otherwise inferred from scrape
          // },
          contentSelector: 'content' // (OPTIONAL) option to finetune where Yoast will look for the content. (only applicable for scraping without content function)
      }
    }
  ]
};
