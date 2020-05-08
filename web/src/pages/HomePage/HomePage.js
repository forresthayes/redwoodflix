import ApplicationLayout from 'src/layouts/ApplicationLayout'

const HomePage = () => {
  const movies = ['Iron Man', 'Superman', 'Spider-Man']
  return (
    <ApplicationLayout>
      <p>Flix Home</p>
      <ul>
        {movies.map((movie) => (
          <li key={movie}>{movie}</li>
        ))}
      </ul>
    </ApplicationLayout>
  )
}

export default HomePage
