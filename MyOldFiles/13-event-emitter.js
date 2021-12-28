const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id)=> {
    console.log(`Data recieved ${name} ${id}`);
})

customEmitter.on('response', (name,id)=> {
    console.log(`Other logic ${name} ${id}`);
})

customEmitter.emit('response', 'john', 34)