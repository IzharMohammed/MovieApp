import "./App.css";
import MoviePage from "./components/moviePage/MoviePage";
import MainRouter from "./routes/MainRouter";
import Navbar from "./components/navbar/Navbar";
function App() {
  return (
    <>
      {/*  <MoviePage /> */}
      <Navbar />
      <MainRouter />
    </>
  );
}

export default App;
