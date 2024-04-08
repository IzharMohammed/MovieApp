import axios from "axios";
import searchMovie from "../apis/omdb";
import  { useEffect, useState } from "react";

function useMovieList(...name) {
    const [movieList, setMovieList] = useState([]);
    console.log('name : ', name);
    async function getMovies() {
        console.log(name);

        const moviesarr = name.map((name) => searchMovie(name));

        console.log(moviesarr);

        const response1 = await axios
            .all(moviesarr.map((arr) => axios.get(arr)))
            .then((data) => data);

        console.log("response", response1);
        if(response1[0].data.Error){
            setMovieList([]);
        }else{
            const movies = response1.map((res) => res.data.Search);
            setMovieList([].concat(...movies));
        }
   
        /*     const response = await axios(searchMovie(name.map(name=> name )));
        console.log(response.data.Search);
        setMovieList(response.data.Search); */
    }

    useEffect(() => {
        getMovies(...name);
    }, [...name]);

return {movieList}
}
export default useMovieList;