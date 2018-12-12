const Router = require('koa-router')
const PostController = require('../controller/postController')
const AuthController = require('../controller/authController')

const router = new Router({ prefix: '/api' })

router.use('/posts', PostController.routes())
router.use('/auth', AuthController.routes())

module.exports = router;