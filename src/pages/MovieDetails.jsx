import React from 'react'
import './MovieDetails.css'
import { useParams } from 'react-router-dom';
function MovieDetails({data}) {
  console.log('inside ');
  const { id } = useParams();
  console.log(id);
  return (
  <>
   <div className="movieDetails-wrapper">
        <div className="movieDetails-image">
          <img src= "https://th.bing.com/th/id/OIP.nUq5FNECdHn2rExBOc65bQHaKF?w=208&h=283&c=7&r=0&o=5&dpr=1.3&pid=1.7"/>
        </div>
        <div className="movieDetails-title">Phata poster Nikla hero</div>
        <div className="movieDetails-year">2014</div>
        <div className="movieDetails-type">Abe maloom krna !!!</div>

     
      </div>
  </>
  )
}

export default MovieDetails