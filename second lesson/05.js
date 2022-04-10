const EventEmitter = require('events')
const emitter = new EventEmitter()

// Register a listener
emitter.on('messageLogged', (args) => {
    console.log('Listener called with args: ', args)
})

emitter.on('loggin', (data) => {
    console.log('The message: ', data)
})

// Raise an event
emitter.emit('messageLogged', { id: 1, url: 'http' })

module.exports = emitter