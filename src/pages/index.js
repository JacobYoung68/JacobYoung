import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/Style.css"

import testimg1 from '../images/testimg1.jpg'
import testimg2 from '../images/testimg2.jpg'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 id="subheading">Projects.</h1>

    <div id="Posts">

      <button className="Post">
        <Link to='/MMC'>
          <img src={testimg2} alt="Mobile Morse Code" />
          <h1 id="Post1">
            Mobile <br />
          Morse Code.
        </h1>
        </Link>
      </button>

      <button className="Post">
        <Link to='/NC'>
          <img src={testimg2} alt="Narrative Code" />
          <h1 id="Post1">Narrative Code.</h1>
        </Link>
      </button>

      <button className="Post">
        <Link to='/ThisSite'>
          <img src={testimg2} alt="This Site" />
          <h1 id="Post1">This Site.</h1>
        </Link>
      </button>

      <button className="Post">
        <Link to='/Test1'>
          <img src={testimg2} alt="Test 1" />
          <h1 id="Post1">Test 1.</h1>
        </Link>
      </button>
    </div>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, minimum-scale=1"
    />
  </Layout>
)

export default IndexPage
