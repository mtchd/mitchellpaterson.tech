import React from 'react'
import styled from 'styled-components'

const List = styled.ul``

const ListItem = styled.li`
  font-size: 1.125rem;
  line-height: 1.5;
`

const TechList = ({listItems}) => {
  return (
    <List>
      {listItems.map((text) => {
        return (
          <ListItem>
            {text}
          </ListItem>
        )
      })}
    </List>
  );
};

export default TechList;