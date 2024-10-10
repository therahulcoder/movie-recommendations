import "./App.css";
import MovieRecommendations from "./components/MovieRecommendations";
import { MovieServiceProvider } from "./context/MovieServiceContext";

function App() {
  return (
    <MovieServiceProvider>
      <MovieRecommendations />
    </MovieServiceProvider>
  );
}

export default App;
