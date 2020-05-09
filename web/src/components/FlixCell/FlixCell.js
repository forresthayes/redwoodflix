export const QUERY = gql`
  query {
    movies {
      id
      title
      rating
      total_gross
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ movies }) => {
  const numberFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  return movies.map((movie) => (
    <li key={movie.id}>
      <strong>{movie.title}</strong> ({movie.rating}):{' '}
      {numberFormat.format(movie.total_gross)}
    </li>
  ))
}
