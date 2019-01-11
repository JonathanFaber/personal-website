import React from 'react'
import Helmet from 'react-helmet'

class AboutIndex extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="About | Jonathanism" />
        <h1><strong>About Jonathanism</strong></h1>
        <br/>

        <h3>Why the name Jonathanism?</h3>
        <p>The religion is named after our prophet the <em>Virgin Jonathan</em>.</p>
        <br/>

        <h3>Prime belief</h3>
        <h5>Jonathan will be the first virgin male to give birth.</h5>
        <p>He will give birth to the immortal <em>Pancake Maker</em></p>
        <br/>

        <h3>The Great Prophecies</h3>
        <p>All prophecies will come true after the birth of the <em>Pancake Maker</em></p>
        <ul>
          <li>
            The <em>Pancake Maker</em> will flatten the earth into a pancake.
          </li>
          <li>
            The world pancake will solve world hunger.
          </li>
          <li>
            After every eon the <em>Pancake Maker</em> will flip the world pancake and<br/>
            cause a near global extinction event.
          </li>
          <li>
            Eventually all living things will eat the world pancake until none is left.
          </li>
          <li>
            All life will turn to ash, which will turn to dust, 
            which will turn to earth,<br/> from which life will be reborn
            and the cycle repeated <em>ad infinitum</em>.
          </li>
        </ul>
        <br/>

        <h3>Afterlife</h3>
        <p></p>
      </div>
    )
  }
}

export default AboutIndex
