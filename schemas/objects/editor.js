import React from 'react'

const TitleStyle = (props) => (
  <span style={{
    fontFamily: "serif",
    fontSize: "2em"
  }}>
    {props.children}
  </span>
);

const CalloutStyle = (props) => (
  <aside className="callout" style={{
    backgroundColor: "hsla(222, 95%, 90%, 0.2)",
    display: 'block',
    fontWeight: 'bold',
    marginLeft: "1em",
    padding: "1em",
  }}>
    {props.children}
  </aside>
);

export default {
  name: "editor",
  type: "array",
  title: "Editor",
  of: [
    {
      // TODO: flesh out image editor with url and photog fields
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          options: {
            isHighlighted: true
          }
        },
        {
          name: 'photog',
          type: 'string',
          title: 'Photog',
          description: 'Name or handle',
          options: {
            isHighlighted: true
          }
        },
        {
          name: 'source',
          type: 'string',
          title: 'Source',
          description: 'A link to the original',
          options: {
            isHighlighted: true
          }
        }
      ]
    },
    { type: "code" },
    { type: "block",
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'H5', value: 'h5'},
        {title: 'H6', value: 'h6'},
        {title: 'Quote', value: 'blockquote'},
        {
          title: 'Callout',
          value: 'callout',
          blockEditor: { render: CalloutStyle }
        },
        {
          title: "Title",
          value: "title",
          blockEditor: { render: TitleStyle },
        },
      ],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Underline", value: "underline" },
          { title: "Strike", value: "strike-through" },
          { title: "Code", value: "code" },
          { title: 'Highlight', value: 'highlight' }
        ],
        annotations: [
          {
            name: "link",
            type: "link",
          },
          {
            name: "internalink",
            type: "internalink",
          },
        ],
      },
    },
  ],
};
