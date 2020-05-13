import { Link, routes } from '@redwoodjs/router'
import AdminMovies from 'src/components/AdminMovies'

export const QUERY = gql`
  query MOVIES {
    movies {
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

export const beforeQuery = (props) => {
  return { variables: props, fetchPolicy: 'cache-and-network' }
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="text-center">
      {'No movies yet. '}
      <Link
        to={routes.newMovie()}
        className="text-blue-500 underline hover:text-blue-700"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ movies }) => {
  return <AdminMovies movies={movies} />
}
