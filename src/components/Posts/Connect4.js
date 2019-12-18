import React from 'react'
import TechList from '../List'
import Img from "gatsby-image"
import {Post, Col, Description, ImgContainer} from '../Post'

// TODO: Make a list ListItems that this loops through?
const Connect4 = ({ data }) => {
  
  const technologyList = [
    "Scala with libraries such as Cats, Circe and Doobie",
    "Amazon Web Services as it's cloud provider",
    "A Postgres SQL database",
    "Terraform for Infrastructure As Code",
    "Buildkite for it's CI pipeline",
    "Docker for containerization"
  ]

  const left = (
    <Col>
      <Description>
        I made a bot that lets you play Connect 4 in Slack! Its full of various fun things, like using emojis for your token. You can check out the source code <a href="https://github.com/mtchd/connect4">here</a>. It runs using:
      </Description>
      <TechList listItems={technologyList}/>
    </Col>
  )

  const right = (
    <Col>
    <ImgContainer >
      <Img fluid={data.connect4.childImageSharp.fluid} />
    </ImgContainer>
    </Col>
  )

  return Post({data, left, right})
};

export default Connect4;