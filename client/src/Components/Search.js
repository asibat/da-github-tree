import React, { Component } from 'react'
import { Button, Col, Form, Input, InputGroup, InputGroupAddon } from 'reactstrap'

import { fetch } from '../api'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      token: '',
      repos: [],
      error: false
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  async onSubmit(e) {
    e.preventDefault()

    const { token } = this.state
    if (!token) {
      this.props.loadRepos(true)
      return
    }
    const repos = await fetch(token)
    !repos ? this.props.loadRepos(true, repos) : this.props.loadRepos(false, repos)
  }

  render() {
    return (
      <Form className="search" onSubmit={this.onSubmit}>
        <Col style={{ paddingRight: 0, paddingLeft: 0 }}>
          <InputGroup>
            <Input placeholder="Your Github Token..." onChange={this.onChange} name="token" value={this.state.token} />
            <InputGroupAddon addonType="append">
              <Button>Search</Button>
            </InputGroupAddon>
          </InputGroup>
        </Col>
      </Form>
    )
  }
}

Search.propTypes = {}

export default Search
