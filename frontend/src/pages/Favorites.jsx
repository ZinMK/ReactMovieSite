import "../Css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";
function Favorites() {
  const { favorites } = useMovieContext();
  if (favorites) {
    return (
      <div>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  } else
    return (
      <div className="">
        <h2>No Favorites Yet</h2>
        <p> Movies you add to favorite will show up here </p>
      </div>
    );
}

export default Favorites;
