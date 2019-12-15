import React from 'react'
import styled from 'styled-components'

import media from '../utils/media'

const Wrapper = styled.div`
    padding-top: 3rem;
    padding-bottom: 3rem;

  ${media.tablet`
    padding-top: 6rem;
    padding-bottom: 6rem;
  `}
`

const Description = styled.p`
  margin-top: 2rem;
  line-height: 1.5;
  font-size: 1.125rem;

  ${media.mobile`
    max-width: 75%;
  `}

  ${media.tablet`
    font-size: 1.5rem;
  `}

  ${media.desktop`
    max-width: 50%;
  `}
`

const List = styled.ul``


const ListItem = styled.li`
  font-size: 1.125rem;
  line-height: 1.5;
`

// TODO: Make a list ListItems that this loops through?
const Post = () => {
  return (
    <Wrapper>
      <Description>
        I made a slackbot that lets you play Connect 4 with your friends and colleages! It runs using:
      </Description>
      <List>
        <ListItem>
          Scala with libraries such as Cats, Circe and Doobie
        </ListItem>
        <ListItem>
          Amazon Web Services as it's cloud provider
        </ListItem>
        <ListItem>
          A Postgres SQL database
        </ListItem>
        <ListItem>
          Terraform for Infrastructure As Code
        </ListItem>
        <ListItem>
          Buildkite for it's CI pipeline
        </ListItem>
        <ListItem>
          Docker for containerization
        </ListItem>
      </List>
    </Wrapper>
  );
};

export default Post;