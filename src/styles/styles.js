export const movieRecommendationStyles = {
    container: {
      maxWidth: '700px',
      margin: '0 auto',
      padding: '30px',
      backgroundColor: '#f4f4f9',
      borderRadius: '10px',
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Arial, sans-serif',
    },
    heading: {
      textAlign: 'center',
      color: '#333',
      marginBottom: '20px',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '20px',
    },
    inputGroup: {
      marginBottom: '15px',
    },
    label: {
      marginBottom: '8px',
      fontSize: '14px',
      color: '#333',
    },
    input: {
      padding: '10px',
      fontSize: '16px',
      width: '100%',
      borderRadius: '6px',
      border: '1px solid #ccc',
      outline: 'none',
      transition: 'border 0.3s ease',
    },
    button: {
      padding: '12px 20px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: '16px',
      transition: 'background 0.3s ease',
    },
    shimmerContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      marginTop: '20px',
    },
    error: {
      color: 'red',
      textAlign: 'center',
      marginTop: '15px',
    },
    recommendations: {
      marginTop: '20px',
    },
    movieList: {
      listStyleType: 'none',
      padding: '0',
      margin: '0',
    },
    movieItem: {
      padding: '12px',
      borderBottom: '1px solid #ddd',
      backgroundColor: '#fff',
      borderRadius: '4px',
      marginBottom: '10px',
    },
  };
  
  export const shimmerStyles = {
    shimmerWrapper: {
      width: '100%',
      height: '50px',
      backgroundColor: '#e0e0e0',
      overflow: 'hidden',
      position: 'relative',
      borderRadius: '6px',
    },
    shimmer: {
      width: '100%',
      height: '100%',
      backgroundImage:
        'linear-gradient(to right, #eeeeee 0%, #dddddd 50%, #eeeeee 100%)',
      backgroundSize: '200% 100%',
      animation: 'shimmer 1.5s infinite',
    },
  };
  