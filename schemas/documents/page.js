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
      name: "content",
      type: "editor",
    },
    {
      name: "excerpt",
      type: "string",
      title: "Excerpt",
    },
    {
      name: "heroImage",
      type: "image",
      title: "Hero Image",
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
      description: "Whodunnit",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      description: "https://www.example.com/slug",
    },
  ],
};
