import "../Css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";

function MovieCard({ movie }) {
  const { isfavorite, addToFavorites, removeFavorites } = useMovieContext();

  const favorite = isfavorite(movie.id);
  function onfavoriteClick(e) {
    e.preventDefault();
    if (favorite) {
      removeFavorites(movie.id);
      alert("removed");
    } else {
      addToFavorites(movie);
      alert("added to favories");
    }
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-overlay">
          <button
            className={`favorite-btn" ${favorite ? "active" : ""}`}
            onClick={onfavoriteClick}
          >
            ♥
          </button>
        </div>
      </div>

      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
}

export default MovieCard;
