import { Link } from "gatsby"
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
