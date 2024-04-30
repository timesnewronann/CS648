//const path = require('path')
//Path module
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Base file name 
console.log(`Base file name: ${path.basename(__filename)}`)

// Directory Name
console.log(`Base directory name: ${path.dirname(__filename)}`)


// File Extension 
console.log(`File Extension: ${path.extname(__filename)}`)

// Create path object 
//Not using a template literal
console.log(path.parse(__filename))

// Concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'))

