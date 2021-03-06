require('dotenv').config({ path: 'variables.env' })
const createServer = require('./createServer')
const db = require('./db')

const server = createServer()

//todo use express middleware to handle cookes (jwt)
//todo use express middleware to populate current users

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL
    }
  },
  deets => {
    console.log(`Server is now running on port http://localhost:${deets.port}`)
  }
)
