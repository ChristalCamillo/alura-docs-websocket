import io from "./servidor.js";


io.on('connection', (socket) => {
    console.log('a user connected! ID:', socket.id);

    socket.on("selecionar_documento", (nomeDocumento) => {
        socket.join(nomeDocumento);
    });

    socket.on("disconnect", (motivo) => {
        console.log(`Cliente "${socket.id}" desconectado!
        Motivo: ${motivo}`);
      });

    socket.on("texto_editor", (texto, nomeDocumento) => {
        // socket.broadcast.emit("texto_editor_clientes", texto);

        socket.to(nomeDocumento).emit("texto_editor_clientes", texto);
    });
});