import { Link, routes } from '@redwoodjs/router'

import Movies from 'src/components/Movies'

export const QUERY = gql`
  query MOVIES {
    movies {
      id
      title
      rating
      total_gross
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
  return <Movies movies={movies} />
}
