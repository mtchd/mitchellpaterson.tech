import React from "react"
import Container from "../components/Container"
import Hero from "../components/Hero"
import Page from "../components/Page"
import HomeSection from "../components/HomeSection"
import Post from "../components/connect4/Post"
import { graphql } from "gatsby"

export default ({data}) => (
  <Page>
    <Container>
      <Hero />
    </Container>

    <HomeSection title="Connect 4">
      <Post data={data}/>
    </HomeSection>
  </Page>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "connect4.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxHeight: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
