import { GiFountainPen } from 'react-icons/gi'

export default {
  name: "post",
  title: "Post",
  type: "document",
  icon: GiFountainPen,
  fieldsets: [
    { name: "title", title: "Title" },
    { name: "body",  title: "Body" },
    { name: "viz",   title: "Viz" },
    { name: "meta",  title: "Meta" },
  ],
  fields: [
    {
      type: "string",
      name: "title",
      title: "Title"
    },
    {
      name: "author",
      type: "reference",
      to: [{ type: "person" }],
      title: "Author",
      fieldset: "title",
      description: "Who wrote this?",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      description: "https://www.example.com/slug-for-doc",
      fieldset: "title",
    },
    {
      name: "link",
      type: "string",
      title: "Link",
      fieldset: "header",
      description: "Label of links to this post",
      fieldset: "title",
    },
    {
      name: "content",
      type: "editor",
      fieldset: "body",
    },
    {
      name: "excerpt",
      type: "string",
      title: "Excerpt",
      fieldset: "body",
    },
    {
      name: "coverImage",
      type: "image",
      title: "Cover Image",
      fieldset: "viz",
      options: {
        metadata: ["palette"],
      },
    },
    {
      name: "ogImage",
      title: "OG Image",
      type: "image",
      fieldset: "viz",
      options: {
        metadata: ["palette"],
      },
    },
    {
      name: "doc",
      type: "reference",
      to: [{ type: 'doc' }],
      title: "Doc",
      fieldset: "meta",
    },
    {
      name: "date",
      type: "datetime",
      title: "Date",
      fieldset: "meta",
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo-tools', // use seo-tools type
      fieldset: "meta",
      options: {
          baseUrl: 'https://easeness.business', // (REQUIRED) This is the baseUrl for your site
          baseUrl(doc) {
              return 'https://easeness.business/posts/'; // for dynamic baseUrls
          },
          slug(doc) { // (REQUIRED) a function to return the slug of the current page, which will be appended to the baseUrl
              return doc.slug.current;
          },
          fetchRemote: true, // Can be set to false to disable fetching the remote source (you will need to pass the content helpers for analysis)
          // content(doc) {
              // return 'simple html representation of your doc'; // (OPTIONAL) If your site is generated after Sanity content updates you can use this for better real time feedback
          // },
          // title(doc) {
              // return 'page title'; // (OPTIONAL) return page title otherwise inferred from scrape
          // },
          // description(doc) {
              // return 'page description'; // (OPTIONAL) return page description otherwise inferred from scrape
          // },
          // locale(doc) {
              // return 'page locale'; // (OPTIONAL) return page locale otherwise inferred from scrape
          // },
          // contentSelector: 'body' // (OPTIONAL) option to finetune where Yoast will look for the content. (only applicable for scraping without content function)
      }
    }
  ]
};
