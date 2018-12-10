const mongoose = require('mongoose')
const config = require('config')
const fs = require('fs')
const path = require('path')

const { URI, OPTIONS } = config.get('MONGO')

const files = fs.readdirSync(path.join(__dirname, 'schema'))
for (let file of files) {
  file.endsWith('.js') && require(path.join(__dirname, `schema/${file}`))
}

mongoose.Promise = Promise
mongoose.connect(URI, OPTIONS)