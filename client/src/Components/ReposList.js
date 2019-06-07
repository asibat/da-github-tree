import React from 'react'

import { Container, ListGroup, ListGroupItem } from 'reactstrap'

import { ListItem } from './ListItem'
import { ListItemDescription } from './ListItemDescription'

export const ReposList = props => (
  <ListGroup className="repos-result">
    {props.reposList.map(repo => (
      <ListGroupItem
        tag="button"
        action
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}
        id={`toggler${repo.id}`}
        key={repo.id}
      >
        <Container>
          <ListItem repoObj={repo} />
          <ListItemDescription repoObj={repo} />
        </Container>
      </ListGroupItem>
    ))}
  </ListGroup>
)
