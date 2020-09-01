export default {
  name: "slice",
  type: "object",
  title: "Slice",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { metadata: ["palette"] },
    },
    {
      name: "caption",
      title: "Caption",
      type: "string",
    },
    {
      name: "credit",
      title: "Credit",
      type: "reference",
      to: [{ type: "person" }],
    },
    {
      name: "link",
      title: "Link",
      type: "url",
      description: "More information",
    },
  ],
};
