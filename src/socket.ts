import { Server as HttpServer } from 'http';
import { Server as HttpsServer } from 'https';
import { Server, Socket } from 'socket.io';
import sample from './view/sample_page';

export const initializeSocket = (server: HttpServer | HttpsServer) => {
  const io = new Server(server, {
    cors: {
      origin: '*', // Adjust as necessary for your environment
    },
  });

  io.on('connection', (socket: Socket) => {
    console.log('A user connected');

    socket.emit('application', sample);
    
    // Handle incoming messages
    socket.on('message', (msg) => {
      console.log('Message received: ', msg);
      // Broadcast the message to all connected clients
      io.emit('message', msg);
    });

    // Handle disconnection
    socket.on('disconnect', () => {
      console.log('A user disconnected');
    });
  });

  return io;
};
