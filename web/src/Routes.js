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
        path="/flick/{id:Int}/new-review"
        page={NewReviewPage}
        name="newReview"
      />
      <Route path="/flick/{id:Int}" page={FlickPage} name="flick" />
      <Route path="/movies/new" page={NewMoviePage} name="newMovie" />
      <Route
        path="/movies/{id:Int}/edit"
        page={EditMoviePage}
        name="editMovie"
      />
      <Route path="/movies/{id:Int}" page={MoviePage} name="movie" />
      <Route path="/movies" page={MoviesPage} name="movies" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
