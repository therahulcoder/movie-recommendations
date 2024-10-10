const MovieService = (apiEndpoint) => {
    const fetchMovies = async () => {
      const response = await fetch(apiEndpoint, {
        method: 'GET',
        headers: {
          Origin: window.location.origin,
          'x-requested-with': 'XMLHttpRequest',
        },
      });
      return response.json();
    };
  
    return {
      fetchMovies,
    };
  };
  
  export default MovieService;
  