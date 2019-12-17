import React from "react"
import Img from "gatsby-image"

const Image = ({ data }) => (
  <div>
    <Img fixed={data.file.childImageSharp.fixed} />
  </div>
)

export default Image;
