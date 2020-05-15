import UserLayout from 'src/layouts/UserLayout'
import MovieTitleCell from 'src/components/MovieTitleCell'
import ReviewsCell from 'src/components/ReviewsCell'
import { Link, routes } from '@redwoodjs/router'
import { Section, Container, Column, Title } from 'rbx'

const ReviewPage = ({ id }) => {
  return (
    <UserLayout>
      <Section>
        <Container>
          <Column.Group>
            <Column offset={1}>
              <Title>
                Reviews for{' '}
                <Link to={routes.movie({ id })}>
                  <MovieTitleCell id={id} />
                </Link>
              </Title>
              <ReviewsCell id={id} />
            </Column>
          </Column.Group>
        </Container>
      </Section>
    </UserLayout>
  )
}

export default ReviewPage
