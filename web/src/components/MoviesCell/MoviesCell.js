import { Link, routes } from '@redwoodjs/router'
import { Section, Title, Image, Column } from 'rbx'

export const QUERY = gql`
  query {
    movies {
      id
      title
      description
      total_gross
      image_file_name
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
    minimumFractionDigits: 0,
  })

  return movies.map((movie) => (
    <Section key={movie.id} style={{ borderBottom: '1px dotted #c2c2c2' }}>
      <Column.Group>
        <Column size={2} offset={2}>
          <Image.Container>
            <Image
              src={`/static-files/images/${movie.image_file_name}`}
              style={{ width: '100px' }}
            />
          </Image.Container>
        </Column>
        <Column size={7}>
          <Title size={4} style={{ marginBottom: '0.4rem' }}>
            <Link to={routes.movie({ id: movie.id })}>{movie.title}</Link>
          </Title>
          <Title subtitle size={5} textColor="grey" style={{ marginTop: '0' }}>
            {numberFormat.format(movie.total_gross)}
          </Title>
          <p>{movie.description}</p>
        </Column>
      </Column.Group>
    </Section>
  ))
}
