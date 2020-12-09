import { GiFountainPen } from 'react-icons/gi'

export default {
  name: "post",
  title: "Post",
  type: "document",
  icon: GiFountainPen,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      description: "https://www.example.com/slug",
      type: "slug",
    },
    {
      name: "content",
      type: "editor",
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "string",
    },
    {
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: {
        metadata: ["palette"],
      },
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
      name: "date",
      title: "Date",
      type: "datetime",
    },
    {
      name: "author",
      title: "Author",
      description: "Name thyself",
      type: "reference",
      to: [{ type: "person" }],
    },
  ],
};
