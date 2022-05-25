require('dotenv').config()
require('module-alias/register')

const http = require('http')
const config = require('@config')
const app = require('@app')

const server = http.createServer(app)

const port = config.server.port

server.listen(port, () => {
  console.log(`
  ---------------------------------------
  -                                     -  
  -     Servidor rodando na porta       -
  -                                     -
  -    http://localhost:${port}         -
  -                                     -
  ---------------------------------------
  `)
});
