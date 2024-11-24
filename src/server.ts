import app from './app';
import { logAsciiArt } from './utils/asciiArt';
import { createServer as createHttpServer } from 'http';
import { Server } from 'socket.io';
import fs from 'fs';
import path from 'path';
import { initializeSocket } from './socket';

const PORT = process.env.PORT || 3000;

// Load SSL/TLS certificates
// const privateKey = fs.readFileSync(path.join(__dirname, '../key.pem'), 'utf8');
// const certificate = fs.readFileSync(path.join(__dirname, '../cert.pem'), 'utf8');
// const credentials = { key: privateKey, cert: certificate };

const httpServer = createHttpServer(app);

initializeSocket(httpServer);

httpServer.listen(PORT, () => {
  logAsciiArt();
  console.log(`Server is running on port ${PORT}`);
});