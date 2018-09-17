const express = require('express')
const graphql = require('express-graphql')
const graphqlTools = require('graphql-tools')
const executableSchema = graphqlTools.makeExecutableSchema

const typeDefs = require('./schema/schema')
const resolvers = require('./resolvers/trail_coordinates')


const schema = executableSchema({
    typeDefs,
    resolvers
})

const app = express()

console.log(resolvers)

app.use('/graphql', graphql({
    schema
}))

const server = app.listen(4000, () => {
    console.log('its lit at http://localhost:4000/graphql')
})