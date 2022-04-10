const url = 'http://mylogger.io/log'
const emitter = require('./05')

function log(message) {
    emitter.emit('loggin', message)
}

log("Hello World")

module.exports.log = log
module.exports.url = url