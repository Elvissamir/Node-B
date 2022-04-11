const fs = require('fs/promises')


async function readFiles () {
    const files = await fs.readdir('./')
    console.log(files)
}

readFiles()