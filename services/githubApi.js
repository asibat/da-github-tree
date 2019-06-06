const Octokit = require('@octokit/rest')

module.exports = {
  async listAllRepos(token) {
    let response
    const octokit = new Octokit({ auth: token })

    try {
      response = await octokit.repos.list()
    } catch (e) {
      console.log(e)
      throw e
    }

    return response
  }
}
