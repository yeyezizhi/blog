const crypto = require('crypto')

const getHmac = (secret) => {
  const hmac = crypto.createHmac('sha256', secret)
  return hmac.update(Date.now().toString()).digest('hex')
}

module.exports = { getHmac }