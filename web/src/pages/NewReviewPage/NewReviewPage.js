import {
  Label,
  Form,
  TextField,
  TextAreaField,
  Submit,
  FieldError,
} from '@redwoodjs/web'
import { useState } from 'react'
import ApplicationLayout from 'src/layouts/ApplicationLayout'
import { Link, routes } from '@redwoodjs/router'
import { Rating } from '@material-ui/lab'
import { Title, Section, Container, Field, Control, Column } from 'rbx'

const NewReviewPage = ({ id }) => {
  const [starValue, setStarValue] = useState(3)
  const onSubmit = (data) => {
    console.log({ stars: starValue, ...data })
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
              <Form onSubmit={onSubmit}>
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
                  <Submit className="button is-link">Post Review</Submit>
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
