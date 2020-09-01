import { MdPerson } from 'react-icons/md'

export default {
  name: "person",
  type: "document",
  title: "Person",
  icon: MdPerson,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "avatar",
      title: "Avatar",
      type: "image",
      description: "ideally 512x512",
      options: {
        metadata: ["palette", "exif"],
      },
    },
    {
      name: "bio",
      title: "Bio",
      description: "about the author",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};
