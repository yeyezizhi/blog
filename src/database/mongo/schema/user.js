const mongoose = require('mongoose')
const options = require('./base/options')

const Schema = mongoose.Schema

const UserSchema = new Schema({
  nickname: String,
  avatar: String
}, options)

mongoose.model('user', UserSchema, 'users')