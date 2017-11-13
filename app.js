const express = require('express')
const logger = require('morgan')
const path = require('path')
const http = require('http')
const pug = require('pug')

const routes = require('./routes')

const app = express()
const PORT = 8000

// Views engine
app.engine('pug', pug.__express) // Check this line later
app.set('view engine', 'pug')
app.set('views', path.resolve(__dirname, 'views'))

// Logger
app.use(logger('tiny'));

// Static routes
app.use('/', express.static('.'))

// Routes
app.use('/', routes)

console.log(routes.stack)

http.createServer(app)

// Start the server
app.listen(PORT, () => {
  console.log(`Server started at ${ PORT } port...`)
})