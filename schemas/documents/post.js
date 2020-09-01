export default {
  name: "post",
  type: "document",
  title: "Post",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
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
    {
      name: "slug",
      title: "Slug",
      description: "https://www.atmanautica.com/slug",
      type: "slug",
    },
  ],
};
