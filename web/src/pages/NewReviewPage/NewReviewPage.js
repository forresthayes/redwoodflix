import {
  Label,
  Form,
  TextField,
  TextAreaField,
  Submit,
  FieldError,
  FormError,
  useMutation,
} from '@redwoodjs/web'
import { useState } from 'react'
import UserLayout from 'src/layouts/UserLayout'
import { Link, routes, navigate } from '@redwoodjs/router'
import MovieTitleCell from 'src/components/MovieTitleCell'
import { Rating } from '@material-ui/lab'
import { Title, Section, Container, Field, Control, Column } from 'rbx'

const CREATE_REVIEW = gql`
  mutation CreateReviewMutation($input: CreateReviewInput!) {
    createReview(input: $input) {
      id
    }
  }
`

const NewReviewPage = ({ id }) => {
  const [create, { loading, error }] = useMutation(CREATE_REVIEW, {
    onCompleted: () => {
      alert('Review posted successfully!')
      navigate(routes.movie({ id }))
    },
  })

  const [starValue, setStarValue] = useState(3)

  const onSubmit = (data) => {
    const input = { movieId: id, stars: starValue, ...data }
    create({ variables: { input } })
  }

  return (
    <UserLayout>
      <Section>
        <Container>
          <Column.Group>
            <Column offset="1">
              <Title>
                New Review for{' '}
                <Link to={routes.movie({ id: id })}>
                  <MovieTitleCell id={id} />
                </Link>
              </Title>
            </Column>
          </Column.Group>
          <Column.Group>
            <Column size="4" offset="1">
              <Form
                onSubmit={onSubmit}
                validation={{ mode: 'onBlur' }}
                error={error}
              >
                <FormError
                  error={error}
                  wrapperStyle={{
                    backgroundColor: '#feecf0',
                    borderRadius: '4px',
                    color: '#cc0f35',
                    marginBottom: '0.75rem',
                    padding: '1.25em 1.5em',
                  }}
                  titleStyle={{ fontWeight: '700' }}
                  listStyle={{ all: 'inherit' }}
                  listItemClassStyle={{ all: 'inherit' }}
                />
                <Field>
                  <Label name="name" className="label" errorClassName="error">
                    Name
                  </Label>
                  <Control>
                    <TextField
                      name="name"
                      className="input"
                      validation={{ required: true }}
                      errorClassName="input is-danger"
                    />
                    <FieldError name="name" className="has-text-danger" />
                  </Control>
                </Field>

                <Field>
                  <Label name="stars" className="label">
                    Stars
                  </Label>
                  <Control>
                    <Rating
                      name="stars"
                      value={starValue}
                      onChange={(event, newStarValue) =>
                        setStarValue(newStarValue)
                      }
                    />
                  </Control>
                </Field>

                <Field>
                  <Label
                    name="comment"
                    className="label"
                    errorClassName="error"
                  >
                    Comment
                  </Label>
                  <Control>
                    <TextAreaField
                      name="comment"
                      placeholder="What did you think?"
                      className="textarea"
                      errorClassName="input is-danger"
                      validation={{
                        required: true,
                        minLength: 4,
                      }}
                    />
                    <FieldError name="comment" className="has-text-danger" />
                  </Control>
                </Field>

                <Control>
                  <Submit disabled={loading} className="button is-link">
                    Post Review
                  </Submit>
                </Control>
              </Form>
            </Column>
          </Column.Group>
        </Container>
      </Section>
    </UserLayout>
  )
}

export default NewReviewPage
