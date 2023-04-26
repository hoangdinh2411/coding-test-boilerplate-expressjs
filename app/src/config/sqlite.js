const sqlite3 = require('sqlite3').verbose()
const path = require('path')

const db = {
  connectCreditDB: function () {
    var db_path = path.resolve(__dirname, '../database/credit.db')
    return new sqlite3.Database(db_path, sqlite3.OPEN_READWRITE, (err) => {
      if (err) {
        return console.error(err.message)
      }
      console.log('Connected to the in-memory SQlite database.')
    })
  },
  close: function () {
    this.connectCreditDB().close((err) => {
      if (err) {
        return console.error(err.message)
      }
      console.log('Close the database connection.')
    })
  },
}

module.exports = db
