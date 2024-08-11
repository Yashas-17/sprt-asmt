import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'
function Sidebar() {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-light sidebar"
      style={{width: '250px', height: '100vh'}}
    >
      <Link
        to="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none"
      >
        <span className="fs-4">Dashboard</span>
      </Link>
      <hr />
      <ul className="nav nav-tabs flex-column mb-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link text-dark" aria-current="page">
            Home
          </Link>
        </li>
        <li>
          <Link to="/users" className="nav-link text-dark">
            Users
          </Link>
        </li>
        <li>
          <Link to="/posts" className="nav-link text-dark">
            Posts
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
