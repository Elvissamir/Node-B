const fs = require('fs')
const os = require('os')
const system = os.platform()
const user = os.userInfo().username

fs.appendFile('hello.txt', `Hello super ${user} on ${system}`, (err) => {
    if (err)
        throw err
    console.log('The data was appended to file!')
})
