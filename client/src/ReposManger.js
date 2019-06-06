import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { ReposList } from './Components/ReposList'
import Search from './Components/Search'

import { Alert } from 'reactstrap'

export default class ReposMangerView extends Component {
  constructor() {
    super()
    this.state = {
      repos: [],
      error: false
    }

    this.onReposLoad = this.onReposLoad.bind(this)
  }
  static propTypes = {
    onReposLoad: PropTypes.func
  }

  onReposLoad(error, repos) {
    error ? this.setState({ error }) : this.setState({ error, repos })
  }

  render() {
    return (
      <div className="repos-manager-container">
        <h3>Your Github Repositories</h3>
        <hr />
        <Search loadRepos={this.onReposLoad.bind(this)} />
        {this.state.error ? (
          <Alert style={{ marginTop: '10px' }} color="danger">
            Please provide a valid github token
          </Alert>
        ) : (
          <ReposList reposList={this.state.repos} />
        )}
      </div>
    )
  }
}
