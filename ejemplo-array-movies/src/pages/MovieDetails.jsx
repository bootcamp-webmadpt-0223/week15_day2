import { useParams } from "react-router-dom"
import movies from "../data";
import { useEffect } from "react";

export default function MovieDetails() {
  const { title } = useParams();
  const movie = movies.find(movie => movie.title === title);

  useEffect(() => {
    // Llamada a la API
  }, [title])

  return (
    <div>
      {movie ?
        <>
          <h1>Detalle de {title}</h1>
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
        </> :
        <div>
          <h1>¿Por qué pones un título que no existe?</h1>
        </div>
      }

    </div>
  )
}
