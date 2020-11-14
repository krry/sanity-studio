import { GiPapers } from 'react-icons/gi'

export default {
  name: "page",
  title: "Page",
  type: "document",
  icon: GiPapers,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      description: "https://www.example.com/slug-for-page",
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
        metadata: ["palette"]
      },
    },
    {
      name: "date",
      type: "datetime",
      title: "Date",
    },
    {
      name: "author",
      type: "reference",
      to: [{ type: "person" }],
      title: "Author",
      description: "whodunnit?",
    },
  ],
};
