import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

import "../components/Style.css"
import socialgh from '../images/github.png'
import socialinsta from '../images/insta.png'
import sociallinkedin from '../images/linkedin.png'

const Header = ({ siteTitle }) => (
  <header
    style={
      {
        //marginBottom: `1.45rem`,
      }
    }
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: "95%",
        //padding: `1.45rem 1.0875rem`,
      }}
    >
      <Link to="/"><h1 id="jyTitle">{siteTitle}</h1></Link>
      <div id="socials">
        <a href="https://www.linkedin.com/in/jajyoung/"><img src={sociallinkedin} alt="Linkedin" /></a>
        <a href="https://github.com/JacobYoung68"><img src={socialgh} alt="Github" /></a>
        <a href="http://google.com"><img src={socialinsta} alt="Instagram" /></a>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
