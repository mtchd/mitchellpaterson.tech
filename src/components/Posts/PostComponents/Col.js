import styled from 'styled-components'

const Col = styled.div`
  flex: 1 1 50%;
  max-width: 50%;

  @media (max-width: 768px) {
    flex: 1 1 100%;
    max-width: 100%;
  }
`

export default Col