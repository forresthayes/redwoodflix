import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import MovieForm from 'src/components/MovieForm'

const CREATE_MOVIE_MUTATION = gql`
  mutation CreateMovieMutation($input: CreateMovieInput!) {
    createMovie(input: $input) {
      id
    }
  }
`

const NewMovie = () => {
  const [createMovie, { loading, error }] = useMutation(CREATE_MOVIE_MUTATION, {
    onCompleted: () => {
      navigate(routes.movies())
    },
  })

  const onSave = (input) => {
    createMovie({ variables: { input } })
  }

  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <header className="bg-gray-300 text-gray-700 py-3 px-4">
        <h2 className="text-sm font-semibold">New Movie</h2>
      </header>
      <div className="bg-gray-100 p-4">
        <MovieForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewMovie
