const path = require('path')
const mergeGraphQLSchemas = require('merge-graphql-schemas')

const { fileLoader } = mergeGraphQLSchemas

const files = path.join(__dirname, './')

const loadedFiles = fileLoader(files)

module.exports = loadedFiles