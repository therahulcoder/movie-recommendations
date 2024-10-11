import { useMemo } from "react";
import moment from "moment";

export const useMovieFilter = (movies, genre, inputTime) => {
  return useMemo(() => {
    let filteredMovies = [];

    movies.forEach((movie) => {
      if (
        movie.genres.some((g) => g.toLowerCase().includes(genre.toLowerCase()))
      ) {
        const sortedShowings = movie.showings.sort((a, b) =>
          moment(a.split("+")[0], "HH:mm:ss").diff(
            moment(b.split("+")[0], "HH:mm:ss")
          )
        );

        for (let showing of sortedShowings) {
          let showingTime = moment(showing.split("+")[0], "HH:mm:ss");

          // Check if the showing time is at least 30 minutes ahead of inputTime
          if (showingTime.isSameOrAfter(moment(inputTime).add(30, "minutes"))) {
            filteredMovies.push({
              name: movie.name,
              rating: movie.rating,
              showing: showingTime.format("hh:mm A"),
            });
            break; // Stop checking further showings after first valid one
          }
        }
      }
    });

    // Sort by rating in descending order
    filteredMovies.sort((a, b) => b.rating - a.rating);

    return filteredMovies;
  }, [movies, genre, inputTime]); // Dependency array for memoization
};
