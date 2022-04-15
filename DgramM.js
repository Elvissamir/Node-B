const dgram = require('dgram')
const socket = dgram.createSocket()

socket.bind(3000, '', () => {
    console.log('Socket listening for datagram messages in port...')
})