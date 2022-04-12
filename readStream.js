const fs = require('fs')

const fileStream = fs.createReadStream('./notes.txt', 'utf-8')

fileStream.on('data', (chunk) => {
    console.log('The data chunk')
    
    let line = ''
    for(let i = 0; i < chunk.length; i++) {
        line = line + chunk[i]

        if (chunk[i] === '\n') {
            console.log(line)
            console.log('salto')
            break
        }
    }
})