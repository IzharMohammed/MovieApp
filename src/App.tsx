import "./App.css";
import MainRouter from "./routes/MainRouter";
import React from "react";

function App() {
  // const [theme , setTheme] =  useState('dark');

  // useEffect(() => {
  //   const userTheme = localStorage.getItem("app-theme");
  //   if (userTheme != null) setTheme(userTheme);
  // }, []);

  return (
    <>
      {/* <ThemeContext.Provider value ={ {theme, setTheme}} >
        <div data-theme = {theme}>
      <Navbar />
      <MainRouter />
      </div>
      </ThemeContext.Provider> */}
      {/* <Navbar /> */}
      <MainRouter />
    </>
  );
}

export default App;
