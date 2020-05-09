import Movie from 'src/components/Movie'

export const QUERY = gql`
  query FIND_MOVIE_BY_ID($id: Int!) {
    movie: movie(id: $id) {
      id
      title
      rating
      total_gross
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Movie not found</div>

export const Success = ({ movie }) => {
  return <Movie movie={movie} />
}
