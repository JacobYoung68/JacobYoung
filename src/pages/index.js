import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/Style.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Projects.</h1>
    <div id="Posts">
      <div id="Post">
        <h1>Hi.</h1>
      </div>
      <div id="Post"></div>
      <div id="Post"></div>
      <div id="Post"></div>
      <div id="Post"></div>
      <div id="Post"></div>
      <div id="Post"></div>
      <div id="Post"></div>
    </div>
  </Layout>
)

export default IndexPage
