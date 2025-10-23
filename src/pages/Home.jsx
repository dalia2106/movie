import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api";
import { useMovieContext } from "../contexts/MovieContext";
import "../css/Home.css";

function Home() {
  const localMovies = [
    {
      id: 101,
      title: "Bang Bang",
      release_date: "2014-01-01",
      localPoster: "movie1.jpg",
    },
    {
      id: 102,
      title: "Barfi",
      release_date: "2012-11-10",
      localPoster: "movie2.jpg",
    },
    {
      id: 103,
      title: "Animal",
      release_date: "2023-02-20",
      localPoster: "movie3.jpg",
    },
    {
      id: 104,
      title: "Dhadak 2",
      release_date: "2025-08-15",
      localPoster: "movie4.jpg",
    },
    {
      id: 105,
      title: "Raees",
      release_date: "2017-01-01",
      localPoster: "movie5.jpg",
    },
    {
      id: 106,
      title: "Kabir Singh",
      release_date: "2019-11-10",
      localPoster: "movie6.jpg",
    },
    {
      id: 107,
      title: "Metro In Dino",
      release_date: "2025-02-20",
      localPoster: "movie7.jpg",
    },
    {
      id: 108,
      title: "Saiyaara",
      release_date: "2025-08-15",
      localPoster: "movie8.jpg",
    },
    {
      id: 109,
      title: "Rockstar",
      release_date: "2011-01-01",
      localPoster: "movie9.jpg",
    },
    {
      id: 110,
      title: "Yeh Jawaani Hai Deewani",
      release_date: "2013-11-10",
      localPoster: "movie10.jpg",
    },
    {
      id: 111,
      title: "Raazi",
      release_date: "2018-02-20",
      localPoster: "movie11.jpg",
    },
    {
      id: 112,
      title: "Jab We Met",
      release_date: "2007-08-15",
      localPoster: "movie12.jpg",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState(localMovies);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleSearch = (e) => {
    e.preventDefault();
    const query = searchQuery.trim().toLowerCase();
    if (!query) return;

    const filteredMovies = localMovies.filter((movie) =>
      movie.title.toLowerCase().includes(query)
    );

    setMovies(filteredMovies);
  };

  const sortedMovies = [...movies].sort(
    (a, b) =>
      Number(b.release_date.split("-")[0]) -
      Number(a.release_date.split("-")[0])
  );

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.length === 0 ? (
          <p>No movies found.</p>
        ) : (
          sortedMovies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
