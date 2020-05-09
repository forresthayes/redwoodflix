export const schema = gql`
  type Movie {
    id: Int!
    title: String!
    description: String!
    released_on: DateTime!
    rating: String!
    total_gross: Int!
    director: String!
    duration: String!
    image_file_name: String!
  }

  type Query {
    movies: [Movie!]!
    movie(id: Int!): Movie!
  }

  input CreateMovieInput {
    title: String!
    description: String!
    released_on: DateTime!
    rating: String!
    total_gross: Int!
    director: String!
    duration: String!
    image_file_name: String!
  }

  input UpdateMovieInput {
    title: String
    description: String
    released_on: DateTime
    rating: String
    total_gross: Int
    director: String
    duration: String
    image_file_name: String
  }

  type Mutation {
    createMovie(input: CreateMovieInput!): Movie!
    updateMovie(id: Int!, input: UpdateMovieInput!): Movie!
    deleteMovie(id: Int!): Movie!
  }
`
