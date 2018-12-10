const mongoose = require('mongoose')
const options = require('./base/options')

const Schema = mongoose.Schema

const PostSchema = new Schema({
  title: String,
  content: String,
  access: Number,
  type: String
}, options)

PostSchema.index({ title: 1 })
PostSchema.index({ type: 1 })

mongoose.model('post', PostSchema, 'posts')