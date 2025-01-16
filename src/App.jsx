import "./App.css";
import MoviePage from "./components/moviePage/MoviePage";
import MainRouter from "./routes/MainRouter";
import Navbar from "./components/navbar/Navbar";
import ThemeContext from "./context/ThemeContext";
import { useEffect, useState } from "react";

function App() {
  const [theme , setTheme] =  useState('dark');

    useEffect(()=>{
      const userTheme = localStorage.getItem('app-theme')
      if(userTheme!=null) setTheme(userTheme)
    } , [])


  return (
    <>
      <ThemeContext.Provider value ={ {theme, setTheme}} >
        <div data-theme = {theme}>
      <Navbar />
      <MainRouter />
      </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
