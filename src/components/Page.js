import React from 'react'
import styled from 'styled-components'

import Footer from './Footer'
import Document from './Document'
import media from '../utils/media'

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background-color: #ffffff;
`

const Inner = styled.div`
  flex: 1;
  margin-bottom: 2rem;

  ${media.mobile`
    margin-bottom: 4rem;
  `}
`

const Page = ({ children }) => (
  <Document>
    <Wrapper>
      <Inner>{children}</Inner>
      <Footer />
    </Wrapper>
  </Document>
);

export default Page;