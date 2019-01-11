import React from 'react'
import Link from 'gatsby-link'

const Navbar = () => (
  <nav className="navbar navbar-light bg-white shadow-sm">
    <div className="container">
      <ul className="nav navbar-nav">
        <li>
          <Link to="/" className="nav-item nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-item nav-link">
            About
          </Link>
        </li>
        <li>
          <Link to="/join" className="nav-item nav-link">
            Join
          </Link>
        </li>
      </ul>
      <div>

      </div>
    </div>
  </nav>
)

export default Navbar
