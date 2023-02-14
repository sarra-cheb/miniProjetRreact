import axios from 'axios'
import React, { useState } from 'react'

const Register = () => {
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

    await axios.post('http://localhost:3000/users', user)
  }
  return (
    <form className='w-50 mx-auto mt-5' onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="nom" className="form-label">Nom</label>
        <input type="text" className="form-control" id="nom" onChange={handleChange} placeholder='Jhon' />
      </div>
      <div className="mb-3">
        <label htmlFor="prenom" className="form-label">Prenom</label>
        <input type="text" className="form-control" id="prenom" placeholder='doe' onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder='Jhondoe@gmail.com' onChange={handleChange} />
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-control" id="password" placeholder='******' onChange={handleChange} />
      </div>
      <button type="submit" className="btn btn-primary">Register</button>
    </form>
  )
}

export default Register
