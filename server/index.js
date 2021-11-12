require('dotenv/config');
const express = require('express');
const errorMiddleware = require('./error-middleware');
const staticMiddleware = require('./static-middleware');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

app.use(staticMiddleware);

app.use(errorMiddleware);

const player1 = {
  socketId: null
};

const player2 = {
  socketId: null
};

io.on('connection', socket => {
  // eslint-disable-next-line no-console
  console.log(`a user has connected: ${socket.id}`);

  socket.on('color-choice', ({ color1, color2 }) => {
    // eslint-disable-next-line no-console
    console.log(`Player one (${socket.id}) has chosen: ${color1}`);
    // eslint-disable-next-line no-console
    console.log(`Player two is: ${color2}`);
    io.emit('color-chosen', ({
      color1: color1,
      color2: color2,
      p1SocketId: socket.id
    }));
  });

  if (player1.socketId !== null) {
    player2.socketId = socket.id;
    // eslint-disable-next-line no-console
    console.log('Player 2 is', player2.socketId);
    io.emit('color-chosen2', ({
      p2SocketId: socket.id
    }));
  } else {
    player1.socketId = socket.id;
    // eslint-disable-next-line no-console
    console.log('Player 1 is', player1.socketId);
  }

  // eslint-disable-next-line no-console
  console.log(io.allSockets());

  let socketSum = 0;
  io._nsps.forEach(Namespace => {
    socketSum += Namespace.sockets.size;
  });
  // eslint-disable-next-line no-console
  console.log('Amount of users:', socketSum);

  socket.on('disconnect', () => {
    // eslint-disable-next-line no-console
    console.log(` a user disconnected: ${socket.id}`);
    io._nsps.forEach(Namespace => {
      socketSum -= Namespace.sockets.size;
    });
    // eslint-disable-next-line no-console
    console.log('Amount of users:', socketSum);
    // eslint-disable-next-line no-console
    console.log(io.allSockets());
  });
});

server.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
