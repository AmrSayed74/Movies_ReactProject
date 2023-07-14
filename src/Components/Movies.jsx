/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

const Movies = () => {
  let [movies, setMovies] = useState([])
  let numbers = new Array(13).fill(1).map((element, index) => index + 1)
  // console.log(numbers)
  async function moviesPage(pageNumber) {
    let { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=c700cd1e7366631f54e647410de860c0&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}`)
    // console.log(res)
    setMovies(data.results)
  }
  useEffect(() => {
    moviesPage(1)
  }, [])
  return (
    <div>
      <div className="row d-flex justify-content-center">
        {movies.map((movie, i) => <div className="col-md-2" key={i}>
          <div className="movie">
            <Link to={`/moviedetails/${movie.id}`}>
              <img className='w-100' src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt={movie.title || movie.name} />
              <h2 className='h6 my-2'>{movie.title}</h2>
            </Link>
          </div>
        </div>)}
      </div>
      <nav className='d-flex justify-content-center mt-4' aria-label="...">
        <ul className="pagination pagination-sm">
          {numbers.map((pageNum) => <li key={pageNum} className="page-item"><a onClick={() => moviesPage(pageNum)} role='button' className="page-link bg-transparent text-white">{pageNum}</a></li>)}
          {/* <li className="page-item"><a className="page-link bg-transparent text-white">{numbers}</a></li> */}
        </ul>
      </nav>
    </div>
  );
}

export default Movies;

let x = new Array(13).fill(1).map((ele, index) => index + 1)
console.log(x)

