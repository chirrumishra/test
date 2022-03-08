// const path = require('path')
// var pathObj = path.parse(__filename)
// console.log(pathObj)

// const os = require('os')
// var totalMemory = os.totalmem()
// var freeMemory = os.freemem()

// console.log('Total memory: '+totalMemory)
// console.log('Free memory: '+freeMemory)


// console.log(`Total Memory: ${totalMemory}`)

const fs = require('fs')
// const file = fs.readdirSync('$')
// console.log(file)

fs.readdir('$',function(err, file){
    if (err) console.log("Error",err)
    else console.log("Resule", file)
})