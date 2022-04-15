const EventEmitter = require('events')
const eemiter = new EventEmitter()

eemiter.once('connection', (stream) => {
    console.log('Ah, we have our first user...')
})

console.log()