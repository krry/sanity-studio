import { MdPersonOutline } from 'react-icons/md'

export default {
  name: "entity",
  type: "document",
  title: "Entity",
  icon: MdPersonOutline,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
      description: "ideally 512x512",
      options: {
        metadata: ["palette", "exif"],
      },
    },
    {
      name: "summary",
      title: "Summary",
      description: "who dis",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};
