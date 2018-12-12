const mongoose = require('mongoose')
const config = require('config')
const { getHmac } = require('../../tools/utils')
const jwt = require('jsonwebtoken')
const AUTH_TYPE = require('../../database/mongo/schema/base/constants.json').AUTH.TYPE
const { generate, compare } = require('../../lib/bcrypt')
const CustomError = require('../../tools/customError')

const JWT_CONFIG = config.get('JWT')
const Auth = mongoose.model('auth')
const User = mongoose.model('user')

class AuthService {
  static async register(identifier, credential) {
    //todo justify identifer type
    let user = await new User().save()
    await new Auth({ user: user.id, type: AUTH_TYPE.USERNAME, identifier, credential: generate(credential) })
  }

  static async login(identifier, credential) {
    let auth = await Auth.findOne({ identifier }).populate('user')
    if (!auth) {
      throw new CustomError(1000, 'user exists')
    }

    if (!compare(credential, auth.credential)) {
      throw new CustomError(1001, 'password error')
    }

    return {
      user: auth.user,
      token: AuthService.generateToken(auth.user.id)
    }
  }

  static async generateToken(userId) {
    const { SECRET, EXPIRATION } = JWT_CONFIG
    const token = jwt.sign({
      id: userId,
      secret: getHmac(SECRET)
    }, SECRET, { expiresIn: EXPIRATION })
    return `Bearer ${token}`
  }
}

module.exports = AuthService