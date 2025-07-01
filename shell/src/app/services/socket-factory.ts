import { io, Socket } from 'socket.io-client';

export const SocketFactory = {
  createSocket(): Socket {
    return io('http://localhost:3000');
  }
};
