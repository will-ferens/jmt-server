const typeDefs = `
    scalar Coordinates

    type PointGeometry {
        type: String!
        coordinates: Coordinates!
    }

    type PointProps {
        lat: Float
        lon: Float
        location: String
        pictureURL: String
    }

    type PointObject {
        type: String!
        geometry: PointGeometry
        properties: PointProps
    }
    
    type LineString {
        type: String!
        features: [PointObject]
    }

    type FeatureCollection {
        type: String!
        features: [PointObject]
    }

    type Query {
        trail_coordinates: LineString
        featured_points: FeatureCollection
    }
`

module.exports = typeDefs 