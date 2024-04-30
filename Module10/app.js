// const message = require('./message')

// console.log(message)
// console.log(message.name)
// console.log(message.role)

//es6
// const Message = require('./message')

// const message1= new Message("Ronan Jared Borja", "Student")
// message1.sayHello()

//es6 module loading 
// import Message from "./message.js";

// import {Message} from './message.js'
// const message1= new Message("Ronan Jared Borja", "Student")
// message1.sayHello()

// Module wrapper function
// (function (exports, require, module, __filename, __dirname) {

// })

// console.log(__dirname)
// console.log(__filename)

// Logger
// import Logger from './logger.js'

// const logger = new Logger()
// logger.on('message', data => {
//     console.log('Called Listener', data)
// })

// logger.log('Hello World!')
// logger.log('Hi')
// logger.log('Hello')

// Web Server 
import http from 'http'
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'
import {} from 'dotenv/config'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const server = http.createServer((req, res) => {
    // BUILD File Path
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)

    // Log the file path 
    // console.log(filepath)

    // Extension of file 
    let extname = path.extname(filePath)

    // Set the default content type
    let contentType = 'text/html'

    // Create a switch statement
    // Check extension and set content type
    switch (extname) {
        case '.js':
            contentType = 'text/javascript'
            break
        case '.css':
            contentType = 'text/css'
            break
        case '.json':
            contentType = 'application/json'
            break
        case '.png':
            contentType = 'image/png'
            break
        case '.jpg':
            contentType = 'image/jpg'
            break
    }

    // Check if content type is text/html but no .html file extension
    if (contentType == 'text/html' && extname == '') {
        filePath += '.html'
    }

    // Read the file 
    fs.readFile(filePath, (err, content) =>{
        if (err){
            if (err.code == 'ENOENT') {
                // Page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    res.writeHead(200, {'Content-Type': 'text/html'})
                    res.end(content, 'utf-8')
                })
            } else{
                // Some server error 
                res.writeHead(500)
                res.end(`Server Error: ${err.code}`)
            } 
        } else {
            // Success
            res.writeHead(200, {'Content-Type' : contentType})
            res.end(content, 'utf8')
        }
    })




    // if (req.url === '/') {
        
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err,content) => {
    //         if (err) throw err
    //         res.writeHead(200, {'Content-Type': 'text/html'})
    //         res.end(content)
    //     })
    // } else if (req.url === '/about') {
    //     fs.readFile(path.join(__dirname, 'public', 'about.html'), (err,content) => {
    //         if (err) throw err
    //         res.writeHead(200, {'Content-Type': 'text/html'})
    //         res.end(content)
    //     })
    
    // } else if (req.url === '/products') {
    //     fs.readFile(path.join(__dirname, 'public', 'products.html'), (err,content) => {
    //         if (err) throw err
    //         res.writeHead(200, {'Content-Type': 'text/html'})
    //         res.end(content)
    //     })
    // }else if (req.url === '/api/employees') {
    //     const employees = [
    //         { name: 'Sally Smith', title: 'CEO'},
    //         { name: 'Frank Franklin', title: 'Director Of Sales '},
    //         { name: 'John Johnson', title: 'QA Manager'},
    //     ]
    //     res.writeHead(200, {'Content-Type': 'application/json'})
    //     res.end(JSON.stringify(employees))
        
        
    // }
})

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`)
})
