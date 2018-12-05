const http = require('http');
const express = require('express');
const socketio = require('socket.io');


const app = express();

const clientPath = `${__dirname}`;
console.log(`Serving static from ${clientPath}`);

app.use(express.static(clientPath));

const server = http.createServer(app);

const io = socketio(server);


io.on('connection', (sock) => {

    console.log('Someone connected');
    sock.emit('message', 'Hi, you are connected');

    sock.on('message', (text) => {
    io.emit('message', text);
  });
});

server.on('error', (err) => {
  console.error('Server error:', err);
});

server.listen(80,'0.0.0.0', () => {
  console.log('filip says fuck you on default port');
  console.log('^_^');
});