const joi = require('joi');
const CustomError = require('../tools/customError')

const validate = (o, schema, options) => {
  if (schema) {
    let { error, value } = joi.validate(o, schema, options)
    Object.assign(o, value)
    if (error) {
      console.error('invalid params', error, o, schema, value)
      throw new Error(`validation failed`);
    }
  }
}

module.exports = {
  joi,
  validate: ({ headers, query, params, body }) => {
    return async (ctx, next) => {
      try {
        validate(ctx.headers, headers, { allowUnknown: true })
        validate(ctx.query, query)
        validate(ctx.params, params)
        validate(ctx.request.body, body)
        await next()
      } catch (e) {
        throw new CustomError(2000, 'params validation failed')
      }
    }
  }
}