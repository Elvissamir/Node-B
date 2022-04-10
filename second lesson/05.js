const EventEmitter = require('events')
const emitter = new EventEmitter()
const Logger = require('./logger')

// Register a listener
emitter.on('messageLogged', ({ message }) => {
    console.log('Logged with message ', message)
})

const logger = new Logger()
logger.log('Hola World')

module.exports = emitter