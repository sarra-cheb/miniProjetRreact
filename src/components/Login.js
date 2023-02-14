import axios from 'axios'
import React, { useState } from 'react'

const Login = () => {
  const [user, setUser] = useState({
    nom: '',
    prenom: '',
    email: '',
    password: ''
  })
  const handleChange = (e) => {
    const { id, value } = e.target
    setUser({ ...user, [id]: value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()

    const response = await axios.get('http://localhost:3000/users')
    console.log(response);
  }
  return (
    <form className='w-25 mx-auto mt-5' onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input type="email" onChange={handleChange} className="form-control" id="email" aria-describedby="emailHelp" placeholder='saisissez votre email' />
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" onChange={handleChange} className="form-control" id="password" placeholder='saisissez votre mot de passe' />
      </div>
      <button type="submit" className="btn btn-primary">Login</button>
    </form>
  )
}

export default Login
