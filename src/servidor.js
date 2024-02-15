import express from "express";
import url from "url";
import path from "path";
import http from "http";
import { Server } from "socket.io";

const app = express();
const porta = process.env.porta || 3000;
const server = http.createServer(app);
const io = new Server(server);

const caminhoAtual = url.fileURLToPath(import.meta.url);
const diretorioPublico = path.join(caminhoAtual, "../..", "public");
app.use(express.static(diretorioPublico));


io.on('connection', (socket) => {
    console.log('a user connected');
  });

  server.listen(3000, () => {
    console.log(
        `Servidor escutando porta ${porta}`);
  });