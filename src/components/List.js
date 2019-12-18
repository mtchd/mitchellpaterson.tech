import React from 'react'
import styled from 'styled-components'

const ListItem = styled.li`
  font-size: 1.125rem;
  line-height: 1.5;
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