import React from 'react'
import styled from 'styled-components'
import TechList from './List'
import Image from "./Image";

import media from '../../../utils/media'

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

  ${media.tablet`
    font-size: 1.5rem;
  `}

`

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Col = styled.div`
  flex: 1 1 100%;
  max-width: 100%;
  ${media.mobile` 
    flex: 1 1 50%;
    max-width: 50%;
  `}
  ${media.desktop` 
    flex: 1 1 50%;
    max-width: 50%;
  `}
`

const ImgContainer = styled.div`
  width: 75%;
  margin: 0 auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`

// TODO: Make a list ListItems that this loops through?
const Post = ({ data }) => {
  return (
    <Wrapper>
      <Row>
        <Col>
          <Description>
            I made a slackbot that lets you play Connect 4 with your friends! It runs using:
          </Description>
          <TechList />
        </Col>
        <Col>
          <ImgContainer >
            <Image data={data}/>
          </ImgContainer>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default Post;