const mongoose = require('mongoose')
const Todo = require('./models/Todo')
const { MONGO_URL } = require('../util/config')

//console.log('REDIS_URL: ', REDIS_URL)

if (MONGO_URL && !mongoose.connection.readyState) {
  mongoose.connect(MONGO_URL)
}

module.exports = {
  Todo
}
