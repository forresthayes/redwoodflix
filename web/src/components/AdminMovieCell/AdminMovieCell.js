import AdminMovie from 'src/components/AdminMovie'

export const QUERY = gql`
  query FIND_MOVIE_BY_ID($id: Int!) {
    movie: movie(id: $id) {
      id
      title
      description
      released_on
      rating
      total_gross
      director
      duration
      image_file_name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Movie not found</div>

export const Success = ({ movie }) => {
  return <AdminMovie movie={movie} />
}
