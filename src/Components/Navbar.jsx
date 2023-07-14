/*
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Noxe</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {props.userData ? <>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="home">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="movies">Movies</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="tv">Tvshow</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="people">People</Link>
                </li>
              </> : ''}
            </ul>
            <ul className="navbar-nav d-flex mb-2 mb-lg-0">
              <li className="nav-item d-flex align-items-center order-lg-first order-last ">
                <i className='fab mx-2 fa-facebook'></i>
                <i className='fab mx-2 fa-instagram'></i>
                <i className='fab mx-2 fa-twitter'></i>
                <i className='fab mx-2 fa-spotify'></i>
                <i className='fab mx-2 fa-soundcloud'></i>
              </li>
              {props.userData ? <li className="nav-item">
                <span role="button" onClick={props.logOut} className="nav-link order-lg-last order-first" >Logout</span>
              </li> : <>
                <li className="nav-item">
                  <Link className="nav-link order-lg-last order-first" aria-current="page" to="register">Register</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link order-lg-last order-first" to="login">Login</Link>
                </li>
              </>}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
*/


import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Cinema</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {props.userData ? <>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="home">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="movies">Movies</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="tv">Tvshow</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="people">People</Link>
                </li>
              </> : ''}

            </ul>
            <ul className="navbar-nav d-flex mb-2 mb-lg-0">
              <li className="nav-item d-flex align-items-center order-lg-first order-last ">
                <i className='fab mx-2 fa-facebook'></i>
                <i className='fab mx-2 fa-instagram'></i>
                <i className='fab mx-2 fa-twitter'></i>
                <i className='fab mx-2 fa-spotify'></i>
                <i className='fab mx-2 fa-soundcloud'></i>
              </li>
              {props.userData ? <li className="nav-item">
                <span onClick={props.logOut} className="nav-link order-lg-last order-first" role="button" >Logout</span>
              </li> :
                <>
                  <li className="nav-item">
                    <Link className="nav-link order-lg-last order-first" aria-current="page" to="register">Register</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link order-lg-last order-first" to="login">Login</Link>
                  </li>
                </>
              }
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;


