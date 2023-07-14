/*
import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Movies from './Components/Movies';
import People from './Components/People';
import Tv from './Components/Tv';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Register from './Components/Register';
import Notfound from './Components/Notfound';
import jwtDecode from 'jwt-decode';


const App = () => {

  let [userData, setUserData] = useState(null)

  function saveUserData() {
    // [1]- get Token From LocalStorage
    let encodedToken = localStorage.getItem('userToken')

    // [2]- Decode user Token 
    let decodedToken = jwtDecode(encodedToken)

    // [3]- Set Decoded Token To userData Var In Hook 
    setUserData(decodedToken)
    console.log(decodedToken)
  }
  let navigate = useNavigate()
  function logOut() {
    //[1]- set userData => null 
    setUserData(null)
    //[2]- Remove Token From LocalStorage 
    localStorage.removeItem('userToken')
    //[3]- Navigate Users To Login Page Again!
    navigate('/login')
  }

  useEffect(() => {
    // Component Did Mount 
    if (localStorage.getItem('userToken')) {
      saveUserData()
    }
  }
    , [])

  function ProtectedRoute(props) {
    if (localStorage.getItem('userToken') === null) {
      return <Navigate to='/login' />
    } else {
      return props.children;
    }
  }


  return (
    <div>
      <Navbar logOut={logOut} userData={userData} />
      <Routes>
        <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path='home' element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path='movies' element={<ProtectedRoute><Movies /></ProtectedRoute>} />
        <Route path='people' element={<ProtectedRoute><People /></ProtectedRoute>} />
        <Route path='tv' element={<ProtectedRoute><Tv /></ProtectedRoute>} />
        <Route path='login' element={<Login saveUserData={saveUserData} />} />
        <Route path='register' element={<Register />} />
        <Route path='*' element={<ProtectedRoute><Notfound /></ProtectedRoute>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
*/

import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Movies from './Components/Movies';
import MovieDetails from './Components/MovieDetails';
import People from './Components/People';
import Tv from './Components/Tv';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Register from './Components/Register';
import Notfound from './Components/Notfound';
import jwtDecode from 'jwt-decode';





const App = () => {

  // Make a Hook That Save User Token  
  // let [userData, setUserData] = useState(null)
  let [userData, setUserData] = useState(null)

  // Make a Function To Encode User Token and Return Object Of User Information 
  function saveUserData() {

    // Assign User Token From localStorage To encodedToken Variable
    let encodedToken = localStorage.getItem('userToken')

    // Take User Token From encodedToken Variable And Decode It With jwtDecode Package Then Assign Result To decodedToken Variable
    let decodedToken = jwtDecode(encodedToken)

    // Set Result Of decodedToken To userData Variable In Hook 
    setUserData(decodedToken)
  }

  // Lifecycle 
  // [1]- Mounting => Render - ComponentdidMount() => Component Render
  // [2]- Updating 
  // [1]- unMounting

  // This Hook To Save userToken in LocalStorage To Keep Login History If user Save => If He Reload App, His Token Make him Still Login 
  useEffect(() => {
    
    // Component didMount => After App Component Created And Render His Elements and childrens 
    if (localStorage.getItem('userToken')) {
      saveUserData()
    }
  }, [])


  // Function Protected Route 
  function ProtectedRoute({ children }) {
    // Condition If There is No userToken in LocalStorage => It userToken === null
    if (localStorage.getItem('userToken') === null) {

      // Navigate User To Login If userToken === null
      return <Navigate to='/login' />

    } else {

      // Navigate Him To Path Who Want 
      return children

    }
  }


  // If User LogOut 
  let navigate = useNavigate()
  function logOut() {
    // Remove userToken From Local Storage 
    localStorage.removeItem('userToken')

    // set userData to Null 
    setUserData(null)

    // Navigate Him To Login Page 
    navigate('/login')

    // Send This Function As a Props To Navbar 
  }



  return (
    <div>
      <Navbar logOut={logOut} userData={userData} />
      <div className="container">
        <Routes>
          <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path='home' element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path='movies' element={<ProtectedRoute><Movies /></ProtectedRoute>} />
          <Route path='moviedetails' element={<ProtectedRoute><MovieDetails /></ProtectedRoute>} >
            <Route path=':id' element={<ProtectedRoute><MovieDetails /></ProtectedRoute>} />
          </Route>
          <Route path='people' element={<ProtectedRoute><People /></ProtectedRoute>} />
          <Route path='tv' element={<ProtectedRoute><Tv /></ProtectedRoute>} />
          <Route path='login' element={<Login saveUserData={saveUserData} />} />
          <Route path='register' element={<Register />} />
          <Route path='*' element={<ProtectedRoute><Notfound /></ProtectedRoute>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

// https://api.themoviedb.org/3/movie/640146?api_key=c700cd1e7366631f54e647410de860c0&language=en-US&language=en-US
