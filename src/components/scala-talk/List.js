import React from 'react'
import styled from 'styled-components'

const List = styled.ul``

const ListItem = styled.li`
  font-size: 1.125rem;
  line-height: 1.5;
`

const TechList = () => {
  return (
    <List>
      <ListItem>
        Classes in Scala
      </ListItem>
      <ListItem>
        Case Classes and why they exist
      </ListItem>
      <ListItem>
        Companion/Singleton Objects
      </ListItem>
      <ListItem>
        Traits
      </ListItem>
      <ListItem>
        Pattern matching using the above
      </ListItem>
    </List>
  );
};

export default TechList;