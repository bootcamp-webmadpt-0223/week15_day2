import { useSearchParams } from "react-router-dom"
import movies from "../data";

export default function ResultsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams)

  const title = searchParams.get('title');
  const director = searchParams.get('director');
  const movie = movies.find(movie => movie.director.toLowerCase().includes(director.toLowerCase()) || movie.title.toLowerCase().includes(title.toLowerCase()))

  return (
    <div>
      <h1>Página de resultados</h1>
      <h3>Tu búsqueda:</h3>
      {title && <p>Título: {title}</p>}
      {director && <p>Director: {director}</p>}
      <hr />
      <h3>Resultados: </h3>
      {
        movie ?
          <div className="movie-item">
            <p>Director: {movie.director}</p>
            <p>Duración: {movie.duration}</p>
            <p>Año: {movie.year}</p>
            <p>Puntuación: {movie.score}</p>
            <p>Géneros:</p>
            <ul>
              {
                movie.genre.map(genre => <li key={genre}>{genre}</li>)
              }
            </ul>
          </div> :
          <p>Sin resultados</p>
      }
    </div>
  )
}
