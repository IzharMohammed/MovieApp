import axios from "axios";
import searchMovie from "../apis/omdb";
import React, { useEffect, useState } from "react";

function useMovieList() {
    const [movieList, setMovieList] = useState([]);

    async function getMovies(...name) {
        console.log(name);
        const moviesarr = name.map((name) => searchMovie(name));
        console.log(moviesarr);
        const response1 = await axios
            .all(moviesarr.map((arr) => axios.get(arr)))
            .then((data) => data);
        console.log("here", response1);
        const movies = response1.map((res) => res.data.Search);
        setMovieList([].concat(...movies));
        /*     const response = await axios(searchMovie(name.map(name=> name )));
        console.log(response.data.Search);
        setMovieList(response.data.Search); */
    }

    useEffect(() => {
        getMovies("avengers", "spider man", "harry potter");
    }, []);


return {movieList}
}
export default useMovieList;