import { Rating } from '@material-ui/lab'
import moment from 'moment'

export const QUERY = gql`
  query FindReviewsByMovie($movieId: Int) {
    reviews: findReviewsByMovie(movieId: $movieId) {
      id
      name
      stars
      comment
      createdAt
      movie {
        title
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>No reviews</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ reviews }) => {
  const formattedDate = (date) => {
    return moment(date).fromNow()
  }

  return (
    <ul>
      {reviews.map((review) => (
        <li
          key={review.id}
          className="is-size-5"
          style={{ marginTop: '2.5rem' }}
        >
          <Rating readOnly value={review.stars} />
          <br />
          <p>
            {review.name} &bull;{' '}
            <span className="is-size-6">{formattedDate(review.createdAt)}</span>
          </p>
          <p style={{ marginTop: '0.3rem' }}>{review.comment}</p>
        </li>
      ))}
    </ul>
  )
}
