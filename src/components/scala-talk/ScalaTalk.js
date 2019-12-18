import React from 'react'
import styled from 'styled-components'
import TechList from './List'
import llamaGif from '../../images/fab_llama.gif'

import media from '../../../utils/media'

const Wrapper = styled.div`
    padding-top: 2rem;
    padding-bottom: 2rem;

  ${media.tablet`
    padding-top: 4rem;
    padding-bottom: 4rem;
  `}
`

const Description = styled.p`
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
const ScalaTalk = ({ data }) => {
  return (
    <Wrapper>
      <Row>
        <Col>
          <Description>
            I gave a talk running over some of the basics of Scala, feel free to check out the <a href="https://mtchd.github.io/scala-talk/#/">slides</a>, and their <a href="https://github.com/mtchd/scala-talk">source code</a>.
            You can view the recording <a href="https://web.microsoftstream.com/video/8b164dff-83e5-4390-a218-ab0b9f30a0ad">here</a>.
            The talk runs over:
          </Description>
          <TechList />
        </Col>
        <Col>
          <ImgContainer >
            <img src={llamaGif} alt="Fabulous Llama" />
          </ImgContainer>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default ScalaTalk;