/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  let params = useParams()
  let [movieDetails, setMovieDetails] = useState(null)

  async function getMovieDetails(id) {

    let { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=c700cd1e7366631f54e647410de860c0&language=en-US`)
    setMovieDetails(data)
  }

  useEffect(() => {
    getMovieDetails(params.id)
  }, )

  return (
    <div>
      {movieDetails ? <div className="row mt-4">

        <div className="col-md-3">
          <img className='w-100' src={'https://image.tmdb.org/t/p/w500' + movieDetails.poster_path} alt="" />
        </div>
        <div className="col-md-9">
          <h2>Movie Name:</h2>
          <p className='h4'>{movieDetails.title}</p>
          <h2 className='mt-4 h3'>Movie Over View:</h2>
          <p>{movieDetails.overview}</p>
          <h2>More Details About Movie </h2>
          <ul>
            <li>Vote: {movieDetails.vote_count}</li>
            <li>Release Date: {movieDetails.release_date}</li>
            <li>popularity: {movieDetails.popularity}</li>
            <li>Budget: {movieDetails.budget}$</li>
          </ul>
        </div>
      </div> : <div className='vh-100 d-flex justify-content-center align-items-center'> <i className='fas fa-spinner fa-spin fa-3x'></i></div>}

    </div>
  );
}

export default MovieDetails;
*/

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'

const MovieDetails = (id) => {

  let [movieDetails, setMovieDetails] = useState(null);

  let params = useParams()
  async function getMovieDetails(id) {
    let { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=c700cd1e7366631f54e647410de860c0&language=en-US&language=en-US`)
    setMovieDetails(data)
  }

  useEffect(() => {
    getMovieDetails(params.id)
  }, [])


  return (
    <>
      {movieDetails ?
        <div className='row'>
          <div className="col-md-3">
            <img className='w-100' src={'https://image.tmdb.org/t/p/w500' + movieDetails.poster_path} alt="" />
          </div>
          <div className="col-md-9">
            <h2>Movie Name:</h2>
            <p className='h4'>{movieDetails.title}</p>
            <h2 className='mt-4 h3'>Movie Over View:</h2>
            <p>{movieDetails.overview}</p>
            <h2>More Details About Movie </h2>
            <ul>
              <li>Vote: {movieDetails.vote_count}</li>
              <li>Release Date: {movieDetails.release_date}</li>
              <li>popularity: {movieDetails.popularity}</li>
              <li>Budget: {movieDetails.budget}$</li>
            </ul>
          </div>
        </div>
        :
        <div className='vh-100 d-flex justify-content-center align-items-center'>
          <i className='fas fa-spinner fa-spin fa-3x'></i>
        </div>}
    </>
  );
}

export default MovieDetails;
