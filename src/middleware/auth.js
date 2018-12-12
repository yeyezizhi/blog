module.exports = () => {
  return async (ctx, next) => {
    const token = ctx.state.user;
    if (!token) {
      ctx.throw(401)
    }

    ctx.user = token.id;
    await next()
  }
}