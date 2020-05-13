import AdminLayout from 'src/layouts/AdminLayout'
import AdminMovieCell from 'src/components/AdminMovieCell'

const MoviePage = ({ id }) => {
  return (
    <AdminLayout>
      <AdminMovieCell id={id} />
    </AdminLayout>
  )
}

export default MoviePage
