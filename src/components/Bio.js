import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from '../media/profile-pic.png'

class Bio extends React.Component {
  render() {
    return (
      <div>
        <img
          src={profilePic}
          alt={`Jonathan`}
          className={`profile-pic img-fluid`}
        />
        <p>
          Written by the <strong>universe</strong>.{' '}
        </p>
      </div>
    )
  }
}

export default Bio
