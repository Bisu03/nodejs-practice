const EventEmitter = require('events')
const event = new EventEmitter

event.on('saymyname',()=>{
    console.log('my name is bisu');
})

event.on('saymyname',(sc,msg)=>{
    console.log(`the status code is ${sc} tne masage is ${msg}`);
})

event.emit('saymyname',200,'ok')
