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
        Scala with libraries such as Cats, Circe and Doobie
      </ListItem>
      <ListItem>
        Amazon Web Services as it's cloud provider
      </ListItem>
      <ListItem>
        A Postgres SQL database
      </ListItem>
      <ListItem>
        Terraform for Infrastructure As Code
      </ListItem>
      <ListItem>
        Buildkite for it's CI pipeline
      </ListItem>
      <ListItem>
        Docker for containerization
      </ListItem>
    </List>
  );
};

export default TechList;