// server.js
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: { origin: '*' } // Allow CORS for development
});

io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    // Listening for messages from the client
    socket.on('message', (msg) => {
        console.log('Received message:', msg);
        io.emit('message', msg); // Broadcasting message to all clients
    });

    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });
});

server.listen(3000, () => {
    console.log('Socket.IO server running on http://localhost:3000');
});
