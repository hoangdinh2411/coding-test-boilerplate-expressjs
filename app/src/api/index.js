const express = require('express')
const creditDataRouter = require('./credit-data')
const router = express.Router()

router.get('/ping', (req, res) => {
  res.send({
    result: 'pong',
  })
})

const app = express()
app.use('/credit-data', creditDataRouter)

module.exports = router
