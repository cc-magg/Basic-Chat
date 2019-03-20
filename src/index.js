'use strict'

const express = require('express')
const http = require('http')
const socket = require('socket.io')
const path = require('path')
const mongoose = require('mongoose')

const app = express()
const server = http.createServer(app)
const io = socket.listen(server)

// db connection
mongoose.connect('mongodb://localhost/chat-database', { useNewUrlParser: true }) // esta coneccion se hace o con callbacks o con promesas (es mejor con promesa aun que si se pudiera con async await seria mucho mejor pero ni modo)
.then(db => console.log('db is connected'))
.catch(err => console.log(err))

// settings
const port = process.env.PORT || 3000

require('./sockets')(io)

app.use(express.static(path.join(__dirname, 'public')))

server.listen(port, () => {
  console.log(`Server on port ${port}`)
})
