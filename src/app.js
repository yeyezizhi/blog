const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const jwt = require('koa-jwt')
const config = require('config')

require('./database/mongo')

const router = require('./router')

const app = new Koa();

app.use(bodyParser());

// app.use(jwt({ secret: config.get('JWT.SECRET') }))

app.use(router.routes())

app.listen(config.get('PORT'))