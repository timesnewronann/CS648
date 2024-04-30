import EventEmitter from 'events'

// extend the event emitter class
// Create class
class MyEmitter extends EventEmitter {}

// Initialize object
const myEmitter = new MyEmitter()
// event listener
myEmitter.on('event', () => {
    console.log('Event Fired!')
})

myEmitter.emit('event')
myEmitter.emit('event')
myEmitter.emit('event')
myEmitter.emit('event')