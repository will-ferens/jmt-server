const graphQL = require('graphql')
const scalarType = graphQL.GraphQLScalarType
const data = require('../constants/locations')


const resolvers = {
    Coordinates: new scalarType({
        name: 'Coordinates',
        description: 'A set of coordinates. x, y',
            parseValue(value) {
                return value
            },
            serialize(value) {
                return value
            },
            parseLiteral(ast) {
                return ast.value
            },
        }),
        PointGeometry: {
            type() {
                return 'Point'
            },
            coordinates(item) {
                return [item.longitude, item.latitude]
            },
        },
        PointProps: {
            lat(item) {
                return item.latitude
            },
            lon(item) {
                return item.longitude
            },
            location(item) {
                return item.location
            },
            pictureURL(item) {
                return item.pictureURL
            }
        },
        PointObject: {
            type() {
                return 'Feature'
            },
            geometry(item) {
                return item
            },
            properties(item) {
                return item
            },
        },
        FeatureCollection: {
            type() {
                return 'FeatureCollection'
            },
            features(data) {
                return data
            },
        },
        Query: {
            featured_points(_, args, ctx) {
                return data
            },
        }, 
}

module.exports = resolvers