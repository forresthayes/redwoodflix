import ApplicationLayout from 'src/layouts/ApplicationLayout'
import { Content } from 'rbx'

const HomePage = () => {
  const movies = ['Iron Man', 'Superman', 'Spider-Man']
  return (
    <ApplicationLayout>
      <Content>
        <p>Flix Home</p>
        <ul>
          {movies.map((movie) => (
            <li key={movie}>{movie}</li>
          ))}
        </ul>
      </Content>
    </ApplicationLayout>
  )
}

export default HomePage
