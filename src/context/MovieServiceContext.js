import React, { createContext } from "react";
import MovieService from "../services/MovieService";

const MovieServiceContext = createContext();

export const MovieServiceProvider = ({ children }) => {
  const movieService = MovieService("/raw/cVyp3McN");

  return (
    <MovieServiceContext.Provider value={movieService}>
      {children}
    </MovieServiceContext.Provider>
  );
};

export default MovieServiceContext;
