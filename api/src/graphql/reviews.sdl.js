export const schema = gql`
  type Review {
    id: Int!
    name: String!
    stars: Int!
    comment: String!
    createdAt: DateTime!
    movie: Movie!
    movieId: Int!
  }

  type Query {
    reviews: [Review!]!
  }

  input CreateReviewInput {
    name: String!
    stars: Int!
    comment: String!
    movieId: Int!
  }

  input UpdateReviewInput {
    name: String
    stars: Int
    comment: String
  }

  type Mutation {
    createReview(input: CreateReviewInput!): Review
  }
`
