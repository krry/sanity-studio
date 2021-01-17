import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import editor from './objects/editor'
import internalink from './objects/internalink'
import doc from './documents/doc'
import person from './documents/person'
import entity from './documents/entity'
import post from './documents/post'
import poem from './documents/poem'
import idea from './documents/idea'
import project from './documents/project'
import gig from './documents/gig'
import hexagram, {Line} from './documents/hexagram'
import slice from './objects/slice'
import skill from './documents/skill'
import comment from './documents/comment'
import link from './objects/link'
import linebreak from './objects/linebreak'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    internalink,
    link,
    doc,
    editor,
    person,
    entity,
    post,
    poem,
    idea,
    project,
    gig,
    hexagram,
    slice,
    skill,
    comment,
    linebreak,
  ]),
})
