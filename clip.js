const fs = require('fs')
const file = process.argv[2]


const fileStream = fs.createReadStream(__dirname + '/' + file, 'utf-8')

fileStream.on('data', (chunk) => {
    console.log(chunk)
})

fileStream.on('error', (err) => {
    console.log('The error', err.message)
})

fileStream.on('end', () => {
    console.log('Finished reading the file...')
})