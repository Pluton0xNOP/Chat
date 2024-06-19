const express = require('express');
const app = express()

const server = require('http').createServer(app)

const io = new require('socket.io')(server)
io.on('connection',(socket)=>{
    socket.on('chat',(msg)=>{
        io.emit('chat',msg)

    })

})
app.get('/',(req,res)=>{
    res.sendFile(`${__dirname}/Cliente/index.html`)
})


server.listen(3000)
