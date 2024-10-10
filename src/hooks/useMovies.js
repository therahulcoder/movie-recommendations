import { useState, useEffect, useContext } from 'react';
import MovieServiceContext from '../context/MovieServiceContext';

export const useMovies = () => {
  const { fetchMovies } = useContext(MovieServiceContext);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getMovies = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchMovies();
      setMovies(data);
    } catch (err) {
      setError('Failed to fetch movies.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, [fetchMovies]);

  return { movies, loading, error };
};
