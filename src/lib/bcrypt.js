const bcrypt = require('bcryptjs')

module.exports = {
  generate: val => bcrypt.hashSync(String(val), 10),
  compare: (val, hash) => bcrypt.compareSync(val, hash)
}