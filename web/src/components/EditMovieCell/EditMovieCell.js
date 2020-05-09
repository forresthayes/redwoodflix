import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import MovieForm from 'src/components/MovieForm'

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
const UPDATE_MOVIE_MUTATION = gql`
  mutation UpdateMovieMutation($id: Int!, $input: UpdateMovieInput!) {
    updateMovie(id: $id, input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ movie }) => {
  const [updateMovie, { loading, error }] = useMutation(UPDATE_MOVIE_MUTATION, {
    onCompleted: () => {
      navigate(routes.movies())
    },
  })

  const onSave = (input, id) => {
    updateMovie({ variables: { id, input } })
  }

  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <header className="bg-gray-300 text-gray-700 py-3 px-4">
        <h2 className="text-sm font-semibold">Edit Movie {movie.id}</h2>
      </header>
      <div className="bg-gray-100 p-4">
        <MovieForm movie={movie} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
