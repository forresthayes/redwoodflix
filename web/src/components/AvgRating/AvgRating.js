import { Rating } from '@material-ui/lab'

const AvgRating = ({ movie: { reviews }, className }) => {
  const avgValue =
    Math.floor(
      reviews.reduce((sum, { stars }) => sum + stars, 0) / reviews.length
    ) || 0

  return <Rating className={className} readOnly value={avgValue} />
}

export default AvgRating
