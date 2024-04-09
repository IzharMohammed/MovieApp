export default function searchMovie(name) {
    return `https://www.omdbapi.com/?s=${name}&apikey=${import.meta.env.VITE_API_KEY}`
}

/* export  function movieinfo(id){
    return `https://www.omdbapi.com/?i=${id}&plot=full&apikey=${import.meta.env.VITE_API_KEY}`
} */