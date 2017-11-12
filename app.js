const express = require('express')
const http = require('http')
const pug = require('pug')

const routes = require('./routes')

const app = express()
const PORT = 8000

app.set('view engine', pug)
app.use('/', express.static('.'))

http.createServer(app)

app.get('/', routes)

app.listen(PORT, () => {
  console.log(`Server started at ${PORT} port...`)
})