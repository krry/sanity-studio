import { AiOutlinePaperClip } from 'react-icons/ai'

export default {
  name: "internalink",
  type: "object",
  title: "Internal link",
  blockEditor: {
    icon: AiOutlinePaperClip
  },
  fields: [
    {
      name: "reference",
      type: "reference",
      title: "Reference",
      to: [
        { type: "post" },
      ],
    },
    {
      name: 'text',
      type: 'string',
      title: 'link to'
    },
  ],
};
