const mongoose = require('mongoose')

const Post = mongoose.model('post')

class PostService {
  static async getPosts() {
    return await Post.find()
  }
}

module.exports = PostService