import { Link } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react";

const API_URL = "http://localhost:3000/movies";

export default function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(API_URL);
      setMovies(res.data);
    }
    getData();
  }, [])

  const renderMovies = () => {
    return (
      movies.map(movie => (
        <div key={`${movie.title}`} className="movie-item">
          <p>{movie.title}</p>
          <Link to={`/movies/${movie.id}`}>Ver detalles</Link>
        </div>
      ))
    )
  }
  return (
   <section className="movie-list">
     {movies.length ? renderMovies() : <p>No hay películas</p>}
   </section>
  )
}
