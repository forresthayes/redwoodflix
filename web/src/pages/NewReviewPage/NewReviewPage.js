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
import ApplicationLayout from 'src/layouts/ApplicationLayout'
import { Link, routes, navigate } from '@redwoodjs/router'
import { Rating } from '@material-ui/lab'
import { Title, Section, Container, Field, Control, Column } from 'rbx'

const CREATE_CONTACT = gql`
  mutation CreateReviewMutation($input: CreateReviewInput!) {
    createReview(input: $input) {
      id
    }
  }
`

const NewReviewPage = ({ id }) => {
  const [create, { loading, error }] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      alert('Review posted successfully!')
      navigate(routes.flick({ id }))
    },
  })

  const [starValue, setStarValue] = useState(3)

  const onSubmit = (data) => {
    const input = { movieId: id, stars: starValue, ...data }
    create({ variables: { input } })
  }

  return (
    <ApplicationLayout>
      <Section>
        <Container>
          <Column.Group>
            <Column size="4" offset="1">
              <Title>
                New Review for{' '}
                <Link to={routes.flick({ id: id })}>a movie</Link>
              </Title>
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
    </ApplicationLayout>
  )
}

export default NewReviewPage
