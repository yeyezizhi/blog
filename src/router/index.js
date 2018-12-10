const Router = require('koa-router')
const PostController = require('../controller/postController')

const router = new Router({ prefix: '/api' })

router.use('/posts', PostController.routes())

module.exports = router;