const mongoose = require('mongoose')
const options = require('./base/options')
const AUTH_TYPE = require('./base/constants').AUTH.TYPE;

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const AuthSchema = new Schema({
  user: {
    type: ObjectId,
    ref: 'user'
  },
  type: {
    type: Number,
    enum: [AUTH_TYPE.USRENAME, AUTH_TYPE.EMAIL, AUTH_TYPE.PHONE]
  },
  identifier: String,
  credential: String
}, options)

mongoose.model('auth', AuthSchema, 'auth')