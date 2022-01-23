const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

app.get('/', (req, res) => {
  res.send('<h1>Rock paper scissors</h1>');
});
app.get("/sendfile", function(reg,res) {
 res.sendFile(__dirname + "index.js\index.html");
  });

  io.on('connection', (socket) => {
    console.log('a user connected');
  });

  io.on('connection', (socket) => {
    socket.on('chat message' , (msg) =>  {
      console.log('message:' + msg);
    });
  });

  io.emit('some event', { someProperty: 'some value', otherProperty: 'other value' }); // This will emit the event to all connected sockets

  io.on('connection',(socket)  => {
    socket.broadcast.emit('hi');
  });
  io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      io.emit('chat message', msg);
    });
  });

server.listen(3000, () => {
  console.log('listening on *:3000');
});