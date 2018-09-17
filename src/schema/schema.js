const typeDefs = `
    scalar Coordinates

    type PointGeometry {
        type: String!
        coordinates: Coordinates!
    }

    type PointProps {
        location: String!
        lat: Float
        lon: Float
    }

    type PointObject {
        type: String!
        geometry: PointGeometry
        properties: PointProps
    }
    
    type FeatureCollection {
        type: String!
        features: [PointObject]
    }

    type Query {
        trail_coordinates: FeatureCollection
    }
`

module.exports = typeDefs 