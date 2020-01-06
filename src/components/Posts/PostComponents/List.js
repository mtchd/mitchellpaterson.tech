import React from 'react'
import styled from 'styled-components'
import media from '../../../../utils/media'

const ListItem = styled.li`
  font-size: 1.125rem;
  line-height: 1.5;
  ${media.tablet`
    font-size: 1.25rem;
  `}
`

const TechList = ({listItems}) => {
  return (
    <ul>
      {listItems.map((text) => {
        return (
          <ListItem>
            {text}
          </ListItem>
        )
      })}
    </ul>
  );
};

export default TechList;