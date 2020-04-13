import React from "react"
import Container from "../components/Container"
import Hero from "../components/Hero"
import Page from "../components/Page"
import HomeSection from "../components/HomeSection"
import Connect4 from "../components/Posts/Connect4"
import ScalaTalk from "../components/Posts/ScalaTalk"
import { graphql } from "gatsby"
import ChickenPost from "../components/Posts/ChickenPost/ChickenPost"
import CorgiRoad from "../components/CorgiRoad"

export default ({data}) => (
  <Page>
    <Container>
      <Hero />
    </Container>

    <CorgiRoad numCorgis={2} />
  </Page>
)
