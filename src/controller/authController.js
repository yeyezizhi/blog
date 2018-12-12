const Router = require('koa-router')
const AuthService = require('../service/auth')
const { joi, validate } = require('../middleware/validate')

const router = new Router();

router.post('/login', validate({
  body: {
    identifier: joi.string().required(),
    credential: joi.string().required()
  }
}), async (ctx, next) => {
  let { identifier, credential } = ctx.request.body;
  ctx.body = await AuthService.login(identifier, credential)
})

router.post('/register', validate({
  body: {
    identifier: joi.string().required(),
    credential: joi.string().required()
  }
}), async (ctx, next) => {
  let { identifier, credential } = ctx.request.body;
  ctx.body = await AuthService.register(identifier, credential)
})

module.exports = router;