const express = require('express')
const http = require('http')
const cors = require('cors')
require('dotenv').config()

const app = express()
const server = http.createServer(app)


app.use(express.json())
app.use(cors())

app.use('/api', require('./router/index'))

async function Start() {
  try {


    server.listen(process.env.PORT, () => {
      console.clear()
      console.log('--------------------------------------------------------------------')
      console.log(' server is running ...')
      console.log();
    })
  } catch (e) {
    console.error(new Error(e))
  }
}

Start();