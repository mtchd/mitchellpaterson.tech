import React from "react"
import Container from "../components/Container"
import Hero from "../components/Hero"
import Page from "../components/Page"
import HomeSection from "../components/HomeSection"
import Connect4 from "../components/connect4/Connect4"
import ScalaTalk from "../components/scala-talk/ScalaTalk"
import { graphql } from "gatsby"

export default ({data}) => (
  <Page>
    <Container>
      <Hero />
    </Container>

    <HomeSection title="Connect 4">
      <Connect4 data={data}/>
    </HomeSection>

    <HomeSection title="Scala Talk">
      <ScalaTalk />
    </HomeSection>
  </Page>
)

export const query = graphql`
  query getImagesQuery {
    connect4: file(relativePath: { eq: "connect4.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
