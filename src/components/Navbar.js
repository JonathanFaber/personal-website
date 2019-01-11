import React from 'react'
import Link from 'gatsby-link'

const Navbar = () => (
  <nav className="navbar navbar-light bg-white shadow-sm sticky-top">
    <div className="container">
      <ul className="nav navbar-nav">
        <li>
          <Link to="/" className="nav-item nav-link active">
            Blog
          </Link>
        </li>
      </ul>
      <div>
        Jonathan Faber
      </div>
    </div>
  </nav>
)

export default Navbar
