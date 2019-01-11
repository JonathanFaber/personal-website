import React from 'react'
import Link from 'gatsby-link'
import Navbar from '../components/Navbar'

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div>
        <Navbar />
        <div className="container page-container">
          {children()}
        </div>
      </div>
    )
  }
}

export default Template
