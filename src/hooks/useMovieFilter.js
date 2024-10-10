import { useMemo } from 'react';
import moment from 'moment';

export const useMovieFilter = (movies, genre, inputTime) => {
  return useMemo(() => {
    let filteredMovies = [];

    movies.forEach((movie) => {
      if (movie.genres.some((g) => g.toLowerCase().includes(genre.toLowerCase()))) {
        movie.showings.forEach((showing) => {
          let showingTime = moment(showing.split('+')[0], 'HH:mm:ss');
          if (showingTime.isSameOrAfter(inputTime)) {
            filteredMovies.push({
              name: movie.name,
              rating: movie.rating,
              showing: showingTime.format('hh:mm A'),
            });
          }
        });
      }
    });

    // Sort by rating in descending order
    filteredMovies.sort((a, b) => b.rating - a.rating);

    return filteredMovies;
  }, [movies, genre, inputTime]); // Dependency array for memoization
};
