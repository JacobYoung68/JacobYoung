import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/Style.css"
import NCimg from '../images/NCimg.png'

const NC = () => (
    <Layout>
        <SEO title="Narrative Code" />
        <h1 id="subheading">Narrative Code.</h1>
        <div id="Content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt eu diam vitae ornare. Praesent magna diam, mollis non ipsum nec, venenatis rhoncus purus. Nam porta eleifend congue. Pellentesque vulputate eget nibh vitae mollis. Curabitur tincidunt accumsan neque nec tincidunt. Phasellus vel feugiat mi, sed bibendum orci. Curabitur ultricies dui eget fermentum vehicula. Vestibulum semper sit amet odio at pellentesque. Curabitur nec est risus. Morbi in purus posuere, rhoncus enim ac, viverra ante. Praesent posuere tortor vel justo sagittis, eget iaculis est laoreet. Ut auctor sed libero tincidunt aliquam. Ut imperdiet nulla lectus, ac convallis sem lobortis eget. Vivamus in purus ut nunc sagittis tincidunt ac in libero.
        <br /><br />
            Integer ornare magna sed diam eleifend malesuada ac nec erat. Donec quam nisl, tempus a porttitor a, tincidunt et velit. Praesent pellentesque pulvinar nunc, vel pulvinar massa molestie nec. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus varius, urna non iaculis fringilla, libero urna sollicitudin lectus, vitae dictum neque felis sed libero. Ut viverra risus felis, a dictum quam varius ut. Sed posuere lectus id lacus tristique, nec molestie dolor sagittis. Donec sodales nisi aliquet lacinia placerat. Ut tempor, metus sit amet faucibus volutpat, eros tellus mattis mauris, vitae condimentum lacus orci non erat. Proin tincidunt tempor sapien at eleifend. Maecenas blandit sapien nibh, vel tempor neque commodo ut. Nullam ac massa porta, porttitor libero id, bibendum metus. Pellentesque sed sodales leo, non lobortis elit. Fusce sed ligula arcu. Quisque ac suscipit massa. Maecenas molestie ac lorem ac accumsan.
        <br /><br />
                <img src={NCimg} id="ContentImage" alt="NC" /><br />
            </p></div>
    </Layout>
)

export default NC
