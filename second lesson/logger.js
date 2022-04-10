const EventEmitter = require('events')

function log(message) {
    emitter.emit('loggin', message)
}

class Logger extends EventEmitter {
    log (message) {
        console.log(message)
        this.emit('messageLogged', { message })
    }
}

module.exports = Logger