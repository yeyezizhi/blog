const Router = require('koa-router')
const PostService = require('../service/post')
const router = new Router()

router.get('/', async (ctx, next) => {
  ctx.body = await PostService.getPosts()
})

module.exports = router