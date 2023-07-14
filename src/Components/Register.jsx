/*
import axios from 'axios';
import Joi from 'joi';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  let [isLoading, setIsLoading] = useState(false)

  let [errorList, setErrorList] = useState([]);

  let [error, setError] = useState('');

  let [user, setUser] = useState({
    first_name: '',
    last_name: '',
    age: 0,
    email: '',
    password: '',
  })

  let getUsersData = (e) => {
    // Deep Copy 
    let myUser = { ...user }
    myUser[e.target.name] = e.target.value
    setUser(myUser)
  }

  let navigator = useNavigate()

  async function submitForm(e) {
    e.preventDefault()
    setIsLoading(true)

    let validationResult = validateForm();
    console.log(validationResult)
    if (validationResult.error) {
      setErrorList(validationResult.error.details)
      console.log(errorList)
      setIsLoading(false)
    } else {

      let { data } = await axios.post("https://sticky-note-fe.vercel.app/signup", user)
      console.log(data)

      if (data.message === 'success') {

        // => Login Page 
        navigator('/login')
        setIsLoading(false)

      } else {
        // Alert With Error 
        setIsLoading(false)
        setError(data.message)
      }
    }

  }

  function validateForm() {
    let validation = Joi.object({
      first_name: Joi.string().min(3).max(15).required(),
      last_name: Joi.string().min(3).max(15).required(),
      age: Joi.number().min(16).max(80).required(),
      // email: Joi.string().email().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
      email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: false } }).required(),
      password: Joi.string().pattern(new RegExp('^[A-Z][a-z]{3,8}$')).required(),

    })
    return validation.validate(user, { abortEarly: false })
  }

  return (
    <>
      <div className="w-75 mx-auto">
        <h2>Registration Form </h2>
        {errorList.map((error, i) => i === 4 ? <div key={i} className="alert py-2 alert-danger" role="alert">Password invalid</div> : <div key={i} className="alert py-2 alert-danger" role="alert">{error.message}</div>)}
        {error !== '' ? <div className="alert alert-danger" role="alert">{error}</div> : ''}
        <form onSubmit={submitForm} action="">
          <label htmlFor="first_name">First Name:</label>
          <input className='form-control mb-3' id='first_name' name='first_name' type="text" />

          <label htmlFor="last_name">Last Name:</label>
          <input onChange={getUsersData} className='form-control mb-3' id='last_name' name='last_name' type="text" />

          <label htmlFor="age">Age:</label>
          <input onChange={getUsersData} className='form-control mb-3' id='age' name='age' type="number" />

          <label htmlFor="email">Email:</label>
          <input onChange={getUsersData} className='form-control mb-3' id='email' name='email' type="email" />

          <label htmlFor="password">Password:</label>
          <input onChange={getUsersData} className='form-control mb-3' id='password' name='password' type="password" />

          <button className='btn btn-outline-info' type='submit'>
            {isLoading ? <i className='fas fa-spinner fa-spin '></i> : 'Register'}
          </button>
        </form>
      </div>
    </>
  );
}

export default Register;
*/
/*
  -Base URL
  https://sticky-note-fe.vercel.app/
*/




import React, { useState } from 'react';
import axios from 'axios';
import Joi from 'joi';
import { useNavigate } from 'react-router-dom'

const Register = () => {

  // User Object Hook 
  let [user, setUser] = useState({
    first_name: '',
    last_name: '',
    age: 0,
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

    // one line code
    // setUser({...user, [e.target.name]: e.target.value})
  }

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
      let { data } = await axios.post('https://sticky-note-fe.vercel.app/signup', user)

      if (data.message === 'success') {

        // Navigate User To Login Page 
        navigate('/login')

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
      first_name: Joi.string().min(3).max(30).required(),
      last_name: Joi.string().min(3).max(30).required(),
      age: Joi.number().min(3).max(80).required(),
      email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: false } }).required(),
      password: Joi.string().pattern(new RegExp('^[A-Z][a-z]{3,8}$')).required(),
    })
    return validation.validate(user, { abortEarly: false })
  }
  return (
    <>
      <div className="w-75 mx-auto">
        <h2>Registration Form </h2>
        
        {errorList.map((error, i) => i === 4 ? <div key={i} className='alert p-2 alert-danger'>password invalid</div> : <div key={i} className='alert p-2 alert-danger'>{error.message}</div>)}
        {error ? <div className='alert alert-danger'>{error}</div> : ''}
        
        <form onSubmit={submitForm} action="">
          <label htmlFor="first_name">First Name:</label>
          <input onChange={getUsersData} className='form-control mb-3' id='first_name' name='first_name' type="text" />

          <label htmlFor="last_name">Last Name:</label>
          <input onChange={getUsersData} className='form-control mb-3' id='last_name' name='last_name' type="text" />

          <label htmlFor="age">Age:</label>
          <input onChange={getUsersData} className='form-control mb-3' id='age' name='age' type="number" />

          <label htmlFor="email">Email:</label>
          <input onChange={getUsersData} className='form-control mb-3' id='email' name='email' type="email" />

          <label htmlFor="password">Password:</label>
          <input onChange={getUsersData} className='form-control mb-3' id='password' name='password' type="password" />

          <button className='btn btn-outline-info' type='submit'>
            {isLoading ? <i className='fas fa-spinner'></i> : 'Register'}
          </button>
        </form>
      </div>
    </>
  );
}

export default Register;


