import React, { Component } from 'react'
import { Container, ListGroup, ListGroupItem, Row, Col, Input, InputGroupAddon, Button } from 'reactstrap'

import { ListItem } from './ListItem'
import { ListItemDescription } from './ListItemDescription'

export default class ReposList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filter: ''
    }

    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const { reposList } = this.props
    const elements = reposList.filter(el => el.name.includes(this.state.filter))

    let result

    if (reposList.length) {
      result = (
        <Container style={{ display: 'inline-grid' }}>
          <Input
            style={{ width: '150px', margin: '10px 0' }}
            name="filter"
            placeholder="Search Repo"
            onChange={this.onChange.bind(this)}
          />
          <ListGroup className="repos-result">
            {elements.map(repo => (
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
        </Container>
      )
    }
    return <div>{result}</div>
  }
}
