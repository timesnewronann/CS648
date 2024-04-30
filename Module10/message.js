// Common JS 

// const message = {
//     name: "Ronan Jared Borja",
//     role: "Student",
// }

// module.exports = message

// ES6 classes
class Message {
    constructor(name, role) {
        this.name = name
        this.role = role
    }

    sayHello() {
        console.log(`Hello World. My name is ${this.name} and I am your ${this.role}!`)
    }
}

// ES6 module loading 
//cexport default Message 

export { Message }  // ES6 module loading 


// COMMON JS
// module.exports = Message
