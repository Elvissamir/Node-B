const os = require('os')

const totalMemory = os.totalmem()
const freeMemory = os.freemem()
const arch = os.arch()

console.log(os.cpus())
console.log(os.platform())

console.log(totalMemory / 1000000)
console.log(freeMemory / 1000000)
console.log(arch)