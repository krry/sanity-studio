import {MdLineStyle} from 'react-icons/md'

export default {
  name: 'hexagram',
  type: 'document',
  title: 'Hexagram',
  icon: MdLineStyle,
  preview: {
    select: {
      binary: 'binary',
      octal: 'octal',
      kingwen: 'kingwen',
      names: 'names',
    },
    prepare({binary, kingwen, names, octal}) {
      return {
        title: `${octal} ${names.english}`,
        subtitle: [binary.slice(2), "King Wen #" + kingwen].join(' • ')
      }
    }
  },
  fields: [
    {
      name: 'binary',
      title: 'Binary',
      type: 'string',
      description: 'e.g., 0b010101',
    },
    {
      name: 'hexagram',
      title: 'Hexagram',
      type: 'string',
      description: 'one of 64 six-line glyphs',
    },
    {
      name: 'kingwen',
      title: 'King Wen No.',
      type: 'number',
      description: 'the conventional order',
    },
    {
      name: 'octal',
      title: 'Octal No.',
      type: 'string',
      description: 'the sacred geometric order',
    },
    {
      name: 'names',
      title: 'Names',
      type: "object",
      fields: [
        {
          name: "chinese",
          type: "string",
          title: "Chinese name",
        },
        {
          name: "pinyin",
          type: "string",
          title: "Pinyin name",
        },
        {
          name: "english",
          type: "string",
          title: "English name",
        },
      ]

    },
    {
      name: 'trigramPair',
      title: 'Trigrams',
      description: 'the sacred geometric order',
      type: "object",
      fields: [
        {
          name: "above",
          type: "number",
          title: "Over",
        },
        {
          name: "below",
          type: "number",
          title: "Under",
        },
      ]
    },
    {
      name: 'judgment',
      title: 'Judgment',
      type: 'text',
      rows: 8,
      description: 'the core interpretation',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'text',
      rows: 8,
      description: 'a metaphoric interpretation',
    },
    {
      name: 'lines',
      title: 'Lines',
      type: 'array',
      of: [{
        name: "line",
        title: "Line",
        type: "object",
        fields: [
          {
            name: "position",
            type: "number",
            title: "Position",
          },
          {
            name: "meaning",
            type: "text",
            title: "Meaning",
          },
          {
            name: "ruler",
            type: "string",
            title: "Ruler",
          },
        ],
        preview: {
          select: {
            position: 'position',
            meaning: 'meaning',
            ruler: 'ruler'
          },
          prepare({position, meaning, ruler}) {
            const rulerPrev = ruler ? ruler : ""
            return {
              title: [position, rulerPrev].join('. '),
              subtitle: meaning
            }
          }
        }
      }]
    },
  ],
}
