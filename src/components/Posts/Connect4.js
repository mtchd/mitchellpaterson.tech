import React from 'react'
import TechList from './PostComponents/List'
import Img from "gatsby-image"
import {Post, Description} from './PostComponents/Post'
import Container from '../Container'
import styled from 'styled-components'
import ImgContainer from './PostComponents/ImgContainer'
import Col from './PostComponents/Col'

// import Greg from '../../images/greg-win.png'
// <img src={GregWin} alt="Fabulous Greg" style={{ width: '100%' }}/>

const VideoWrapper = styled.div`
  transform: translate(-6%);

  @media (max-width: 813px) {
    transform: translate(-0%);
  }
`

const VideoDescription = styled(Description)`
  textAlign: center;
  textAlignVertical: center;
  textColor: red;
`

const VideoContainer = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  height: 500px;
  transform: translate(-50%);
  margin-bottom: 3rem;
  width: 75%;

  @media (max-width: 813px) {
    height: 300px;
    width: 100%;
  }
`

const ImgContainer2 = styled(ImgContainer)`
  @media (max-width: 1000px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 75%;
  }
`

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
        I made a bot that lets you play Connect 4 in Slack! Its full of various fun things, like using emojis for your token.
        You can check out the source code <a href="https://github.com/mtchd/connect4">here</a>.
        Click <a href="https://youtu.be/TlFrnz3iKWk">here</a> to see a video of it in action!
        It runs using:
      </Description>
      <TechList listItems={technologyList}/>
    </Col>
  )

  const right = (
    <Col>
      <ImgContainer2 >
        <Img fluid={data.connect4.childImageSharp.fluid} />
      </ImgContainer2>
    </Col>
  )

  return (
    <Container>
      {Post({data, left, right})}
      <VideoWrapper>
        <VideoDescription style={{ textAlign: 'center' }}> Here's a video of the game in action, make sure you turn sound on!</VideoDescription>
        <VideoContainer>
          <iframe title="Connect4" width="100%" height="100%" src="https://www.youtube.com/embed/TlFrnz3iKWk" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </VideoContainer>
      </VideoWrapper>
    </Container>

  )
};

//hell

export default Connect4;