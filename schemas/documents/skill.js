import { GiIceSkate } from 'react-icons/gi'

export default {
  name: "skill",
  title: "Skill",
  type: "document",
  icon: GiIceSkate,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
  preview: {
    select: {
      title: "name",
      description: "description",
    },
  },
};
