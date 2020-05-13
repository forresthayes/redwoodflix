import { db } from 'src/lib/db'

export const reviews = () => {
  return db.review.findMany()
}

export const Review = {
  movie: (_obj, { root }) =>
    db.review.findOne({ where: { id: root.id } }).movie(),
}

export const createReview = ({ input }) => {
  const { movieId, ...review } = input
  return db.review.create({
    data: {
      ...review,
      movie: {
        connect: { id: movieId },
      },
    },
  })
}
