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

const H1 = styled.h1`
  font-size: 2rem;
  margin: 0;

  ${media.tablet`
    font-size: 4rem;
  `}
`

const Sub = styled.span`
  font-size: 0.5em;
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

const Hero = () => {
  return (
    <Wrapper>
      <H1>
        <Sub>Mitchell Paterson —</Sub><br />
        Software and Systems Engineer.
      </H1>
      <Description>
        Hi, I'm Mitchell Paterson, a software dev currently based in Melbourne, Australia. I'm interested in all things functional programming, full-stack and devops.
      </Description>
    </Wrapper>
  );
};

export default Hero;