import React from "react"
import Container from "../components/Container"
import Hero from "../components/Hero"
import Page from "../components/Page"
import HomeSection from "../components/HomeSection"
import Connect4 from "../components/Posts/Connect4"
import ScalaTalk from "../components/Posts/ScalaTalk"
import { graphql } from "gatsby"
import ChickenPost from "../components/Posts/ChickenPost/ChickenPost"
import Corgi from "../components/Corgi"
import CorgiRoad from "../components/CorgiRoad"

export default ({data}) => (
  <Page>
    <Container>
      <Hero />
    </Container>

    <HomeSection title="Connect 4">
      <Connect4 data={data}/>
    </HomeSection>

    <HomeSection title="The Great Chicken">
      <ChickenPost />
    </HomeSection>

    <HomeSection title="Scala Talk">
      <ScalaTalk />
    </HomeSection>
  </Page>
)

export const query = graphql`
  query getImagesQuery {
    connect4: file(relativePath: { eq: "greg-win.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 1000, maxHeight: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
