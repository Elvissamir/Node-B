const readFile = require('./filreading')

const fileDir = __dirname + '/text.txt'
const format = 'utf-8'

console.log(readFile(fileDir, format))