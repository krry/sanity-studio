export default {
  name: "internalink",
  type: "object",
  title: "Internal link",
  fields: [
    {
      name: "reference",
      type: "reference",
      title: "Reference",
      to: [
        { type: "post" },
      ],
    },
  ],
};