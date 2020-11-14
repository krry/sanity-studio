import React from 'react'

const TitleStyle = (props) => (
  <span style={{
    fontFamily: "Garamond",
    fontSize: "2em"
  }}>
    {props.children}
  </span>
);

const CalloutStyle = (props) => (
  <span style={{
    backgroundColor: "cornsilk",
    color: 'brown',
    padding: "1em 1em 1em 3em",
    position: "relative"
  }}>
    <span
      contentEditable="false"
      style={{
      left: "1em",
      margin: "0.5em 0",
      position: "absolute",
      top: "1em",
      userSelect: "none",
    }}>🔭</span>
    {props.children}
  </span>
);

export default {
  name: "editor",
  type: "array",
  title: "Editor",
  of: [
    { type: "image" },
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
          { "title": "Strong", "value": "strong" },
          { "title": "Emphasis", "value": "em" },
          { "title": "Code", "value": "code" },
          { "title": "Underline", "value": "underline" },
          { "title": "Strike", "value": "strike-through" },
          { title: 'Highlight', value: 'highlight' }
        ],
        annotations: [
          {
            name: "internalink",
            type: "internalink",
          },
        ],
      },
    },
  ],
};
