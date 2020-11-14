import { GiClayBrick } from 'react-icons/gi'

export default {
  name: "gig",
  title: "Gig",
  type: "document",
  icon: GiClayBrick,
  fieldsets: [
    { name: "client", title: "Client" },
    { name: "summary", title: "Summary" },
    { name: "details", title: "Details" },
  ],
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "client",
      title: "Client",
      type: "reference",
      to: [{ type: "entity" }],
      fieldset: "client",
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
      options: {
        metadata: ["palette"],
      },
      fieldset: "client",
    },
    {
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: {
        metadata: ["palette"],
      },
      fieldset: "summary",
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "string",
      fieldset: "summary",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
      fieldset: "details",
    },
    {
      name: "startDate",
      title: "Start Date",
      type: "datetime",
      fieldset: "details",
    },
    {
      name: "stopdate",
      title: "Stop Date",
      type: "datetime",
      fieldset: "details",
    },
    {
      name: "slices",
      title: "Slices",
      type: "array",
      of: [{ type: "slice" }],
    },
    {
      name: "skills",
      title: "Skills",
      type: "array",
      of: [{
        type: "reference",
        to: [{ type: "skill" }]
      }],
    },
    {
      name: "slug",
      title: "Slug",
      description: "https://www.atmanautica.com/slug-like-this",
      type: "slug",
    },
  ],
};
