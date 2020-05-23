import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

export const movies = () => {
  return db.movie.findMany({
    include: { reviews: true },
  })
}

export const movie = ({ id }) => {
  return db.movie.findOne({
    where: { id },
    include: { reviews: true },
  })
}

export const createMovie = ({ input }) => {
  requireAuth()
  return db.movie.create({
    data: input,
  })
}

export const updateMovie = ({ id, input }) => {
  requireAuth()
  return db.movie.update({
    data: input,
    where: { id },
  })
}

export const deleteMovie = ({ id }) => {
  requireAuth()
  return db.movie.delete({
    where: { id },
  })
}
