import { Link, routes } from '@redwoodjs/router'
import { Section, Column, Image, Title, Button } from 'rbx'

export const QUERY = gql`
  query($id: Int!) {
    movie(id: $id) {
      id
      title
      rating
      director
      duration
      total_gross
      description
      released_on
      image_file_name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ movie }) => {
  const numberFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  })
  const releasedOn = new Date(movie.released_on).getFullYear()

  return (
    <Section>
      <Column.Group>
        <Column size="2" offset="2">
          <Image.Container>
            <Image
              src={`/static-files/images/${movie.image_file_name}`}
              style={{ width: '150px' }}
            />
          </Image.Container>
        </Column>
        <Column size="6">
          <Title size={3} style={{ marginBottom: '0.4rem' }}>
            {movie.title}
          </Title>
          <Title subtitle size={4} textColor="grey" style={{ marginTop: '0' }}>
            {releasedOn} &bull; {movie.rating}
          </Title>
          <p className={'is-size-5'}>{movie.description}</p>
          <table
            style={{
              marginTop: '1em',
              borderCollapse: 'separate',
              borderSpacing: '0 0.5em',
            }}
          >
            <tbody>
              <tr>
                <th>Director:</th>
                <td style={{ paddingLeft: '1em' }}>{movie.director}</td>
              </tr>
              <tr>
                <th>Duration:</th>
                <td style={{ paddingLeft: '1em' }}>{movie.duration}</td>
              </tr>
              <tr>
                <th>Total Gross:</th>
                <td style={{ paddingLeft: '1em' }}>
                  {numberFormat.format(movie.total_gross)}
                </td>
              </tr>
            </tbody>
          </table>
          <Link to={routes.newReview({ id: movie.id })}>
            <Button color="link" textTransform="uppercase">
              write review
            </Button>
          </Link>
        </Column>
      </Column.Group>
    </Section>
  )
}
