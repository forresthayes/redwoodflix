export const QUERY = gql`
  query($id: Int!) {
    movie(id: $id) {
      id
      title
    }
  }
`

export const Loading = () => 'Loading...'

export const Failure = ({ error }) => `Error: ${error.message}`

export const Success = ({ movie }) => movie.title
