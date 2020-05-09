export const schema = gql`
  type Movie {
    id: Int!
    title: String!
    rating: String!
    total_gross: Int!
  }

  type Query {
    movies: [Movie!]!
    movie(id: Int!): Movie!
  }

  input CreateMovieInput {
    title: String!
    rating: String!
    total_gross: Int!
  }

  input UpdateMovieInput {
    title: String
    rating: String
    total_gross: Int
  }

  type Mutation {
    createMovie(input: CreateMovieInput!): Movie!
    updateMovie(id: Int!, input: UpdateMovieInput!): Movie!
    deleteMovie(id: Int!): Movie!
  }
`
