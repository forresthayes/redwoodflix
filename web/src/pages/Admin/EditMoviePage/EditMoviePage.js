import AdminLayout from 'src/layouts/AdminLayout'
import EditMovieCell from 'src/components/EditMovieCell'

const EditMoviePage = ({ id }) => {
  return (
    <AdminLayout>
      <EditMovieCell id={id} />
    </AdminLayout>
  )
}

export default EditMoviePage
