import { Link } from "react-router-dom"
import movies from "../data"

export default function MovieList() {
  const renderMovies = () => {
    return (
      movies.map(movie => (
        <div key={`${movie.title}`} className="movie-item">
          <p>{movie.title}</p>
          <Link to={`/movies/${movie.title}`}>Ver detalles</Link>
        </div>
      ))
    )
  }
  return (
   <section className="movie-list">
     {renderMovies()}
   </section>
  )
}
