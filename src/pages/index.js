import React from "react"
import Container from "../components/Container"
import Hero from "../components/Hero"
import Page from "../components/Page"
import HomeSection from "../components/HomeSection"
import Post from "../components/Post"

export default () => (
  <Page>
    <Container>
      <Hero />
    </Container>

    <HomeSection title="Connect 4">
      <Post />
    </HomeSection>
  </Page>
)
