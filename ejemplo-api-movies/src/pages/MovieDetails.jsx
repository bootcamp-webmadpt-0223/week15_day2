import { useParams } from "react-router-dom"
import movies from "../data";
import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:3000/movies";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`${API_URL}/${id}`);
      setMovie(res.data);
    }
    getData();
  }, [id])

  return (
    <div>
      {movie ?
        <>
          <h1>Detalle de {movie.title}</h1>
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
