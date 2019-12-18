import React from 'react'
import styled from 'styled-components'

import media from '../../utils/media'

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
`

export const Col = styled.div`
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

export const ImgContainer = styled.div`
  width: 75%;
  margin: 0 auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`

// TODO: Make a list ListItems that this loops through?
export const Post = ({ data, left, right }) => {
  return (
    <Row>
      {left}
      {right}
    </Row>
  );
};

export default Post;