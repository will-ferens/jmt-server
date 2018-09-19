const express = require('express')
const graphql = require('express-graphql')
const cors = require('cors')
const graphqlTools = require('graphql-tools')
const executableSchema = graphqlTools.makeExecutableSchema

const typeDefs = require('./schema/schema')
const trail_coordinates = require('./resolvers/trail_coordinates')


const schema = executableSchema({
    typeDefs,
    resolvers: trail_coordinates
})

const app = express()
app.use(cors())

app.use('/graphql', graphql({
    schema,
    graphiql: true
}))

const server = app.listen(4000, () => {
    console.log('its lit at http://localhost:4000/graphql')
})