const router = require('koa-router')()
const apiController = require('./controllers/apiController')

router.post('/api/repos', ctx => apiController.index(ctx))

module.exports = router
