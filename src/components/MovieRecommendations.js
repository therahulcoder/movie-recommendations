import React, { useState } from "react";
import moment from "moment";
import { useMovies } from "../hooks/useMovies";
import { useMovieFilter } from "../hooks/useMovieFilter";
import Shimmer from "./Shimmer";
import { movieRecommendationStyles as styles } from "../styles/styles";

const MovieRecommendations = () => {
  const [genre, setGenre] = useState("");
  const [time, setTime] = useState("");
  const [error, setError] = useState("");

  const { movies, loading, error: fetchError } = useMovies();

  const inputTime = moment(time, "HH:mm").add(30, "minutes");
  const filteredMovies = useMovieFilter(movies, genre, inputTime);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!genre || !time) {
      setError("Please enter both genre and time.");
      return;
    }

    if (!moment(time, "HH:mm", true).isValid()) {
      setError("Please enter a valid time in HH:mm format.");
      return;
    }

    if (filteredMovies.length === 0) {
      setError("No movie recommendations.");
    } else {
      setError(""); // Clear previous error if valid recommendations exist
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Movie Recommendations</h1>

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Genre:</label>
          <input
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            placeholder="Enter genre (e.g., Animation)"
            style={styles.input}
            aria-label="Genre"
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Time (HH:MM):</label>
          <input
            type="text"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            placeholder="Enter time (e.g., 12:00)"
            style={styles.input}
            aria-label="Time"
          />
        </div>

        <button type="submit" style={styles.button}>
          Get Recommendations
        </button>
      </form>

      {error && <p style={styles.error}>{error}</p>}
      {fetchError && <p style={styles.error}>{fetchError}</p>}

      {loading ? (
        <div style={styles.shimmerContainer}>
          <Shimmer />
          <Shimmer />
          <Shimmer />
        </div>
      ) : (
        filteredMovies.length > 0 && (
          <div style={styles.recommendations}>
            <h2>Recommended Movies:</h2>
            <ul style={styles.movieList}>
              {filteredMovies.map((movie, index) => (
                <li key={index} style={styles.movieItem}>
                  <strong>{movie.name}</strong>, showing at{" "}
                  <strong>{movie.showing}</strong>, rating: {movie.rating}
                </li>
              ))}
            </ul>
          </div>
        )
      )}
    </div>
  );
};

export default MovieRecommendations;
