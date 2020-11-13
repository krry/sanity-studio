// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import person from './documents/person'
import post from './documents/post'
import poem from './documents/poem'
import idea from './documents/idea'
import project from './documents/project'
import gig from './documents/gig'
import slice from './objects/slice'
import skill from './documents/skill'
import page from './documents/page'
import editor from './objects/editor'
import internalink from './objects/internalink'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    internalink,
    editor,
    person,
    post,
    poem,
    idea,
    project,
    gig,
    slice,
    skill,
    page,
  ]),
})
