import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import "../Css/Home.css";
import { searchMovies, getpopularMovies } from "../services/api";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const loadpopularMovies = async () => {
      try {
        const popularMovies = await getpopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        setError("Failed to Load Movies");
      } finally {
        setloading(false);
      }
    };
    loadpopularMovies();
  }, []);

  const Handlesearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;
    setloading(true);

    try {
      const serchResults = await searchMovies(searchQuery);
      setMovies(serchResults);
      setError(null);
    } catch (err) {
      setError("Failed to search Movies");
    } finally {
      setloading(false);
    }
  };
  return (
    <div className="home">
      <form onSubmit={Handlesearch} className="search-form">
        <input
          type="text"
          placeholder="Search For Movies"
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        ></input>
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      {error && <div className="error-display"> {error} </div>}
      {loading ? (
        <div> loading </div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
