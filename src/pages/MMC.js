import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/Style.css"
import MMCapp from "../images/MMCapp.png"

const MMC = () => (
    <Layout>
        <SEO title="Mobile Morse Code" />
        <h1 id="subheading">Mobile Morse Code.</h1>
        <div id="Content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt eu diam vitae ornare. Praesent magna diam, mollis non ipsum nec, venenatis rhoncus purus. Nam porta eleifend congue. Pellentesque vulputate eget nibh vitae mollis. Curabitur tincidunt accumsan neque nec tincidunt. Phasellus vel feugiat mi, sed bibendum orci. Curabitur ultricies dui eget fermentum vehicula. Vestibulum semper sit amet odio at pellentesque. Curabitur nec est risus. Morbi in purus posuere, rhoncus enim ac, viverra ante. Praesent posuere tortor vel justo sagittis, eget iaculis est laoreet. Ut auctor sed libero tincidunt aliquam. Ut imperdiet nulla lectus, ac convallis sem lobortis eget. Vivamus in purus ut nunc sagittis tincidunt ac in libero.
            </p><br/>
            <img src={MMCapp} id="ContentImage"alt="MMC"/>
        </div>
    </Layout>
)

export default MMC
