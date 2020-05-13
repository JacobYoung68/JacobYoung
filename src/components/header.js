import PropTypes from "prop-types"
import React from "react"

import "../components/Style.css"

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
      <h1 id="jyTitle">{siteTitle}</h1>
      <div id="socials">
        <img src={require("../images/github.png")} alt="Test 2" />
        <img src={require("../images/insta.png")} alt="Test 2" />
        <img src={require("../images/linkedin.png")} alt="Test 2" />
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
