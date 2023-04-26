const http = require('http')

const app = require('./app')
const db = require('../config/sqlite')
const server = http.createServer(app)

const PORT = process.env.PORT || 3000

server.listen(PORT, (error) => {
  if (error) {
    return console.log(error)
  }
  console.log('🚀 Server started on port ' + PORT)
  //connect Db
  db.connectCreditDB()
})
