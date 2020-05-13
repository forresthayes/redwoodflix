import UserLayout from 'src/layouts/UserLayout'
import MovieCell from 'src/components/MovieCell'

const MoviePage = ({ id }) => {
  return (
    <UserLayout>
      <MovieCell id={id} />
    </UserLayout>
  )
}

export default MoviePage
