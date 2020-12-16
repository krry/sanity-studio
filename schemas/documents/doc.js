export default {
  name: "doc",
  type: "document",
  title: "Doc",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "post or page or ???",
      validation: Rule => Rule.required()
    },
    {
      name: "path",
      type: "string",
      title: "Path",
      description: "https://example.com/path/slug"
    }
  ],
};
