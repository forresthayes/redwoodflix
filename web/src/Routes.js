// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route
        path="/movies/{id:Int}/reviews"
        page={ReviewsPage}
        name="reviews"
      />
      <Route
        path="/movies/{id:Int}/new-review"
        page={NewReviewPage}
        name="newReview"
      />
      <Route path="/movies/{id:Int}" page={MoviePage} name="movie" />
      <Route
        path="/admin/movies/new"
        page={AdminNewMoviePage}
        name="newMovie"
      />
      <Route
        path="/admin/movies/{id:Int}/edit"
        page={AdminEditMoviePage}
        name="editMovie"
      />
      <Route
        path="/admin/movies/{id:Int}"
        page={AdminMoviePage}
        name="adminMovie"
      />
      <Route path="/admin/movies" page={AdminMoviesPage} name="adminMovies" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
