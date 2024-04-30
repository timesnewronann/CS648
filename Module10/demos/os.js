import os from 'os'

// platform
console.log(os.platform())

// CPU architecture
console.log(`CPU Architecture: ${os.arch()}`)

// CPU core info 
console.log(`CPU Core Info: ${os.cpus}`)

// Free memory
console.log(`Free memory: ${os.freemem()}`)

// Total memory
console.log(`Total memory: ${os.totalmem()}`)

// Home directory
console.log(`Home directory: ${os.homedir()}`)

// Uptime
console.log(`Uptime: ${os.uptime()}`)

