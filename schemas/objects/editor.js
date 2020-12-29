import React from 'react'
import { AiOutlineHighlight } from 'react-icons/ai'

const TitleStyle = (props) => (
  <span
    style={{
      fontFamily: 'serif',
      fontWeight: 'bolder',
      lineHeight: '1.25',
      fontSize: '2rem',
      marginBottom: '0.25em',
    }}>
    {props.children}
  </span>
)

const SubtitleStyle = (props) => (
  <span
    style={{
      fontFamily: 'serif',
      fontWeight: 'bolder',
      fontSize: '1.5rem',
      lineHeight: '1.25',
      marginBottom: '0.25em',
    }}>
    {props.children}
  </span>
)

const LeadStyle = (props) => (
  <span
    style={{
      fontFamily: 'serif',
      fontWeight: 'bolder',
      fontSize: '1.25rem',
      lineHeight: '1.25',
      marginBottom: '0.25em',
    }}>
    {props.children}
  </span>
)

const CalloutStyle = (props) => (
  <aside
    style={{
      backgroundColor: 'hsla(222, 95%, 90%, 0.3)',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-evenly',
      padding: '1em',
    }}>
      <span
        style={{
          transform: 'scaleX(-1)',
          userSelect: 'none',
        }}
        contentEditable={false}> 📢 </span>
    <p style={{ flex: '1', padding: '0 0.5rem', margin: 0 }}>{props.children}</p>
  </aside>
)

// Dinkus: A symbol that breaks paragraphs into sections, often an asterism ⁂ or a fleuron ❧
const DinkusStyle = (props) => (
  <span style={{
    borderBottom: '1px solid currentColor',
    borderTop: '1px solid currentColor',
    borderOpacity: '0.5',
    display: 'block',
    padding: '0.25em 0',
    textAlign: 'center',
    width: '100%',
  }}>{props.children}</span>
)

export default {
  name: 'editor',
  type: 'array',
  title: 'Editor',
  of: [
    { type: 'image',
      name: 'image',
      title: 'Image',
      options: {hotspot: true},
      fields: [
        {name: 'caption', type: 'string', title: 'Caption', options: {isHighlighted: true}},
        {
          name: 'photog',
          type: 'string',
          title: 'Photog',
          description: 'Name or handle',
          options: {isHighlighted: true},
        },
        {
          name: 'source',
          type: 'string',
          title: 'Source',
          description: 'A link to the original',
          options: {isHighlighted: true},
        }
      ],
    },
    { type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'h1 Title', value: 'h1', blockEditor: {render: TitleStyle}},
        {title: 'h2 Subtitle', value: 'h2', blockEditor: {render: SubtitleStyle}},
        {title: 'h3 Lead', value: 'h3', blockEditor: {render: LeadStyle}},
        {title: 'Quote', value: 'blockquote'},
        {title: 'Dinkus', value: 'hr', blockEditor: {render: DinkusStyle}},
        {title: 'Callout', value: 'aside', blockEditor: {render: CalloutStyle}},
        {title: 'h4 Segue', value: 'h4'},
        {title: 'h5 Key', value: 'h5'},
        {title: 'h6 Subkey', value: 'h6'},
      ],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          {title: 'Underline', value: 'underline'},
          {title: 'Strike', value: 'strike-through'},
          {title: 'Code', value: 'code'},
          {title: 'Highlight', value: 'highlight', blockEditor: {icon: AiOutlineHighlight},},
        ],
        annotations: [
          {name: 'internalink', type: 'internalink'},
          {name: 'link', type: 'link'},
        ],
      },
    },
    { type: 'linebreak',
      styles: [
        {title: 'Line Break', value: 'lineBreak'},
        {title: 'Read More', value: 'readMore'},
      ],
    },
    { type: 'code',
      name: 'code',
      title: 'Code'
    },
  ],
}
