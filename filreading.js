const fs = require('fs')

const readFile = (fileDir, format) => {
    const reader = fs.createReadStream(fileDir, format)    

    reader.on('data', chunk => {
        console.log(chunk)
    })
}

module.exports = readFile