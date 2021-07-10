const fs = require('fs')

const addZero = num => num < 10 ? `0${num}` : `${num}`

const setRandomName = () => {
    const numPart = Math.ceil(Math.random() * 9)
    const strPart = Array(12).fill(null).map(_ => String.fromCharCode(Math.floor(Math.random() * 26) + 97)).join('')
    return `${numPart}${10 - numPart}${strPart}`
}

const setName = rule => {
    switch (typeof rule) {
        case "string":
            return rule
        case "function":
            return rule()
        case "undefined":
            return setRandomName()
    }
}

const batchRename = config => {

    const {isTransfer, originPath, targetPath, namingRule} = config

    const dirs = [...fs.readdirSync(originPath)].map(name => ({
        name,
        type: name.substring(name.lastIndexOf('.'))
    }))

    const targetName = setName(namingRule)

    // rename
    for (let i = 0; i < dirs.length; i++) {
        const {name, type} = dirs[i]
        fs.renameSync(`${originPath}/${name}`, `${originPath}/${targetName}${addZero(i)}${type}`, error => {
            if (error) throw error
        })
    }

    if (isTransfer) {
        const newDirs = [...fs.readdirSync(originPath)]
        for (let i = 0; i < dirs.length; i++) {
            const name = newDirs[i]
            // Copy to a new folder
            fs.createReadStream(`${originPath}/${name}`).pipe(fs.createWriteStream(`${targetPath}/${name}`))
            // Delete original file
            fs.unlink(`${originPath}/${name}`, error => {
                if (error) throw error
            })
        }
    }
}

module.exports = batchRename
