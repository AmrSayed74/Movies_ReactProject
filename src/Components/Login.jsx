/*
import React, { useState } from 'react';
import axios from 'axios';
import Joi from 'joi';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
  let [isLoading, setIsLoading] = useState(false)
  let [errorList, setErrorList] = useState([])
  let [error, setError] = useState('')
  let [user, setUser] = useState({
    email: '',
    password: '',
  })

  let navigator = useNavigate()


  function getUsersData(e) {
    // Deep Copy 
    let myUser = { ...user }
    myUser[e.target.name] = e.target.value;
    setUser(myUser)
  }

  async function formSubmit(e) {
    e.preventDefault()
    setIsLoading(true)
    let validationResult = validateForm()

    if (validationResult.error) {
      setErrorList(validationResult.error.details)
      setIsLoading(false)
    } else {
      let { data } = await axios.post("https://sticky-note-fe.vercel.app/signin", user)

      if (data.message === 'success') {

        // => Login || Home
        localStorage.setItem('userToken', data.token)
        props.saveUserData();
        navigator('/home')
        setIsLoading(false)

      } else {
        // Error Message 
        setIsLoading(false)
        setError(data.message)
      }
    }
  }

  function validateForm() {
    let validation = Joi.object({
      email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: false } }).required(),
      password: Joi.string().pattern(new RegExp('^[A-Z][a-z]{3,8}$')).required(),
    })
    return validation.validate(user, { abortEarly: false })
  }

  return (
    <>
      <div className="w-75 mx-auto">
        <h2>Registration Form </h2>
        {errorList.map((error, i) => i === 1 ? <div className="alert alert-danger" role="alert">Password Invalid</div> : <div className="alert alert-danger" role="alert">{error.message}</div>)}
        {error ? <div className="alert alert-danger" role="alert">{error}</div> : ''}
        <form onSubmit={formSubmit} action="">
          <label htmlFor="email">Email:</label>
          <input onChange={getUsersData} className='form-control mb-3' id='email' name='email' type="email" />

          <label htmlFor="password">Password:</label>
          <input onChange={getUsersData} className='form-control mb-3' id='password' name='password' type="password" />

          <button className='btn btn-outline-info' type='submit'>
            {isLoading ? <i className='fas fa-spinner fa-spin '></i> : 'Login'}
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
*/
/*
Email: Mahmoudd12@gmail.com
Pass: Mahmoud
*/
/*
  -Base URL
  https://sticky-note-fe.vercel.app/
*/

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Joi from 'joi';
import { useNavigate } from 'react-router-dom'

const Login = (props) => {

  // User Object Hook 
  let [user, setUser] = useState({
    email: '',
    password: '',
  })

  // Registration Error For Valid Email
  let [error, setError] = useState('')

  // List Of Inputs Error From Joi Validation 
  let [errorList, setErrorList] = useState([])

  // Use useNavigate To Navigate User To Login Page If His Registration Correct 
  let navigate = useNavigate()
  // Set Loading Spinner On Register Button, While Data Is Loading
  let [isLoading, setIsLoading] = useState(false)

  // Make a function To Set Any Changes To user Object Hook 
  function getUsersData(e) {
    // Deep Copy Of User Var
    let myUser = { ...user }

    // Copy Values Of Any Input To user Object Element 
    myUser[e.target.name] = e.target.value

    // Set myUser Changes To user Var in Hook
    setUser(myUser)
  }

  // If Already There Is userToken And His Login Is Success, After User Login Prevent Him To Back To Login Again by Navigating Him To Home Page
  useEffect(() => {
    
    if (localStorage.getItem('userToken')) {
      navigate('/home') 
    }
  }, );

  
  // Make a Function To Prevent Reload & To Post Data To Back-End 
  async function submitForm(e) {
    // preventDefault of Form Reload
    e.preventDefault()

    // Turn On Loading Spinner instead Of Register Word 
    setIsLoading(true)

    // Store Returned Results Of Joi Validation To validationResult Variable
    let validationResult = validateForm()

    // Make a Condition If User Pass input Validation Or No ?
    if (validationResult.error) { // If Results Of Validation Incorrect

      setErrorList(validationResult.error.details)

      // Turn Off Loading Spinner and Return Register Word. Because Data Is Already Came
      setIsLoading(false)

    } else { // If Results Of Validation correct

      // Post Data Of user object To Back-End
      let { data } = await axios.post('https://sticky-note-fe.vercel.app/signin', user)
      console.log(data)
      if (data.message === 'success') {
        // Set User Token To LocalStorage 
        localStorage.setItem('userToken', data.token)
        props.saveUserData()

        // Navigate User To Home Page
        navigate('/home')

        // Turn Off Loading Spinner and Return Register Word. Because Data Is Already Came
        setIsLoading(false)

      } else {

        // Use setError To Set Data.Message IF IT Return Error => To Show This Error To User => To SignUp Again
        setError(data.message)

        // Turn Off Loading Spinner and Return Register Word. Because Data Is Already Came
        setIsLoading(false)
      }
    }
  }

  // Use Joi To Validate Inputs Form 
  function validateForm() {
    let validation = Joi.object({
      email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: false } }).required(),
      password: Joi.string().pattern(new RegExp('^[A-Z][a-z]{3,8}$')).required(),
    })
    return validation.validate(user, { abortEarly: false })
  }
  return (
    <>
      <div className="w-75 mx-auto">
        <h2>Login now</h2>

        {errorList.map((error, i) => i === 1 ? <div key={i} className='alert p-2 alert-danger'>{error.message}</div> : <div key={i} className='alert p-2 alert-danger'>password invalid</div>)}
        {error ? <div className='alert alert-danger'>{error}</div> : ''}

        <form onSubmit={submitForm} action="">
          <label htmlFor="email">Email:</label>
          <input onChange={getUsersData} className='form-control mb-3' id='email' name='email' type="email" />

          <label htmlFor="password">Password:</label>
          <input onChange={getUsersData} className='form-control mb-3' id='password' name='password' type="password" />

          <button className='btn btn-outline-info' type='submit'>
            {isLoading ? <i className='fas fa-spinner fa-spin '></i> : 'Login'}
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;