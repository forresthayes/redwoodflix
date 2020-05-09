import { useMutation } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_MOVIE_MUTATION = gql`
  mutation DeleteMovieMutation($id: Int!) {
    deleteMovie(id: $id) {
      id
    }
  }
`

const Movie = ({ movie }) => {
  const [deleteMovie] = useMutation(DELETE_MOVIE_MUTATION, {
    onCompleted: () => {
      navigate(routes.movies())
      location.reload()
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete movie ' + id + '?')) {
      deleteMovie({ variables: { id } })
    }
  }

  return (
    <>
      <div className="bg-white border rounded-lg overflow-hidden">
        <header className="bg-gray-300 text-gray-700 py-3 px-4">
          <h2 className="text-sm font-semibold">Movie {movie.id} Detail</h2>
        </header>
        <table className="w-full text-sm">
          <tbody>
            <tr className="odd:bg-gray-100 even:bg-white border-t">
              <td className="font-semibold p-3 text-right md:w-1/5">id</td>
              <td className="p-3">{movie.id}</td>
            </tr><tr className="odd:bg-gray-100 even:bg-white border-t">
              <td className="font-semibold p-3 text-right md:w-1/5">title</td>
              <td className="p-3">{movie.title}</td>
            </tr><tr className="odd:bg-gray-100 even:bg-white border-t">
              <td className="font-semibold p-3 text-right md:w-1/5">rating</td>
              <td className="p-3">{movie.rating}</td>
            </tr><tr className="odd:bg-gray-100 even:bg-white border-t">
              <td className="font-semibold p-3 text-right md:w-1/5">total_gross</td>
              <td className="p-3">{movie.total_gross}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="my-4 mx-2 text-center">
        <ul>
          <li className="inline-block ml-2">
            <Link
              to={routes.editMovie({ id: movie.id })}
              className="text-xs bg-blue-600 text-white hover:bg-blue-700 rounded px-4 py-2 uppercase font-semibold tracking-wide"
            >
              Edit
            </Link>
          </li>
          <li className="inline-block ml-2">
            <a
              href="#"
              className="text-xs bg-red-600 text-white hover:bg-red-700 rounded px-4 py-2 uppercase font-semibold tracking-wide"
              onClick={() => onDeleteClick(movie.id)}
            >
              Delete
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Movie
