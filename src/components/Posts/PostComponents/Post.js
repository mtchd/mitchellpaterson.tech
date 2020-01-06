import React from 'react'
import styled from 'styled-components'

import media from '../../../../utils/media'

export const Description = styled.p`
  line-height: 1.5;
  font-size: 1.125rem;

  ${media.tablet`
    font-size: 1.5rem;
  `}

`

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 3rem;
  padding-top: 5rem;

  @media (max-width: 768px) {
    padding-top: 3rem;
  }
`

// TODO: Make a list ListItems that this loops through?
export const Post = ({ left, right }) => {
  return (
    <Row>
      {left}
      {right}
    </Row>
  );
};

export default Post;