export const QUERY = gql`
  query($id: Int!) {
    movie(id: $id) {
      id
      title
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ movie }) => {
  return movie.title
}
