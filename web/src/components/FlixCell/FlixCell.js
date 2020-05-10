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
        <Column size="one-quarter">
          <Image.Container>
            <Image
              src={`/static-files/images/${movie.image_file_name}`}
              style={{ width: '100px' }}
            />
          </Image.Container>
        </Column>
        <Column>
          <Title size={4}>{movie.title}</Title>
          <Title subtitle size={5} textColor="grey">
            {numberFormat.format(movie.total_gross)}
          </Title>
          <p>{movie.description}</p>
        </Column>
      </Column.Group>
    </Section>
  ))
}
