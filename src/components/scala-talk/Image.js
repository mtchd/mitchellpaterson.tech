import React from "react"
import Img from "gatsby-image"

const Image = ({ data }) => (
  <div>
    <Img fluid={data.connect4.childImageSharp.fluid} />
  </div>
)

export default Image;
