import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/Style.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 id="subheading">Projects.</h1>

    <div id="Posts">
      <button className="Post">
        <img src={require("../images/Testimg1.jpg")} alt="Mobile Morse Code" />
        <h1 id="Post1">
          Mobile <br />
          Morse Code.
        </h1>
      </button>

      <button className="Post">
        <img src={require("../images/Testimg2.jpg")} alt="Test 1" />
        <h1 id="Post1">Test 1.</h1>
      </button>

      <button className="Post">
        <img src={require("../images/Testimg2.jpg")} alt="Test 2" />
        <h1 id="Post1">Test 2.</h1>
      </button>

      <button className="Post">
        <img src={require("../images/Testimg1.jpg")} alt="Test 3" />
        <h1 id="Post1">Test 3.</h1>
      </button>
    </div>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, minimum-scale=1"
    />
  </Layout>
)

export default IndexPage
