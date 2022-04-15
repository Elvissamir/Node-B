const util = require('util')
const child_process = require('child_process')

util.promisify(child_process.exec)

child_process.fork()