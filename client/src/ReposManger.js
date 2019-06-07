import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ReposList from './Components/ReposList'
import Search from './Components/Search'

import { Alert, Spinner } from 'reactstrap'

export default class ReposMangerView extends Component {
  constructor() {
    super()
    this.state = {
      repos: [],
      error: false,
      loading: false
    }

    this.onReposLoad = this.onReposLoad.bind(this)
  }
  static propTypes = {
    onReposLoad: PropTypes.func
  }
  onLoadActivity(loading) {
    this.setState({ loading })
  }

  onReposLoad(error, repos) {
    error ? this.setState({ error }) : this.setState({ error, repos })
  }

  render() {
    const res = this.state.loading ? <Spinner color="primary" /> : <ReposList reposList={this.state.repos} />
    return (
      <div className="repos-manager-container">
        <h3>Your Github Repositories</h3>
        <hr />
        <Search loadRepos={this.onReposLoad.bind(this)} loadActivity={this.onLoadActivity.bind(this)} />
        {this.state.error ? (
          <Alert style={{ marginTop: '10px' }} color="danger">
            Please provide a valid github token
          </Alert>
        ) : (
          <div className="result-container">{res}</div>
        )}
      </div>
    )
  }
}
