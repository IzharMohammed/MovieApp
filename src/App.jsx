import "./App.css";
import MoviePage from "./components/moviePage/MoviePage";
import MainRouter from "./routes/MainRouter";
function App() {
  console.log(import.meta.env.VITE_API_KEY);
  return (
    <>
      <MoviePage />
      <MainRouter />
    </>
  );
}

export default App;
