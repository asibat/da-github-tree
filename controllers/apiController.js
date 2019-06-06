const { isEmpty } = require('lodash')
const { OK, NOT_FOUND, BAD_REQUEST, CREATED, NO_CONTENT } = require('http-status')

const { listAllRepos } = require('../services/githubApi')

module.exports = {
  async index(ctx) {
    let repos

    try {
      repos = await listAllRepos(ctx.request.body.token)
    } catch (e) {
      ctx.body = e.message
      return
    }

    if (repos && !isEmpty(repos)) {
      ctx.body = repos
      ctx.status = OK
    } else {
      ctx.body = []
    }
  }
}
