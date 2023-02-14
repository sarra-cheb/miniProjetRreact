import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <Link className="navbar-brand" href="#">Profile</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to='/'>Acceuil</Link>
            </li>

          </ul>
          <div className="d-flex">
            <Link className="btn btn-success me-3" to='/login'>Login</Link>
            <Link className="btn btn-success " to='/register'>Register</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Menu
