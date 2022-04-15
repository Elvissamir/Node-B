const http2 = require('http2')
const http = require('http')
const https = require('https')

const server2 = http2.createSecureServer((req, res) => {

})

server2.listen(4000)

const server = http.createServer()

server.listen(3000)